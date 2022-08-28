// dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import Home from './Pages/Home/Home'

// styles
import './App.scss'
import GlobalStyle from './Utils/GlobalStyle'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
