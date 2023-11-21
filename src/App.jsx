import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CompanyPage from './pages/CompanyPage'
import EditCompanyPage from './pages/EditCompanyPage'
import AddCompanyPage from './pages/AddCompanyPage'
import FavouritesPage from './pages/FavouritesPage'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  // import API data
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


  // add favourite companies
  const [favouritesCompanies, setFavouritesCompanies] = useState([])

  const addToFavourites = (companyId) => {

      const selectedCompany = companies.find((company) => company.id === companyId);
      const alreadyAdded = favouritesCompanies.some(company => company.id === companyId)

      if (selectedCompany && !alreadyAdded ) {
          setFavouritesCompanies([selectedCompany, ...favouritesCompanies])
      }

  }


  // delete company from favourites page
  const deleteCompany = (id) => {
    
    const newList =favouritesCompanies.filter((companyDetails) => {
        return companyDetails.id !== id
    })
    setFavouritesCompanies(newList)
}




  return (
    <>

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage callbackAddFavourites={addToFavourites} />} />
        <Route path="/company/:id" element={<CompanyPage />} />
        <Route path="/company/:id/edit" element={<EditCompanyPage />} />
        <Route path="/company/add" element={<AddCompanyPage />} />
        <Route path="/favourites/" element={<FavouritesPage favouritesCompanies={favouritesCompanies} callbackToDelete={deleteCompany}/>} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
