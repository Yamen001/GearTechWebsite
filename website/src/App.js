import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './componets/navbar/NavBar'
import Footer from './componets/footer/Footer'
import Services from './pages/Services'

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
