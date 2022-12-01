import { createSlice } from '@reduxjs/toolkit'

export const dropdownBtnSlice = createSlice({
  name: 'dropdownBtn',
  initialState: {
    isActive: false
  },
  reducers: {
    on: state => {
      state.isActive= !state.isActive
    },
    off: state => {
      state.isActive=false
    }
  }
})

export const { on, off } = dropdownBtnSlice.actions

export default dropdownBtnSlice.reducer