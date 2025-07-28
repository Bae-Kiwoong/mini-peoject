import { useState, useEffect } from "react";
import Header from "./components/Header";
import BodyMain from "./components/BodyMain";
import Footer from "./components/Footer";
import Card from "./components/Card";
import CategorySelector from "./components/CategorySelector";
import WriteForm from "./components/WriteForm";
import initialData from "./mokData";
import CategoryList from "./components/CategoryList";
import Detail from "./pages/Detail";

function App() {
  // 초기값을 localStorage에서 불러오도록 변경
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem("cards");
    return saved ? JSON.parse(saved) : initialData;
  });
  const [categories, setCategories] = useState(() => {
    const saved = localStorage.getItem("categories");
    return saved ? JSON.parse(saved) : ["REACT", "CSS", "JAVA"];
  });
  const [category, setCategory] = useState(null);
  const [recent, setRecent] = useState([]);
  const [showWrite, setShowWrite] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  // 데이터 변경 시 로컬스토리지에 저장
  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  const filteredData = data.filter(item => item.category === category);

  // 카드 클릭 시 최근 본 내용에 추가
  const handleCardClick = (item) => {
    setRecent(prev => {
      const updated = [item, ...prev.filter(v => v.title !== item.title)];
      return updated.slice(0, 3);
    });
    setSelectedCard(item); // 상세화면으로 이동
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

  // 카테고리 추가
  const handleAddCategory = (newCat) => {
    if (newCat && !categories.includes(newCat)) {
      setCategories([...categories, newCat]);
    }
  };

  // 뒤로가기(상세화면에서)
  const handleBack = () => {
    setSelectedCard(null);
  };

  return (
    
    <div className="fixed-wrapper">
      <div className="hd">
        <Header
          onHome={() => {
            setCategory(null);
            setShowWrite(false);
            setShowCategories(false);
            setSelectedCard(null);
          }}
          onWrite={() => {
            setShowWrite(true);
            setShowCategories(false);
          }}
          onList={() => {
            setShowCategories(true);
            setCategory(null);
            setShowWrite(false);
          }}
        />
      </div>
      <div className="bm">
        <BodyMain />
        {selectedCard ? (
          <Detail data={selectedCard} onBack={handleBack} />
        ) : showCategories ? (
          <CategoryList
            categories={categories}
            onSelect={cat => {
              setCategory(cat);
              setShowCategories(false);
            }}
            onAddCategory={handleAddCategory}
          />
        ) : showWrite ? (
          <WriteForm
            onAdd={handleAdd}
            onCancel={() => setShowWrite(false)}
            categories={categories}
          />
        ) : category === null ? (
          <CategorySelector
            onSelect={setCategory}
            categories={categories}
          />
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