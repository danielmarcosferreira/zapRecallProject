import FirstPage from "./FirstPage";
import GlobalStyle from "./assets/styles/GlobalStyle";
import Deck from "./components/Deck";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<FirstPage />}/>
        <Route path="/deck" element={<Deck />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
