import { Link } from "react-router-dom"

function FavouritesPage(props){

    return (
        <>
            <h1>This is the favourites page</h1>
            <main className="companies-list">
                {props.favouritesCompanies.map(elm => {
                    return(
                        <>
                            <Link to={`/company/${elm.id}`} className="company-card">
                                <h2>{elm.name}</h2>
                                <img src={elm.logo} alt={elm.name} />
                            </Link>
                            <button onClick={() =>{props.callbackToDelete(elm.id)}}>Remove from favourites</button>
                        </>
                    )
                })}
            </main>
        </>
    )
}

export default FavouritesPage