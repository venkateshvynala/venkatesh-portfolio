import "./css/App.css"
import { Route, Routes } from "react-router-dom"
import Home from "@/routes/Home"

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App