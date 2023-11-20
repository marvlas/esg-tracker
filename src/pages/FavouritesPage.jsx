import { Link } from "react-router-dom"

Link
function FavouritesPage(props){
    console.log(props.favouritesCompanies)
    return (
        <>
            <h1>This is the favourites page</h1>
            <main className="companies-list">
                {props.favouritesCompanies.map(elm => {
                    return(
                        <Link to={`/company/${elm.id}`} className="company-card">
                            <h2>{elm.name}</h2>
                            <img src={elm.logo} alt={elm.name} />
                        </Link>
                    )
                })}
            </main>
        </>
    )
}

export default FavouritesPage