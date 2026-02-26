// src/components/Header.jsx

// 1. props 是一个对象，包含了父组件传来的所有数据
// 这里我们直接解构出 { title }，这样下面就可以直接用 title 了
function Header({ title }) {
  return (
    <h1 style={{ 
      fontSize: '2rem', 
      fontWeight: 'bold', 
      marginBottom: '30px', 
      color: '#2c3e50' 
    }}>
      {title}
    </h1>
  );
}

export default Header;