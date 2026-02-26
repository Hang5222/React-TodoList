import { useState, useEffect } from 'react';
import styles from './App.module.css';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';

// 🌟 1. 引入 uuid
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('my-todo-list');
    // 如果有存档，直接用；如果没有，给个默认的对象数据
    return savedTodos ? JSON.parse(savedTodos) : [
      { id: uuidv4(), text: '学习 React' },
      { id: uuidv4(), text: '数据结构升级' }
    ];
  });

  useEffect(() => {
    localStorage.setItem('my-todo-list', JSON.stringify(todos));
  }, [todos]);

  // 🌟 2. 修改添加逻辑：不再只存字符串，而是存一个对象
  function handleAdd(newTodoText) {
    const newTodoObj = {
      id: uuidv4(), // 自动生成一个类似 '9b1deb4d-...' 的 ID
      text: newTodoText
    };
    setTodos([...todos, newTodoObj]);
  }

  // 🌟 3. 修改删除逻辑：根据 ID 删，而不是根据 index 删（更安全）
  function handleDelete(id) {
    // 只要 id 不一样的都留下
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className={styles.container}>
      <Header title="React 待办清单 Pro" />
      <TodoInput onAdd={handleAdd} />

      <ul className={styles.todoList}>
        {/* 🌟 4. 遍历时，item 现在是一个对象 {id, text} */}
        {todos.map((item) => (
          <TodoItem 
            key={item.id}         // ✅ 终于可以用唯一的 id 做 key 了！
            content={item.text}   // 传下去的文字是 item.text
            onDelete={() => handleDelete(item.id)} // 删除时传 ID
          />
        ))}
      </ul>
      
      <p style={{ marginTop: '20px', color: '#aaa', fontSize: '12px' }}>
        数据结构已升级为 Object + UUID
      </p>
    </div>
  )
}

export default App;