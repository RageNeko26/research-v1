import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Header from "./components/Header"
import Home from "./pages/Home/Home.tsx"

function App() {
   
   return (
   <>
   <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
