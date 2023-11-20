import { Link } from "react-router-dom"
import "../components/Navbar.css"
import heartIcon from "../assets/hearts-suit.svg"

function Navbar () {
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
        </nav>
    </>
    )
}

export default Navbar