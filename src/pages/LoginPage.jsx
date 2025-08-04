import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function LoginPage() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (name.trim() !== '') {
      localStorage.setItem('internName', name);
      navigate('/dashboard');
    }
  };

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      backgroundColor: '#fff',
      fontFamily: 'Segoe UI, sans-serif'
    }}>
      {/* Left Text Section */}
      <div style={{
        flex: 1,
        padding: '60px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <h1 style={{ fontSize: '38px', color: '#111' }}>
          The <span style={{ color: '#ef7136ff' }}>She Can Foundation</span> Intern Dashboard.
        </h1>
        <p style={{ fontSize: '16px', color: '#444', maxWidth: '400px', marginTop: '20px' }}>
          Try the Intern Portal, see your referral code, rewards and donation progress instantly.
        </p>

        <input
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            marginTop: '30px',
            backgroundColor: '#f7cabbff',
            padding: '12px 16px',
            border: '1px solid #ccc',
            borderRadius: '6px',
            fontSize: '16px',
            width: '80%',
            maxWidth: '300px',
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            marginTop: '20px',
            backgroundColor: '#ef7136ff',
            color: '#fff',
            border: 'none',
            padding: '12px 24px',
            fontSize: '16px',
            borderRadius: '24px',
            width: 'fit-content'
          }}
        >
          Get Started
        </button>
      </div>

      {/* Right Image Section */}
      <div style={{
        flex: 1,
        background: '#080029ff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        <img
          src="logo.png"
          alt="dashboard illustration"
          style={{
            maxWidth: '70%',
            borderRadius: '12px',
            boxShadow: '0 8px 30px rgba(0,0,0,0.1)'
          }}
        />
      </div>
    </div>
  );
}
