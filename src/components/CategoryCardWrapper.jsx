import { useParams } from "react-router-dom";
import Card from "./Card";

function CategoryCardWrapper({ data, search, ...props }) {
  const { cat } = useParams();
  const filteredData = data.filter(item => item.category === cat);
  return <Card filteredData={filteredData} search={search} {...props} />;
}

export default CategoryCardWrapper;