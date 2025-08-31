import React from 'react';
import companiesData from '../data/companies.json';
import salariesData from '../data/salaries.json';

const Salaries = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ background: '#f9f9f9', borderRadius: 6, padding: '1rem', marginBottom: '2rem' }}>
        <strong>About this page:</strong> Browse salary data for each company. To add or update salary info, edit <code>salaries.json</code> in our <a href="https://github.com/YOUR_GITHUB_REPO" target="_blank" rel="noopener noreferrer">GitHub repository</a> and submit a pull request.
      </div>
      <h2>Salaries</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem' }}>
        <thead>
          <tr style={{ background: '#222', color: '#fff' }}>
            <th style={{ padding: '0.75rem', border: '1px solid #ddd', textAlign: 'left' }}>Company Name</th>
            <th style={{ padding: '0.75rem', border: '1px solid #ddd', textAlign: 'left' }}>Job Title</th>
            <th style={{ padding: '0.75rem', border: '1px solid #ddd', textAlign: 'left' }}>Salary Range</th>
          </tr>
        </thead>
        <tbody>
          {salariesData.length > 0 ? (
            salariesData.map((entry, idx) => (
              <tr key={idx} style={{ background: idx % 2 === 0 ? '#fff' : '#f6f6f6' }}>
                <td style={{ padding: '0.75rem', border: '1px solid #ddd' }}>{entry.company}</td>
                <td style={{ padding: '0.75rem', border: '1px solid #ddd' }}>{entry.job_title}</td>
                <td style={{ padding: '0.75rem', border: '1px solid #ddd' }}>{entry.salary_range}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} style={{ padding: '0.75rem', border: '1px solid #ddd', textAlign: 'center' }}>No salary data yet.</td>
            </tr>
          )}
        </tbody>
      </table>
      <div style={{marginTop: '2rem'}}>
        <a href="https://github.com/YOUR_GITHUB_REPO" target="_blank" rel="noopener noreferrer" style={{color: '#222', textDecoration: 'underline'}}>
          Contribute Salary Data on GitHub
        </a>
      </div>
    </div>
  );
};

export default Salaries;