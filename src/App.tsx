import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Header from "./components/Header"
import Home from "./pages/Home/Home"
import ForgotPassword from "./pages/Forgot-Password/Forgot-Password"

function App() {
   
   return (
   <>
   <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
