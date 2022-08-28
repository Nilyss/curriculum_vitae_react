// dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import Home from './Pages/Home/Home'

// style
import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
