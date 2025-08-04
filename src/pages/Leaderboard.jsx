import { Link } from 'react-router-dom';

const dummyLeaderboard = [
  { name: 'Alice Johnson', amount: 5000 },
  { name: 'Rahul Singh', amount: 4300 },
  { name: 'Letitia G.', amount: 4200 },
  { name: 'Zara K.', amount: 3800 },
];

export default function Leaderboard() {
  return (
    <div style={{ padding: '40px', backgroundColor: '#080029ff', minHeight: '100vh', fontFamily: 'Segoe UI, sans-serif' }}>
      <h2 style={{ fontSize: '28px', marginBottom: '24px' }}>
        Top Interns <span style={{ color: '#ef7136ff' }}>Leaderboard</span>
      </h2>

      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        backgroundColor: '#f7cabbff',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      }}>
        <thead>
          <tr style={{ backgroundColor: '#ef7136ff', textAlign: 'left' }}>
            <th style={thStyle}>#</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Amount Raised</th>
          </tr>
        </thead>
        <tbody>
          {dummyLeaderboard.map((intern, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #eee' }}>
              <td style={tdStyle}>{index + 1}</td>
              <td style={tdStyle}>{intern.name}</td>
              <td style={tdStyle}>₹{intern.amount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Back to Dashboard Button */}
      <div style={{ marginTop: '30px' }}>
        <Link
          to="/dashboard"
          style={{
            display: 'inline-block',
            padding: '12px 24px',
            backgroundColor: '#ef7136ff',
            color: '#fff',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '16px',
            transition: 'background-color 0.2s ease-in-out',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#ff893f')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#ef7136ff')}
        >
          ← Back to Dashboard
        </Link>
      </div>
    </div>
  );
}

const thStyle = {
  padding: '16px',
  fontSize: '16px',
  color: '#333',
};

const tdStyle = {
  padding: '16px',
  fontSize: '15px',
  color: '#222',
};
