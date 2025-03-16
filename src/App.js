import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/Services'
import RateCurrence from './Pages/Rate&Currence/RateCurrence';
import SignIn from './Pages/SignIn/SignIn';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/rate-currencies" element={<RateCurrence />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;