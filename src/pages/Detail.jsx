import React from 'react';
import { useParams } from "react-router-dom";

const Detail = ({ dataList, onBack }) => {
  const { id } = useParams();
  // dataList에서 id로 해당 데이터 찾기
  const data = dataList.find(item => String(item.id) === String(id));
  if (!data) return <div style={{ color: "#fff", padding: "2rem" }}>데이터를 찾을 수 없습니다.</div>;

  return (
    <div style={{ padding: "2rem", color: "#fff" }}>
      <button
        onClick={onBack}
        style={{
          marginBottom: "1rem",
          padding: "0.5rem 1.5rem",
          fontSize: "1rem",
          borderRadius: "0.5rem",
          background: "#eee",
          border: "none",
          cursor: "pointer"
        }}
      >
        뒤로가기
      </button>
      <h2>{data.title}</h2>
      <h4 style={{ color: "#4caf50" }}>{data.category}</h4>
      <p style={{ fontSize: "1.2rem", marginTop: "2rem" }}>{data.content}</p>
    </div>
  );
};

export default Detail;