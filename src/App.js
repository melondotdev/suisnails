import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/home/Home';
import About from './pages/about/About';
import Lore from './pages/lore/Lore';
import Mint from './pages/mint/Mint';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/lore" exact element={<Lore />} />
          <Route path="/mint" exact element={<Mint />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
