import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { PlannerState } from '../types'

const initialState: PlannerState = {
  selectedVenues: {},
  selectedAddOns: {},
  selectedMeals: {},
  peopleCount: 0,
}

const plannerSlice = createSlice({
  name: 'planner',
  initialState,
  reducers: {
    incrementVenue: (state, action: PayloadAction<string>) => {
      const id = action.payload
      state.selectedVenues[id] = (state.selectedVenues[id] || 0) + 1
    },
    decrementVenue: (state, action: PayloadAction<string>) => {
      const id = action.payload
      if (state.selectedVenues[id] > 0) {
        state.selectedVenues[id] -= 1
      }
    },
    incrementAddOn: (state, action: PayloadAction<string>) => {
      const id = action.payload
      state.selectedAddOns[id] = (state.selectedAddOns[id] || 0) + 1
    },
    decrementAddOn: (state, action: PayloadAction<string>) => {
      const id = action.payload
      if (state.selectedAddOns[id] > 0) {
        state.selectedAddOns[id] -= 1
      }
    },
    toggleMeal: (state, action: PayloadAction<string>) => {
      const id = action.payload
      state.selectedMeals[id] = !state.selectedMeals[id]
    },
    setPeopleCount: (state, action: PayloadAction<number>) => {
      state.peopleCount = action.payload
    },
  },
})

export const {
  incrementVenue,
  decrementVenue,
  incrementAddOn,
  decrementAddOn,
  toggleMeal,
  setPeopleCount,
} = plannerSlice.actions

export default plannerSlice.reducer
