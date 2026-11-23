
import { useSelector, useDispatch } from 'react-redux';
import { incrementVenue, decrementVenue } from '../features/plannerSlice';
import { venues } from '../data';

export default function VenueSelection() {
  const selected = useSelector((state: any) => state.planner.selectedVenues);
  const dispatch = useDispatch();

  return (
    <section className="section">
      <h2 className="section-title">Venue Room Selection</h2>
      <div className="cards-grid">
        {venues.map((venue) => (
          <div key={venue.id} className="venue-card">
            <img src={venue.image} alt={venue.name} className="card-img" />
            <h3>{venue.name}</h3>
            <p>Capacity: {venue.capacity}</p>
            <p>${venue.price} each</p>
            <div className="counter">
              <button onClick={() => dispatch(decrementVenue(venue.id))}>-</button>
              <span>{selected[venue.id] || 0}</span>
              <button onClick={() => dispatch(incrementVenue(venue.id))}>+</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}