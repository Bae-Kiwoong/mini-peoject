import Header from "./components/Header";
import BodyMain from "./components/BodyMain";
import Footer from "./components/Footer";

import Card from "./components/Card";
import data from "./mokData";//임시 등록 파일



function App() {
  
  console.log(data);
  

  return(
    <div className="fixed-wrapper">
      <div className="hd">
      <Header />
      </div>
      <div className="bm"> 
      <BodyMain />
      <Card  data={data}/>
      </div>
       
        
      
      <div className="ft">
      <Footer />
      </div>

      </div>
      

        
       
      
  
    
  )
}
    
    
    
    
    
    
    

export default App;