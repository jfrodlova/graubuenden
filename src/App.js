import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Error from "./pages/Error"
import SharedLayout from "./pages/SharedLayout"



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={ <SharedLayout /> } >
          <Route path="/" element={ <Home /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="*" element={ <Error /> } />
        </Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
