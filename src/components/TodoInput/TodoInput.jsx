import { useState } from 'react';
import styles from './TodoInput.module.css';

function TodoInput({ onAdd }) {
  const [inputValue, setInputValue] = useState('');

  function handleClick() {
    if (!inputValue.trim()) return;
    onAdd(inputValue);
    setInputValue('');
  }

  return (
    <div className={styles.inputGroup}>
      <input 
        type="text" 
        value={inputValue} 
        onChange={e => setInputValue(e.target.value)}
        onKeyDown={(e) => { if(e.key === 'Enter') handleClick() }}
        placeholder="请输入待办事项..."
        className={styles.input}
      />
      <button 
        onClick={handleClick} 
        disabled={!inputValue.trim()}
        className={styles.addBtn}
      >
        添加
      </button>
    </div>
  );
}

export default TodoInput;