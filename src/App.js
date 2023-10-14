import './App.css';
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home';

export default function App() {
  return (
    <>
      <Navbar />
      <div id="main">
        <Home />
      </div>
    </>
  );
}