import { useState, useEffect } from 'react';
// 引入 CSS 模块
import styles from './App.module.css';

// 🌟 引入刚才拆分出去的子组件
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';

function App() {
  // --- 1. 核心数据 (CEO 掌握核心科技) ---
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('my-todo-list');
    return savedTodos ? JSON.parse(savedTodos) : ['组件化开发 React', '学习 Props'];
  });

  // --- 2. 副作用 (自动存档) ---
  useEffect(() => {
    localStorage.setItem('my-todo-list', JSON.stringify(todos));
  }, [todos]);

  // --- 3. 核心业务逻辑 ---
  
  // 新增逻辑：接收子组件传来的 newTodo 文字
  function handleAdd(newTodo) {
    setTodos([...todos, newTodo]);
  }

  // 删除逻辑
  function handleDelete(indexToDelete) {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  }

  // --- 4. 界面组装 ---
  return (
    <div className={styles.container}>
      
      {/* 给 Header 传一个 title 属性 */}
      <Header title="我的 React 清单" />

      {/* 给 TodoInput 传一个函数，让它在添加时通知我 */}
      <TodoInput onAdd={handleAdd} />

      {/* 列表区域 */}
      <ul className={styles.todoList}>
        {todos.map((todo, index) => (
          // 渲染每一个子项，把 content 和删除函数传下去
          <TodoItem 
            key={index} 
            content={`${index + 1}. ${todo}`} 
            onDelete={() => handleDelete(index)} 
          />
        ))}
      </ul>
      
      <p style={{ marginTop: '20px', color: '#aaa', fontSize: '12px' }}>
        数据已自动保存到本地
      </p>
    </div>
  )
}

export default App;