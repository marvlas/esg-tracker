import axios from "axios"
import { useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import Filter from "../components/Filter"
import ESGIndicator from "../components/ESGIndicator"

function HomePage(props) {
    
    const apiDataUrl = import.meta.env.VITE_API_URL
    const [companies, setCompanies ] = useState(null)
    const [displayedCompanies, setDisplayedCompanies ] = useState(null)
    
    // fetch API companies data

    const getApiData = () => {
        axios
            .get(apiDataUrl)
            .then( response => {
                setCompanies(response.data)
                setDisplayedCompanies(response.data)
            })
            .catch( error => {
                console.log('not receiving data')
                console.log(error)
            })
    }

    useEffect( () => {
        getApiData()
    }, [])

    // filter companies
    const filterCompanies = (countryName) => {
        if(countryName !== "all") {
            const filteredCompanies = companies.filter((elm) => {
                return elm.location.country === countryName
            })
            setDisplayedCompanies(filteredCompanies)
        } else {
            setDisplayedCompanies(companies)
        }
    }


    return(
        <>
            <div className="centered">
                <h1>Companies</h1>
            </div>

            <Filter companies={companies} filterCompanies={filterCompanies} />


            <main className="companies-list container">
                {displayedCompanies === null
                    ? <p>Loading...</p>
                    : displayedCompanies.map( elm => {
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