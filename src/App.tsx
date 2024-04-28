import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'; // Ensure this imports Tailwind CSS
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-white">
        <nav className="w-64 bg-red-600 shadow-xl">
          <div className="px-8 py-4">
            <h2 className="text-white text-lg font-semibold">Navigation</h2>
            <ul className="mt-4">
              <li className="flex items-center mt-4 py-2 px-6 bg-red-700 text-white">
                <Link to="/" className="hover:text-white">Home</Link>
              </li>
              <li className="flex items-center mt-4 py-2 px-6 hover:bg-red-700 hover:text-white">
                <Link to="/about" className="hover:text-white">About</Link>
              </li>
              <li className="flex items-center mt-4 py-2 px-6 hover:bg-red-700 hover:text-white">
                <Link to="/contact" className="hover:text-white">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
        <main className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
