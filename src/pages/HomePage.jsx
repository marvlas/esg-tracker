import axios from "axios"
import { useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import Filter from "../components/Filter"
import ESGIndicator from "../components/ESGIndicator"
import heartIcon from "../assets/hearts-suit.svg"
import MapComponent from "../components/MapComponent"
import Intro from "../components/Intro"

function HomePage(props) {
    
    const apiDataUrl = import.meta.env.VITE_API_URL
    const [companies, setCompanies ] = useState([])
    const [displayedCompanies, setDisplayedCompanies ] = useState(null)
    const [countryFilter, setCountryFilter] = useState('all')
    const [industryFilter, setIndustryFilter] = useState('all')
    const [esgFilter, setEsgFilter] = useState('all')
    const [sortOrderTotal, setSortOrderTotal] = useState('asc')
    const [sortOrder, setSortOrder] = useState({e_index:'asc', s_index: 'asc', g_index: 'asc'})
    
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

    // Sort by the total ESG score
    const sortByESG = () => {
        const sortedCompanies = [...displayedCompanies]
        if (sortOrderTotal === 'asc') {
            sortedCompanies.sort((a, b) =>  (a.esg.e_index + a.esg.s_index + a.esg.g_index) / 3 -
            (b.esg.e_index + b.esg.s_index + b.esg.g_index) / 3)
            setSortOrderTotal('dsc')
        } else {
            sortedCompanies.sort(
                (a, b) =>
                    (b.esg.e_index + b.esg.s_index + b.esg.g_index) / 3 -
                    (a.esg.e_index + a.esg.s_index + a.esg.g_index) / 3
            );
            setSortOrderTotal('asc');
        }
        setDisplayedCompanies(sortedCompanies)
    }

    // Sort by the individual ESG scores 
    const sortByIndividualESG = (scoreType) => {
        const sortedCompanies = [...displayedCompanies]

        sortedCompanies.sort((a, b) => {
            const scoreA = a.esg[scoreType];
            const scoreB = b.esg[scoreType];
      
            return sortOrder[scoreType] === 'asc' ? scoreA - scoreB : scoreB - scoreA;
          });
      
          setDisplayedCompanies(sortedCompanies);
      
          setSortOrder((prevSortOrder) => ({...prevSortOrder,[scoreType]: prevSortOrder[scoreType] === 'asc' ? 'desc' : 'asc',}));
    }




    // Sort by the total ESG score
    const sortByESG = () => {
        const sortedCompanies = [...displayedCompanies]
        if (sortOrderTotal === 'asc') {
            sortedCompanies.sort((a, b) =>  (a.esg.e_index + a.esg.s_index + a.esg.g_index) / 3 -
            (b.esg.e_index + b.esg.s_index + b.esg.g_index) / 3)
            setSortOrderTotal('dsc')
        } else {
            sortedCompanies.sort(
                (a, b) =>
                    (b.esg.e_index + b.esg.s_index + b.esg.g_index) / 3 -
                    (a.esg.e_index + a.esg.s_index + a.esg.g_index) / 3
            );
            setSortOrderTotal('asc');
        }
        setDisplayedCompanies(sortedCompanies)
    }

    // Sort by the individual ESG scores 
    const sortByIndividualESG = (scoreType) => {
        const sortedCompanies = [...displayedCompanies]

        sortedCompanies.sort((a, b) => {
            const scoreA = a.esg[scoreType];
            const scoreB = b.esg[scoreType];
      
            return sortOrder[scoreType] === 'asc' ? scoreA - scoreB : scoreB - scoreA;
          });
      
          setDisplayedCompanies(sortedCompanies);
      
          setSortOrder((prevSortOrder) => ({...prevSortOrder,[scoreType]: prevSortOrder[scoreType] === 'asc' ? 'desc' : 'asc',}));
    }




    const countriesFilter=(companiesArray,countryName)=>companiesArray.filter(company=>company.location.country===countryName)
    const industriesFilter=(companiesArray,industryName)=>companiesArray.filter(company=>company.industry===industryName)
    const esgFilterFunc=(companiesArray,esgValue)=>{
        const calcAverage = elm => Math.round((elm.esg.e_index + elm.esg.s_index + elm.esg.g_index) / 3)
        return companiesArray.filter(elm => {
            const esgIndex = calcAverage(elm)
            switch (esgValue) {
                case "90-100":
                    return esgIndex > 90 && esgIndex <= 100 
                case "80-90":
                    return esgIndex > 80 && esgIndex <= 90
                case "70-80":
                    return esgIndex > 70 && esgIndex <= 80
                case "60-70":
                    return esgIndex > 60 && esgIndex <= 70
                case "50-60":
                    return esgIndex > 50 && esgIndex <= 60
                case "40-50":
                    return esgIndex > 40 && esgIndex <= 50
                case "0-40":
                    return esgIndex > 0 && esgIndex <= 40
            }
        })
    }

    // filter countries
    const filterCountries = (countryName) => {
        const shouldAddCompanyFilter=industryFilter!=="all"
        const shouldAddEsgFilter=esgFilter!=="all"
  
        console.log(shouldAddCompanyFilter,shouldAddEsgFilter)
        if(countryName !== "all") {
            setCountryFilter(countryName)
            let filteredCompanies = countriesFilter(companies,countryName)
            console.log(filteredCompanies,"after country filter")
            if(shouldAddCompanyFilter){
                filteredCompanies=industriesFilter(filteredCompanies,industryFilter)
            }
            console.log(filteredCompanies,"after compnay filter")
            if(shouldAddEsgFilter){
                filteredCompanies=esgFilterFunc(filteredCompanies,esgFilter)
            }
            console.log(filteredCompanies,"after esg filter")
            setDisplayedCompanies(filteredCompanies)
        } else {
            setCountryFilter('all')
            setDisplayedCompanies(companies)
        }
    }

    // filter industries
    const filterIndustries = (industryName) => {
        const shouldAddCountryFilter=countryFilter!=="all"
        const shouldAddEsgFilter=esgFilter!=="all"
        if(industryName !== "all") {
            setIndustryFilter(industryName)
            let filteredCompanies = industriesFilter(companies,industryName)
            if(shouldAddEsgFilter){
                filteredCompanies=esgFilterFunc(filteredCompanies,esgFilter)
            }
            if(shouldAddCountryFilter){
                filteredCompanies=countriesFilter(filteredCompanies,countryFilter)
            }
            setDisplayedCompanies(filteredCompanies)
        } else {
            setIndustryFilter('all')
            setDisplayedCompanies(companies)
        }
    }

    // filter ESG
    const filterEsg = (esgValue) => {
            const shouldAddCountryFilter=countryFilter!=="all"
            const shouldAddIndustryFilter=industryFilter!=="all"

            if (esgValue !== "all") {
                setEsgFilter(esgValue)
                let filteredCompanies = esgFilterFunc(companies, esgValue)
                if(shouldAddCountryFilter){
                    filteredCompanies=countriesFilter(filteredCompanies,countryFilter)
                }
                if(shouldAddIndustryFilter){
                    filteredCompanies=industriesFilter(filteredCompanies,industryFilter)
                }
                setDisplayedCompanies(filteredCompanies)
            } else {
                setEsgFilter('all')
                setDisplayedCompanies(companies)
            }
        }

    return(
        <>

            <Intro />


            <Filter 
                companies={companies} filterCountries={filterCountries} 
                filterIndustries={filterIndustries} 
                filterEsg={filterEsg}
            />

            <button onClick={() => sortByIndividualESG('e_index')}>Sort by Environmental Score</button>
            <button onClick={() => sortByIndividualESG('s_index')}>Sort by Social Score</button>
            <button onClick={() => sortByIndividualESG('g_index')}>Sort by Governance Score</button>

            <button onClick={sortByESG}>Sort by total ESG Score</button>

            <main className="companies-list container">
                { displayedCompanies === null
                    ? <p>Loading...</p>
                    : displayedCompanies.map( elm => {
                        return(
                            <div className="company-card" key={elm.id}>
                                <div className="company-card-info">
                                    <div>
                                        <h3>{elm.name}</h3>
                                        <h4><span>Market Cap:</span>${elm.marketCap.toLocaleString()}</h4>
                                        <h4><span>Country:</span>{elm.location.country}</h4>
                                        <h4><span>Industry:</span>{elm.industry}</h4>
                                    </div>
                                    <Link className="company-logo" to={`/company/${elm.id}`}>
                                        {<img src={elm.logo} alt={elm.name}/>}
                                    </Link>
                                </div>
                                <div className="esg">
                                    <div>
                                        <h5>Environmental score:</h5>
                                            <ESGIndicator score={elm.esg.e_index} />
                                        <h5>Social score:</h5>
                                            <ESGIndicator score={elm.esg.s_index} />
                                        <h5>Governance score:</h5>
                                            <ESGIndicator score={elm.esg.g_index} />
                                    </div>
                                    <div className="average-score">
                                        <div>Weighted average ESG score:</div>
                                        <div className="value">{Math.round((elm.esg.e_index + elm.esg.s_index + elm.esg.g_index)/3)}</div>
                                    </div>
                                </div>
                                <div className="company-card-buttons-wrap">
                                    <button onClick={() => { props.callbackAddFavourites(elm.id) }}>
                                        <img src={heartIcon} alt="heart-icon" />
                                    </button>
                                    <Link className="btn" to={`/company/${elm.id}`}>View company</Link>
                                </div>
                            </div>
                        )
                    })
                } 
            </main>

            <MapComponent companies={companies} />

        </>
    )
}

export default HomePage