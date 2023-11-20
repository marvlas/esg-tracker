import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function HomePage(props) {

    const apiDataUrl = import.meta.env.VITE_API_URL

    const [companies, setCompanies ] = useState(null)
    const [ toggle, setToggle] = useState(false)
    const getApiData = () => {
        axios
            .get(apiDataUrl)
            .then( response => {
                //console.log(response.data)
                setCompanies(response.data)
            })
            .catch( error => {
                console.log('not receiving data')
                console.log(error)
            })
    }

    useEffect( () => {
        getApiData()
    }, [])

    

    return(
        <>
            <Link to="/favourites">Favourites</Link>
            <h1>This is the home page</h1>
            <button onClick={() => setToggle(!toggle)}> hello</button>
            {toggle && (<h2>now I'm here</h2>)}
            <main className="companies-list">
                {companies === null
                    ? <p>Loading...</p>
                    : companies.map( elm => {
                        return(
                            <div className="company-card" key={elm.id}>
                                <Link to={`/company/${elm.id}`}>
                                    {<img src={elm.logo} alt={elm.name}/>}
                                </Link>
                                <h3>{elm.name}</h3>
                                <h4>{elm.marketCap}</h4>
                                <div className="location">
                                    {elm.location.country}
                                </div>
                                <div className="esg">
                                    <div>{elm.esg.e_index}</div>
                                    <div>{elm.esg.s_index}</div>
                                    <div>{elm.esg.g_index}</div>
                                </div>
                                <button onClick={() => { props.callbackAddFavourites(elm.id) }}>
                                    Add to my favourites
                                </button>
                            </div>
                        )
                    })
                } 
            </main>
        </>
    )
}

export default HomePage