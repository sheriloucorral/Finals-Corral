import { useState } from 'react'
import Navbar from './components/Navbar'
import VenueSelection from './components/VenueSelection'
import AddonsSelection from './components/AddonsSelection'
import MealsSelection from './components/MealsSelection'
import DetailsModal from './components/DetailsModal'
import LandingPage from './components/LandingPage'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'venues' | 'addons' | 'meals'>('landing')
  const [showModal, setShowModal] = useState(false)

  if (currentPage === 'landing') {
    return <LandingPage onStart={() => setCurrentPage('venues')} />
  }

  return (
    <div className="app">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} onShowDetails={() => setShowModal(true)} />
      
      <main>
        {currentPage === 'venues' && <VenueSelection />}
        {currentPage === 'addons' && <AddonsSelection />}
        {currentPage === 'meals' && <MealsSelection />}
      </main>

      {showModal && <DetailsModal onClose={() => setShowModal(false)} />}
    </div>
  )
}

export default App
