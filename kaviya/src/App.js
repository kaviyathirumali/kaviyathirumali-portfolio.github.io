import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Navlist from "./Components/Navbar-list/Navlist";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
           <Route path="/" element={<Navlist/>}/>
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
