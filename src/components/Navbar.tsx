// Navbar.tsx example
interface NavbarProps {
  currentPage: string
  setCurrentPage: (page: 'venues' | 'addons' | 'meals') => void
  onShowDetails: () => void
}

export default function Navbar({ currentPage, setCurrentPage, onShowDetails }: NavbarProps) {
  return (
    <nav>
      <h1>Birthday Planner</h1>
      <div className="nav-links">
        <button onClick={() => setCurrentPage('venues')} className={currentPage === 'venues' ? 'active' : ''}>Venues</button>
        <button onClick={() => setCurrentPage('addons')} className={currentPage === 'addons' ? 'active' : ''}>Add-ons</button>
        <button onClick={() => setCurrentPage('meals')} className={currentPage === 'meals' ? 'active' : ''}>Meals</button>
        <button className="show-details-btn" onClick={onShowDetails}>Show Details</button>
      </div>
    </nav>
  )
}

