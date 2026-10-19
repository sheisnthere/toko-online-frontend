import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const [page, setPage] = useState('home');
  const [selectedId, setSelectedId] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('user');
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const goToDetail = (id) => {
   // if (!user) {
   //   alert('Silakan login dulu untuk lihat detail produk 🎀');
   //   setPage('login');
   //   return;
   // }
    setSelectedId(id);
    setPage('detail');
  };

  return (
    <div>
      <Navbar setPage={setPage} user={user} setUser={setUser} />
      {page === 'home' && <Home setPage={setPage} />}
      {page === 'products' && <Products goToDetail={goToDetail} />}
      {page === 'detail' && <ProductDetail id={selectedId} setPage={setPage} />}
      {page === 'login' && <Login setPage={setPage} setUser={setUser} />}
      {page === 'register' && <Register setPage={setPage} />}
    </div>
  );
}

export default App;