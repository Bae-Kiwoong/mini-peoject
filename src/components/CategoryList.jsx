import { useState } from "react";

function CategoryList({ categories, onSelect, onAddCategory }) {
  const [newCat, setNewCat] = useState("");

  return (
    <div style={{ padding: "2rem", color: "#fff" }}>
      <h2>카테고리 목록</h2>
      <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem" }}>
        {categories.map(cat => (
          <li
            key={cat}
            style={{
              fontSize: "1.3rem",
              margin: "1rem 0",
              cursor: "pointer",
              textDecoration: "underline"
            }}
            onClick={() => onSelect(cat)}
          >
            {cat}
          </li>
        ))}
      </ul>
      <div style={{ display: "flex", gap: "1rem" }}>
        <input
          value={newCat}
          onChange={e => setNewCat(e.target.value)}
          placeholder="새 카테고리"
          style={{
            padding: "0.7rem",
            fontSize: "1.1rem",
            borderRadius: "0.5rem",
            border: "1px solid #444",
            background: "#333",
            color: "#fff"
          }}
        />
        <button
          onClick={() => {
            onAddCategory(newCat.trim());
            setNewCat("");
          }}
          style={{
            padding: "0.7rem 1.5rem",
            fontSize: "1.1rem",
            borderRadius: "0.5rem",
            border: "none",
            background: "#4caf50",
            color: "#fff",
            cursor: "pointer"
          }}
        >
          카테고리 추가
        </button>
      </div>
    </div>
  );
}

export default CategoryList;