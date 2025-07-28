import React from 'react';

function CategorySelector({ onSelect }) {
  const categories = [
    { name: 'REACT', img: '/src/assets/react.svg' },
    { name: 'CSS', img: '/src/assets/css.svg' },
    { name: 'JAVA', img: '/src/assets/java.svg' }
  ];

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '2rem',
      height: '300px'
    }}>
      {categories.map(cat => (
        <button
          key={cat.name}
          style={{
            width: '200px',
            height: '200px',
            borderRadius: '1rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            padding: 0,
            border: 'none',
            background: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            cursor: 'pointer'
          }}
          onClick={() => onSelect(cat.name)}
        >
          <img
            src={cat.img}
            alt={cat.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              borderRadius: '1rem'
            }}
          />
        </button>
      ))}
    </div>
  );
}

export default CategorySelector;