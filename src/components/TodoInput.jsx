// src/components/TodoInput.jsx
import { useState } from 'react';

// 接收一个叫 onAdd 的函数作为 prop
function TodoInput({ onAdd }) {
  // 输入框的状态，自己管理就好，不用麻烦 CEO 了
  const [inputValue, setInputValue] = useState('');

  function handleClick() {
    if (!inputValue.trim()) return;
    
    // 🌟 重点：调用父组件给的函数，把数据“射”出去
    onAdd(inputValue);
    
    // 清空自己的输入框
    setInputValue('');
  }

  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '25px' }}>
      <input 
        type="text" 
        value={inputValue} 
        onChange={e => setInputValue(e.target.value)}
        onKeyDown={(e) => { if(e.key === 'Enter') handleClick() }}
        placeholder="请输入待办事项..."
        style={{
          flex: 1,
          padding: '12px 15px',
          border: '2px solid #e0e0e0',
          borderRadius: '8px',
          fontSize: '16px',
          outline: 'none'
        }}
      />
      <button 
        onClick={handleClick} 
        disabled={!inputValue.trim()}
        style={{
          padding: '0 25px',
          backgroundColor: '#646cff',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}
      >
        添加
      </button>
    </div>
  );
}

export default TodoInput;