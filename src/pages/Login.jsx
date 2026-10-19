import { useState } from 'react';
import api from '../api';

function Login({ setPage, setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await api.post('/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      setUser(res.data.user);
      setPage('products');
    } catch (err) {
      setError(err.response?.data?.message || 'Login gagal');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '420px', margin: '60px auto', padding: '40px', background: 'linear-gradient(135deg, #FFE5EC, #E8DEFF)', borderRadius: '30px', boxShadow: '0 15px 40px rgba(200,180,220,0.3)', border: '3px solid white' }}>
      <h2 style={{ textAlign: 'center', color: '#6a4a8a', marginBottom: '25px', fontSize: '28px' }}>🔐 Login</h2>
      {error && <p style={{ background: '#FFD6E0', color: '#c44', padding: '10px', borderRadius: '10px', marginBottom: '15px', textAlign: 'center' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required
          style={{ width: '100%', padding: '12px 16px', marginBottom: '12px', borderRadius: '15px', border: '2px solid #FFB6C1', outline: 'none', fontSize: '15px' }} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required
          style={{ width: '100%', padding: '12px 16px', marginBottom: '20px', borderRadius: '15px', border: '2px solid #FFB6C1', outline: 'none', fontSize: '15px' }} />
        <button type="submit" disabled={loading}
          style={{ width: '100%', padding: '14px', background: 'linear-gradient(90deg, #FFB6C1, #DDA0DD)', color: 'white', border: 'none', borderRadius: '50px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 8px 20px rgba(255,182,193,0.4)' }}>
          {loading ? '⏳ Loading...' : 'Login'}
        </button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '20px', color: '#7a6a8a' }}>
        Belum punya akun?{' '}
        <span onClick={() => setPage('register')} style={{ color: '#ff6b9d', cursor: 'pointer', fontWeight: 'bold' }}>Daftar</span>
      </p>
    </div>
  );
}

export default Login;