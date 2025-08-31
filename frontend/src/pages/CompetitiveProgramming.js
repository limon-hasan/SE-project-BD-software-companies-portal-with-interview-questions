import React from 'react';

const cardStyle = {
  background: '#fff',
  borderRadius: '14px',
  boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
  padding: '2rem 2.5rem',
  marginBottom: '2rem',
  maxWidth: '800px',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const headerStyle = {
  color: '#1a2536',
  fontSize: '2.2rem',
  fontWeight: 700,
  marginBottom: '1.2rem',
  textAlign: 'center',
};

const subHeaderStyle = {
  color: '#2563eb',
  fontSize: '1.3rem',
  fontWeight: 600,
  marginTop: '2rem',
  marginBottom: '1rem',
};

const listStyle = {
  fontSize: '1.08rem',
  lineHeight: 1.7,
  marginLeft: '1.5rem',
  marginBottom: '0.5rem',
};

const footerStyle = {
  textAlign: 'right',
  marginTop: '2rem',
};

const linkStyle = {
  color: '#2563eb',
  textDecoration: 'underline',
  fontWeight: 500,
};

const CompetitiveProgramming = () => (
  <div style={{ background: '#f5f7fa', minHeight: '100vh', padding: '2.5rem 0' }}>
    <div style={cardStyle}>
      <div style={headerStyle}>Competitive Programming Resources</div>
      <p style={{ fontSize: '1.15rem', color: '#222', marginBottom: '1.5rem', textAlign: 'center' }}>
        Competitive programming is a key skill for many Bangladeshi software companies. Here are some resources to help you prepare for coding interviews and contests:
      </p>
      <ul style={listStyle}>
        <li><a href="https://codeforces.com/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Codeforces</a> – Popular for contests and problem solving</li>
        <li><a href="https://www.codechef.com/" target="_blank" rel="noopener noreferrer" style={linkStyle}>CodeChef</a> – Practice and compete in monthly contests</li>
        <li><a href="https://atcoder.jp/" target="_blank" rel="noopener noreferrer" style={linkStyle}>AtCoder</a> – Japanese contest platform with high-quality problems</li>
        <li><a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer" style={linkStyle}>LeetCode</a> – Great for interview preparation</li>
        <li><a href="https://www.hackerrank.com/" target="_blank" rel="noopener noreferrer" style={linkStyle}>HackerRank</a> – Practice coding and prepare for interviews</li>
        <li><a href="https://cses.fi/problemset/" target="_blank" rel="noopener noreferrer" style={linkStyle}>CSES Problem Set</a> – Curated set of problems for learning algorithms</li>
      </ul>
      <div style={subHeaderStyle}>Tips for Success</div>
      <ul style={listStyle}>
        <li>Practice regularly and participate in online contests.</li>
        <li>Focus on data structures, algorithms, and problem-solving speed.</li>
        <li>Review editorial solutions and learn from others.</li>
        <li>Join local and online programming communities for support.</li>
      </ul>
      <div style={footerStyle}>
        <a href="https://github.com/YOUR_GITHUB_REPO" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          Contribute More Resources on GitHub
        </a>
      </div>
    </div>
  </div>
);

export default CompetitiveProgramming;