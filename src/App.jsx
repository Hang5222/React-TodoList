import { useState, useEffect } from 'react';
// 🌟 核心：引入刚才写的 CSS 模块
// styles 是一个对象，里面包含了 container, title, addBtn 等所有类名
import styles from './App.module.css'; 

function App() {
  // 1. 初始化状态 (从本地存储读取)
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('my-todo-list');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return ['学习 React', '优化 CSS 样式'];
    }
  });

  const [inputValue, setInputValue] = useState('');

  // 2. 自动保存 (当 todos 变化时)
  useEffect(() => {
    localStorage.setItem('my-todo-list', JSON.stringify(todos));
  }, [todos]);

  // 3. 添加功能
  function handleAdd() {
    if (!inputValue.trim()) return;
    setTodos([...todos, inputValue]);
    setInputValue('');
  }

  // 4. 删除功能
  function handleDelete(indexToDelete) {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  }

  return (
    // 🌟 使用 styles.container 替换原来的 style={{...}}
    <div className={styles.container}>
      
      <h1 className={styles.title}>React 待办列表</h1>

      {/* 输入区域容器 */}
      <div className={styles.inputGroup}>
        <input 
          type="text" 
          value={inputValue} 
          onChange={e => setInputValue(e.target.value)}
          // 增加回车键添加功能，体验更好
          onKeyDown={(e) => {
            if(e.key === 'Enter') handleAdd();
          }}
          placeholder="请输入待办事项..."
          className={styles.input} // 对应 CSS 里的 .input
        />
        
        <button 
          onClick={handleAdd} 
          disabled={!inputValue.trim()} // 输入框为空时禁用按钮
          className={styles.addBtn}     // 对应 CSS 里的 .addBtn
        >
          添加
        </button>
      </div>

      {/* 列表区域 */}
      <ul className={styles.todoList}>
        {todos.map((todo, index) => {
          return (
            <li key={index} className={styles.todoItem}>
              {/* 待办文字 */}
              <span>{index + 1}. {todo}</span>
              
              {/* 删除按钮 */}
              <button 
                onClick={() => handleDelete(index)} 
                className={styles.deleteBtn} // 对应 CSS 里的 .deleteBtn
              >
                删除
              </button>
            </li> 
          )
        })}
      </ul>

      {/* 底部小提示 (这里偷个懒用行内样式，或者你也可以去 module.css 加个类) */}
      <p style={{ marginTop: '20px', color: '#aaa', fontSize: '12px' }}>
        数据已自动保存到本地
      </p>
    </div>
  )
}

export default App;