import './App.css';
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home';
import Cart from './components/cart/CartPage';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';

export default function App() {
  return (
    <>
      <Navbar />
      <div id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>

      <Sidebar />
    </>
  );
}