import { Link, NavLink } from "react-router-dom"
import "../components/Navbar.css"
import heartIcon from "../assets/hearts-suit.svg"
import hamburgerIcon from "../assets/hamburger.svg"
import { useState } from "react";

function Navbar () {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    return(
    <>
        <nav className="Navbar">
            <Link to="/" className="logo">ESGtracker</Link>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/company/add">Create company</Link>
                </li>
                <li className="favourites-item">
                    <Link to="/favourites/"><img src={heartIcon} /> Favourites</Link>
                </li>
            </ul>
            <img className="hamburger-logo" src={hamburgerIcon} onClick={toggleHamburger} />
        </nav>
        
            {hamburgerOpen &&
                <nav className="hamburger-nav">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/company/add">Create company</Link>
                        </li>
                        <li className="favourites-item">
                            <Link to="/favourites/"><img src={heartIcon} /> Favourites</Link>
                        </li>
                    </ul>
                </nav>
            }
        </>
    )
}

export default Navbar