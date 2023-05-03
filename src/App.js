import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path="/products"  element={<Products/>}></Route>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/contact" element={<Contact/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
