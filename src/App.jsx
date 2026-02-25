import { useState } from 'react';

function App() {
  //代办列表
  const [todos, setTodos] = useState(["英语作业"]);
  //输入值
  const [inputValue, setInputValue] = useState('');

  function handleAdd() {
    if (!inputValue.trim()) return;
    setTodos([...todos, inputValue]);
    setInputValue('');
  }

  function handleDelete(indexToDelete) {
    setTodos(todos.filter((_, index) => {return index !== indexToDelete}))
  }

  return (
    <>
      <div style={{
        padding: '20px',
        textAlign: 'center',
      }}>
        <h1>React 待办列表</h1>
        <input type="text" value={inputValue} onChange={e => { setInputValue(e.target.value) }} />
        <button onClick={handleAdd} style={{ padding: '10px 20px', fontSize: '16px', margin: '10px' }}>
          添加
        </button>
        <ul>
          {todos.map((todo, index) => {
            return (
              <>
                <li key={index + 1}>
                  {todo}
                  <button onClick={() => handleDelete(index)} style={{ padding: '5px 10px', fontSize: '14px', margin: '5px' }}>
                    删除
                  </button>
                </li>
              </> 
            )
          })}
        </ul>
      </div>

      {/* 调试 */}
      <pre style={{ background: '#f0f0f0', marginTop: '50px' }}>
        调试数据: {JSON.stringify(todos, null, 2)}
      </pre>
    </>
  )
}

export default App;
