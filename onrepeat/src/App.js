import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Liked from "./pages/Liked";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
        <Route path='/search' element={<Search />}/>
        <Route path='/liked' element={<Liked />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
