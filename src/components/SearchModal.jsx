import React, { useEffect } from "react";

function SearchModal({ results, onClose, onResultClick }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      background: "rgba(0,0,0,0.45)",
      zIndex: 1000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <div style={{
        background: "#222",
        color: "#fff",
        borderRadius: "1rem",
        padding: "2rem",
        minWidth: "400px",
        maxHeight: "60vh",
        overflowY: "auto",
        boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
        position: "relative"
      }}>
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: "2rem",
            cursor: "pointer",
            marginRight:"1rem",
          }}
        >×</button>
        <h3 style={{ marginBottom: "1.5rem" }}>검색 결과</h3>
        {results.length === 0 ? (
          <div style={{ color: "#bbb" }}>검색 결과가 없습니다.</div>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {results.map(item => (
              <li
                key={item.id}
                style={{
                  padding: "1rem",
                  marginBottom: "0.5rem",
                  borderRadius: "0.5rem",
                  background: "#333",
                  cursor: "pointer",
                  transition: "background 0.15s"
                }}
                onClick={() => onResultClick(item)}
                onMouseOver={e => e.currentTarget.style.background = "#444"}
                onMouseOut={e => e.currentTarget.style.background = "#333"}
              >
                <strong>{item.title}</strong>
                <div style={{ fontSize: "0.95rem", color: "#aaa" }}>{item.category}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SearchModal;