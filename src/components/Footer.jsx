import React from 'react';

function Footer({ recent, onRecentClick }) {
  return (
    <footer style={{ padding: '1rem', backgroundColor: '#2b3035', color: 'white' }}>
      <h4 style={{ fontSize: '1.5rem' }}>😊 최근 본 내용</h4>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {recent.map((item, idx) => (
          <li
            key={idx}
            style={{
              fontSize: '1.3rem',
              margin: '0.5rem 0',
              cursor: 'pointer',
              textDecoration: 'underline'
            }}
            onClick={() => onRecentClick(item)}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;