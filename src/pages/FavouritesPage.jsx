import { Link } from "react-router-dom"
import deleteIcon from "../assets/delete.svg"

function FavouritesPage(props){

    return (
        <div className="container">
            <h1>My favourites</h1>
            <main className="companies-list favourites">
                {props.favouritesCompanies.map(elm => {
                    return(
                        <div className="company-card" key={elm.id}>
                            <Link className="company-logo" to={`/company/${elm.id}`} >
                                <img src={elm.logo} alt={elm.name} />
                            </Link>
                            <h2>{elm.name}</h2>
                            <div className="company-card-buttons-wrap">
                                <button onClick={() =>{props.callbackToDelete(elm.id)}}><img src={deleteIcon} alt="delete" /></button>
                                <Link className="btn" to={`/company/${elm.id}`}>View company</Link>
                            </div>

                        </div>
                    )
                })}
            </main>
        </div>
    )
}

export default FavouritesPage