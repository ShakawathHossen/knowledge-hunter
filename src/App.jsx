import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import BlogContainer from './Components/BlogContainer/BlogContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <BlogContainer></BlogContainer>
    </div>
  )
}

export default App
