const Card = ({ title , rating }) =>{
  return (
    <div>
      <h2>{title}</h2>
      <h4>{rating}</h4>
    </div>
  )
}

const App = () => {
  return (
  <div>
    <h2>Functional Arrow Component</h2>

    <Card title = "Game of Thrones" rating={5}/>
    <Card title = "Breaking Bad"/>
    <Card title = "Arrow"/>
    <Card title = "Pretty Woman"/>

    </div>
  )
}

export default App
