import { Link } from 'react-router-dom';

const Navbar = () => {
return ( <nav> <h2>TravelEase</h2>

```
  <div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
     <Link to="/login">Login</Link>
  </div>
</nav>
);
};

export default Navbar;
