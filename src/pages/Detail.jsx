import React, { useEffect } from 'react';

const Detail = ({data}) => {

  useEffect(()=>{
  
  const view = JSON.parse(localStorage.getItem('watched'));
  
  const filtered = view.filter((item) => item.id !== post.id);

  const updated = [data, ...filtered].slice(0, 3);

  localStorage.setItem('watcher', JSON.stringify(updated));

})


  return (
    <div>

      <h2>{data.title}</h2>
      <p>{data.content}</p>
    
      
    </div>
  );
};

export default Detail;