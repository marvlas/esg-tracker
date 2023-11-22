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
                    <Link to="/favourites/">
                        <svg id="favourite-icon" className="non-animated-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="#1c263d" d="M11 2a3.944 3.944 0 00-3 1.371A3.944 3.944 0 005 2a4 4 0 00-2.865 6.785l5.508 5.629a.5.5 0 00.357.15.5.5 0 00.358-.151l5.315-5.454A3.988 3.988 0 0011 2z"></path></svg>
                         Favourites
                    </Link>
                </li>
            </ul>
        </nav>
    </>
    )
}

export default Navbar

