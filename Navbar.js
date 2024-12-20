
import { NavLink } from 'react-router-dom'; 

const Navbar = () => {
    return (
        <nav>
            <h1>PhotoM4</h1>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/details">Details</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/gallery">Gallery</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;
