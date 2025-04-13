import { use, useState } from "react"
import Search from "./components/search"

const App = () => {
  const [searchTerm, setsearchTerm] = useState('');


  return (
    <main>
      <div className='pattern' />
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero-banner" />
          <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy Without the Hassle</h1>
        </header>

        <Search searchTerm ={searchTerm} setsearchTerm = {setsearchTerm} />
      </div>
    </main>
  )
}

export default App