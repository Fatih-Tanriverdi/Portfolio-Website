import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import { LangProvider } from './context/LangContext.js';

function App() {
  return (
    <>
      <LangProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </LangProvider>
    </>
  );
}

export default App;
