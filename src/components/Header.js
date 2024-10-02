import Navbar from './header/Navbar.js'
import Statement from './header/Statement.js'
import Reviews from './header/Reviews.js'

function Header() {
  return (
    <div className="App">
        <Navbar />
        <Statement />
        <Reviews />
    </div>
  );
}

export default Header;
