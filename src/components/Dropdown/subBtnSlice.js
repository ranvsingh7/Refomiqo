import { createSlice } from '@reduxjs/toolkit'

export const subBtnSlice = createSlice({
  name: 'subBtn',
  initialState: {
    active: false
  },
  reducers: {
    active: state => {
      state.active= !state.isActive
    },
    notActive: state => {
      state.active=false
    }
  }
})

export const { active, notActive } = subBtnSlice.actions

export default subBtnSlice.reducer