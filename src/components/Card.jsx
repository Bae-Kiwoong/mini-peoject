function Card({ filteredData, search, onBack, onCardClick, onDelete }) {
  const searchedData = search
    ? filteredData.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.content.toLowerCase().includes(search.toLowerCase())
      )
    : filteredData;

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
      <div className="category-grid"
        style={{
          display: 'grid',
          // gridTemplateColumns: 'repeat(4,1fr)',
          gap: '1rem',
          justifyContent: 'center',
          padding: '1rem',
          height: '420px',
          overflowY: 'auto'
        }}
      >
        {searchedData.length === 0 ? (
          <div style={{ color: '#fff', fontSize: '1.2rem', textAlign: 'center', gridColumn: 'span 4' }}>
            검색 결과가 없습니다.
          </div>
        ) : (
          searchedData.map((data, i) => (
            <div
              className="card"
              key={data.id}
              style={{
                width: '100%',
                height: "190px",
                cursor: 'pointer',
                backgroundColor: '#2b3035aa',
                color: 'white',
                overflow: 'hidden'
              }}
            >
              <div className="card-body" onClick={() => onCardClick(data)}>
                <h5 className="card-title" style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}>{data.title}</h5>
                <p className="card-text" style={{
                  maxHeight: "80px",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}>{data.content}</p>
                <button
                  onClick={e => {
                    e.stopPropagation();
                    onDelete(data.title);
                  }}
                >삭제</button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Card;