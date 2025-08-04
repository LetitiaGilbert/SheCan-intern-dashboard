import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [intern, setIntern] = useState({ name: '', referralCode: '', amountRaised: 0 });
  const [copied, setCopied] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const name = localStorage.getItem('internName') || 'Intern';
    setIntern({
      name,
      referralCode: `${name.toLowerCase().replace(/\s+/g, '')}2025`,
      amountRaised: 4200,
    });
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(intern.referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleTheme = () => setDarkMode(!darkMode);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const nextMilestone = intern.amountRaised < 1000
    ? 1000
    : intern.amountRaised < 3000
    ? 3000
    : intern.amountRaised < 5000
    ? 5000
    : 5000;

  const progressPercent = Math.min((intern.amountRaised / nextMilestone) * 100, 100).toFixed(1);

  return (
    <div
      style={{
        padding: '40px',
        backgroundColor: darkMode ? '#080029ff' : '#f2f2f2',
        minHeight: '100vh',
        fontFamily: 'Segoe UI, sans-serif',
        color: darkMode ? '#fff' : '#111',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h2 style={{ fontSize: '28px' }}>
          Welcome, <span style={{ color: '#ef7136ff' }}>{intern.name}</span>
        </h2>
        <div>
          <button
            onClick={toggleTheme}
            style={{
              background: 'transparent',
              border: '2px solid #ef7136',
              borderRadius: '20px',
              color: darkMode ? '#ef7136' : '#ef7136',
              padding: '8px 16px',
              cursor: 'pointer',
              marginRight: '12px',
              fontWeight: 'bold',
            }}
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
          <button
            onClick={handleLogout}
            style={{
              background: '#ef7136',
              border: 'none',
              borderRadius: '20px',
              color: '#fff',
              padding: '8px 16px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Logout
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', marginBottom: '40px' }}>
        {/* Referral Code */}
        <div style={cardStyle}>
          <h3 style={cardTitle}>Referral Code</h3>
          <p style={cardText}>{intern.referralCode}</p>
          <button
            onClick={handleCopy}
            style={{
              marginTop: '10px',
              padding: '6px 12px',
              backgroundColor: '#ef7136',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>

        {/* Amount Raised */}
        <div style={cardStyle}>
          <h3 style={cardTitle}>Donations Raised</h3>
          <p style={cardText}>₹{intern.amountRaised.toLocaleString()}</p>

          <div style={{ marginTop: '10px' }}>
            <p style={{ marginBottom: '6px', fontSize: '14px' }}>Progress to ₹{nextMilestone} milestone</p>
            <div style={{ backgroundColor: '#ddd', height: '10px', borderRadius: '5px', overflow: 'hidden' }}>
              <div
                style={{
                  width: `${progressPercent}%`,
                  height: '100%',
                  backgroundColor: '#ef7136',
                  transition: 'width 0.5s ease-in-out',
                }}
              />
            </div>
            <p style={{ fontSize: '12px', marginTop: '6px' }}>{progressPercent}% complete</p>
          </div>
        </div>

        {/* Rewards Section */}
        <div style={cardStyle}>
          <h3 style={cardTitle}>Your Rewards</h3>
          <ul style={{ paddingLeft: '20px', color: '#222', fontSize: '15px', marginTop: '10px' }}>
            <li> T-shirt (₹1,000 milestone)</li>
            <li> Certificate (₹3,000 milestone)</li>
            <li> Event Invite (₹5,000 milestone)</li>
          </ul>
        </div>
      </div>

      {/* Leaderboard Link */}
      <Link
        to="/leaderboard"
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
        View Leaderboard
      </Link>
    </div>
  );
}

// Styles
const cardStyle = {
  backgroundColor: '#f7cabbff',
  border: '1px solid #eee',
  borderRadius: '12px',
  padding: '20px',
  flex: '1',
  minWidth: '250px',
  boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
};

const cardTitle = {
  fontSize: '18px',
  marginBottom: '8px',
  color: '#ef7136ff',
};

const cardText = {
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#222',
};
