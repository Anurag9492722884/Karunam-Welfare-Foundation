import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Activities from "./pages/Activities"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/activities" element={<Activities />}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App
