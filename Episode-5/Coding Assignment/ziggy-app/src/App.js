import Body from "./components/Body";
import Header from "./components/Header";
import Search from "./components/Search.jsx";
import datas from "./data/Data.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Body datas={datas} />
            </>
          }
        />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
