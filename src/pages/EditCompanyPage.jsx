import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

function EditCompanyPage() {

    const apiDataUrl = import.meta.env.VITE_API_URL

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [logo, setLogo] = useState("")
    const [addressStreet, setAddressStreet] = useState("")
    const [addressPostcode, setAddressPostcode] = useState("")
    const [addressCity, setAddressCity] = useState("")
    const [addressCountry, setAddressCountry] = useState("")
    const [addressRegion, setAddressRegion] = useState("")
    const [industry, setIndustry] = useState("")
    const [eScore, setEScore] = useState("")
    const [sScore, setSScore] = useState("")
    const [gScore, setGScore] = useState("")
    const [marketCap, setMarketCap] = useState("")

    const { id } = useParams()
    const navigate = useNavigate()

useEffect(() => {
    axios.get(apiDataUrl + "/" + id)
    .then((response) => {
        const oneCompany = response.data
        setName(oneCompany.name)
        setDescription(oneCompany.description)
        setLogo(oneCompany.logo)
        setAddressStreet(oneCompany.location.address)
        setAddressPostcode(oneCompany.location.postcode)
        setAddressCity(oneCompany.location.city)
        setAddressCountry(oneCompany.location.country)
        setAddressRegion(oneCompany.location.region)
        setIndustry(oneCompany.industry)
        setEScore(oneCompany.esg.e_index)
        setSScore(oneCompany.esg.s_index)
        setGScore(oneCompany.esg.g_index)
        setMarketCap(oneCompany.marketCap)
    })
    .catch((error) => {
        console.log(error)
    })
}, [id])

const handleFormSubmit = (e) => {
    e.preventDefault();
    
    const requestBody = {
        name: name,
        description: description,
        logo: logo,
        location: {
            region: addressRegion,
            country: addressCountry,
            city: addressCity,
            address: addressStreet,
            postcode: addressPostcode,
        },
        industry: industry,
        esg: {
            e_index: eScore,
            s_index: sScore,
            g_index: gScore,
        },
        marketCap: marketCap  
    }
    
    axios.put(apiDataUrl + "/" + id, requestBody)
    .then((response) => {
        navigate(`/company/${id}`)
    })
}



    return (
        <main className="form-container">
        <h1>Edit Project</h1>

            <form onSubmit={handleFormSubmit}>

                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        required={true}
                        value={name}
                        onChange={(e) => { setName(e.target.value) }} />
                </label>

                <label>
                    Description
                    <input
                        type="text"
                        name="description"
                        required={true}
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }} />
                </label>

                <label>
                    Logo (optional)
                    <input
                        type="url"
                        name="logo"
                        value={logo}
                        onChange={(e) => { setLogo(e.target.value) }} />
                </label>

                <label>
                    Address: street and number
                    <input
                        type="text"
                        name="street"
                        required={true}
                        value={addressStreet}
                        onChange={(e) => { setAddressStreet(e.target.value) }} />
                </label>

                <label>
                    Address: postcode
                    <input
                        type="text"
                        name="postcode"
                        required={true}
                        value={addressPostcode}
                        onChange={(e) => { setAddressPostcode(e.target.value) }} />
                </label>

                <label>
                    Address: city
                    <input
                        type="text"
                        name="city"
                        required={true}
                        value={addressCity}
                        onChange={(e) => { setAddressCity(e.target.value) }} />
                </label>

                {/* Drop down menu */}
                <label>
                    Address: country
                    <input
                        type="text"
                        name="country"
                        required={true}
                        value={addressCountry}
                        onChange={(e) => { setAddressCountry(e.target.value) }} />
                </label>

                {/* Drop down menu here */}
                <label>
                    Address: region
                    <input
                        type="text"
                        name="region"
                        required={true}
                        value={addressRegion}
                        onChange={(e) => { setAddressRegion(e.target.value) }} />
                </label>

                {/* Drop down menu here */}
                <label>
                    Industry
                    <input
                        type="text"
                        name="industry"
                        required={true}
                        value={industry}
                        onChange={(e) => { setIndustry(e.target.value) }} />
                </label>

                {/* Drop down menu here */}
                <label>
                    Environmental Score
                    <input
                        type="number"
                        name="env score"
                        required={true}
                        value={eScore}
                        onChange={(e) => { setEScore(e.target.value) }} />
                </label>

                {/* Drop down menu here */}
                <label>
                    Social Score
                    <input
                        type="number"
                        name="soc score"
                        required={true}
                        value={sScore}
                        onChange={(e) => { setSScore(e.target.value) }} />
                </label>

                {/* Drop down menu here */}
                <label>
                    Governance Score
                    <input
                        type="number"
                        name="gov score"
                        required={true}
                        value={gScore}
                        onChange={(e) => { setGScore(e.target.value) }} />
                </label>

                <label>
                    Market Capitalization
                    <input
                        type="number"
                        name="market cap"
                        required={true}
                        value={marketCap}
                        onChange={(e) => { setMarketCap(e.target.value) }} />
                </label>

                <button>Update Company</button>
            </form>

            

        </main>

    )
}

export default EditCompanyPage