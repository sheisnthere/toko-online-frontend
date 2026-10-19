import { useState } from 'react';
import api from '../api';

function Register({ setPage }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);
    try {
      await api.post('/api/auth/register', { username, email, password });
      setSuccess('✅ Registrasi berhasil! Silakan login.');
      setTimeout(() => setPage('login'), 1500);
    } catch (err) {
      setError(err.response?.data?.message || 'Registrasi gagal');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '420px', margin: '60px auto', padding: '40px', background: 'linear-gradient(135deg, #D4F8E8, #E0F4FF)', borderRadius: '30px', boxShadow: '0 15px 40px rgba(200,180,220,0.3)', border: '3px solid white' }}>
      <h2 style={{ textAlign: 'center', color: '#6a4a8a', marginBottom: '25px', fontSize: '28px' }}>✨ Daftar Akun</h2>
      {error && <p style={{ background: '#FFD6E0', color: '#c44', padding: '10px', borderRadius: '10px', marginBottom: '15px', textAlign: 'center' }}>{error}</p>}
      {success && <p style={{ background: '#D4F8E8', color: '#2a8', padding: '10px', borderRadius: '10px', marginBottom: '15px', textAlign: 'center' }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required
          style={{ width: '100%', padding: '12px 16px', marginBottom: '12px', borderRadius: '15px', border: '2px solid #B0E0E6', outline: 'none', fontSize: '15px' }} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required
          style={{ width: '100%', padding: '12px 16px', marginBottom: '12px', borderRadius: '15px', border: '2px solid #B0E0E6', outline: 'none', fontSize: '15px' }} />
        <input type="password" placeholder="Password (min. 6 karakter)" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6}
          style={{ width: '100%', padding: '12px 16px', marginBottom: '20px', borderRadius: '15px', border: '2px solid #B0E0E6', outline: 'none', fontSize: '15px' }} />
        <button type="submit" disabled={loading}
          style={{ width: '100%', padding: '14px', background: 'linear-gradient(90deg, #B0E0E6, #DDA0DD)', color: 'white', border: 'none', borderRadius: '50px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 8px 20px rgba(176,224,230,0.4)' }}>
          {loading ? '⏳ Loading...' : 'Daftar'}
        </button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '20px', color: '#7a6a8a' }}>
        Sudah punya akun?{' '}
        <span onClick={() => setPage('login')} style={{ color: '#6a4a8a', cursor: 'pointer', fontWeight: 'bold' }}>Login</span>
      </p>
    </div>
  );
}

export default Register;