import { useSelector, useDispatch } from 'react-redux'
import { toggleMeal, setPeopleCount } from '../features/plannerSlice'
import { meals } from '../data'
import type { RootState } from '../types'

export default function MealsSelection() {
  const { selectedMeals, peopleCount } = useSelector((state: RootState) => state.planner)
  const dispatch = useDispatch()

  const total = Object.entries(selectedMeals).reduce((sum, [id, selected]) => {
    if (selected) {
      const meal = meals.find(m => m.id === id)
      if (meal) sum += meal.pricePerPerson * peopleCount
    }
    return sum
  }, 0)

  return (
    <section className="section">
      <div className="section-title-bar">Foods Selection</div>
      
      <div className="meals-box">
        <div className="people-row">
          <label>Number of People:</label>
          <input
            type="number"
            value={peopleCount}
            onChange={(e) => dispatch(setPeopleCount(Number(e.target.value) || 0))}
            min="1"
          />
        </div>

        <div className="meal-options">
          {meals.map((meal) => (
            <label key={meal.id} className="meal-option">
              <input
                type="checkbox"
                checked={selectedMeals[meal.id] || false}
                onChange={() => dispatch(toggleMeal(meal.id))}
              />
              {meal.name} - ₱{meal.pricePerPerson}/person
            </label>
          ))}
        </div>

        <div className="meal-total">
          Total Food Cost: ₱{total.toLocaleString()}
        </div>
      </div>
    </section>
  )
}
