import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function AddCompanyPage() {

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
const [latitude, setLatitude] = useState("")
const [longitude, setLongitude] = useState("")

const navigate = useNavigate()

const handleSubmit = (e) => {
    e.preventDefault()

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
            latitude: latitude,
            longitude: longitude
        },
        industry: industry,
        esg: {
            e_index: parseInt(eScore),
            s_index: parseInt(sScore),
            g_index: parseInt(gScore)
        },
        marketCap: marketCap  
    }

    axios.post(apiDataUrl, requestBody)
        .then((response) => {
            navigate("/")
        })
        .catch((error) => {
            console.log(error)
        })
}

    return (
        <main className="form-container">

            <h1>Add Company</h1>

            <form onSubmit={handleSubmit}>

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
                        type="text"
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

           
                <label>
                    Address: country 
                    <input
                        type="text"
                        name="country"
                        required={true}
                        value={addressCountry}
                        onChange={(e) => { setAddressCountry(e.target.value) }} />
                </label>

                
                <label>
                    Address: region 
                    <input
                        type="text"
                        name="region"
                        required={true}
                        value={addressRegion}
                        onChange={(e) => { setAddressRegion(e.target.value) }} />
                </label>

                <label>
                    Address: latitude
                    <input
                        type="number"
                        name="latitude"
                        required={true}
                        value={latitude}
                        onChange={(e) => { setLatitude(e.target.value) }} />
                </label>

                <label>
                    Address: longitude
                    <input
                        type="number"
                        name="longitude"
                        required={true}
                        value={longitude}
                        onChange={(e) => { setLongitude(e.target.value) }} />
                </label>

                <label>
                    Industry
                    <input
                        type="text"
                        name="industry"
                        required={true}
                        value={industry}
                        onChange={(e) => { setIndustry(e.target.value) }} />
                </label>

              
                <label>
                    Environmental Score
                    <input
                        type="text"
                        name="env score"
                        required={true}
                        value={eScore}
                        onChange={(e) => { setEScore(e.target.value) }} />
                </label>

         
                <label>
                    Social Score
                    <input
                        type="text"
                        name="soc score"
                        required={true}
                        value={sScore}
                        onChange={(e) => { setSScore(e.target.value) }} />
                </label>

             
                <label>
                    Governance Score
                    <input
                        type="text"
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

                <button>Submit</button>

            </form>
        </main>
    )
}

export default AddCompanyPage