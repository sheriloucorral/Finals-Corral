
import { useSelector, useDispatch } from 'react-redux';
import { incrementAddOn, decrementAddOn } from '../features/plannerSlice';
import { addOns } from '../data';

export default function AddonsSelection() {
  const selected = useSelector((state: any) => state.planner.selectedAddOns);
  const dispatch = useDispatch();

  return (
    <section className="section">
      <h2 className="section-title">Add-ons</h2>
      <div className="cards-grid">
        {addOns.map((addOn) => (
          <div key={addOn.id} className="addon-card">
            <img src={addOn.image} alt={addOn.name} className="card-img" />
            <h4>{addOn.name}</h4>
            <p>${addOn.price}</p>
            <div className="counter">
              <button onClick={() => dispatch(decrementAddOn(addOn.id))}>-</button>
              <span>{selected[addOn.id] || 0}</span>
              <button onClick={() => dispatch(incrementAddOn(addOn.id))}>+</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
