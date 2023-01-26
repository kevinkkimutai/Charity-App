import "./App.css";
import "./css/bootstrap.css";

import HomePage from "./components/Navbar";
import Slides from "./components/Landingpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";

function App() {
  return (
    <div className="App ">
      <HomePage position="fixed" />
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Slides />} ></Route>
          <Route path="main"  element={<Main />} ></Route>
       </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
