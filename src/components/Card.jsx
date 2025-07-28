function Card({ filteredData, onBack, onCardClick, onDelete }) {
  return (
    <>
      <button
        style={{
          margin: '1rem',
          padding: '0.5rem 1.5rem',
          fontSize: '1rem',
          borderRadius: '0.5rem',
          background: '#eee',
          border: 'none',
          cursor: 'pointer'
        }}
        onClick={onBack}
      >
        뒤로가기
      </button>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4,1fr)',
          gap: '1rem',
          justifyContent: 'center',
          padding: '1rem',
          height: '420px', 
          overflowY: 'auto'
        }}
      >
        {filteredData.map((data, i) => (
          <div
            className="card"
            key={i}
            style={{
              width: '200px',
              height: "200px",
              cursor: 'pointer',
              backgroundColor: '#2b3035aa',
              color: 'white'
            }}
          >
            <div className="card-body" onClick={() => onCardClick(data)}>
              <h5 className="card-title">{data.title}</h5>
              <p className="card-text">{data.content}</p>
              <button onClick={e => { e.stopPropagation(); onDelete(data.title); }}>삭제</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;