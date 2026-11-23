import type { RootState } from '../app/store';
import { useSelector } from 'react-redux';
import { venues, addOns, meals } from '../data';

interface ModalProps {
  onClose: () => void;
}

interface SummaryItem {
  name: string;
  unitCost: number;
  quantity: number;
  totalCost: number;
}

export default function DetailsModal({ onClose }: ModalProps) {
  const { selectedVenues, selectedAddOns, selectedMeals, peopleCount } = useSelector(
    (state: RootState) => state.planner
  );

  const venueItems: SummaryItem[] = venues
    .filter((v) => selectedVenues[v.id] > 0)
    .map((v) => ({
      name: `${v.name} (Capacity:${v.capacity})`,
      unitCost: v.price,
      quantity: selectedVenues[v.id],
      totalCost: v.price * selectedVenues[v.id],
    }));

  const addOnItems: SummaryItem[] = addOns
    .filter((a) => selectedAddOns[a.id] > 0)
    .map((a) => ({
      name: a.name,
      unitCost: a.price,
      quantity: selectedAddOns[a.id],
      totalCost: a.price * selectedAddOns[a.id],
    }));

  const mealItems: SummaryItem[] = meals
    .filter((m) => selectedMeals[m.id])
    .map((m) => ({
      name: m.name,
      unitCost: m.pricePerPerson,
      quantity: peopleCount,
      totalCost: m.pricePerPerson * peopleCount,
    }));

  const allItems = [...venueItems, ...addOnItems, ...mealItems];
  const grandTotal = allItems.reduce((sum: number, item: SummaryItem) => sum + item.totalCost, 0);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Total Cost for the Event — ${grandTotal}</h2>
        <table className="summary-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Unit Cost</th>
              <th>Quantity</th>
              <th>Total Cost</th>
            </tr>
          </thead>
          <tbody>
            {allItems.length === 0 ? (
              <tr>
                <td colSpan={4} style={{ textAlign: 'center' }}>
                  No items selected yet
                </td>
              </tr>
            ) : (
              allItems.map((item: SummaryItem, index: number) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>${item.unitCost}</td>
                  <td>{item.quantity}</td>
                  <td>${item.totalCost}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <button onClick={onClose} className="close-btn">Close</button>
      </div>
    </div>
  );
}

