import { Link } from "react-router-dom"

Link
function FavouritesPage(props){
    console.log(props.favouritesCompanies)
    return (
        <div className="container">
            <h1>This is the favourites page</h1>
            <main className="companies-list favourites">
                {props.favouritesCompanies.map(elm => {
                    return(
                        <Link to={`/company/${elm.id}`} className="company-card">
                            <img src={elm.logo} alt={elm.name} />
                            <h2>{elm.name}</h2>
                        </Link>
                    )
                })}
            </main>
        </div>
    )
}

export default FavouritesPage