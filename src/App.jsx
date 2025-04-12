import { useState } from 'react';

const Card = ({ title  }) =>{
const [hasLiked, setHasLiked] = useState(false);

  return (
    <div className="card">
      <h2>{title}</h2>

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
