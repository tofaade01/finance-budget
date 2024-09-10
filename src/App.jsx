// App.jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Categories from './pages/categories';
import Wallets from './pages/wallets';
import Expenses from './pages/expenses';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* Navigation Bar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Finance Tracker</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/categories">Categories</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/wallets">Wallets</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/expenses">Expenses</Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/wallets" element={<Wallets />} />
            <Route path="/expenses" element={<Expenses />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
