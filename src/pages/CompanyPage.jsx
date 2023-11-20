import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

function CompanyPage() {

    const apiDataUrl = import.meta.env.VITE_API_URL

    const [company, setCompany] = useState(null)

    console.log(company)
   
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
                : <div className="company">
                    <h1>{company.name}</h1>
                    <img src={company.logo} />
                    <p>{company.description}</p>
                    <h2>{company.marketCap}</h2>
                    <div className="esg">
                        <div>{company.esg.e_index}</div>
                        <div>{company.esg.s_index}</div>
                        <div>{company.esg.g_index}</div>
                    </div>
                    <div className="location">
                        <p>{company.location.address}</p>
                        <p>{company.location.postcode}</p>
                        <p>{company.location.city}</p>
                        <p>{company.location.country}</p>
                        <p>{company.location.region}</p>
                    </div>
                </div>
            }

            <Link to={`/company/${id}/edit`}>
                <button>Edit Company</button>
            </Link>

            <button onClick={deleteCompany}>Delete Company</button>

        </>
    )
}

export default CompanyPage