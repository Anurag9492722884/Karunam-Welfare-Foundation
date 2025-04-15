import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Activities from "./pages/Activities"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


function App() {
  const bgStylea = {
    background:
      'linear-gradient(0deg, rgba(136, 22, 136, 0.05), rgba(136, 22, 136, 0.05)), linear-gradient(89.85deg, #FFFFFF -8.35%, #D4B2D9 127.96%)',
  }
  return (
    <div className="bg-white">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/activities" element={<Activities />}/>
    </Routes>
    <Footer />
    </div>
  )
}

export default App
