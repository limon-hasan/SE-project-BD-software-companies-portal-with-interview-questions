import React, { useEffect, useState } from 'react';
import companiesData from '../data/companies.json';

const Companies = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    setCompanies(companiesData);
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Companies</h2>
      {companies.length === 0 ? (
        <p>No companies found.</p>
      ) : (
        <ul style={{ padding: 0, listStyle: 'none' }}>
          {companies.map((company, idx) => (
            <li key={idx} style={{ marginBottom: '2rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
              <h3>{company.name}</h3>
              <p>{company.intro}</p>
              {company.website && <a href={company.website} target="_blank" rel="noopener noreferrer">Visit Website</a>}
              <br />
              {company.application_link && (
                <a href={company.application_link} target="_blank" rel="noopener noreferrer" style={{ marginTop: '0.5rem', display: 'inline-block', background: '#222', color: '#fff', padding: '0.5rem 1rem', borderRadius: '4px', textDecoration: 'none' }}>
                  Apply
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Companies;