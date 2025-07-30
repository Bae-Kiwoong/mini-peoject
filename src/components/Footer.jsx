import React from 'react';

function Footer({ recent, onRecentClick }) {
  return (
    <div>
      <h4 style={{ color: "#fff", marginBottom: "1rem" }}>최근 본 글</h4>
      <div style={{ display: "flex", gap: "1rem" }}>
        {recent && recent.length > 0 ? (
          recent.map(item => (
            <div
              key={item.id}
              style={{
                background: "#333",
                color: "#fff",
                padding: "1rem",
                borderRadius: "0.5rem",
                cursor: "pointer",
                minWidth: "120px"
              }}
              onClick={() => onRecentClick(item)}
            >
              <strong>{item.title}</strong>
              <div style={{ fontSize: "0.9rem", color: "#aaa" }}>{item.category}</div>
            </div>
          ))
        ) : (
          <div style={{ color: "#aaa" }}>최근 본 글이 없습니다.</div>
        )}
      </div>
    </div>
  );
}

export default Footer;

