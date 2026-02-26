// src/components/TodoItem.jsx

function TodoItem({ content, onDelete }) {
  return (
    <li style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 0',
      borderBottom: '1px solid #f0f0f0',
      fontSize: '18px'
    }}>
      {/* 显示内容 */}
      <span>{content}</span>
      
      {/* 调用父组件传来的删除函数 */}
      <button 
        onClick={onDelete}
        style={{
          backgroundColor: '#ff4757',
          color: 'white',
          border: 'none',
          padding: '6px 12px',
          borderRadius: '6px',
          fontSize: '14px',
          cursor: 'pointer'
        }}
      >
        删除
      </button>
    </li>
  );
}

export default TodoItem;