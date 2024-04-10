import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Lore from './pages/Lore';
import Mint from './pages/Mint';

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
