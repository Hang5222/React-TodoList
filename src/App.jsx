import { useState, useEffect } from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header.jsx';
import TodoInput from './components/TodoInput/TodoInput.jsx';
import TodoItem from './components/TodoItem/TodoItem.jsx';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('my-todo-list');
    return savedTodos ? JSON.parse(savedTodos) : [
      { id: uuidv4(), text: '欢迎使用React待办清单Pro', completed: false },
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
      completed: false
    };
    setTodos([...todos, newTodoObj]);
  }

  function handleDelete(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function handleToggle(id) {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
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
            completed={item.completed}
            onToggle={() => handleToggle(item.id)}
            onDelete={() => handleDelete(item.id)} 
          />
        ))}
      </ul>
      
      <p className={styles.footer}>
        {todos.filter(t => !t.completed).length} 个任务待完成
      </p>
    </div>
  )
}

export default App;


      