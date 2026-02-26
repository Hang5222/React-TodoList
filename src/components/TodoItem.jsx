// 1. 引入图标
import { FaTrash } from 'react-icons/fa';
import './TodoItem.css';

function TodoItem({ content, onDelete }) {
  return (
    <li className="todoItem">
      {/* 左边的文字 */}
      <span>{content}</span>
      
      {/* 右边的删除按钮 */}
      <button 
        onClick={onDelete}
        // 🌟 重点：修改样式，让它看起来像一个纯图标按钮
        className="deleteBtn"
        title="删除此项" // 鼠标放上去会有提示文字
      >
        {/* 2. 使用图标组件 */}
        <FaTrash />
      </button>
    </li>
  );
}

export default TodoItem;