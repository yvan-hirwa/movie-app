const Card = ({ title  }) =>{
  return (
    <div className="card">
      <h2>{title}</h2>
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
