import React from 'react';
import companiesData from '../data/companies.json';
import questionsData from '../data/questions.json';

const Questions = () => {
  // Group questions by company name
  const grouped = {};
  questionsData.forEach(q => {
    if (!grouped[q.company_name]) grouped[q.company_name] = [];
    grouped[q.company_name].push(q);
  });

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ background: '#f9f9f9', borderRadius: 6, padding: '1rem', marginBottom: '2rem' }}>
        <strong>About this page:</strong> Browse interview questions for each company. To add or update questions, edit <code>questions.json</code> in our <a href="https://github.com/YOUR_GITHUB_REPO" target="_blank" rel="noopener noreferrer">GitHub repository</a> and submit a pull request.
      </div>
      <h2>Interview Questions</h2>
      {companiesData.map((company, idx) => (
        <div key={idx} style={{ marginBottom: '2rem' }}>
          <h3>{company.name}</h3>
          <div style={{ marginLeft: '1rem' }}>
            {grouped[company.name] && grouped[company.name].length > 0 ? (
              grouped[company.name].map((q, i) => (
                <div key={i} style={{ 
                  marginBottom: '1rem', 
                  const isEmpty = !questionsData || questionsData.length === 0;
                  return (
                    <div style={{ padding: '2rem' }}>
                      <div style={{ background: '#f9f9f9', borderRadius: 6, padding: '1rem', marginBottom: '2rem' }}>
                        <strong>About this page:</strong> Browse interview questions for each company. To add or update questions, edit <code>questions.json</code> in our <a href="https://github.com/YOUR_GITHUB_REPO" target="_blank" rel="noopener noreferrer">GitHub repository</a> and submit a pull request.
                      </div>
                      <h2>Interview Questions</h2>
                      {isEmpty ? (
                        <div style={{ textAlign: 'center', marginTop: '4rem', marginBottom: '4rem' }}>
                          <div style={{ color: '#444', fontSize: '1.35rem', marginBottom: '2rem' }}>
                            This section is still under planning phase!
                          </div>
                          <div style={{ marginTop: '2rem' }}>
                            <a href="https://github.com/YOUR_GITHUB_REPO" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 500, fontSize: '1.08rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                              <span style={{ fontSize: '1.2rem' }}>✏️</span> Contribute to this page on GitHub
                            </a>
                          </div>
                        </div>
                      ) : (
                        companiesData.map((company, idx) => (
                          <div key={idx} style={{ marginBottom: '2rem' }}>
                            <h3>{company.name}</h3>
                            <div style={{ marginLeft: '1rem' }}>
                              {grouped[company.name] && grouped[company.name].length > 0 ? (
                                grouped[company.name].map((q, i) => (
                                  <div key={i} style={{ 
                                    marginBottom: '1rem', 
                                    padding: '1rem', 
                                    background: '#f8f9fa', 
                                    borderRadius: 6, 
                                    borderLeft: '4px solid #eebbc3'
                                  }}>
                                    <div style={{ 
                                      display: 'inline-block', 
                                      background: q.type === 'general' ? '#e3f2fd' : '#fff3e0', 
                                      color: q.type === 'general' ? '#1976d2' : '#f57c00',
                                      padding: '0.25rem 0.75rem', 
                                      borderRadius: 12, 
                                      fontSize: '0.8rem', 
                                      fontWeight: 600,
                                      marginBottom: '0.5rem'
                                    }}>
                                      {q.type}
                                    </div>
                                    <div style={{ fontWeight: 500 }}>{q.question}</div>
                                    {q.answer && <div style={{ marginTop: '0.5rem', color: '#444' }}><strong>Answer:</strong> {q.answer}</div>}
                                  </div>
                                ))
                              ) : (
                                <div style={{ color: '#888', fontStyle: 'italic' }}>No questions available.</div>
                              )}
                            </div>
                          </div>
                        ))
                      )}
                    </div>