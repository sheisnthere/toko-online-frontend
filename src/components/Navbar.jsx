import './Navbar.css';

function Navbar({ setPage, user, setUser }) {
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setPage('home');
  };

  return (
    <nav className="navbar">
      <h1>Toko Online</h1>
      <div className="nav-links">
        <button onClick={() => setPage('home')}>Home</button>
        <button onClick={() => setPage('products')}>Produk</button>
        {user ? (
          <>
            <span style={{ alignSelf: 'center', fontWeight: 'bold', color: '#6a4a8a', padding: '0 10px' }}>
              Hi, {user.username} 💖
            </span>
            <button onClick={handleLogout} style={{ borderColor: '#ff6b9d' }}>Logout</button>
          </>
        ) : (
          <>
            <button onClick={() => setPage('login')}>Login</button>
            <button onClick={() => setPage('register')}>Register</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;