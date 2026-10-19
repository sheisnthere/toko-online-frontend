import { useEffect, useState } from 'react';
import api from '../api';

const pastelColors = [
  '#FFE5EC',
  '#E0F4FF',
  '#E8DEFF',
  '#D4F8E8',
  '#FFF8D6',
  '#FFE0D6'
];

function Products({ goToDetail }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      api.get('/api/products')
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ padding: '40px', textAlign: 'center', fontSize: '20px' }}>⏳ Loading...</p>;

  return (
    <div style={{ padding: '40px' }}>
      <h2 style={{
        fontSize: '34px',
        textAlign: 'center',
        marginBottom: '10px',
        background: 'linear-gradient(90deg, #FFB6C1, #B0E0E6, #DDA0DD)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 'bold'
      }}>
        🌈 Daftar Produk ✨
      </h2>
      <p style={{ textAlign: 'center', color: '#888', marginBottom: '30px' }}>
        Pilih produk favoritmu 💖
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: '25px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {products.map((p, i) => (
          <div
            key={p._id}
            onClick={() => goToDetail(p._id)}
            style={{
              borderRadius: '25px',
              padding: '25px',
              background: pastelColors[i % pastelColors.length],
              cursor: 'pointer',
              boxShadow: '0 8px 20px rgba(200, 180, 220, 0.25)',
              transition: '0.3s',
              textAlign: 'center',
              border: '2px solid rgba(255,255,255,0.8)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px) rotate(-1deg)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0) rotate(0)'}
          >
            <div style={{ fontSize: '60px', marginBottom: '10px' }}>
              {p.emoji || '📦'}
            </div>
            <h3 style={{
              fontSize: '20px',
              color: '#5a4a6a',
              marginBottom: '10px'
            }}>{p.name}</h3>
            <p style={{
              color: '#ff6b9d',
              fontWeight: 'bold',
              fontSize: '20px',
              marginBottom: '10px'
            }}>
              Rp {p.price.toLocaleString('id-ID')}
            </p>
            <p style={{
              fontSize: '13px',
              color: '#7a6a8a',
              marginBottom: '12px',
              minHeight: '40px'
            }}>{p.description}</p>
            <span style={{
              display: 'inline-block',
              background: 'rgba(255,255,255,0.8)',
              color: '#6a4a8a',
              padding: '5px 15px',
              borderRadius: '15px',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>
              Stok: {p.stock}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;