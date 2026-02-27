// src/App.jsx
import { useState, useEffect } from 'react';
import styles from './App.module.css';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('my-todo-list');
    return savedTodos ? JSON.parse(savedTodos) : [
      // 🌟 初始数据也要加上 completed 字段
      { id: uuidv4(), text: '点击文字标记完成', completed: false },
      { id: uuidv4(), text: '再次点击取消完成', completed: true }
    ];
  });

  useEffect(() => {
    localStorage.setItem('my-todo-list', JSON.stringify(todos));
  }, [todos]);

  function handleAdd(newTodoText) {
    const newTodoObj = {
      id: uuidv4(),
      text: newTodoText,
      completed: false // 🌟 新加的任务默认都是未完成的
    };
    setTodos([...todos, newTodoObj]);
  }

  function handleDelete(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  // 🌟🌟🌟 核心逻辑：切换完成状态
  function handleToggle(id) {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    }))
  }

  return (
    <div className={styles.container}>
      <Header title="React 待办清单 Pro" />
      <TodoInput onAdd={handleAdd} />

      <ul className={styles.todoList}>
        {todos.map((item) => (
          <TodoItem 
            key={item.id} 
            content={item.text} 
            // 🌟 传两个新东西下去：
            // 1. 它的状态是完成了还是没完成？
            completed={item.completed}
            // 2. 点击文字时的处理函数
            onToggle={() => handleToggle(item.id)}
            
            onDelete={() => handleDelete(item.id)} 
          />
        ))}
      </ul>
      
      {/* 底部统计：算算还有几个没做完 */}
      <p style={{ marginTop: '20px', color: '#aaa', fontSize: '12px' }}>
        {todos.filter(t => !t.completed).length} 个任务待完成
      </p>
    </div>
  )
}

export default App;