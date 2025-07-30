import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Header from "./components/Header";
import BodyMain from "./components/BodyMain";
import Footer from "./components/Footer";
import Card from "./components/Card";
import CategorySelector from "./components/CategorySelector";
import WriteForm from "./components/WriteForm";
import initialData from "./mokData";
import CategoryList from "./components/CategoryList";
import Detail from "./pages/Detail";
import SearchModal from "./components/SearchModal";
import CategoryCardWrapper from "./components/CategoryCardWrapper";

function App() {

  const [search, setSearch] = useState("");
  const [showSearchModal, setShowSearchModal] = useState(false);

  // 초기값을 localStorage에서 불러오도록 변경
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem("cards");
    return saved ? JSON.parse(saved) : initialData;
  });
  const [categories, setCategories] = useState(() => {
    const saved = localStorage.getItem("categories");
    return saved ? JSON.parse(saved) : ["REACT", "CSS", "JAVA","DB"];
  });
  const [category, setCategory] = useState(null);
  const [recent, setRecent] = useState([]);
  const [showWrite, setShowWrite] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const navigate = useNavigate();
  
  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  // 검색어 입력 시 모달 오픈
  useEffect(() => {
    if (search) setShowSearchModal(true);
    else setShowSearchModal(false);
  }, [search]);

  const filteredData = category
    ? data.filter(item => item.category === category)
    : data;

  // 검색 결과 데이터
  const searchedData = search
    ? data.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.content.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  // 카드 클릭 시 최근 본 내용에 추가
  const handleCardClick = (item) => {
    setRecent(prev => {
      const updated = [item, ...prev.filter(v => v.id !== item.id)];
      return updated.slice(0, 3);
    });
    setSelectedCard(item);
    navigate(`/detail/${item.id}`);
  };

  // 카드 삭제
  const handleDelete = (title) => {
    setData(prev => prev.filter(item => item.title !== title));
  };

  // 새 글 추가
  const handleAdd = (newCard) => {
    const nextId =
      data.length > 0
        ? (Math.max(...data.map(item => Number(item.id) || 0)) + 1).toString()
        : "0";
    setData(prev => [{ ...newCard, id: nextId }, ...prev]);
    navigate("/"); // 글 등록 후 메인으로 이동
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

  // 검색 결과 클릭 시 상세화면 이동
  const handleSearchResultClick = (item) => {
    setSelectedCard(item);
    setSearch(""); // 검색어 초기화
    setShowSearchModal(false);
  };

  return (
    <div className="fixed-wrapper">
      <div className="hd">
        <Header
          onHome={() => navigate("/")}
          onWrite={() => navigate("/write")}
          onList={() => navigate("/categories")}
        />
      </div>
      <div className="bm">
        <BodyMain search={search} setSearch={setSearch} />
        {showSearchModal && (
          <SearchModal
            results={searchedData}
            onClose={() => setShowSearchModal(false)}
            onResultClick={item => {
              setSelectedCard(item);
              setShowSearchModal(false);
              navigate(`/detail/${item.id}`);
            }}
          />
        )}
        <Routes>
          <Route path="/" element={
            <CategorySelector
              onSelect={cat => navigate(`/category/${cat}`)}
              categories={categories}
            />
          } />
          <Route path="/category/:cat" element={
            <CategoryCardWrapper
              data={data}
              search={search}
              onBack={() => navigate("/")}
              onCardClick={item => {
                setRecent(prev => {
                  const updated = [item, ...prev.filter(v => v.id !== item.id)];
                  return updated.slice(0, 3);
                });
                setSelectedCard(item);
                navigate(`/detail/${item.id}`);
              }}
              onDelete={handleDelete}
            />
          } />
          <Route path="/write" element={
            <WriteForm
              onAdd={handleAdd}
              onCancel={() => navigate("/")}
              categories={categories}
            />
          } />
          <Route path="/categories" element={
            <CategoryList
              categories={categories}
              onSelect={cat => navigate(`/category/${cat}`)}
              onAddCategory={handleAddCategory}
            />
          } />
          <Route path="/detail/:id" element={
            <Detail
              dataList={data}
              onBack={() => navigate(-1)}
            />
          } />
        </Routes>
      </div>
      <div className="ft">
        <Footer
          recent={recent}
          onRecentClick={item => {
            setSelectedCard(item);
            navigate(`/detail/${item.id}`);
          }}
        />
      </div>
    </div>
  );
}

export default App;