import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ESGIndicator from "../components/ESGIndicator"

function HomePage(props) {

    const apiDataUrl = import.meta.env.VITE_API_URL

    const [companies, setCompanies ] = useState(null)

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
            <div className="centered">
                <h1>Companies</h1>
            </div>

            <main className="companies-list container">
                {companies === null
                    ? <p>Loading...</p>
                    : companies.map( elm => {
                        return(
                            <div className="company-card" key={elm.id}>
                                <Link to={`/company/${elm.id}`}>
                                    {<img src={elm.logo} alt={elm.name}/>}
                                </Link>
                                <div className="company-card-info">
                                    <div>
                                        <h3>{elm.name}</h3>
                                        <div><span>Market Cap:</span>${elm.marketCap.toLocaleString()}</div>
                                    </div>
                                    <h4 className="location">{elm.location.country}</h4>
                                </div>
                                <div className="esg">
                                    <div>
                                        <p>Environmental score:</p>
                                        <ESGIndicator score={elm.esg.e_index} />
                                    </div>
                                    <div>
                                        <p>Social score:</p>
                                        <ESGIndicator score={elm.esg.s_index} />
                                    </div>
                                    <div>
                                        <p>Governance score:</p>
                                        <ESGIndicator score={elm.esg.g_index} />
                                    </div>
                                </div>
                                <div className="company-card-button-wrap">
                                    <button onClick={() => { props.callbackAddFavourites(elm.id) }}>
                                        Add to my favourites
                                    </button>
                                </div>
                            </div>
                        )
                    })
                } 
            </main>
        </>
    )
}

export default HomePage