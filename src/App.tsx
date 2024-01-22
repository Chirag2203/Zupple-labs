import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ScreenOne from "./components/pages/ScreenOne"
import ScreenTwo from "./components/pages/ScreenTwo"
import Home from "./components/pages/Home"
import Header from "./components/shared/Header"
import Footer from "./components/shared/Footer"
const App = () => {
  return (
    <div className="text-white">
      <Router>
        <Header/>
          <div className=" ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/screenone" element={<ScreenOne />} />
          <Route path="/screentwo" element={<ScreenTwo />} />
        </Routes>
          </div>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
