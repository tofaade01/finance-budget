import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
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
        {/* Navigation Bar with Nav Pills */}
        <nav className="nav nav-pills nav-justified bg-light p-2">
          <NavLink
            className="nav-link"
            to="/"
            activeClassName="active"
            end
          >
            Home
          </NavLink>
          <NavLink
            className="nav-link"
            to="/categories"
            activeClassName="active"
            end
          >
            Categories
          </NavLink>
          <NavLink
            className="nav-link"
            to="/wallets"
            activeClassName="active"
            end
          >
            Wallets
          </NavLink>
          <NavLink
            className="nav-link"
            to="/expenses"
            activeClassName="active"
            end
          >
            Expenses
          </NavLink>
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
