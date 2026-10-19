function Home({ setPage }) {
  return (
    <div style={{
      padding: '80px 20px',
      textAlign: 'center',
      maxWidth: '700px',
      margin: '0 auto'
    }}>
      <div style={{ fontSize: '80px', marginBottom: '20px' }}>🛍️✨</div>
      <h1 style={{
        fontSize: '46px',
        background: 'linear-gradient(90deg, #FFB6C1, #B0E0E6, #DDA0DD, #98FB98)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '20px',
        fontWeight: 'bold'
      }}>
        Selamat Datang di Toko Online
      </h1>
      <p style={{
        fontSize: '19px',
        color: '#7a6a8a',
        marginBottom: '35px'
      }}>
        Temukan produk terbaik dengan harga terjangkau 💖🌈
      </p>
      <button
        onClick={() => setPage('products')}
        style={{
          padding: '16px 45px',
          background: 'linear-gradient(90deg, #FFB6C1, #DDA0DD, #B0E0E6)',
          color: 'white',
          border: 'none',
          borderRadius: '50px',
          cursor: 'pointer',
          fontSize: '18px',
          fontWeight: 'bold',
          boxShadow: '0 10px 25px rgba(200, 180, 220, 0.4)'
        }}
      >
        Lihat Produk 🚀
      </button>
    </div>
  );
}

export default Home;