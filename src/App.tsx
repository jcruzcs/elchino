import './App.css';

function App() {
  return (
    <div className="App">
    <header className="site-header">
      <h1 className="site-title">elchinoartist</h1>
      <nav className="site-nav">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>

      <main>{/* Main content sections */}</main>

      <footer className="site-footer">
        <p>&copy; 2024 El Chino Artist. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
