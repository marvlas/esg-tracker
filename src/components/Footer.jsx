import "../components/Footer.css"
import emailIcon from "../assets/send.svg"

function Footer () {
    return(
    <>
        <footer className="Footer">
            <div className="logo">ESGtracker</div>
            <a href="mailto:contact@esgtracker.com"><img className="email-icon" src={emailIcon} />Contact us</a>
            <div>© 2023 ESGtracker</div>
        </footer>
    </>)
}

export default Footer