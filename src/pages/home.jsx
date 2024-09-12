import './Home.css';  // Ensure that you create a new CSS file to style the home page.

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Take Control of Your Finances</h1>
          <p className="hero-subtitle">Manage your budgets, track your expenses, and gain insights into your spending.</p>
          <button className="cta-button">Get Started</button>
        </div>
        <img src="https://getbootstrap.com/docs/5.0/examples/heroes/bootstrap-themes.png" alt="Finance Hero" className="hero-image" />
      </section>

      {/* Key Features Section */}
      <section className="features">
        <h2>Key Features</h2>
        <div className="features-grid align-items-center">
          <div className="feature-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReegp1Mf2oWvsVrGu1PmIYom5U-5rS6VbieQ&s" style={{ width: '100px'}} alt="Budget" />
            <h3>Manage Budgets</h3>
            <p>Easily create and track your monthly budgets.</p>
          </div>
          <div className="feature-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4_Di2ZuebLn4Ubn46Cf4uz5u-cbH2JCKK6g&s" style={{ width: '100px'}} alt="Expense" />
            <h3>Track Expenses</h3>
            <p>Log all your expenses and analyze your spending habits.</p>
          </div>
          <div className="feature-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkc2p1WJbiwryAa_JJBlmFrRJHMWM6tU-sAg&s" style={{ width: '100px'}} alt="Categories" />
            <h3>Organize Categories</h3>
            <p>Customize categories to suit your personal finance needs.</p>
          </div>
          <div className="feature-item">
            <img src="https://devjobsindo.org/wp-content/uploads/2024/09/Logo-01-100x100.png" alt="Wallets" />
            <h3>Manage Wallets</h3>
            <p>Track different wallets and balances in one place.</p>
          </div>
        </div>
      </section>

      {/* Visual Overview */}
      <section className="overview">
        <h2>Visual Overview</h2>
        <p>See how easy it is to manage your finances with a simple, user-friendly dashboard.</p>
        <img src="https://media.gettyimages.com/id/875074116/photo/background-stock-market-and-finance-economic.jpg?s=612x612&w=gi&k=20&c=GINTcjThI83d0BRMEkVashus5v53IN6X19uR7IfAznU=" alt="Dashboard Preview" style={{width: '800px', height: '400px'}} className="overview-image" />
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Finance Budget Tracker | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
      </footer>
    </div>
  );
};

export default Home;
