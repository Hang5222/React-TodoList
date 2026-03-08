import { FaTrash } from 'react-icons/fa';
import styles from './TodoItem.module.css'; // 引入模块化样式

function TodoItem({ content, completed, onToggle, onDelete }) {
  return (
    <li className={styles.item}>
      {/* 
         🌟 动态类名写法：
         使用模版字符串拼接，如果 completed 为 true，就加上 styles.completed
      */}
      <span 
        onClick={onToggle} 
        className={`${styles.text} ${completed ? styles.completed : ''}`}
      >
        {content}
      </span>
      
      <button 
        onClick={onDelete}
        className={styles.deleteBtn}
        title="删除此项"
      >
        <FaTrash />
      </button>
    </li>
  );
}

export default TodoItem;