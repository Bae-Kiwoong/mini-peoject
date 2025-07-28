import { useState } from "react";
import Header from "./components/Header";
import BodyMain from "./components/BodyMain";
import Footer from "./components/Footer";
import Card from "./components/Card";
import CategorySelector from "./components/CategorySelector";
import WriteForm from "./components/WriteForm";
import initialData from "./mokData";

function App() {
  
  const [category, setCategory] = useState(null); 
  const [recent, setRecent] = useState([]);
  const [data, setData] = useState(initialData);
  const [showWrite, setShowWrite] = useState(false);

  const filteredData = data.filter(item => item.category === category);

  // 카드 클릭 시 최근 본 내용에 추가
  const handleCardClick = (item) => {
    setRecent(prev => {
      const updated = [item, ...prev.filter(v => v.title !== item.title)];
      return updated.slice(0, 3);
    });
  };

  // 카드 삭제
  const handleDelete = (title) => {
    setData(prev => prev.filter(item => item.title !== title));
  };

  // 새 글 추가
  const handleAdd = (newCard) => {
    setData(prev => [newCard, ...prev]);
    setShowWrite(false);
  };

  return (
    <div className="fixed-wrapper">
      <div className="hd">
        <Header
          onHome={() => {
            setCategory(null);
            setShowWrite(false);
          }}
          onWrite={() => setShowWrite(true)}
        />
      </div>
      <div className="bm">
        <BodyMain />
        {showWrite ? (
          <WriteForm onAdd={handleAdd} onCancel={() => setShowWrite(false)} />
        ) : category === null ? (
          <CategorySelector onSelect={setCategory} />
        ) : (
          <Card
            filteredData={filteredData}
            onBack={() => setCategory(null)}
            onCardClick={handleCardClick}
            onDelete={handleDelete}
          />
        )}
      </div>
      <div className="ft">
        <Footer recent={recent} onRecentClick={item => setCategory(item.category)} />
      </div>
    </div>
  );
}

export default App;