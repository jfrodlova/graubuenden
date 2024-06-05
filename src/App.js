// created by jfrodlova - Discord: pagodulina
import { HashRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Weather from "./pages/Weather/Weather"
import Error from "./pages/Error"
import SharedLayout from "./pages/SharedLayout"

const App = () => {
  return (
    <HashRouter  >
      <Routes>
        <Route path="/" element={<SharedLayout />} >
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/*" element={<Error />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App
