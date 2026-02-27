import { FaTrash } from 'react-icons/fa';
import './TodoItem.css';

// 🌟 接收新传进来的 completed 和 onToggle
function TodoItem({ content, completed, onToggle, onDelete }) {
  return (
    <li className="todoItem">
      {/* 
         🌟 点击文字触发 onToggle
         🌟 动态类名：如果 completed 是 true，就加上 'completed' 类 
      */}
      <span 
        onClick={onToggle} 
        className={`text ${completed ? 'completed' : ''}`}
      >
        {content}
      </span>
      
      <button 
        onClick={onDelete}
        className="deleteBtn"
        title="删除此项"
      >
        <FaTrash />
      </button>
    </li>
  );
}

export default TodoItem;