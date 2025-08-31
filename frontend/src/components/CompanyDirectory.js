import React, { useState } from 'react';
import companiesList from '../data/companies.json';

function CompanyDirectory() {
  const [selectedCompany, setSelectedCompany] = useState(companiesList[0]?.name || '');
  const [openAnswerIdx, setOpenAnswerIdx] = useState(null); // Top-level state for Chaldal answer panel

  function handleCompanyClick(companyName) {
    setSelectedCompany(companyName);
  }

  function renderCompanyDetails(companyName) {
  const company = companiesList.find(c => c.name.trim().toLowerCase() === companyName.trim().toLowerCase());
    // Custom rendering for Exabyting
    if (company && company.name.trim().toLowerCase().includes('exabyting')) {
      const exabytingStages = [
        { title: 'Phone Interview', description: 'Basic CS questions after shortlisting.' },
        { title: 'Round 1', description: 'Technical round with engineering manager.' },
        { title: 'Round 2', description: 'Technical round with 3 software engineers.' },
        { title: 'CEO Round', description: 'Behavioral interview with CEO.' }
      ];
      let exabytingQuestions = [];
      try {
        exabytingQuestions = require('../data/exabyting_questions.json');
      } catch (e) {
        exabytingQuestions = [];
      }
      const cardStyle = {
        background: '#e2e8ed',
        borderRadius: '14px',
        padding: '16px 24px',
        marginBottom: '16px',
        fontWeight: 500,
        maxWidth: '650px',
        marginLeft: 0,
        boxSizing: 'border-box',
        fontSize: '1.1rem',
      };
      return (
        <div style={{ padding: '0 20px', maxWidth: 900, margin: '0 auto' }}>
          <h1 style={{ fontWeight: 'bold', fontSize: '2.5rem', marginBottom: '1.5rem', color: '#222', textAlign: 'left' }}>{company.name}</h1>
          <table style={{ background: '#f5faff', borderRadius: '12px', marginBottom: '2rem', boxShadow: '0 1px 4px rgba(0,0,0,0.04)', width: '100%', maxWidth: '700px' }}>
            <tbody>
              <tr>
                <td style={{ fontWeight: 'bold', padding: '1rem', background: '#f5faff', color: '#222' }}>Founding Year</td>
                <td style={{ padding: '1rem', background: '#f5faff' }}>2018</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', padding: '1rem', background: '#f5faff', color: '#222' }}>Company Website</td>
                <td style={{ padding: '1rem', background: '#f5faff' }}><a href="http://exabyting.com/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold', color: '#1976d2' }}>http://exabyting.com/</a></td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', padding: '1rem', background: '#f5faff', color: '#222' }}>Career Website</td>
                <td style={{ padding: '1rem', background: '#f5faff' }}><a href="https://exabyting.com/join-our-team/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold', color: '#1976d2' }}>https://exabyting.com/join-our-team/</a></td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', padding: '1rem', background: '#f5faff', color: '#222' }}>Technologies Used</td>
                <td style={{ padding: '1rem', background: '#f5faff' }}>JAVA, Spring, PHP, Laravel, JavaScript, NodeJS, ExpressJS, Python, Django, REST, Microservices, SQL, NoSQL, SQS, SNS</td>
              </tr>
            </tbody>
          </table>
          <div style={{ borderBottom: '1.5px solid #e0e0e0', margin: '32px 0 32px 0' }} />
          <h2 style={{ marginTop: '2rem', color: '#444', fontSize: '1.7rem', fontWeight: 600, maxWidth: '650px' }}>Introduction</h2>
          <div style={{ marginBottom: '2rem', background: '#f5faff', padding: '1.2rem', borderRadius: '6px', color: '#333', fontSize: '1.1rem', maxWidth: '650px' }}>
            <a href="http://exabyting.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', fontWeight: 'bold' }}>Exabyting</a> is an international software company based in Dhaka, Bangladesh. They have been successfully providing software services since 2018 in both the local and global market.
          </div>
          <h2 style={{ marginTop: '2rem', color: '#444', fontSize: '1.7rem', fontWeight: 600, maxWidth: '650px' }}>Interview Stages</h2>
          <div style={{ marginBottom: '2rem', maxWidth: '650px' }}>
            {exabytingStages.map((stage, idx) => (
              <div key={idx} style={{ marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, margin: '18px 0 8px 0' }}>{stage.title}</h3>
                <div>{stage.description}</div>
              </div>
            ))}
          </div>
          <div style={{ borderBottom: '1.5px solid #e0e0e0', margin: '32px 0 32px 0' }} />
          <h2 style={{ color: '#1976d2', fontSize: '1.5rem', fontWeight: 700, margin: '2rem 0 1rem 0', maxWidth: '650px' }}>Interview Questions</h2>
          <div style={{ marginBottom: '1rem', color: '#333', fontSize: '1.1rem', maxWidth: '650px' }}>
            {exabytingQuestions.map((section, sidx) => {
              let extraMargin = {};
              let showLine = false;
              if (section.section === 'First Round' || section.section === 'Second Round') {
                extraMargin = { marginTop: '38px' };
                showLine = true;
              }
              return (
                <div key={sidx}>
                  {showLine && (
                    <div style={{ borderBottom: '1.5px solid #e0e0e0', margin: '32px 0 32px 0' }} />
                  )}
                  <h3 style={{ color: '#1976d2', fontWeight: 700, fontSize: '1.2rem', margin: '18px 0 8px 0', ...extraMargin }}>{section.section}</h3>
                  {section.questions.map((q, idx) => (
                    <div key={idx} style={cardStyle}>
                      <span style={{ fontWeight: 500, fontSize: '1.02rem', color: '#222' }}>{q.text}</span>
                      {q.answer && (
                        <details style={{ background: '#f3f4f8', borderRadius: '10px', padding: '10px 18px', border: 'none', marginTop: 16 }}>
                          <summary style={{ fontWeight: 500, color: '#222', cursor: 'pointer', margin: 0, fontSize: '1.1rem', background: 'transparent', outline: 'none' }}>Show Answer</summary>
                          <div style={{ margin: '10px 0 0 0', fontSize: '1.1rem', fontWeight: 400 }}>{q.answer}</div>
                        </details>
                      )}
                      {q.code && (
                        <pre style={{ background: '#f5f6fa', color: '#222', borderRadius: 8, padding: 20, fontSize: 16, marginTop: 16, fontFamily: 'Consolas, monospace', overflowX: 'auto', boxShadow: '0 1px 4px rgba(0,0,0,0.07)', lineHeight: 1.7 }}><code>{q.code}</code></pre>
                      )}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      );
    }
    // Custom rendering for Fringecore
    if (company && company.name.trim().toLowerCase().includes('fringecore')) {
      const fringecoreStages = [
        { title: 'Frontend Interview', description: 'React, JS, CSS, and practical coding.' },
        { title: 'Backend Interview', description: 'Node.js, Express, DB, and API design.' }
      ];
      let fringecoreSections = [];
      try {
        fringecoreSections = require('../data/fringecore_questions.json');
      } catch (e) {
        fringecoreSections = [];
      }
      const cardStyle = {
        background: '#e2e8ed',
        borderRadius: '14px',
        padding: '16px 24px',
        marginBottom: '16px',
        fontWeight: 500,
        maxWidth: '650px',
        marginLeft: 0,
        boxSizing: 'border-box',
        fontSize: '1.1rem',
      };
      const buttonStyle = {
        background: '#1976d2',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        padding: '8px 18px',
        fontWeight: 500,
        fontSize: '1rem',
        cursor: 'pointer',
        marginTop: 10,
        marginBottom: 10,
        boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
      };
      return (
        <div style={{ padding: '0 20px', maxWidth: 900, margin: '0 auto' }}>
          <h1 style={{ fontWeight: 'bold', fontSize: '2.5rem', marginBottom: '1.5rem', color: '#222', textAlign: 'left' }}>{company.name}</h1>
          <table style={{ background: '#f5faff', borderRadius: '12px', marginBottom: '2rem', boxShadow: '0 1px 4px rgba(0,0,0,0.04)', width: '100%', maxWidth: '700px' }}>
            <tbody>
              <tr>
                <td style={{ fontWeight: 'bold', padding: '1rem', background: '#f5faff', color: '#222' }}>Founding year</td>
                <td style={{ padding: '1rem', background: '#f5faff' }}>2023</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', padding: '1rem', background: '#f5faff', color: '#222' }}>Company Website</td>
                <td style={{ padding: '1rem', background: '#f5faff' }}><a href="https://fringecore.software/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold', color: '#1976d2' }}>https://fringecore.software/</a></td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', padding: '1rem', background: '#f5faff', color: '#222' }}>Career Website</td>
                <td style={{ padding: '1rem', background: '#f5faff' }}><a href="https://work-pool.recruiterflow.com/fringecore/jobs/cd5106060028424b8e2e2e2e" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold', color: '#1976d2' }}>https://work-pool.recruiterflow.com/fringecore/jobs/cd5106060028424b8e2e2e2e</a></td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', padding: '1rem', background: '#f5faff', color: '#222' }}>Technologies Used</td>
                <td style={{ padding: '1rem', background: '#f5faff' }}>React, Node.js, Express, PostgreSQL, Docker, AWS</td>
              </tr>
            </tbody>
          </table>
          <div style={{ borderBottom: '1.5px solid #e0e0e0', margin: '32px 0 32px 0' }} />
          <h2 style={{ marginTop: '2rem', color: '#444', fontSize: '1.7rem', fontWeight: 600, maxWidth: '650px' }}>Introduction</h2>
          <div style={{ marginBottom: '2rem', background: '#f5faff', padding: '1.2rem', borderRadius: '6px', color: '#333', fontSize: '1.1rem', maxWidth: '650px' }}>
            <a href="https://fringecore.software/" target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', fontWeight: 'bold' }}>Fringecore</a> is a team of engineers and designers, who build software, hack hardware and apply design thinking in-order to tame the chaos in business processes.
          </div>
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontWeight: 'bold', fontSize: '1.4rem', marginBottom: '1rem', color: '#1976d2' }}>Interview Stages</h2>
            <ul style={{ paddingLeft: 20 }}>
              {fringecoreStages.map((stage, idx) => (
                <li key={idx} style={{ marginBottom: 8, fontSize: '1.08rem', color: '#222' }}>
                  <span style={{ fontWeight: 500 }}>{stage.title}:</span> {stage.description}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontWeight: 'bold', fontSize: '1.4rem', marginBottom: '1rem', color: '#1976d2' }}>Interview Questions</h2>
            {fringecoreSections.map((section, sIdx) => (
              <div key={sIdx} style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontWeight: 'bold', fontSize: '1.15rem', marginBottom: '1rem', color: '#222' }}>{section.section}</h3>
                {section.questions.map((q, idx) => (
                  <div key={idx} style={cardStyle}>
                    <span style={{ fontWeight: 500, fontSize: '1.02rem', color: '#222' }}>{q.text}</span>
                    {q.link && (
                      <div style={{ width: '100%' }}>
                        <button style={buttonStyle} onClick={() => window.open(q.link, '_blank')}>
                          <span role="img" aria-label="laptop" style={{ marginRight: '8px' }}>💻</span>
                          View Challenge
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      );
    }
    // Custom rendering for Envobyte
    if (company && company.name.trim().toLowerCase().includes('envobyte')) {
      const envobyteStages = [
        { title: 'Online Test', description: 'Technical skills check.' },
        { title: 'Written/Skills Test', description: 'Written, practical, assessment, or group task.' },
        { title: 'Interview', description: 'Technical & HR interview.' }
      ];
      let envobyteQuestions = [];
      try {
        envobyteQuestions = require('../data/envobyte_questions.json');
      } catch (e) {
        envobyteQuestions = [];
      }
      const cardStyle = {
        background: '#e2e8ed',
        borderRadius: '14px',
        padding: '16px 24px',
        marginBottom: '16px',
        fontWeight: 500,
        maxWidth: '650px',
        marginLeft: 0,
        boxSizing: 'border-box',
        fontSize: '1.1rem',
      };
      return (
        <div style={{ padding: '0 20px', maxWidth: 900, margin: '0 auto' }}>
          <h1 style={{ fontWeight: 'bold', fontSize: '2.5rem', marginBottom: '1.5rem', color: '#222', textAlign: 'left' }}>{company.name}</h1>
          <table style={{ background: '#f5faff', borderRadius: '12px', marginBottom: '2rem', boxShadow: '0 1px 4px rgba(0,0,0,0.04)', width: '100%', maxWidth: '700px' }}>
            <tbody>
              <tr>
                <td style={{ fontWeight: 'bold', padding: '1rem', background: '#f5faff', color: '#222' }}>Founding Year</td>
                <td style={{ padding: '1rem', background: '#f5faff' }}>2023</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', padding: '1rem', background: '#f5faff', color: '#222' }}>Company Website</td>
                <td style={{ padding: '1rem', background: '#f5faff' }}><a href="https://www.envobyte.com" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold', color: '#1976d2' }}>https://www.envobyte.com</a></td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', padding: '1rem', background: '#f5faff', color: '#222' }}>Career Website</td>
                <td style={{ padding: '1rem', background: '#f5faff' }}><a href="https://www.linkedin.com/company/envobyte" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold', color: '#1976d2' }}>https://www.linkedin.com/company/envobyte</a></td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', padding: '1rem', background: '#f5faff', color: '#222' }}>Technologies Used</td>
                <td style={{ padding: '1rem', background: '#f5faff' }}>PHP, JavaScript, Java, Kotlin, SQL, Android, Flutter, Laravel, WordPress</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', padding: '1rem', background: '#f5faff', color: '#222' }}>Location</td>
                <td style={{ padding: '1rem', background: '#f5faff' }}>Khulna, Bangladesh</td>
              </tr>
            </tbody>
          </table>
          <div style={{ borderBottom: '1.5px solid #e0e0e0', margin: '32px 0 32px 0' }} />
          <h2 style={{ marginTop: '2rem', color: '#444', fontSize: '1.7rem', fontWeight: 600, maxWidth: '650px' }}>Introduction</h2>
          <div style={{ marginBottom: '2rem', background: '#f5faff', padding: '1.2rem', borderRadius: '6px', color: '#333', fontSize: '1.1rem', maxWidth: '650px' }}>
            <a href="https://www.envobyte.com" target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', fontWeight: 'bold' }}>Envobyte</a> is a passionate and growing IT company based in Khulna, Bangladesh. The company specializes in web design, mobile app development, and complete digital solutions. Envobyte has its own unique products and also offers IT services to its clients.
          </div>
          <h2 style={{ marginTop: '2rem', color: '#444', fontSize: '1.7rem', fontWeight: 600, maxWidth: '650px' }}>Selection Process</h2>
          <div style={{ marginBottom: '2rem', maxWidth: '650px' }}>
            {envobyteStages.map((stage, idx) => (
              <div key={idx} style={{ marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, margin: '18px 0 8px 0' }}>{stage.title}</h3>
                <div>{stage.description}</div>
              </div>
            ))}
          </div>
          <div style={{ borderBottom: '1.5px solid #e0e0e0', margin: '32px 0 32px 0' }} />
          <h2 style={{ color: '#1976d2', fontSize: '1.5rem', fontWeight: 700, margin: '2rem 0 1rem 0', maxWidth: '650px' }}>Interview Questions</h2>
          <div style={{ marginBottom: '1rem', color: '#333', fontSize: '1.1rem', maxWidth: '650px' }}>
            {envobyteQuestions.map((q, idx) => (
              <div key={idx} style={cardStyle}>
                <span style={{ fontWeight: 500, fontSize: '1.02rem', color: '#222' }}>{q.text}</span>
                {q.answer && (
                  <details style={{ background: '#f3f4f8', borderRadius: '10px', padding: '10px 18px', border: 'none', marginTop: 16 }}>
                    <summary style={{ fontWeight: 500, color: '#222', cursor: 'pointer', margin: 0, fontSize: '1.1rem', background: 'transparent', outline: 'none' }}>Show Answer</summary>
                    <div style={{ margin: '10px 0 0 0', fontSize: '1.1rem', fontWeight: 400 }}>{q.answer}</div>
                  </details>
                )}
                {q.code && (
                  <pre style={{ background: '#f5f6fa', color: '#222', borderRadius: 8, padding: 20, fontSize: 16, marginTop: 16, fontFamily: 'Consolas, monospace', overflowX: 'auto', boxShadow: '0 1px 4px rgba(0,0,0,0.07)', lineHeight: 1.7 }}><code>{q.code}</code></pre>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    }
    // Custom rendering for DSI
    if (company && company.name.trim().toLowerCase().includes('dsi')) {
      const dsiInterviewStages = [
        { title: 'Written Test', description: 'On campus. Coding, Database, SQL, OOP, etc.' },
        { title: 'Face-to-Face Interview', description: 'Technical and HR questions.' }
      ];
      let dsiQuestions = [];
      try {
        dsiQuestions = require('../data/dsi_questions.json');
      } catch (e) {
        dsiQuestions = [];
      }
      const cardStyle = {
        background: '#e2e8ed',
        borderRadius: '14px',
        padding: '16px 24px',
        marginBottom: '16px',
        fontWeight: 500,
        maxWidth: '650px',
        marginLeft: 0,
        boxSizing: 'border-box',
        fontSize: '1.1rem',
      };
      const codeStyle = {
        background: '#f5f6fa',
        color: '#222',
        borderRadius: 8,
        padding: 20,
        fontSize: 16,
        marginTop: 16,
        fontFamily: 'Consolas, monospace',
        overflowX: 'auto',
        boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
        lineHeight: 1.7,
      };
      return (
        <div style={{ padding: '0 20px', maxWidth: 900, margin: '0 auto' }}>
          <h1 style={{ fontWeight: 'bold', fontSize: '2.5rem', marginBottom: '1.5rem', color: '#222', textAlign: 'left' }}>{company.name}</h1>
          <table style={{ background: '#f5faff', borderRadius: '12px', marginBottom: '2rem', boxShadow: '0 1px 4px rgba(0,0,0,0.04)', width: '100%', maxWidth: '700px' }}>
            <tbody>
              <tr>
                <td style={{ fontWeight: 'bold', padding: '1rem', background: '#f5faff', color: '#222' }}>Founding Year</td>
                <td style={{ padding: '1rem', background: '#f5faff' }}>2001</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', padding: '1rem', background: '#f5faff', color: '#222' }}>Company Website</td>
                <td style={{ padding: '1rem', background: '#f5faff' }}><a href="https://www.dsinnovators.com/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold', color: '#1976d2' }}>https://www.dsinnovators.com/</a></td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', padding: '1rem', background: '#f5faff', color: '#222' }}>Career Website</td>
                <td style={{ padding: '1rem', background: '#f5faff' }}><a href="https://app.hrythmic.com/recruit/openings/company/dsinnovators/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold', color: '#1976d2' }}>https://app.hrythmic.com/recruit/openings/company/dsinnovators/</a></td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', padding: '1rem', background: '#f5faff', color: '#222' }}>Technologies Used</td>
                <td style={{ padding: '1rem', background: '#f5faff' }}>Java, Springboot, Nodejs(hapi), Hibernate, ReactJs, NextJs, AngularJS, Android, iOS</td>
              </tr>
            </tbody>
          </table>
          <div style={{ borderBottom: '1.5px solid #e0e0e0', margin: '32px 0 32px 0' }} />
          <h2 style={{ marginTop: '2rem', color: '#444', fontSize: '1.7rem', fontWeight: 600, maxWidth: '650px' }}>Introduction</h2>
          <div style={{ marginBottom: '2rem', background: '#f5faff', padding: '1.2rem', borderRadius: '6px', color: '#333', fontSize: '1.1rem', maxWidth: '650px' }}>
            <a href="https://www.dsinnovators.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', fontWeight: 'bold' }}>Dynamic Solution Innovators Ltd</a> is an international software company based in Dhaka, Bangladesh. They have been successfully providing software services since 2001 in both the local and global market.
          </div>
          <h2 style={{ marginTop: '2rem', color: '#444', fontSize: '1.7rem', fontWeight: 600, maxWidth: '650px' }}>Interview Stages</h2>
          <div style={{ marginBottom: '2rem', maxWidth: '650px' }}>
            {dsiInterviewStages.map((stage, idx) => (
              <div key={idx} style={{ marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, margin: '18px 0 8px 0' }}>{stage.title}</h3>
                <div>{stage.description}</div>
              </div>
            ))}
          </div>
          <div style={{ borderBottom: '1.5px solid #e0e0e0', margin: '32px 0 32px 0' }} />
          <h2 style={{ color: '#1976d2', fontSize: '1.5rem', fontWeight: 700, margin: '2rem 0 1rem 0', maxWidth: '650px' }}>Interview Questions</h2>
          <div style={{ marginBottom: '1rem', color: '#333', fontSize: '1.1rem', maxWidth: '650px' }}>
            {dsiQuestions.map((q, idx) => (
              <div key={idx} style={cardStyle}>
                <span style={{ fontWeight: 500, fontSize: '1.02rem', color: '#222' }}>{q.text}</span>
                {q.link && (
                  <div style={{ width: '100%' }}>
                    <button style={{ border: '2px solid #2196f3', background: '#f5faff', color: '#1976d2', borderRadius: '8px', padding: '12px 32px', fontWeight: 700, fontSize: '20px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', marginTop: '10px', boxSizing: 'border-box', transition: 'background 0.2s' }} onClick={() => window.open(q.link, '_blank')}>
                      <span role="img" aria-label="laptop" style={{ marginRight: '8px' }}>💻</span>
                      Submit Code
                    </button>
                  </div>
                )}
                {q.answer && (
                  <details style={{ background: '#f3f4f8', borderRadius: '10px', padding: '10px 18px', border: 'none', marginTop: 16 }}>
                    <summary style={{ fontWeight: 500, color: '#222', cursor: 'pointer', margin: 0, fontSize: '1.1rem', background: 'transparent', outline: 'none' }}>Show Answer</summary>
                    <div style={{ margin: '10px 0 0 0', fontSize: '1.1rem', fontWeight: 400 }}>{q.answer}</div>
                  </details>
                )}
                {q.code && (
                  <pre style={codeStyle}><code>{q.code}</code></pre>
                )}
                {q.table && (
                  <div style={{ marginTop: '12px', overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <thead>
                        <tr style={{ background: '#eaf3fa', textAlign: 'left' }}>
                          <th style={{ border: '1px solid #ddd', padding: '8px', fontWeight: 600 }}>ID</th>
                          <th style={{ border: '1px solid #ddd', padding: '8px', fontWeight: 600 }}>Name</th>
                          <th style={{ border: '1px solid #ddd', padding: '8px', fontWeight: 600 }}>Subject</th>
                          <th style={{ border: '1px solid #ddd', padding: '8px', fontWeight: 600 }}>Marks</th>
                        </tr>
                      </thead>
                      <tbody>
                        {q.table.map((row, rowIndex) => (
                          <tr key={rowIndex} style={{ background: rowIndex % 2 === 0 ? '#f9f9f9' : '#fff' }}>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.id}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.name}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.subject}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.marks}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    }
    // Custom rendering for Brain Station 23
    if (company && company.name.trim().toLowerCase().includes('brain station 23')) {
      const bs23InterviewStages = [
        { title: 'Online Assessment', description: 'Coding and MCQ test on algorithms, data structures, and basic programming.' },
        { title: 'Technical Interview', description: 'Face-to-face/Virtual. Problem solving, system design, OOP, DB, and web technologies.' },
        { title: 'HR Interview', description: 'Behavioral questions, salary expectations, career plans.' }
      ];
      let bs23Questions = [];
      try {
        bs23Questions = require('../data/brainstation23_questions.json');
      } catch (e) {
        bs23Questions = [];
      }
      const cardStyle = {
        background: '#e2e8ed',
        borderRadius: '14px',
        padding: '16px 24px',
        marginBottom: '16px',
        fontWeight: 500,
        maxWidth: '650px',
        marginLeft: 0,
        boxSizing: 'border-box',
        fontSize: '1.1rem',
      };
      const codeStyle = {
        background: '#f5f6fa',
        color: '#222',
        borderRadius: 8,
        padding: 20,
        fontSize: 16,
        marginTop: 16,
        fontFamily: 'Consolas, monospace',
        overflowX: 'auto',
        boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
        lineHeight: 1.7,
      };
      return (
        <div style={{ padding: '0 20px', maxWidth: 900, margin: '0 auto' }}>
          <h1 style={{ fontWeight: 'bold', fontSize: '2.5rem', marginBottom: '1.5rem', color: '#222', textAlign: 'left' }}>{company.name}</h1>
          <table style={{ background: '#f5faff', borderRadius: '12px', marginBottom: '2rem', boxShadow: '0 1px 4px rgba(0,0,0,0.04)', width: '100%', maxWidth: '700px' }}>
            <tbody>
              <tr>
                <td style={{ fontWeight: 'bold', padding: '1rem', background: '#f5faff', color: '#222' }}>Founding Year</td>
                <td style={{ padding: '1rem', background: '#f5faff' }}>2010</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', padding: '1rem', background: '#f5faff', color: '#222' }}>Company Website</td>
                <td style={{ padding: '1rem', background: '#f5faff' }}><a href="https://brainstation-23.com/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold', color: '#1976d2' }}>https://brainstation-23.com/</a></td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', padding: '1rem', background: '#f5faff', color: '#222' }}>Career Website</td>
                <td style={{ padding: '1rem', background: '#f5faff' }}><a href="https://brainstation-23.com/career/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold', color: '#1976d2' }}>https://brainstation-23.com/career/</a></td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', padding: '1rem', background: '#f5faff', color: '#222' }}>Technologies Used</td>
                <td style={{ padding: '1rem', background: '#f5faff' }}>JavaScript, React, Node.js, .NET, Python, AWS, Azure</td>
              </tr>
            </tbody>
          </table>
          <div style={{ borderBottom: '1.5px solid #e0e0e0', margin: '32px 0 32px 0' }} />
          <h2 style={{ marginTop: '2rem', color: '#444', fontSize: '1.7rem', fontWeight: 600, maxWidth: '650px' }}>Introduction</h2>
          <div style={{ marginBottom: '2rem', background: '#f5faff', padding: '1.2rem', borderRadius: '6px', color: '#333', fontSize: '1.1rem', maxWidth: '650px' }}>
            <a href="https://brainstation-23.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', fontWeight: 'bold' }}>Brain Station 23</a> is a leading software development company in Bangladesh, providing solutions for global clients in fintech, e-commerce, healthcare, and more. They focus on innovation, quality, and client satisfaction.
          </div>
          <h2 style={{ marginTop: '2rem', color: '#444', fontSize: '1.7rem', fontWeight: 600, maxWidth: '650px' }}>Interview Stages</h2>
          <div style={{ marginBottom: '2rem', maxWidth: '650px' }}>
            {bs23InterviewStages.map((stage, idx) => (
              <div key={idx} style={{ marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, margin: '18px 0 8px 0' }}>{stage.title}</h3>
                <div>{stage.description}</div>
              </div>
            ))}
          </div>
          <div style={{ borderBottom: '1.5px solid #e0e0e0', margin: '32px 0 32px 0' }} />
          <h2 style={{ color: '#1976d2', fontSize: '1.5rem', fontWeight: 700, margin: '2rem 0 1rem 0', maxWidth: '650px' }}>Interview Questions</h2>
          <div style={{ marginBottom: '1rem', color: '#333', fontSize: '1.1rem', maxWidth: '650px' }}>
            {bs23Questions.map((q, idx) => (
              <div key={idx} style={cardStyle}>
                <span style={{ fontWeight: 500, fontSize: '1.02rem', color: '#222' }}>{q.text}</span>
                {q.answer && (
                  <details style={{ background: '#f3f4f8', borderRadius: '10px', padding: '10px 18px', border: 'none', marginTop: 16 }}>
                    <summary style={{ fontWeight: 500, color: '#222', cursor: 'pointer', margin: 0, fontSize: '1.1rem', background: 'transparent', outline: 'none' }}>Show Answer</summary>
                    <div style={{ margin: '10px 0 0 0', fontSize: '1.1rem', fontWeight: 400 }}>{q.answer}</div>
                  </details>
                )}
                {q.code && (
                  <pre style={codeStyle}><code>{q.code}</code></pre>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    }
  // Custom rendering for Bevy Commerce
  if (company && company.name.trim().toLowerCase().includes('bevy commerce')) {
      const bevyInterviewStages = [
        { title: 'Technical Round', description: 'Half an hour of quick-fire questions online. Focus on Node, React, and GraphQL basics.' },
        { title: 'Coding Round', description: 'Based on problem-solving.' }
      ];
      const bevyQuestions = [
        { text: 'How does error handling differ in synchronous and asynchronous code in Node.js, and what are the best practices for error handling in asynchronous code?' },
        { text: 'Write a function that takes an array and a number as an argument. If the number is greater than 0, you must pop the number of elements from the array. If the number is not provided then pop once.' },
        { text: 'What is event driven programming? How event driven programming works in JavaScript?' },
        { text: 'Given an array of integers, find the second max of the array.' },
        { text: 'Given an array of integers and a sorting criteria [asc/desc], sort the array based on the sorting criteria in either ascending or descending order.' }
      ];
      const cardStyle = {
        background: '#e2e8ed',
        borderRadius: '14px',
        padding: '16px 24px',
        marginBottom: '16px',
        fontWeight: 500,
        maxWidth: '650px',
        marginLeft: 0,
        boxSizing: 'border-box',
        fontSize: '1.1rem',
      };
      return (
        <div style={{ padding: '0 20px', maxWidth: 900, margin: '0 auto' }}>
          <h1 style={{ fontWeight: 'bold', fontSize: '2.5rem', marginBottom: '1.5rem', color: '#222', textAlign: 'left' }}>{company.name}</h1>
          <table style={{ background: '#f5faff', borderRadius: '12px', marginBottom: '2rem', boxShadow: '0 1px 4px rgba(0,0,0,0.04)', width: '100%', maxWidth: '700px' }}>
            <tbody>
              <tr>
                <td style={{ fontWeight: 'bold', padding: '1rem', background: '#f5faff', color: '#222' }}>Founding Year</td>
                <td style={{ padding: '1rem', background: '#f5faff' }}>N/A</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', padding: '1rem', background: '#f5faff', color: '#222' }}>Company Website</td>
                <td style={{ padding: '1rem', background: '#f5faff' }}><a href="https://bevycommerce.com/landing" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold', color: '#1976d2' }}>https://bevycommerce.com/landing</a></td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', padding: '1rem', background: '#f5faff', color: '#222' }}>Career Website</td>
                <td style={{ padding: '1rem', background: '#f5faff' }}>N/A</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', padding: '1rem', background: '#f5faff', color: '#222' }}>Technologies Used</td>
                <td style={{ padding: '1rem', background: '#f5faff' }}>Node.js, React, GraphQL, JavaScript</td>
              </tr>
            </tbody>
          </table>
          <div style={{ borderBottom: '1.5px solid #e0e0e0', margin: '32px 0 32px 0' }} />
          <h2 style={{ marginTop: '2rem', color: '#444', fontSize: '1.7rem', fontWeight: 600, maxWidth: '650px' }}>Introduction</h2>
          <div style={{ marginBottom: '2rem', background: '#f5faff', padding: '1.2rem', borderRadius: '6px', color: '#333', fontSize: '1.1rem', maxWidth: '650px' }}>
            <a href="https://bevycommerce.com/landing" target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', fontWeight: 'bold' }}>Bevy Commerce</a> is a software development studio specializing in cutting-edge eCommerce solutions. They build tailored, innovative products that drive sales and elevate the customer experience for industry giants such as Canadian Tire, Alo Yoga, Authentic Brands Group, and Shopify corporate.
          </div>
          <h2 style={{ marginTop: '2rem', color: '#444', fontSize: '1.7rem', fontWeight: 600, maxWidth: '650px' }}>Interview Stages</h2>
          <div style={{ marginBottom: '2rem', maxWidth: '650px' }}>
            {bevyInterviewStages.map((stage, idx) => (
              <div key={idx} style={{ marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, margin: '18px 0 8px 0' }}>{stage.title}</h3>
                <div>{stage.description}</div>
              </div>
            ))}
          </div>
          <div style={{ borderBottom: '1.5px solid #e0e0e0', margin: '32px 0 32px 0' }} />
          <h2 style={{ color: '#1976d2', fontSize: '1.5rem', fontWeight: 700, margin: '2rem 0 1rem 0', maxWidth: '650px' }}>Coding Round Questions</h2>
          <div style={{ marginBottom: '1rem', color: '#333', fontSize: '1.1rem', maxWidth: '650px' }}>
            {bevyQuestions.map((q, idx) => (
              <div key={idx} style={cardStyle}>
                <span style={{ fontWeight: 500, fontSize: '1.02rem', color: '#222' }}>{q.text}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }
  // Custom rendering for Bkash
  if (company && company.name.trim().toLowerCase().includes('bkash')) {
  const bkashInterviewStages = [
        { title: 'Written Test', description: 'In-person/Online. Algorithms, data structures, OOP concepts, OS questions.' },
        { title: 'Technical Interview', description: 'Face-to-face/Virtual. Problem solving, system design, React/REST APIs, DB.' },
        { title: 'Engineering/Team Round', description: 'Panel. Deeper technical dive with team leads/managers.' },
        { title: 'HR Round (optional)', description: 'Virtual/In-person. Behavioral questions, salary expectations, career plans.' }
      ];
      const bkashTopics = [
        'Real-time coding',
        'Time & space complexity analysis',
        'System design (OOP-focused)',
        'REST API, CRUD operations',
        'Frontend/backend practicals (React, FastAPI)',
        'Database & OS-level concepts'
      ];
      const bkashQuestions = [
        { text: 'Given the head of a linked list, remove all duplicate elements so that each value appears only once. Return the modified head of the linked list.' },
        { text: "Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.", link: 'https://leetcode.com/problems/valid-parentheses/description/' },
        { text: 'Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target.', link: 'https://leetcode.com/problems/two-sum/description/' },
        { text: 'Given the head of a singly linked list, reverse the list, and return the reversed list.', link: 'https://leetcode.com/problems/reverse-linked-list/description/' },
        { text: 'What is concurrency control in databases? Why is it important?' },
        { text: 'What is function overriding in Object-Oriented Programming? How is it different from overloading?' },
        { text: 'What is inheritance in Object-Oriented Programming?' },
        { text: 'List and explain some basic Linux commands and their typical use cases.' },
        { text: 'What is a deadlock in computing? How can it be prevented or resolved?' },
        { text: 'What is database normalization? What are its benefits and common normal forms?' },
        { text: 'How can you generate random numbers in your preferred programming language?' },
        { text: 'How can you compare the contents of two text files to determine if they are identical?' },
        { text: 'What happens when you type google.com and press enter in your search bar?' },
        { text: 'What happens when you copy a file in a computer? Are the copied file and the original file the same?' }
      ];
      const cardStyle = {
        background: '#e2e8ed',
        borderRadius: '14px',
        padding: '16px 24px',
        marginBottom: '16px',
        fontWeight: 500,
        maxWidth: '650px',
        marginLeft: 0,
        boxSizing: 'border-box',
        fontSize: '1.1rem',
      };
      const buttonStyle = {
        border: '2px solid #2196f3',
        background: '#f5faff',
        color: '#1976d2',
        borderRadius: '8px',
        padding: '12px 32px',
        fontWeight: 700,
        fontSize: '20px',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        marginTop: '10px',
        boxSizing: 'border-box',
        transition: 'background 0.2s',
      };
      return (
        <div style={{ padding: '0 20px', maxWidth: 900, margin: '0 auto' }}>
          <h1 style={{ fontWeight: 'bold', fontSize: '2.5rem', marginBottom: '1.5rem', color: '#222', textAlign: 'left' }}>{company.name}</h1>
          <table style={{ background: '#f5faff', borderRadius: '12px', marginBottom: '2rem', boxShadow: '0 1px 4px rgba(0,0,0,0.04)', width: '100%', maxWidth: '700px' }}>
            <tbody>
              <tr>
                <td style={{ fontWeight: 'bold', padding: '1rem', background: '#f5faff', color: '#222' }}>Founding Year</td>
                <td style={{ padding: '1rem', background: '#f5faff' }}>2011</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', padding: '1rem', background: '#f5faff', color: '#222' }}>Company Website</td>
                <td style={{ padding: '1rem', background: '#f5faff' }}><a href="https://www.bkash.com/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold', color: '#1976d2' }}>https://www.bkash.com/</a></td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', padding: '1rem', background: '#f5faff', color: '#222' }}>Career Website</td>
                <td style={{ padding: '1rem', background: '#f5faff' }}><a href="https://www.bkash.com/career" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold', color: '#1976d2' }}>https://www.bkash.com/career</a></td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', padding: '1rem', background: '#f5faff', color: '#222' }}>Technologies Used</td>
                <td style={{ padding: '1rem', background: '#f5faff' }}>Java, Spring Boot, React, FastAPI, SQL, Linux</td>
              </tr>
            </tbody>
          </table>
          <div style={{ borderBottom: '1.5px solid #e0e0e0', margin: '32px 0 32px 0' }} />
          <h2 style={{ marginTop: '2rem', color: '#444', fontSize: '1.7rem', fontWeight: 600, maxWidth: '650px' }}>Introduction</h2>
          <div style={{ marginBottom: '2rem', background: '#f5faff', padding: '1.2rem', borderRadius: '6px', color: '#333', fontSize: '1.1rem', maxWidth: '650px' }}>
            Bkash Ltd. is a leading mobile financial service (MFS) provider in Bangladesh, focused on enabling digital financial inclusion. It is a subsidiary of BRAC Bank and partners with global players like Ant Financial.<br /><br />
            <b>Core Products & Services:</b><br />
            • Mobile Wallet Services: Send money, cash out, pay bills, mobile recharge, savings, donations, etc.<br />
            • Enterprise API Integration: For merchant payments and corporate disbursements.<br />
            • bKash App: Their core platform available on Android/iOS.
          </div>
          <h2 style={{ marginTop: '2rem', color: '#444', fontSize: '1.7rem', fontWeight: 600, maxWidth: '650px' }}>Interview Stages</h2>
          <div style={{ marginBottom: '2rem', maxWidth: '650px' }}>
            {bkashInterviewStages.map((stage, idx) => (
              <div key={idx} style={{ marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, margin: '18px 0 8px 0' }}>{stage.title}</h3>
                <div>{stage.description}</div>
              </div>
            ))}
          </div>
          <div style={{ borderBottom: '1.5px solid #e0e0e0', margin: '32px 0 32px 0' }} />
          <h2 style={{ color: '#1976d2', fontSize: '1.5rem', fontWeight: 700, margin: '2rem 0 1rem 0', maxWidth: '650px' }}>Topics</h2>
          <ul style={{ marginBottom: '2rem', background: '#f5faff', padding: '1.2rem', borderRadius: '6px', color: '#333', fontSize: '1.1rem', maxWidth: '650px' }}>
            {bkashTopics.map((topic, idx) => (
              <li key={idx}>{topic}</li>
            ))}
          </ul>
          <h2 style={{ color: '#1976d2', fontSize: '1.5rem', fontWeight: 700, margin: '2rem 0 1rem 0', maxWidth: '650px' }}>Interview Questions</h2>
          <div style={{ marginBottom: '1rem', color: '#333', fontSize: '1.1rem', maxWidth: '650px' }}>
            {bkashQuestions.map((q, idx) => (
              <div key={idx} style={cardStyle}>
                <span style={{ fontWeight: 500, fontSize: '1.02rem', color: '#222' }}>{q.text}</span>
                {q.link && (
                  <div style={{ width: '100%' }}>
                    <button style={buttonStyle} onClick={() => window.open(q.link, '_blank')}>
                      <span role="img" aria-label="laptop" style={{ marginRight: '8px' }}>💻</span>
                      Submit Code
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    }
    if (!company) return <div style={{ color: '#888', fontSize: '1.2rem' }}>No data found for this company.</div>;

    // Custom rendering for Therap BD
    if (company.name.trim().toLowerCase().includes('therap bd')) {
      const interviewStages = [
        { title: 'Initial Screening', description: 'This round is taken in written format.' },
        { title: '1st Technical Round', description: 'The first round is taken by the BD team.' },
        { title: 'HR Round', description: 'This is the final stage before onboarding and typically deals with salary negotiation.' }
      ];
      const therapQuestions = [
        { text: 'Given an array of numbers indicating stock price of n consecutive days. If you buy stock at one day and sell at any later day what is the maximum profit that you can get?', link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/', answer: 'Iterate through prices, track minimum price and maximum profit.' },
        { text: 'Given an array of n integers. You need to take all zeroes in array to the end without changing the relative order of remaining element. eg: [2,0,0,3,1,0,5] => [2,3,1,5,0,0,0]', link: 'https://leetcode.com/problems/move-zeroes/description/', answer: 'Use two pointers to move non-zero elements forward, fill remaining with zeroes.' },
        { text: 'Given an array of n integers. Reorder the elements such that all odd numbers occur after even numbers.', answer: 'Partition array by even and odd using two pointers.' },
        { text: 'Given an array of strings. Print the sets of strings which are anagram. eg: ["cat","tab","act","bat","taco"] => [{"cat","act"},{"tab","bat"},{"taco"}]', link: 'https://leetcode.com/problems/group-anagrams/', answer: 'Group words by sorted character signature.' },
        { text: 'Given an array of n integers. Find the kth largest element in the array.', link: 'https://leetcode.com/problems/kth-largest-element-in-an-array/', answer: 'Use a min-heap or quickselect algorithm.' },
        { text: 'Given two very large number in string format. Find the sum of the two number.', answer: 'Simulate addition digit by digit from right to left.' },
        { text: 'Given two binary tree. Check if they are identical [not isomorphism]', link: 'https://leetcode.com/problems/same-tree/', answer: 'Recursively compare structure and values of both trees.' },
        { text: 'Given two array of integers. Find the common elements between them. Unique:', link: 'https://leetcode.com/problems/intersection-of-two-arrays/', answer: 'Use a set to find unique common elements.' },
        { text: 'Given two array of integers. Find the common elements between them. Repeats:', link: 'https://leetcode.com/problems/intersection-of-two-arrays-ii/', answer: 'Use a hashmap to count occurrences and find repeated common elements.' },
        { text: 'Find pairs with given target sum in a doubly linked list. Input: 1 <> 2 <> 4 <> 5 <> 6 <> 8 <> 9, target = 7 Output: (1,6), (2,5)', link: 'https://www.geeksforgeeks.org/problems/find-pairs-with-given-sum-in-doubly-linked-list/1', answer: 'Use two pointers from both ends to find pairs summing to target.' },
        { text: 'Solve the problem using Object Oriented Programming (C++ code for area calculation of squares and rectangles).', answer: 'Create classes for Square and Rectangle, implement area methods.' },
        { text: 'Given an array of sides of triangles, return an array of strings. The strings would be either “yes” or “no”, corresponding to whether the same indexed triangle is a right triangle or not. Input: [[3,4,5], [5,9,12], [6,8,10]] Output: ["yes","no","yes"]', answer: 'Check if a^2 + b^2 = c^2 for each triangle.' },
        { text: 'A dictionary of sorted words was like this: [a, above, bad, broke, cat,..., yes, yolk, zoo]. After a malfunction it became this: [..., yes, yolk, zoo, a, above, bad, broke, cat,....]. Write a program so that given a word, one can find the word in the dictionary, with the same time complexity as when the dictionary was sorted.', link: 'https://leetcode.com/problems/search-in-rotated-sorted-array/description/', answer: 'Use modified binary search for rotated sorted array.' },
        { text: 'Given two strings s1, s2, return whether a substring of s1 is an anagram of s2. Input: s1 = "hello", s2 = "lol" Output: True Input: s1 = "hello", s2 = "loa" Output: False', answer: 'Use sliding window and character count comparison.' },
        { text: 'Given two large numbers as strings, num1 and num2 with num1 larger than num2, return their difference in string format, using no direct string to int conversion or libraries.', answer: 'Simulate subtraction digit by digit from right to left.' },
        { text: 'Given an array containing 0,1,2 sort it. Input: [2,0,1,1,0,2] Output: [0,0,1,1,2,2]', answer: 'Use Dutch National Flag algorithm.' },
        { text: 'Using no loops, print this pattern for a given number n: n, n-5, n-10,....0,....,n-10,n-5,n. Example: 7, 2, -3, 2, 7', answer: 'Use recursion to print the pattern.' },
        { text: 'Design this legacy table for using in a relational database.', answer: null, table: [
          { id: 1, name: 'Rahim', email: 'rahim@gmail.com', subject: 'CSE', courses: 'CSE101, CSE102, EEE101, CIVIL104' },
          { id: 2, name: 'karim', email: 'karim@gmail.com', subject: 'EEE', courses: 'EEE101, EEE102, CSE102, CIVIL104' },
          { id: 3, name: 'Josim', email: 'josim@gmail.com', subject: 'BME', courses: 'EEE101, CSE101, BME101' },
          { id: 4, name: 'Belal', email: 'belal@gmail.com', subject: 'CIVIL', courses: 'CIVIL101, CIVIL102, MECHA101, EEE101' },
          { id: 5, name: 'Rakib', email: 'rakib@gmail.com', subject: 'MECHA', courses: 'CSE101, BME101, MECHA101, MECHA101' }
        ] },
      ];
      const cardStyle = {
        background: '#e2e8ed',
        borderRadius: '14px',
        padding: '16px 24px',
        marginBottom: '16px',
        fontWeight: 500,
        maxWidth: '650px',
        marginLeft: 0,
        boxSizing: 'border-box',
        fontSize: '1.1rem',
      };
      const buttonStyle = {
        border: '2px solid #2196f3',
        background: '#f5faff',
        color: '#1976d2',
        borderRadius: '8px',
        padding: '12px 32px',
        fontWeight: 700,
        fontSize: '20px',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        marginTop: '10px',
        boxSizing: 'border-box',
        transition: 'background 0.2s',
      };
      const githubLink = 'https://github.com/TamimEhsan/interview-questions-bangladesh/edit/master/companies/therap/swe.md';
      const lastUpdated = new Date().toLocaleString('en-US', { month: 'numeric', day: 'numeric', year: '2-digit', hour: 'numeric', minute: '2-digit', hour12: true });
      return (
        <div style={{ padding: '0 20px', maxWidth: 900, margin: '0 auto' }}>
          <h1 style={{ fontWeight: 'bold', fontSize: '2.5rem', marginBottom: '1.5rem', color: '#222', textAlign: 'left' }}>{company.name}</h1>
          <table style={{ background: '#f5faff', borderRadius: '12px', marginBottom: '2rem', boxShadow: '0 1px 4px rgba(0,0,0,0.04)', width: '100%', maxWidth: '700px' }}>
            <tbody>
              <tr>
                <td style={{ fontWeight: 'bold', padding: '1rem', background: '#f5faff', color: '#222' }}>Founding Year</td>
                <td style={{ padding: '1rem', background: '#f5faff' }}>2004</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', padding: '1rem', background: '#f5faff', color: '#222' }}>Company Website</td>
                <td style={{ padding: '1rem', background: '#f5faff' }}><a href="https://therapbd.com/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold', color: '#1976d2' }}>https://therapbd.com/</a></td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', padding: '1rem', background: '#f5faff', color: '#222' }}>Career Website</td>
                <td style={{ padding: '1rem', background: '#f5faff' }}><a href="https://therap.hire.trakstar.com/?" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold', color: '#1976d2' }}>https://therap.hire.trakstar.com/?</a></td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', padding: '1rem', background: '#f5faff', color: '#222' }}>Technologies Used</td>
                <td style={{ padding: '1rem', background: '#f5faff' }}>Java, J2EE</td>
              </tr>
            </tbody>
          </table>
          <div style={{ borderBottom: '1.5px solid #e0e0e0', margin: '32px 0 32px 0' }} />
          <h2 style={{ marginTop: '2rem', color: '#444', fontSize: '1.7rem', fontWeight: 600, maxWidth: '650px' }}>Interview Stages</h2>
          <div style={{ marginBottom: '2rem', maxWidth: '650px' }}>
            {interviewStages.map((stage, idx) => (
              <div key={idx} style={{ marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, margin: '18px 0 8px 0' }}>{stage.title}</h3>
                <div>{stage.description}</div>
              </div>
            ))}
          </div>
          <div style={{ borderBottom: '1.5px solid #e0e0e0', margin: '32px 0 32px 0' }} />
          <h2 style={{ color: '#1976d2', fontSize: '1.5rem', fontWeight: 700, margin: '2rem 0 1rem 0', maxWidth: '650px' }}>Interview Questions</h2>
          <div style={{ marginBottom: '1rem', color: '#333', fontSize: '1.1rem', maxWidth: '650px' }}>
            {therapQuestions.map((q, idx) => (
              <div key={idx} style={cardStyle}>
                <span style={{ fontWeight: 500, fontSize: '1.02rem', color: '#222' }}>{q.text}</span>
                {q.link && (
                  <div style={{ width: '100%' }}>
                    <button style={buttonStyle} onClick={() => window.open(q.link, '_blank')}>
                      <span role="img" aria-label="laptop" style={{ marginRight: '8px' }}>💻</span>
                      Submit Code
                    </button>
                  </div>
                )}
                {q.answer && (
                  <details style={{ background: '#f3f4f8', borderRadius: '10px', padding: '10px 18px', border: 'none', marginTop: 16 }}>
                    <summary style={{ fontWeight: 500, color: '#222', cursor: 'pointer', margin: 0, fontSize: '1.1rem', background: 'transparent', outline: 'none' }}>Show Answer</summary>
                    <div style={{ margin: '10px 0 0 0', fontSize: '1.1rem', fontWeight: 400 }}>{q.answer}</div>
                  </details>
                )}
                {q.table && (
                  <div style={{ marginTop: '12px', overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <thead>
                        <tr style={{ background: '#eaf3fa', textAlign: 'left' }}>
                          <th style={{ border: '1px solid #ddd', padding: '8px', fontWeight: 600 }}>ID</th>
                          <th style={{ border: '1px solid #ddd', padding: '8px', fontWeight: 600 }}>Name</th>
                          <th style={{ border: '1px solid #ddd', padding: '8px', fontWeight: 600 }}>Email</th>
                          <th style={{ border: '1px solid #ddd', padding: '8px', fontWeight: 600 }}>Subject</th>
                          <th style={{ border: '1px solid #ddd', padding: '8px', fontWeight: 600 }}>Courses</th>
                        </tr>
                      </thead>
                      <tbody>
                        {q.table.map((row, rowIndex) => (
                          <tr key={rowIndex} style={{ background: rowIndex % 2 === 0 ? '#f9f9f9' : '#fff' }}>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.id}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.name}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.email}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.subject}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.courses}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    }

    // Custom rendering for AppifyLab
    if (company.name.trim().toLowerCase().includes('appifylab')) {
      const firstRoundQuestions = [
        {
          text: 'Given multiple test cases, each containing a 3-letter string (uppercase/lowercase letters), you have to check whether the string equals "YES", case-insensitively. Output "YES" if it matches, else "NO".',
          bullets: null
        },
        {
          text: 'Given',
          bullets: [
            'Number of students, games, and connection events',
            'For each student, the game they like',
            'A sequence of connections between pairs of students over time'
          ],
          after: 'For each game, determine the earliest time when all students who like that game become connected (either directly or indirectly). Output -1 if they never get connected.'
        },
        {
          text: 'Given:',
          bullets: [
            'Number of questions',
            'For each question: initial score, per-minute penalty, minimum score',
            'For each question: submission time and number of submissions (positive if solved, non-positive if unsolved)'
          ],
          after: 'Calculate the total score based on a formula involving penalties and number of attempts. If a question is unsolved, its score is 0.'
        },
        {
          text: 'Given a list of unique 9-digit phone numbers. For each phone number, find the shortest digit substring that uniquely identifies it (i.e., no other number contains it as a substring).',
          bullets: null
        },
        {
          text: 'Given:',
          bullets: [
            'Number of dishes, adults, and kids',
            'For each dish: happiness value if eaten by an adult or by a kid'
          ],
          after: 'Assign one dish to each person (adult or kid) to maximize the total happiness. An adult eats the entire dish; a kid partially eats it.'
        },
        {
          text: 'Given:',
          bullets: [
            'A list of item costs',
            'A limit on the total increase Sabbir can apply to the item costs'
          ],
          after: 'Sabbir increases item costs (total increment ≤ limit) to minimize the final score difference in a turn-based game where players pick items alternately and optimally.'
        },
        {
          text: 'Given:',
          bullets: [
            'A circular string of length N×K representing N fragments of length K',
            'A list of G candidate fragments (all distinct)'
          ],
          after: 'Determine if the circular string can be split into a sequence of N valid fragments (from the candidate list) in some rotation. If possible, output any such valid sequence.'
        },
        {
          text: 'Given multiple test cases, each with two numbers: total artifacts n and a position k. Artifacts are arranged in a special sequence: first all odd-numbered ones, then multiples of odd numbers (2×odd, 3×odd, etc.) in order, skipping duplicates. Find which artifact appears at position k.',
          bullets: null
        },
        {
          text: 'Given grid dimensions n × m. Determine if it is possible to assign pigment values to rows and columns such that every cell in the grid (combining row and column pigment modulo nm) has a unique value. If possible, output the row and column pigments.',
          bullets: null
        }
      ];
      const secondRoundQuestions = [
        {
          text: 'Given a sequence of integers, convert each number to binary using parity (even → 1, odd → 0), concatenate to form a binary string, and print it with leading zeros removed.',
          link: null
        },
        {
          text: 'Given dimensions of two rectangles, one inside another, where the outer rectangle is (A×B) and inner rectangle is (C×D), with C ≤ A and D ≤ B. Compute the area between the two rectangles modulo 1,000,000,007.',
          link: 'https://toph.co/p/the-attack-titan'
        },
        {
          text: 'Given N baskets arranged in a circle with given apples in each and a number K indicating how many apples one will eat. Simulate the person moving right and eating apples if present, and output the number of apples left in each basket after exactly K apples are eaten.',
          link: null
        },
        {
          text: 'Given a string s of length n. Pick an integer k (1 ≤ k ≤ n) and perform a transformation: reverse each substring of length k sliding through the string, and find the lexicographically smallest resulting string. Output that string and the smallest such k.',
          link: 'https://codeforces.com/problemset/problem/1316/B'
        },
        {
          text: 'Given a simple directed graph with N vertices and M edges. Count how many vertices can be starting points for infinite walks (i.e., they lie on or can reach a cycle).',
          link: 'https://atcoder.jp/contests/abc245/tasks/abc245_f'
        },
        {
          text: 'Given a book with N pages (numbered 1 to N) and a secret digit (0–9), and you randomly pick a page. Compute the probability that the page number you picked contains the secret digit, expressed as an irreducible fraction P/Q.',
          link: 'https://www.codechef.com/problems/ANUBGC'
        },
        {
          text: 'Given Grid size n×m and manhattan distances from a hidden cell (a, b) to (1, 1) and (1, m). Find the coordinates (a, b) of the hidden cell using the given distances.',
          link: 'https://codeforces.com/problemset/problem/1934/C'
        }
      ];
      const cardStyle = {
        background: '#e2e8ed', // slightly darker ash
        borderRadius: '14px',
        padding: '16px 24px',
        marginBottom: '16px',
        fontWeight: 500,
        maxWidth: '650px',
        marginLeft: 0,
        boxSizing: 'border-box',
        fontSize: '1.1rem',
      };
      const buttonStyle = {
        border: '2px solid #2196f3',
        background: '#f5faff', // referral link background
        color: '#1976d2',
        borderRadius: '8px',
        padding: '12px 32px',
        fontWeight: 700,
        fontSize: '20px',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        marginTop: '10px',
        boxSizing: 'border-box',
        transition: 'background 0.2s',
      };

      return (
        <div style={{ padding: '0 20px', maxWidth: 900, margin: '0 auto' }}>
          <h1 style={{ fontWeight: 'bold', fontSize: '2.5rem', marginBottom: '1.5rem', color: '#222', textAlign: 'left' }}>{company.name}</h1>
          <table style={{ background: '#f5faff', borderRadius: '12px', marginBottom: '2rem', boxShadow: '0 1px 4px rgba(0,0,0,0.04)', width: '100%', maxWidth: '700px' }}>
            <tbody>
              <tr>
                <td style={{ fontWeight: 'bold', padding: '1rem', background: '#f5faff', color: '#222' }}>Company Website</td>
                <td style={{ padding: '1rem', background: '#f5faff' }}>
                  <a href={company.website} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold', color: '#1976d2' }}>{company.website}</a>
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', padding: '1rem', background: '#f5faff', color: '#222' }}>Career Website</td>
                <td style={{ padding: '1rem', background: '#f5faff' }}>
                  <a href={company.application_link} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold', color: '#1976d2' }}>{company.application_link}</a>
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', padding: '1rem', background: '#f5faff', color: '#222' }}>Technologies Used</td>
                <td style={{ padding: '1rem', background: '#f5faff' }}>
                  {company.name.trim().toLowerCase().includes('appifylab')
                    ? 'React, Flutter, Vue, Laravel, Nuxt, NodeJS'
                    : company.name.trim().toLowerCase().includes('enosis')
                      ? 'React Native, Bootstrap, PHP, .NET, C#, Swift, Kotlin'
                      : company.technologies?.join(', ')}
                </td>
              </tr>
            </tbody>
          </table>
          <h2 style={{ marginTop: '1.5rem', color: '#444', fontSize: '1.7rem', fontWeight: 600 }}>Introduction</h2>
          <div style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#333', background: '#f5f6fa', padding: '1.2rem', borderRadius: '6px', marginBottom: '2rem', maxWidth: '650px' }}>
            Appify lab has a LMS(Learning Management System) product name <a href="https://ezycourse.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', fontWeight: 'bold' }}>EzyCourse</a>.
          </div>
          <h2 style={{ marginTop: '2rem', color: '#444', fontSize: '1.7rem', fontWeight: 600, maxWidth: '650px' }}>Interview Stages</h2>
          <div style={{ marginBottom: '2rem', maxWidth: '650px' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, margin: '18px 0 8px 0' }}>Initial Online Contest</h3>
            <div><span style={{ fontWeight: 600 }}>Platform:</span> vJudge</div>
            <div><span style={{ fontWeight: 600 }}>Details:</span> Participated in an online coding contest.</div>
            <div><span style={{ fontWeight: 600 }}>Selection:</span> Out of numerous participants, around 40-50 were selected for the onsite contest.</div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, margin: '18px 0 8px 0' }}>Onsite Contest</h3>
            <div><span style={{ fontWeight: 600 }}>Selection:</span> Out of numerous participants, around 10-15 were selected for the final interview.</div>
            <div><span style={{ fontWeight: 600 }}>Details:</span> The onsite contest was held in Sylhet.</div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, margin: '18px 0 8px 0' }}>Final Interview</h3>
            <div>The final interview is mainly a discussion about the company and the candidate's interest in joining. Employment terms like probation period, internship time, possibility of permanent position, and location were discussed.</div>
          </div>
          <h2 style={{ color: '#1976d2', fontSize: '2.2rem', fontWeight: 700, margin: '2rem 0 1rem 0', maxWidth: '650px' }}>First Round Questions</h2>
          <div style={{ marginBottom: '1rem', color: '#333', fontSize: '1.1rem' }}>
            <div style={{ marginBottom: '10px' }}>
              The given questions are the summarized version of the original questions.<br />
              The original questions are available in the <a href="https://github.com/TamimEhsan/interview-questions-bangladesh/tree/master/docs/resource/appify/Online_Round.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', fontWeight: 'bold' }}>Online Round Problem Set</a>.
            </div>
            {firstRoundQuestions.map((q, idx) => (
              <div key={idx} style={cardStyle}>
                <div>{q.text}</div>
                {q.bullets && (
                  <ul style={{ margin: '6px 0 10px 28px' }}>
                    {q.bullets.map((b, i) => (
                      typeof b === 'string' ? (
                        <li key={i}>{b}</li>
                      ) : (
                        <li key={i}>
                          {b[0]}
                          <ul style={{ margin: '6px 0 10px 28px' }}>
                            {b.slice(1).map((sub, j) => (
                              <li key={j}>{sub}</li>
                            ))}
                          </ul>
                        </li>
                      )
                    ))}
                  </ul>
                )}
                {q.after && <div>{q.after}</div>}
              </div>
            ))}
          </div>
          <h2 style={{ color: '#1976d2', fontSize: '2.2rem', fontWeight: 700, margin: '2rem 0 1rem 0' }}>Second Round Questions</h2>
          <div style={{ marginBottom: '1rem', color: '#333', fontSize: '1.1rem' }}>
            <div style={{ marginBottom: '10px' }}>
              The given questions are the summarized version of the original questions.<br />
              The original questions are available in the <a href="https://github.com/TamimEhsan/interview-questions-bangladesh/tree/master/docs/resource/appify/Final_Onsite.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', fontWeight: 'bold' }}>Final Round Problem Set</a>.
            </div>
            {secondRoundQuestions.map((q, idx) => (
              <div key={idx} style={cardStyle}>
                {q.text}
                {q.link && (
                  <div style={{ width: '100%' }}>
                    <button style={buttonStyle} onClick={() => window.open(q.link, '_blank')}>
                      <span role="img" aria-label="laptop" style={{ marginRight: '8px' }}>💻</span>
                      Submit Code
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
          <h2 style={{ marginTop: '2rem', color: '#444', fontSize: '1.7rem', fontWeight: 600 }}>Contributors</h2>
          <ul style={{ marginBottom: '1.5rem', background: '#f5faff', padding: '1.2rem', borderRadius: '6px', color: '#333', fontSize: '1.1rem' }}>
            <li>Interview applicant <a href="https://www.linkedin.com/in/pealhassan/" target="_blank" rel="noopener noreferrer">Peal Hassan</a></li>
          </ul>
        </div>
      );
    }
    // Custom rendering for Enosis Solutions
    if (company.name.trim().toLowerCase().includes('enosis')) {
      const enosisQuestions = [
        { text: 'Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified', link: 'https://leetcode.com/problems/text-justification/description/' },
        { text: 'You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).', link: 'https://leetcode.com/problems/rotate-image/description/' },
        { text: 'Given an array nums. Find the average of the array excluding the maximum and minimum values.' },
        { text: 'Given n cars in a row with their speeds and a specific position, calculate the total number of collisions that occur.' },
        { text: 'Given an array of integers nums and queries in the form l, r. For each query, count the number of elements which are in range [l,r] in the array.' },
        { text: 'Given an array of integers nums. Find the second maximum element in an array using only one loop.' },
        { text: 'How do you center-align a right-angled triangle of numbers up to a given base limit?' },
        { text: 'Convert a given string into a palindrome with the least number of changes.' },
        { text: 'You are given two integer arrays nums1 and nums2, sorted in non-decreasing order. Merge nums1 and nums2 into a single array sorted in non-decreasing order.', link: 'https://leetcode.com/problems/merge-sorted-array/description/' },
        { text: 'Given an array of integers, calculate the absolute difference between the sum of odd-indexed and even-indexed elements.' },
        { text: 'How would you encrypt a string based on a given set of encryption rules.' },
        { text: 'Given an array of integers nums. In each move pick two numbers from start and end of the array, store the smaller in output, then remove it. Repeat until empty. What will be the output array.' },
        { text: 'Given an integer x, return true if x is a palindrome, and false otherwise.', link: 'https://leetcode.com/problems/palindrome-number/description/' },
        { text: 'Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.', link: 'https://leetcode.com/problems/rotate-array/description/' },
        { text: 'Given an array and a number, construct a number from the array digits, subtract the given number, and return the result.' },
        { text: 'Given n, calculate the nth Fibonacci number F(n).', link: 'https://leetcode.com/problems/fibonacci-number/description/' },
        { text: 'Given two strings s and t, return true if t is an anagram of s, and false otherwise.', link: 'https://leetcode.com/problems/valid-anagram/description/' },
        { text: 'Print all repeating elements in an array.' },
        { text: 'Given a string queryIP, return "IPv4" if IP is a valid IPv4 address, "IPv6" if IP is a valid IPv6 address or "Neither" if IP is not a correct IP of any type.', link: 'https://leetcode.com/problems/validate-ip-address/description/' },
        { text: 'You are given a string, message, and a positive integer, limit. Split the string into lines such that each line has a maximum of limit characters.' },
        { text: 'Build a linked-list-based tree structure with left and right children.' },
        { text: 'How would you build a tree structure from a list of given nodes.' },
        { text: 'What are the key differences between a tree and a graph data structure.' },
        { text: 'What are the four pillars of Object-Oriented Programming (OOP).' },
        { text: 'What is DFS? Implement Depth-First Search in any programming language.' },
        { text: 'Explain the internal working and implementation of a priority queue.' },
        { text: 'What is the time complexity of operations in a Red-Black Tree.' },
        { text: 'System design question: File management software.' }
      ];
      // ...existing code...
      return (
        <div style={{ padding: '0 20px', maxWidth: 900, margin: '0 auto' }}>
          <h1 style={{ fontWeight: 'bold', fontSize: '2.5rem', marginBottom: '1.5rem', color: '#222', textAlign: 'left' }}>{company.name}</h1>
          <div style={{ background: '#f5faff', borderRadius: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)', padding: '32px 28px 24px 28px', marginBottom: '32px', maxWidth: '700px' }}>
            <table style={{ background: 'transparent', borderRadius: '12px', marginBottom: '0', width: '100%' }}>
              <tbody>
                <tr>
                  <td style={{ fontWeight: 'bold', padding: '1rem', color: '#222', background: 'transparent' }}>Company Website</td>
                  <td style={{ padding: '1rem', background: 'transparent' }}>
                    <a href={company.website} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold', color: '#1976d2' }}>{company.website}</a>
                  </td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold', padding: '1rem', color: '#222', background: 'transparent' }}>Career Website</td>
                  <td style={{ padding: '1rem', background: 'transparent' }}>
                    <a href={company.application_link} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold', color: '#1976d2' }}>{company.application_link}</a>
                  </td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold', padding: '1rem', color: '#222', background: 'transparent' }}>Technologies Used</td>
                  <td style={{ padding: '1rem', background: 'transparent' }}>
                    {company.name.trim().toLowerCase().includes('appifylab')
                      ? 'React, Flutter, Vue, Laravel, Nuxt, NodeJS'
                      : company.name.trim().toLowerCase().includes('enosis')
                        ? 'React Native, Bootstrap, PHP, .NET, C#, Swift, Kotlin'
                        : company.technologies?.join(', ')}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 style={{ marginTop: '2rem', color: '#444', fontSize: '1.7rem', fontWeight: 600 }}>Introduction</h2>
          <div style={{ marginBottom: '1.5rem', background: '#f5faff', padding: '1.2rem', borderRadius: '6px', color: '#333', fontSize: '1.1rem', maxWidth: '650px' }}>
            Enosis Solutions is a leading software development company in Bangladesh, known for its rigorous technical interviews and focus on problem-solving skills.
          </div>
          <h2 style={{ marginTop: '2rem', color: '#444', fontSize: '2.2rem', fontWeight: 700 }}>Interview Stages</h2>
          <div style={{ marginBottom: '1.5rem', background: '#eaf3fa', padding: '1.1rem 1.2rem', borderRadius: '18px', color: '#222', fontSize: '1.15rem', maxWidth: '650px' }}>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', listStyleType: 'disc' }}>
              <li style={{ marginBottom: '0.7rem' }}><b>Online Screening:</b> This stage typically includes coding problems, algorithm questions. Candidates are expected to solve problems in a limited time frame. Usually the test is conducted on platforms like HackerRank.</li>
              <li style={{ marginBottom: '0.7rem' }}><b>Technical Interview:</b> This interview focuses on assessing the candidate's technical skills, including programming languages, data structures, algorithms, and problem-solving abilities. Candidates may be asked to write code.</li>
              <li><b>HR Interview:</b> The HR interview evaluates the candidate's fit within the company culture, communication skills, and overall personality. It may also cover salary expectations and job role details.</li>
            </ul>
          </div>
          <h2 style={{ marginTop: '2rem', color: '#444', fontSize: '1.7rem', fontWeight: 600 }}>Interview Questions</h2>
          <div style={{ marginBottom: '1.5rem' }}>
            {enosisQuestions.map((q, idx) => (
              <div key={idx} style={{ background: '#eaf3fa', borderRadius: '18px', padding: '1.1rem 1.2rem', marginBottom: '1.5rem', boxShadow: '0 1px 4px rgba(0,0,0,0.04)', maxWidth: '650px' }}>
                <div style={{ fontWeight: 600, fontSize: '1.15rem', color: '#222', marginBottom: q.bullets ? '0.7rem' : '0', display: 'flex', alignItems: 'center' }}>
                  <span>{q.text}</span>
                  {q.text.includes('System design question: File management software.') && (
                    <span style={{ color: '#a67c00', fontWeight: 700, background: 'rgba(247,231,195,0.8)', borderRadius: '16px', padding: '4px 12px', marginLeft: '8px', fontSize: '1.08em', verticalAlign: 'middle' }}>Senior</span>
                  )}
                </div>
                {q.bullets && Array.isArray(q.bullets) && (
                  <ul style={{ marginLeft: '1.2rem', marginBottom: '0.7rem', color: '#222', fontSize: '1.05rem' }}>
                    {q.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}
                {q.after && (
                  <div style={{ marginTop: '0.5rem', color: '#222', fontSize: '1.05rem' }}>{q.after}</div>
                )}
                {q.link && (
                  <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-start' }}>
                    <a href={q.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                      <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#f9fbfd', color: '#1976d2', border: '2px solid #2196f3', borderRadius: '7px', padding: '0.7rem 1.2rem', fontWeight: 700, fontSize: '1.15rem', cursor: 'pointer', boxShadow: 'none' }}>
                        <span role="img" aria-label="laptop">💻</span> Submit Code
                      </button>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
          <h2 style={{ marginTop: '2rem', color: '#444', fontSize: '1.7rem', fontWeight: 600 }}>Contributors</h2>
          <ul style={{ marginBottom: '1.5rem', background: '#f5faff', padding: '1.2rem', borderRadius: '6px', color: '#333', fontSize: '1.1rem' }}>
            <li>Interview applicant <a href="https://www.linkedin.com/in/pealhassan/" target="_blank" rel="noopener noreferrer">Peal Hassan</a></li>
          </ul>
        </div>
      );
    }
    // Custom rendering for Chaldal
    if (company.name.trim().toLowerCase().includes('chaldal')) {
      const interviewStages = [
        { title: 'Aptitude Test', description: 'Basic reasoning, vocabulary, maths etc.' },
        { title: 'First round Interview', description: 'Two separate interviews, may be coding or technical or both. Two yes will lead to next round. 1 yes and 1 no gives you a third chance.' },
        { title: 'CTO round', description: 'Behavioral, but can include coding/technical questions.' }
      ];
      const chaldalQuestions = [
        { text: 'Tell me about yourself? Why do you want to join chaldal', link: null, answer: 'Answer varies from person to person'},
        { text: 'You have been provided a spiral matrix of size NXN along with a coordinate (x, y) as follows. Find the element at the position (x, y) of the matrix. N = 4, x = 2, y = 1', link: null, answer: 'The element at position (2, 1) is 12 [indexed at (1, 0)]' },
        { text: 'Given a number in roman format. Convert it to arabic numeral.', link: null, answer: 'Explain the conversion logic from Roman to Arabic numerals' },
        { text: 'Given a string of characters. Reverse a string without using any library function.', link: null, answer: 'Show a simple loop-based string reversal.' },
        { text: 'Given a string of characters. Check if the given string is a palindrome.', link: null, answer: 'Compare characters from both ends moving towards the center.' },
        { text: 'Given an positive integer n. Find the sum of even Fibonacci numbers up to nth term.', link: 'https://supecoder.dev/questions/Sum%20of%20Even%20Fibonacci%20Numbers?questionId=66a6015c5cbe5326054ebf70', answer: 'Iterate Fibonacci sequence, sum even values.' },
        { text: 'Convert a string of characters [0-9] to integer.', link: 'https://supecoder.dev/questions/Convert%20String%20to%20Integer?questionId=66a8cba05cbe532605568a68', answer: 'Parse each character and build the integer.' },
        { text: 'Given an array of integers. Generate all possible permutations of an array.', link: 'https://leetcode.com/problems/permutations/', answer: 'Use backtracking to generate permutations.' },
        { text: 'Given an array of integers. Generate all possible subsets of an array.', link: 'https://leetcode.com/problems/subsets/', answer: 'Use recursion or bitmasking for subsets.' },
        { text: 'Given a regex expression and a string, check if they match.', link: null, answer: 'Use a regex engine or implement pattern matching.' },
        { text: 'Each student is assigned to an assignment at a particular location at a specific time. Are there any inconsistencies in the assignments ? Find at least one of them by looking into the input. Then write a code to print all inconsistencies in the assignments.', link: null, answer: 'Analyze assignment logs for conflicts.' },
        { text: 'Implement Game of Life.', link: null, answer: 'Describe the rules and implement grid updates.' },
        { text: 'Find digits from a string (ignore leading zeroes).', link: null, answer: 'Extract digits and skip leading zeroes.' },
        { text: 'RegEx Matching: Given strings s and p (with * and ?), print yes or no if they match.', link: 'https://leetcode.com/problems/regular-expression-matching/', answer: 'Implement regex matching logic.' },
        { text: 'Write a function which converts decimal number to hexadecimal.', link: 'https://supecoder.dev/questions/Convert%20a%20Number%20to%20Hexadecimal?questionId=66acbdc29e71a163cdcece36', answer: 'Divide by 16 and map remainders.' },
        { text: 'Find all subsets of a given set.', link: 'https://leetcode.com/problems/subsets/description/', answer: 'Use recursion or bitmasking for subsets.' },
        { text: 'Topological sorting from orderings of letters.', link: null, answer: 'Build graph and perform topological sort.' },
        { text: 'Add two numbers represented as arrays of characters.', link: 'https://supecoder.dev/questions/Add%20Two%20Numbers%20Represented%20as%20Character%20Arrays?questionId=66acc37d9e71a163cdcee583', answer: 'Simulate addition digit by digit.' },
        { text: 'Return maximum depth of a binary tree.', link: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/description/', answer: 'Use recursion to find max depth.' },
        { text: 'Create a data structure supporting insert/search/delete/return in O(1).', link: null, answer: 'Use hash table for O(1) operations.' },
        { text: 'Find the digital root of an integer.', link: 'https://leetcode.com/problems/add-digits/description/', answer: 'Sum digits until single digit remains.' },
        { text: 'Decode an encoded string (k[encoded_string]).', link: 'https://leetcode.com/problems/decode-string/description/', answer: 'Use stack to decode nested patterns.' },
        { text: 'You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water. Determine the perimeter of an island in a grid.', link: 'https://leetcode.com/problems/island-perimeter/description/', answer: 'Count edges of land cells.' }
      ];
      const cardStyle = {
        background: '#e2e8ed',
        borderRadius: '14px',
        padding: '16px 24px',
        marginBottom: '16px',
        fontWeight: 500,
        maxWidth: '650px',
        marginLeft: 0,
        boxSizing: 'border-box',
        fontSize: '1.1rem',
      };
      const buttonStyle = {
        border: '2px solid #2196f3',
        background: '#f5faff', // referral link background
        color: '#1976d2',
        borderRadius: '8px',
        padding: '12px 32px',
        fontWeight: 700,
        fontSize: '20px',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        marginTop: '10px',
        boxSizing: 'border-box',
        transition: 'background 0.2s',
      };
      const lastUpdated = new Date().toLocaleString('en-US', { month: 'numeric', day: 'numeric', year: '2-digit', hour: 'numeric', minute: '2-digit', hour12: true });
      const githubLink = 'https://github.com/TamimEhsan/interview-questions-bangladesh/edit/master/companies/chaldal.md';
      const cellStyle = {
        border: '1px solid #e2e8ed',
        padding: '16px 22px',
        textAlign: 'center',
        fontSize: '1.15rem',
        fontWeight: 500,
        background: '#f8fafc',
      };
      return (
        <div style={{ padding: '0 20px', maxWidth: 900, margin: '0 auto' }}>
          <h1 style={{ fontWeight: 'bold', fontSize: '2.5rem', marginBottom: '1.5rem', color: '#222', textAlign: 'left' }}>{company.name}</h1>
          <table style={{ background: '#f5faff', borderRadius: '12px', marginBottom: '2rem', boxShadow: '0 1px 4px rgba(0,0,0,0.04)', width: '100%', maxWidth: '700px' }}>
            <tbody>
              <tr>
                <td style={{ fontWeight: 'bold', padding: '1rem', background: '#f5faff', color: '#222' }}>Company Website</td>
                <td style={{ padding: '1rem', background: '#f5faff' }}>
                  <a href={company.website} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold', color: '#1976d2' }}>{company.website}</a>
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', padding: '1rem', background: '#f5faff', color: '#222' }}>Career Website</td>
                <td style={{ padding: '1rem', background: '#f5faff' }}>
                  <a href={company.application_link} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold', color: '#1976d2' }}>{company.application_link}</a>
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', padding: '1rem', background: '#f5faff', color: '#222' }}>Technologies Used</td>
                <td style={{ padding: '1rem', background: '#f5faff' }}>
                  {company.name.trim().toLowerCase().includes('appifylab')
                    ? 'React, Flutter, Vue, Laravel, Nuxt, NodeJS'
                    : company.name.trim().toLowerCase().includes('enosis')
                      ? 'React Native, Bootstrap, PHP, .NET, C#, Swift, Kotlin'
                      : company.technologies?.join(', ')}
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', padding: '1rem', background: '#f5faff', color: '#222' }}>Founding Year</td>
                <td style={{ padding: '1rem', background: '#f5faff' }}>{company.founding_year}</td>
              </tr>
            </tbody>
          </table>
          <h2 style={{ marginTop: '2rem', color: '#444', fontSize: '1.7rem', fontWeight: 600, maxWidth: '650px' }}>Interview Stages</h2>
          <div style={{ marginBottom: '2rem', maxWidth: '650px' }}>
            {interviewStages.map((stage, idx) => (
              <div key={idx} style={{ marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, margin: '18px 0 8px 0' }}>{stage.title}</h3>
                <div>{stage.description}</div>
              </div>
            ))}
          </div>
          <div style={{ borderBottom: '1.5px solid #e0e0e0', margin: '32px 0 32px 0' }} />
          <h2 style={{ color: '#1976d2', fontSize: '1.5rem', fontWeight: 500, margin: '2rem 0 1rem 0', maxWidth: '650px' }}>First round Interview Questions</h2>
          <div style={{ marginBottom: '1rem', color: '#333', fontSize: '1.1rem', maxWidth: '650px' }}>
            {chaldalQuestions.map((q, idx) => (
              <article key={idx} style={cardStyle}>
                <p>{q.text}</p>
                {/* Spiral matrix table for the second question */}
                {idx === 1 && (
                  <table style={{ borderCollapse: 'collapse', margin: '18px 0', background: '#fff' }}>
                    <tbody>
                      <tr>
                        <td style={cellStyle}>1</td>
                        <td style={cellStyle}>2</td>
                        <td style={cellStyle}>3</td>
                        <td style={cellStyle}>4</td>
                      </tr>
                      <tr>
                        <td style={cellStyle}>12</td>
                        <td style={cellStyle}>13</td>
                        <td style={cellStyle}>14</td>
                        <td style={cellStyle}>5</td>
                      </tr>
                      <tr>
                        <td style={cellStyle}>11</td>
                        <td style={cellStyle}>16</td>
                        <td style={cellStyle}>15</td>
                        <td style={cellStyle}>6</td>
                      </tr>
                      <tr>
                        <td style={cellStyle}>10</td>
                        <td style={cellStyle}>9</td>
                        <td style={cellStyle}>8</td>
                        <td style={cellStyle}>7</td>
                      </tr>
                    </tbody>
                  </table>
                )}
                <details style={{ background: '#f3f4f6', borderRadius: '10px', padding: '10px 18px', margin: '12px 0 0 0', border: 'none' }}>
                  <summary style={{ fontWeight: 500, color: '#222', cursor: 'pointer', margin: 0, fontSize: '1.1rem', background: 'transparent', outline: 'none' }}>Show Answer</summary>
                  {idx === 5 ? (
                    <div style={{ background: '#fff', borderRadius: '8px', padding: '16px', margin: '10px 0 0 0', position: 'relative' }}>
                      <span style={{ position: 'absolute', top: 12, right: 18, fontSize: 14, color: '#888', fontWeight: 500 }}>C++</span>
                      <pre style={{ background: 'none', margin: 0, padding: 0, fontSize: 16, color: '#d73a49', fontFamily: 'Consolas, monospace', overflowX: 'auto' }}>
<code>{`long long solve(int n){
    if(n == 1 or n == 2) return 0;
    long long sum = 0, first = 1, second = 1;
    for(int fib=2;fib<n;fib++){
        long long temp = first;
        first = second;
        second = temp + second;
        if(second % 2 == 0) sum += second;
    }
    return sum;
}`}</code>
    </pre>
                    </div>
                  ) : idx === 2 ? (
                    <div style={{ background: '#fff', borderRadius: '8px', padding: '16px', margin: '10px 0 0 0', position: 'relative' }}>
                      <span style={{ position: 'absolute', top: 12, right: 18, fontSize: 14, color: '#888', fontWeight: 500 }}>C++</span>
                      <pre style={{ background: 'none', margin: 0, padding: 0, fontSize: 16, color: '#d73a49', fontFamily: 'Consolas, monospace', overflowX: 'auto' }}>
<code>{`map<char,int>RtoA;
void preprocess(){
    // Map of romans to Arabic
    RtoA['I'] = 1;      RtoA['V'] = 5;
    RtoA['X'] = 10;     RtoA['L'] = 50;
    RtoA['C'] = 100;    RtoA['D'] = 500;
    RtoA['M'] = 1000;
}

// Roman numerals to Arabic
int RomanToArabic(string R){
    int value = 0;
    int n = R.size();
    for(int i=0;i<n;i++){
        if( R[i+1] && RtoA[ R[i] ] < RtoA[ R[i+1] ] ){
            value+= RtoA[ R[i+1] ] - RtoA[ R[i] ];
            i++;
        } else{
            value+=RtoA[ R[i] ];
        }
    }
    return value;
}`}</code>
    </pre>
                    </div>
                  ) : idx === 3 ? (
                    <div style={{ background: '#fff', borderRadius: '8px', padding: '16px', margin: '10px 0 0 0', position: 'relative' }}>
                      <span style={{ position: 'absolute', top: 12, right: 18, fontSize: 14, color: '#888', fontWeight: 500 }}>C++</span>
                      <pre style={{ background: 'none', margin: 0, padding: 0, fontSize: 16, color: '#d73a49', fontFamily: 'Consolas, monospace', overflowX: 'auto' }}>
<code>{`void solve(string &s){

    int n = s.size();

    for(int i=0;i<n/2;i++){

        char temp = s[i];
        s[i] = s[n-i-1];
        s[n-i-1] = temp;
    }
}`}</code>
    </pre>
                    </div>
                  ) : idx === 4 ? (
                    <div style={{ background: '#fff', borderRadius: '8px', padding: '16px', margin: '10px 0 0 0', position: 'relative' }}>
                      <span style={{ position: 'absolute', top: 12, right: 18, fontSize: 14, color: '#888', fontWeight: 500 }}>C++</span>
                      <pre style={{ background: 'none', margin: 0, padding: 0, fontSize: 16, color: '#d73a49', fontFamily: 'Consolas, monospace', overflowX: 'auto' }}>
<code>{`bool solve(string s){
    int n = s.size();
    for(int i=0;i<n/2;i++){
        if(s[i] != s[n-i-1]) return false;
    }
    return true;
}`}</code>
                      </pre>
                    </div>
                  ) : idx === 6 ? (
                    <div style={{ background: '#fff', borderRadius: '8px', padding: '16px', margin: '10px 0 0 0', position: 'relative' }}>
                      <span style={{ position: 'absolute', top: 12, right: 18, fontSize: 14, color: '#888', fontWeight: 500 }}>C++</span>
                      <pre style={{ background: 'none', margin: 0, padding: 0, fontSize: 16, color: '#d73a49', fontFamily: 'Consolas, monospace', overflowX: 'auto' }}>
<code>{`long long stringToInteger(string &s) {
    int n = s.size();
    long long res = 0;
    for(int i=0;i<n;i++){
        res = (res*10) + (s[i] - '0');
    }
    return res;
}`}</code>
    </pre>
                    </div>
                  ) : idx === 7 ? (
                    <div style={{ background: '#fff', borderRadius: '8px', padding: '16px', margin: '10px 0 0 0', position: 'relative' }}>
                      <span style={{ position: 'absolute', top: 12, right: 18, fontSize: 14, color: '#888', fontWeight: 500 }}>C++</span>
                      <pre style={{ background: 'none', margin: 0, padding: 0, fontSize: 16, color: '#d73a49', fontFamily: 'Consolas, monospace', overflowX: 'auto' }}>
<code>{`class Solution {
public:
    vector<vector<int>> perms;
    
    void backtrack(vector<int>& nums, vector<int> &perm, int rem){
        if( rem == 0 ){
            perms.push_back(perm);
            return;
        }
        for(int i=0;i<nums.size();i++){
            if( nums[i] == 69 ) continue;
            perm.push_back(nums[i]);
            nums[i] = 69;
            backtrack(nums,perm,rem-1);
            nums[i] = perm.back();
            perm.pop_back();
        }
    }

    vector<vector<int>> permute(vector<int>& nums){
        vector<int> perm;
        backtrack(nums,perm,nums.size());
        return perms;
    }
};`}</code>
    </pre>
                    </div>
                  ) : idx === 10 ? (
                    <div style={{ background: '#fff', borderRadius: '8px', padding: '16px', margin: '10px 0 0 0', position: 'relative' }}>
                      <span style={{ position: 'absolute', top: 12, right: 18, fontSize: 14, color: '#888', fontWeight: 500 }}>C++</span>
                      <pre style={{ background: 'none', margin: 0, padding: 0, fontSize: 16, color: '#d73a49', fontFamily: 'Consolas, monospace', overflowX: 'auto' }}>
<code>{`#include <bits/stdc++.h>
using namespace std;

struct Assignment {
    string Area, Time;
    vector<int> StudentIds;
};

vector<Assignment> getInput() {
    vector<Assignment> res = {
        {"Garden", "A", {2, 9, 1}},
        {"Pond", "M", {2, 8, 5}},
        {"FoodCourt", "A", {4, 8, 7}},
        {"Playground", "M", {1, 7, 2}},
        {"PicnicArea", "M", {7, 3, 9}},
        {"Zoo", "A", {6, 3, 2}},
    };
    return res;
}

int main() {
    vector<Assignment> inputs = getInput();

    map< pair<int, string>, vector<string> > mapping;
    for (Assignment a : inputs) {
        for (auto studentId : a.StudentIds)
            mapping[{studentId, a.Time}].push_back(a.Area);
    }

    for (auto k: mapping) {
        if (k.second.size() > 1) {
            cout << "Student " << k.first.first << " has conflicts at time " << k.first.second << " at : " << endl;

            for (string area : k.second) {
                cout << area << " ";
            }
            cout << endl;
        }
    }
}`}</code>
    </pre>
                    </div>
                  ) : idx === 11 ? (
                    <div>
                      <details style={{ background: '#e9ebf0', borderRadius: '10px', padding: '10px 18px', border: 'none', marginBottom: 16 }}>
                        <summary style={{ fontWeight: 500, color: '#222', cursor: 'pointer', margin: 0, fontSize: '1.1rem', background: 'transparent', outline: 'none' }}>Show Description</summary>
                        <div style={{ margin: '12px 0 0 0', fontSize: 18, color: '#222', fontFamily: 'Consolas, monospace' }}>
                          <pre style={{ background: 'none', margin: 0, padding: 0, fontSize: 18, color: '#222', fontFamily: 'Consolas, monospace', overflowX: 'auto' }}>
{`__________________

|██ 
|  ██ ██
|██ ██ 
|
|
|
|
|`}
                          </pre>
                          <p>In the game of life, you have a 2D matrix of small squares that can be either alive or dead. The matrix goes through iterations, and on every iteration the squares can die or be revived. This is based on the previous iteration and the below rules</p>
                          <ul style={{ fontSize: 17, marginLeft: 24 }}>
                            <li>A living square with 1 or less neighbors in the previous iteration will die, as if from loneliness</li>
                            <li>A living square with 2 or 3 neighbors in the previous iteration will survive, as if from contentment</li>
                            <li>A living square with 4 or more neighbors in the previous iteration will die, as if from overpopulation</li>
                            <li>A dead square with exactly 3 neighbors in the previous iteration will be revived, as if by unfulfilled desires</li>
                          </ul>
                          <div style={{ margin: '24px 0 0 0', fontSize: 18, color: '#222', fontFamily: 'Consolas, monospace', whiteSpace: 'pre-line' }}>
Implement a square matrix of size 20 and set up the initial five (given) living squares.
Then run 10 iterations on it, then print the final matrix.
0,0 should be the top left of the matrix, where the first is the row and the second is the column.
                          </div>
                        </div>
                      </details>
                      <details style={{ background: '#e9ebf0', borderRadius: '10px', padding: '10px 18px', border: 'none' }}>
      <summary style={{ fontWeight: 500, color: '#222', cursor: 'pointer', margin: 0, fontSize: '1.1rem', background: 'transparent', outline: 'none' }}>Show Answer</summary>
      <pre style={{ background: '#f5f6fa', color: '#222', borderRadius: 8, padding: 20, fontSize: 16, marginTop: 16, fontFamily: 'Consolas, monospace', overflowX: 'auto', boxShadow: '0 1px 4px rgba(0,0,0,0.07)', lineHeight: 1.7 }}>
        {[
          { line: <><span style={{ color: '#d73a49' }}>#include</span> &lt;bits/stdc++.h&gt;</>, indent: 0 },
          { line: <></>, indent: 0 },
          { line: <><span style={{ color: '#d73a49' }}>using namespace std;</span></>, indent: 0 },
          { line: <></>, indent: 0 },
          { line: <><span style={{ color: '#6f42c1' }}>vector&lt;vector&lt;bool&gt;&gt;</span> <span style={{ color: '#005cc5' }}>matrix</span>(msz, <span style={{ color: '#6f42c1' }}>vector&lt;bool&gt;</span>(msz, <span style={{ color: '#005cc5' }}>false</span>));</>, indent: 0 },
          { line: <></>, indent: 0 },
          { line: <><span style={{ color: '#6f42c1' }}>vector&lt;int&gt;</span> <span style={{ color: '#005cc5' }}>dx</span> = {'{-1, -1, -1, 0, 0, 1, 1, 1}'};</>, indent: 0 },
          { line: <><span style={{ color: '#6f42c1' }}>vector&lt;int&gt;</span> <span style={{ color: '#005cc5' }}>dy</span> = {'{-1, 0, 1, -1, 1, -1, 0, 1}'};</>, indent: 0 },
          { line: <></>, indent: 0 },
          { line: <><span style={{ color: '#d73a49' }}>signed main()</span> {'{'}</>, indent: 0 },
          { line: <><span style={{ color: '#005cc5' }}>matrix</span>[0][0] = <span style={{ color: '#005cc5' }}>true</span>;</>, indent: 32 },
          { line: <><span style={{ color: '#005cc5' }}>matrix</span>[1][1] = <span style={{ color: '#005cc5' }}>true</span>;</>, indent: 32 },
          { line: <><span style={{ color: '#005cc5' }}>matrix</span>[1][2] = <span style={{ color: '#005cc5' }}>true</span>;</>, indent: 32 },
          { line: <><span style={{ color: '#005cc5' }}>matrix</span>[2][0] = <span style={{ color: '#005cc5' }}>true</span>;</>, indent: 32 },
          { line: <><span style={{ color: '#005cc5' }}>matrix</span>[2][1] = <span style={{ color: '#005cc5' }}>true</span>;</>, indent: 32 },
          { line: <></>, indent: 0 },
          { line: <><span style={{ color: '#d73a49' }}>for</span> (<span style={{ color: '#6f42c1' }}>int</span> gen = 1; gen &lt;= max_iters; gen++) {'{'}</>, indent: 32 },
          { line: <><span style={{ color: '#6f42c1' }}>vector&lt;vector&lt;bool&gt;&gt;</span> next_gen_mat(msz, <span style={{ color: '#6f42c1' }}>vector&lt;bool&gt;</span>(msz, <span style={{ color: '#005cc5' }}>false</span>));</>, indent: 48 },
          { line: <></>, indent: 0 },
          { line: <><span style={{ color: '#d73a49' }}>for</span> (<span style={{ color: '#6f42c1' }}>int</span> i=0; i&lt;msz; i++) {'{'}</>, indent: 48 },
          { line: <><span style={{ color: '#d73a49' }}>for</span> (<span style={{ color: '#6f42c1' }}>int</span> j=0; j&lt;msz; j++) {'{'}</>, indent: 64 },
          { line: <><span style={{ color: '#6f42c1' }}>int</span> alive_neighbors = <span style={{ color: '#005cc5' }}>0</span>;</>, indent: 80 },
          { line: <></>, indent: 0 },
          { line: <><span style={{ color: '#d73a49' }}>for</span> (<span style={{ color: '#6f42c1' }}>int</span> k=0; k&lt;8; k++) {'{'}</>, indent: 80 },
          { line: <><span style={{ color: '#6f42c1' }}>int</span> ni = i + dx[k], nj = j + dy[k];</>, indent: 96 },
          { line: <><span style={{ color: '#d73a49' }}>if</span> (ni &gt;= 0 and ni &lt; msz and nj &gt;=0 and nj &lt; msz) {'{'}</>, indent: 96 },
          { line: <><span style={{ color: '#d73a49' }}>if</span> (matrix[ni][nj]) alive_neighbors++;</>, indent: 112 },
          { line: <>{'}'}</>, indent: 96 },
          { line: <>{'}'}</>, indent: 80 },
          { line: <></>, indent: 0 },
          { line: <><span style={{ color: '#d73a49' }}>if</span> (matrix[i][j]) {'{'}</>, indent: 80 },
          { line: <><span style={{ color: '#d73a49' }}>if</span> (alive_neighbors &lt;= 1) next_gen_mat[i][j] = <span style={{ color: '#005cc5' }}>false</span>;</>, indent: 96 },
          { line: <><span style={{ color: '#d73a49' }}>else if</span> (alive_neighbors &lt;= 3) next_gen_mat[i][j] = <span style={{ color: '#005cc5' }}>true</span>;</>, indent: 96 },
          { line: <><span style={{ color: '#d73a49' }}>else</span> next_gen_mat[i][j] = <span style={{ color: '#005cc5' }}>false</span>;</>, indent: 96 },
          { line: <>{'}'}</>, indent: 80 },
          { line: <>{'}'}</>, indent: 64 },
          { line: <>{'}'}</>, indent: 48 },
          { line: <></>, indent: 0 },
          { line: <>matrix = next_gen_mat;</>, indent: 48 },
          { line: <>cout &lt;&lt; "Gen : " &lt;&lt; gen &lt;&lt; endl;</>, indent: 48 },
          { line: <></>, indent: 0 },
          { line: <><span style={{ color: '#d73a49' }}>for</span> (<span style={{ color: '#6f42c1' }}>int</span> i=0; i&lt;msz; i++) {'{'}</>, indent: 48 },
          { line: <><span style={{ color: '#d73a49' }}>for</span> (<span style={{ color: '#6f42c1' }}>int</span> j=0; j&lt;msz; j++) {'{'}</>, indent: 64 },
          { line: <><span style={{ color: '#d73a49' }}>if</span> (matrix[i][j]) cout &lt;&lt; "██";</>, indent: 80 },
          { line: <><span style={{ color: '#d73a49' }}>else</span> cout &lt;&lt; "  ";</>, indent: 80 },
          { line: <>{'}'}</>, indent: 64 },
          { line: <>cout &lt;&lt; endl;</>, indent: 64 },
          { line: <>{'}'}</>, indent: 48 },
          { line: <>cout &lt;&lt; endl;</>, indent: 48 },
          { line: <>{'}'}</>, indent: 32 },
          { line: <>{'}'}</>, indent: 0 }
        ].map((item, idx) => (
          <div key={idx} style={{ marginLeft: item.indent, marginBottom: item.line.props && item.line.props.children === '' ? 12 : 0 }}>{item.line}</div>
        ))}
      </pre>
    </details>
                    </div>
                  ) : (
                    <>
                      {idx === chaldalQuestions.length - 1 ? (
                        <pre style={{ background: '#f5f6fa', color: '#222', borderRadius: 8, padding: 20, fontSize: 16, marginTop: 16, fontFamily: 'Consolas, monospace', overflowX: 'auto', boxShadow: '0 1px 4px rgba(0,0,0,0.07)', lineHeight: 1.7 }}>
                          {[
                            { line: <><span style={{ color: '#d73a49' }}>#include</span> &lt;vector&gt;</>, indent: 0 },
                            { line: <><span style={{ color: '#d73a49' }}>using namespace std;</span></>, indent: 0 },
                            { line: <></>, indent: 0 },
                            { line: <><span style={{ color: '#6f42c1' }}>int</span> <span style={{ color: '#005cc5' }}>islandPerimeter</span>(<span style={{ color: '#6f42c1' }}>vector&lt;vector&lt;int&gt;&gt;</span>&amp; <span style={{ color: '#005cc5' }}>grid</span>) {'{'}</>, indent: 0 },
                            { line: <><span style={{ color: '#6f42c1' }}>int</span> <span style={{ color: '#005cc5' }}>perimeter</span> = 0;</>, indent: 32 },
                            { line: <><span style={{ color: '#6f42c1' }}>int</span> <span style={{ color: '#005cc5' }}>rows</span> = grid.size(), <span style={{ color: '#005cc5' }}>cols</span> = grid[0].size();</>, indent: 32 },
                            { line: <></>, indent: 0 },
                            { line: <><span style={{ color: '#d73a49' }}>for</span> (<span style={{ color: '#6f42c1' }}>int</span> i = 0; i &lt; rows; ++i) {'{'}</>, indent: 32 },
                            { line: <><span style={{ color: '#d73a49' }}>for</span> (<span style={{ color: '#6f42c1' }}>int</span> j = 0; j &lt; cols; ++j) {'{'}</>, indent: 48 },
                            { line: <><span style={{ color: '#d73a49' }}>if</span> (grid[i][j] == 1) {'{'}</>, indent: 64 },
                            { line: <><span style={{ color: '#005cc5' }}>perimeter</span> += 4;</>, indent: 80 },
                            { line: <><span style={{ color: '#d73a49' }}>if</span> (i &gt; 0 &amp;&amp; grid[i-1][j] == 1) <span style={{ color: '#005cc5' }}>perimeter</span> -= 2;</>, indent: 80 },
                            { line: <><span style={{ color: '#d73a49' }}>if</span> (j &gt; 0 &amp;&amp; grid[i][j-1] == 1) <span style={{ color: '#005cc5' }}>perimeter</span> -= 2;</>, indent: 80 },
                            { line: <>{'}'}</>, indent: 64 },
                            { line: <>{'}'}</>, indent: 48 },
                            { line: <>{'}'}</>, indent: 32 },
                            { line: <></>, indent: 0 },
                            { line: <><span style={{ color: '#d73a49' }}>return</span> perimeter;</>, indent: 32 },
                            { line: <>{'}'}</>, indent: 0 },
                          ].map((item, idx) => (
                            <div key={idx} style={{ marginLeft: item.indent, marginBottom: item.line.props && item.line.props.children === '' ? 12 : 0 }}>{item.line}</div>
                          ))}
                        </pre>
                      ) : (
                        <p style={{ margin: '10px 0 0 0', fontSize: '1.1rem', fontWeight: 400 }}>{q.answer}</p>
                      )}
                    </>
                  )}
                </details>
                {q.link && (
                  <div style={{ width: '100%' }}>
                    <button style={buttonStyle} onClick={() => window.open(q.link, '_blank')}>
                      <span role="img" aria-label="laptop" style={{ fontSize: '1.1rem', marginRight: '8px' }}>💻</span>
                      Submit Code
                    </button>
                  </div>
                )}
              </article>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '32px', background: '#fff', borderRadius: '8px', padding: '12px 18px', fontSize: '1.08rem' }}>
              <a href={githubLink} target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', textDecoration: 'underline', fontWeight: 500, display: 'flex', alignItems: 'center' }}>
                <span role="img" aria-label="edit" style={{ marginRight: '7px' }}>✏️</span> Contribute to this page on GitHub
              </a>
              <span style={{ color: '#888', fontWeight: 500 }}>Last updated: {lastUpdated}</span>
            </div>
          </div>
        </div>
      );
    }
    // Generic rendering for other companies
    return (
      <div style={{ padding: '0 20px' }}>
        <h1 style={{ fontWeight: 'bold', fontSize: '2rem', marginBottom: '1rem', color: '#222' }}>{company.name}</h1>
        <table style={{ background: '#f5faff', borderRadius: '12px', marginBottom: '1.5rem', boxShadow: '0 1px 4px rgba(0,0,0,0.04)', width: '100%', maxWidth: '700px' }}>
          <tbody>
            <tr>
              <td style={{ fontWeight: 'bold', padding: '1rem', background: '#f5faff', color: '#222' }}>Company Website</td>
              <td style={{ padding: '1rem', background: '#f5faff' }}>
                {company.website ? <a href={company.website} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold', color: '#1976d2' }}>{company.website}</a> : 'N/A'}
              </td>
            </tr>
            <tr>
              <td style={{ fontWeight: 'bold', padding: '1rem', background: '#f5faff', color: '#222' }}>Career Website</td>
              <td style={{ padding: '1rem', background: '#f5faff' }}>
                {company.application_link ? <a href={company.application_link} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold', color: '#1976d2' }}>{company.application_link}</a> : 'N/A'}
              </td>
            </tr>
            <tr>
              <td style={{ fontWeight: 'bold', padding: '1rem', background: '#f5faff', color: '#222' }}>Technologies Used</td>
              <td style={{ padding: '1rem', background: '#f5faff' }}>{company.technologies?.join(', ') || 'N/A'}</td>
            </tr>
          </tbody>
        </table>
        <h3 style={{ marginTop: '1rem', color: '#444', fontSize: '1.2rem', fontWeight: 600 }}>Introduction</h3>
        <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#333', background: '#f5f6fa', padding: '1rem', borderRadius: '6px', marginBottom: '1rem' }}>{company.intro || 'No information available.'}</p>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#fff' }}>
      {/* Sidebar */}
      <div style={{
        width: '270px',
        background: 'linear-gradient(180deg, #232946 0%, #1a1a2e 100%)',
        borderRight: '1px solid #232946',
        height: '100vh',
        overflowY: 'auto',
        position: 'sticky',
        top: 0,
        boxShadow: '2px 0 12px rgba(44,62,80,0.08)',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 2,
      }}>
        <h2 style={{
          textAlign: 'center',
          fontWeight: 'bold',
          marginBottom: 18,
          borderBottom: '2px solid #393e46',
          paddingBottom: 12,
          color: '#fff',
          fontSize: '1.35rem',
          letterSpacing: '1px',
        }}>Companies</h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {companiesList.map((company, idx) => (
            <li
              key={company.name}
              onClick={() => handleCompanyClick(company.name)}
              style={{
                background: selectedCompany === company.name ? '#eebbc3' : 'transparent',
                color: selectedCompany === company.name ? '#232946' : '#fff',
                padding: '13px 22px',
                cursor: 'pointer',
                fontWeight: selectedCompany === company.name ? 'bold' : 'normal',
                fontSize: '1.08rem',
                borderRadius: '7px',
                margin: '4px 10px',
                marginBottom: '2px',
                border: selectedCompany === company.name ? 'none' : 'none',
                boxShadow: selectedCompany === company.name ? '0 2px 8px rgba(238,187,195,0.12)' : 'none',
                transition: 'background 0.2s, color 0.2s, box-shadow 0.2s',
              }}
              onMouseOver={e => {
                if (selectedCompany !== company.name) {
                  e.currentTarget.style.background = '#393e46';
                  e.currentTarget.style.color = '#eebbc3';
                }
              }}
              onMouseOut={e => {
                if (selectedCompany !== company.name) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#fff';
                }
              }}
            >
              {company.name}
            </li>
          ))}
        </ul>
      </div>
      {/* Right Side: Company Details & Questions */}
      <div style={{ flex: 1, padding: '30px 40px', background: '#fff', height: '100vh', overflowY: 'auto' }}>
        {selectedCompany ? renderCompanyDetails(selectedCompany) : (
          <div style={{ textAlign: 'center', marginTop: 100, color: '#888', fontSize: 24 }}>
            Select a company to view interview questions.
          </div>
        )}
      </div>
    </div>
  );
}

export default CompanyDirectory;


