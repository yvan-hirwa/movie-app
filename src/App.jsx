import { useState, useEffect } from 'react';

const Card = ({ title  }) =>{
const [count, setCount] = useState(0);
const [hasLiked, setHasLiked] = useState(false);

useEffect(() => {
  console.log(`You have ${hasLiked ? 'liked' : 'not liked'} ${title}`);
},[hasLiked]);


  return (
    <div className="card" onClick={() => setCount((prevState) => prevState + 1)}>
      <h2>{title} <br /> {count || null}</h2>

      <button onClick={ () => setHasLiked(!hasLiked) } > 
          
        {hasLiked ? '❤️' : '🤍'} 

      </button>  
      
    </div>
  )
}

const App = () => {
  

  return (
  <div className="card-container">

    <Card title = "Game of Thrones" />
    <Card title = "Breaking Bad"/>
    <Card title = "Arrow" />
    <Card title = "Pretty Woman"/>

    </div>
  )
}

export default App
