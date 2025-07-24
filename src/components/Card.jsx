function Card({ data }) {

console.log(data);

  return (
    <>
    <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', padding: '1rem'}}>
     
     {
      data.map((data,i)=>{
        
        return(
          
          <div className="card" key={i} style={{width:'200px', height:"200px"}}>
          <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text">{data.content}</p>
            <a href="#" className="card-link">Read More</a>
          </div>
          </div>
    )})
     }
    </div>
     

      </>
  );
}
        

export default Card;