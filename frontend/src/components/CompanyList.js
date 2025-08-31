import React, { useEffect, useState } from 'react';

function CompanyList() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch('/companies.json')
      .then(res => res.json())
      .then(data => setCompanies(data));
  }, []);

  return (
    <div style={{
      background: 'linear-gradient(135deg, #f8fafc 0%, #e3e8ee 100%)',
      borderRadius: '18px',
      boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
      padding: '2rem 1rem',
      maxHeight: '80vh',
      overflowY: 'auto',
      width: '340px',
      margin: '0 auto',
      border: '1px solid #e5e7eb',
    }}>
      <h1 style={{
        fontWeight: 'bold',
        fontSize: '2rem',
        marginBottom: '1.5rem',
        textAlign: 'center',
        letterSpacing: '1px',
        color: '#222',
      }}>Companies</h1>
      <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
        {companies.map((company, idx) => (
          <li
            key={idx}
            style={{
              marginBottom: '1rem',
              borderRadius: '10px',
              background: idx === 0 ? '#e5e7eb' : '#fff',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              padding: '1.2rem 1rem',
              border: 'none',
              transition: 'transform 0.2s, box-shadow 0.2s',
              fontWeight: idx === 0 ? 'bold' : 'normal',
              color: '#222',
              cursor: 'pointer',
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'scale(1.03)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.10)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
            }}
          >
            <h2 style={{margin: 0, fontSize: '1.2rem'}}>{company.name}</h2>
            {company.intro && <p style={{margin: '0.5rem 0 0 0', fontSize: '0.95rem', color: '#444'}}>{company.intro}</p>}
            {company.website && <p style={{margin: '0.3rem 0 0 0', fontSize: '0.9rem'}}>Website: <a href={company.website} target="_blank" rel="noopener noreferrer" style={{color: '#2563eb', textDecoration: 'underline'}}>Visit</a></p>}
            {company.application_link && <p style={{margin: '0.3rem 0 0 0', fontSize: '0.9rem'}}>Careers: <a href={company.application_link} target="_blank" rel="noopener noreferrer" style={{color: '#059669', textDecoration: 'underline'}}>Apply</a></p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompanyList; 