import axios from "axios"
import { useEffect, useState } from "react"

function HomePage() {

    const apiDataUrl = import.meta.env.VITE_API_URL

    const [companies, setCompanies ] = useState([])

    const getApiData = () => {
        axios
            .get(apiDataUrl)
            .then( response => {
                console.log(response.data)
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
            <h1>This is the home page</h1>
            {companies.map( elm => {
                return(
                    <div className="company" key={elm.id}>
                        {<img src={elm.logo} alt={elm.name}/>}
                        <h3>{elm.name}</h3>
                        <h4>{elm.marketCap}</h4>
                        <p>{elm.description}</p>
                        <div className="location">
                            <div>{elm.location.country}</div>
                        </div>
                        <div className="esg">
                            <div>{elm.esg.e_index}</div>
                            <div>{elm.esg.s_index}</div>
                            <div>{elm.esg.g_index}</div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default HomePage