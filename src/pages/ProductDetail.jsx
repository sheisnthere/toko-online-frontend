import { useEffect, useState } from 'react';
import api from '../api';

const pastelGradients = [
  'linear-gradient(135deg, #FFE5EC, #E0F4FF)',
  'linear-gradient(135deg, #E0F4FF, #E8DEFF)',
  'linear-gradient(135deg, #E8DEFF, #D4F8E8)',
  'linear-gradient(135deg, #D4F8E8, #FFF8D6)',
  'linear-gradient(135deg, #FFF8D6, #FFE0D6)'
];

function ProductDetail({ id, setPage }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
      api.get(`/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <p style={{ padding: '40px', textAlign: 'center' }}>⏳ Loading...</p>;

  const gradient = pastelGradients[Math.floor(Math.random() * pastelGradients.length)];

  return (
    <div style={{ padding: '40px', maxWidth: '700px', margin: '0 auto' }}>
      <button
        onClick={() => setPage('products')}
        style={{
          background: 'white',
          color: '#ff6b9d',
          border: '2px solid #FFB6C1',
          padding: '10px 22px',
          borderRadius: '25px',
          cursor: 'pointer',
          fontWeight: 'bold',
          marginBottom: '20px',
          boxShadow: '0 4px 12px rgba(255, 182, 193, 0.3)'
        }}
      >
        ← Kembali
      </button>

      <div style={{
        background: gradient,
        borderRadius: '30px',
        padding: '40px',
        boxShadow: '0 15px 40px rgba(200, 180, 220, 0.3)',
        border: '3px solid white'
      }}>
        <div style={{ fontSize: '110px', textAlign: 'center', marginBottom: '15px' }}>
          {product.emoji || '📦'}
        </div>
        <h1 style={{
          fontSize: '34px',
          color: '#5a4a6a',
          marginBottom: '15px',
          textAlign: 'center'
        }}>{product.name}</h1>

        <p style={{
          fontSize: '30px',
          color: '#ff6b9d',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '20px'
        }}>
          Rp {product.price.toLocaleString('id-ID')}
        </p>

        <p style={{
          fontSize: '16px',
          color: '#6a5a7a',
          marginBottom: '20px',
          lineHeight: '1.6',
          textAlign: 'center'
        }}>{product.description}</p>

        <p style={{
          fontSize: '15px',
          color: '#5a4a6a',
          marginBottom: '25px',
          textAlign: 'center',
          background: 'rgba(255,255,255,0.6)',
          padding: '10px 20px',
          borderRadius: '20px',
          display: 'inline-block',
          width: '100%'
        }}>
          ✅ Stok tersedia: <strong>{product.stock}</strong>
        </p>

        <button style={{
          display: 'block',
          margin: '0 auto',
          padding: '15px 50px',
          background: 'linear-gradient(90deg, #FFB6C1, #DDA0DD)',
          color: 'white',
          border: 'none',
          borderRadius: '50px',
          cursor: 'pointer',
          fontSize: '18px',
          fontWeight: 'bold',
          boxShadow: '0 10px 25px rgba(255, 182, 193, 0.5)'
        }}>
          🛒 Beli Sekarang
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;