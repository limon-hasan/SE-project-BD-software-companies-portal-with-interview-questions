import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Companies from './pages/Companies';
import Salaries from './pages/Salaries';
import CompetitiveProgramming from './pages/CompetitiveProgramming';
import Footer from './components/Footer';
import CompanyList from './components/CompanyList';
import CompanyDirectory from './components/CompanyDirectory';

const Home = () => (
  <div style={{
    padding: '3rem 0',
    background: '#fff',
    minHeight: '80vh',
    fontFamily: 'Segoe UI, Arial, sans-serif'
  }}>
    <div style={{
      maxWidth: 900,
      margin: '0',
      background: '#fff',
      borderRadius: 18,
  // boxShadow removed
      padding: '3rem 2rem 2rem 2rem',
      textAlign: 'left'
    }}>
      <h1 style={{ fontWeight: 800, fontSize: '3rem', marginBottom: 10, color: '#2255a4', letterSpacing: '-2px' }}>Code2Career BD</h1>
      <p style={{ fontSize: '1.35rem', color: '#444', marginBottom: 32, fontWeight: 500 }}>
        The all-in-one platform for Bangladeshi software company info, interview questions, salary data, and competitive programming resources.
      </p>
  <div style={{ display: 'flex', justifyContent: 'flex-start', gap: 20, marginBottom: 36 }}>
        <a href="/companies" style={{
          background: '#2563eb',
          color: '#fff',
          borderRadius: 24,
          padding: '1rem 2.2rem',
          fontWeight: 700,
          fontSize: '1.15rem',
          boxShadow: '0 2px 8px rgba(34,85,164,0.08)',
          textDecoration: 'none',
          border: 'none',
          transition: 'background 0.2s',
          marginRight: 0
        }}
        onMouseOver={e => e.currentTarget.style.background = '#1746a2'}
        onMouseOut={e => e.currentTarget.style.background = '#2563eb'}
        >Start Taking Preparation</a>
        <a href="/notes" style={{
          background: '#f3f4f6',
          color: '#2255a4',
          borderRadius: 24,
          padding: '1rem 2.2rem',
          fontWeight: 700,
          fontSize: '1.15rem',
          boxShadow: '0 2px 8px rgba(34,85,164,0.04)',
          textDecoration: 'none',
          border: '1px solid #e3e3e3',
          transition: 'background 0.2s',
          marginLeft: 0
        }}>Read Notes</a>
      </div>
  <div style={{ display: 'flex', gap: 24, justifyContent: 'flex-start', flexWrap: 'wrap', marginBottom: 24, alignItems: 'flex-start', width: '100%' }}>
        <div style={{ background: '#f3f4f6', borderRadius: 12, padding: '1.5rem 1.2rem', minWidth: 220, maxWidth: 260, textAlign: 'left', boxShadow: '0 2px 8px rgba(34,85,164,0.04)' }}>
          <div style={{ fontSize: '2rem', marginBottom: 8 }}>🏢</div>
          <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 4 }}>20+ companies</div>
          <div style={{ color: '#555', fontSize: '0.98rem' }}>Collection of questions asked in multiple top companies of Bangladesh</div>
        </div>
        <div style={{ background: '#f3f4f6', borderRadius: 12, padding: '1.5rem 1.2rem', minWidth: 220, maxWidth: 260, textAlign: 'left', boxShadow: '0 2px 8px rgba(34,85,164,0.04)' }}>
          <div style={{ fontSize: '2rem', marginBottom: 8 }}>📝</div>
          <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 4 }}>350+ questions</div>
          <div style={{ color: '#555', fontSize: '0.98rem' }}>Details and solutions of 300+ questions</div>
        </div>
        <div style={{ background: '#f3f4f6', borderRadius: 12, padding: '1.5rem 1.2rem', minWidth: 220, maxWidth: 260, textAlign: 'left', boxShadow: '0 2px 8px rgba(34,85,164,0.04)' }}>
          <div style={{ fontSize: '2rem', marginBottom: 8 }}>💡</div>
          <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 4 }}>Tips and tricks</div>
          <div style={{ color: '#555', fontSize: '0.98rem' }}>Tips related to specific companies or overall interview preparation</div>
        </div>
      </div>
      <div style={{ background: '#f5f9fcff', borderRadius: 8, padding: '1rem', marginBottom: 0, fontSize: '1.05rem', color: '#2255a4', fontWeight: 500 }}>
        <span role="img" aria-label="tip" style={{ marginRight: 8 }}>🔎</span>
        Use the navigation bar above to explore companies, interview questions, salaries, and more.
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/companies" element={<CompanyDirectory />} />
        <Route path="/salaries" element={<Salaries />} />
        <Route path="/competitive-programming" element={<CompetitiveProgramming />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;