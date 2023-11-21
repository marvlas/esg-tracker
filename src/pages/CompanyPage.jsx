import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import ESGIndicator from "../components/ESGIndicator"

function CompanyPage() {

    const apiDataUrl = import.meta.env.VITE_API_URL
    const [company, setCompany] = useState(null)   
    const {id} = useParams()

    const navigate = useNavigate()
    
    const getApiData = () => {
        axios
            .get(apiDataUrl + "/" + id)
            .then( response => {
                console.log(response.data)
                setCompany(response.data)
            })
            .catch( error => {
                console.log('not receiving data')
                console.log(error)
            })
    }

    useEffect( () => {
        getApiData()
    }, [])

    const deleteCompany = () => {
        axios.delete(apiDataUrl + "/" + id)
        .then(() => {
            navigate("/")
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return(
        <>
            {company === null
                ? <p>Loading...</p>
                : <main className="container">
                    <div className="company">
                        <div className="img-wrap">
                            <img src={company.logo} />
                        </div>
                        <div className="info-wrap">
                            <div className="info-wrap-heading">
                                <h1>{company.name}</h1>
                                <h2><span>Market Cap:</span>${company.marketCap.toLocaleString()}</h2>
                            </div>
                            <p>{company.description}</p>
                            <div className="esg">
                                <div>
                                    <p>Environmental score:</p>
                                    <ESGIndicator score={company.esg.e_index} />
                                </div>
                                <div>
                                    <p>Social score:</p>
                                    <ESGIndicator score={company.esg.s_index} />
                                </div>
                                <div>
                                    <p>Governance score:</p>
                                    <ESGIndicator score={company.esg.g_index} />
                                </div>
                            </div>
                            <div className="location">
                                <div>{company.location.address}</div>
                                <div>{company.location.postcode}</div>
                                <div>{company.location.city}</div>
                                <div>{company.location.country}</div>
                                <div>{company.location.region}</div>
                            </div>
                            <div className="buttons-wrap">
                        <Link to={`/company/${id}/edit`}>
                            <button>Edit Company</button>
                        </Link>
                        <button onClick={deleteCompany}>Delete Company</button>
                    </div>
                        </div>
                    </div>


                </main>
            }


        </>
    )
}

export default CompanyPage