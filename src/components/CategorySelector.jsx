import React from 'react';

function CategorySelector({ onSelect }) {
  const categories = [
    { name: 'REACT', img: '/public/assets/react.svg' },
    { name: 'CSS', img: '/public/assets/css.svg' },
    { name: 'JAVA', img: '/public/assets/java.svg' },
    { name: 'DB', img: '/public/assets/db.svg'},
  ];

  return (
    <div className="category-grid" >
      {categories.map(cat => (
        <button className='category-btn'
          key={cat.name}
          style={{
            width: '100%',
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
            src={`/assets/${cat.name.toLowerCase()}.svg`}
            alt={cat.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              borderRadius: '1rem',
              filter: 'brightness(0.9)'
            }}
          />
        </button>
      ))}
    </div>
  );
}

export default CategorySelector;