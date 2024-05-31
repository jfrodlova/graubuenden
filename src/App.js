import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Weather from "./pages/Weather"
import Error from "./pages/Error"
import SharedLayout from "./pages/SharedLayout"



const App = () => {
  return (
    <BrowserRouter basename="/graubuenden">
      <Routes>
        <Route element={ <SharedLayout /> } >
          <Route path="/" element={ <Home /> } />
          <Route path="/weather" element={ <Weather /> } />
          <Route path="*" element={ <Error /> } />
        </Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
