import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CompanyPage from './pages/CompanyPage'
import EditCompanyPage from './pages/EditCompanyPage'
import AddCompanyPage from './pages/AddCompanyPage'
import FavouritesPage from './pages/FavouritesPage'

function App() {

  return (
    <>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/company/:id" element={<CompanyPage />} />
    <Route path="/company/:id/edit" element={<EditCompanyPage />} />
    <Route path="/company/:id/add" element={<AddCompanyPage />} />
    <Route path="/favourites/" element={<FavouritesPage />} />
  </Routes>
    </>
  )
}

export default App
