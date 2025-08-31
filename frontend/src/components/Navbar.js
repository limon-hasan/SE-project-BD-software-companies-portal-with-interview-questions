import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'Home', to: '/' },
  { name: 'Companies', to: '/companies' },
  { name: 'Salaries', to: '/salaries' },
  { name: 'Competitive Programming', to: '/competitive-programming' },
];

const Navbar = () => {
  const location = useLocation();
  return (
    <nav style={{
      background: '#fff',
      padding: '0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      position: 'sticky',
      top: 0,
      zIndex: 10,
      borderBottom: '1px solid #eee',
    }}>
      <Link to="/" style={{
        background: '#f5f5f7',
        color: '#222',
        fontWeight: 'bold',
        fontSize: '1.35rem',
        padding: '1.2rem 2.5rem',
        borderTopLeftRadius: '0.5rem',
        borderBottomLeftRadius: '0.5rem',
        minWidth: '220px',
        letterSpacing: '0.5px',
        boxSizing: 'border-box',
        marginRight: '2rem',
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        transition: 'background 0.2s',
      }}
      onMouseOver={e => e.currentTarget.style.background = '#e3eafc'}
      onMouseOut={e => e.currentTarget.style.background = '#f5f5f7'}
      >
        Code2Career BD
      </Link>
      <ul style={{
        display: 'flex',
        gap: '2.5rem',
        listStyle: 'none',
        margin: 0,
        padding: 0,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}>
        {navItems.map(item => (
          <li key={item.name} style={{ position: 'relative' }}>
            <Link
              to={item.to}
              style={{
                color: location.pathname === item.to ? '#2563eb' : '#1a2536',
                textDecoration: 'none',
                fontWeight: location.pathname === item.to ? 'bold' : '500',
                fontSize: '1.08rem',
                padding: '7px 18px',
                borderRadius: '12px',
                background: location.pathname === item.to ? 'rgba(37,99,235,0.18)' : 'transparent',
                transition: 'color 0.2s, background 0.2s',
              }}
              onMouseOver={e => {
                e.currentTarget.style.background = 'rgba(37,99,235,0.28)';
                e.currentTarget.style.color = '#2563eb';
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = location.pathname === item.to ? 'rgba(37,99,235,0.18)' : 'transparent';
                e.currentTarget.style.color = location.pathname === item.to ? '#2563eb' : '#1a2536';
              }}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;