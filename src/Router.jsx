import { Route,Routes } from "react-router-dom"
import Calc from "./components/calc"
import Currency from "./components/Currency"
import Unit from "./components/Unit"
import Home from "./components/Home"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/calc" element={<Calc/>}/>
      <Route path="/currency" element={<Currency/>}/>
      <Route path="/unit" element={<Unit/>} />
    </Routes>
  )
}

export default Router
