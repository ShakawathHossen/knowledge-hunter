import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import BlogContainer from './Components/BlogContainer/BlogContainer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <div className="App">
      <Header></Header>
      <BlogContainer></BlogContainer>
      <ToastContainer/>
    </div>
  )
}

export default App
