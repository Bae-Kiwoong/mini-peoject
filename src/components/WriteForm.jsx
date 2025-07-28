import { useState } from "react";

function WriteForm({ onAdd, onCancel }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("REACT");

  return (
    <div
      style={{
        background: "#222",
        color: "#fff",
        padding: "2rem",
        borderRadius: "1rem",
        maxWidth: "600px",
        margin: "2rem auto",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "1.5rem",
        }}
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목"
          style={{
            flex: 1,
            padding: "0.7rem",
            fontSize: "1.2rem",
            borderRadius: "0.5rem",
            border: "1px solid #444",
            background: "#333",
            color: "#fff",
          }}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            padding: "0.7rem",
            fontSize: "1.1rem",
            borderRadius: "0.5rem",
            border: "1px solid #444",
            background: "#333",
            color: "#fff",
          }}
        >
          <option value="REACT">REACT</option>
          <option value="CSS">CSS</option>
          <option value="JAVA">JAVA</option>
        </select>
      </div>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="내용을 입력하세요"
        rows={8}
        style={{
          width: "100%",
          padding: "1rem",
          fontSize: "1.1rem",
          borderRadius: "0.5rem",
          border: "1px solid #444",
          background: "#333",
          color: "#fff",
          marginBottom: "1.5rem",
          resize: "vertical",
        }}
      />
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "flex-end",
        }}
      >
        <button
          onClick={() => onAdd({ title, content, category })}
          style={{
            padding: "0.7rem 2rem",
            fontSize: "1.1rem",
            borderRadius: "0.5rem",
            border: "none",
            background: "#4caf50",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          등록
        </button>
        <button
          onClick={onCancel}
          style={{
            padding: "0.7rem 2rem",
            fontSize: "1.1rem",
            borderRadius: "0.5rem",
            border: "none",
            background: "#888",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          취소
        </button>
      </div>
    </div>
  );
}

export default WriteForm;