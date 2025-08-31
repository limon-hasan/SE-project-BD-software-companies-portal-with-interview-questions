const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// SQLite database setup
const dbPath = path.resolve(__dirname, 'database.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to SQLite database.');
  }
});

// Create tables if they do not exist
const createTables = () => {
  db.run(`CREATE TABLE IF NOT EXISTS companies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    website TEXT,
    application_link TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS interview_questions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    company_id INTEGER,
    question TEXT,
    FOREIGN KEY(company_id) REFERENCES companies(id)
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS salaries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    company_id INTEGER,
    job_title TEXT,
    salary_range TEXT,
    FOREIGN KEY(company_id) REFERENCES companies(id)
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS applications (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    company_id INTEGER,
    applicant_name TEXT,
    applicant_email TEXT,
    applied_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(company_id) REFERENCES companies(id)
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS votes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    company_id INTEGER,
    vote_type TEXT,
    voted_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(company_id) REFERENCES companies(id)
  )`);
};

db.serialize(createTables);

// Test route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// --- API Endpoints ---

// Get all companies
app.get('/api/companies', (req, res) => {
  db.all('SELECT * FROM companies', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Add a new company
app.post('/api/companies', (req, res) => {
  const { name, description, website, application_link } = req.body;
  db.run(
    'INSERT INTO companies (name, description, website, application_link) VALUES (?, ?, ?, ?)',
    [name, description, website, application_link],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID });
    }
  );
});

// Get interview questions for a company
app.get('/api/companies/:id/questions', (req, res) => {
  db.all('SELECT * FROM interview_questions WHERE company_id = ?', [req.params.id], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Add interview question for a company
app.post('/api/companies/:id/questions', (req, res) => {
  const { question } = req.body;
  db.run(
    'INSERT INTO interview_questions (company_id, question) VALUES (?, ?)',
    [req.params.id, question],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID });
    }
  );
});

// Get salary info for a company
app.get('/api/companies/:id/salaries', (req, res) => {
  db.all('SELECT * FROM salaries WHERE company_id = ?', [req.params.id], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Add salary info for a company
app.post('/api/companies/:id/salaries', (req, res) => {
  const { job_title, salary_range } = req.body;
  db.run(
    'INSERT INTO salaries (company_id, job_title, salary_range) VALUES (?, ?, ?)',
    [req.params.id, job_title, salary_range],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID });
    }
  );
});

// Apply to a company
app.post('/api/companies/:id/apply', (req, res) => {
  const { applicant_name, applicant_email } = req.body;
  db.run(
    'INSERT INTO applications (company_id, applicant_name, applicant_email) VALUES (?, ?, ?)',
    [req.params.id, applicant_name, applicant_email],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID });
    }
  );
});

// Vote for a company
app.post('/api/companies/:id/vote', (req, res) => {
  const { vote_type } = req.body; // e.g., 'up' or 'down'
  db.run(
    'INSERT INTO votes (company_id, vote_type) VALUES (?, ?)',
    [req.params.id, vote_type],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID });
    }
  );
});

// Get vote count for a company
app.get('/api/companies/:id/votes', (req, res) => {
  db.all('SELECT vote_type, COUNT(*) as count FROM votes WHERE company_id = ? GROUP BY vote_type', [req.params.id], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 