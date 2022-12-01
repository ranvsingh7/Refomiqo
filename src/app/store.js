
import dropdownReducer from '../components/Dropdown/dropdownSlice'
import subBtnReducer from '../components/Dropdown/subBtnSlice'

// export const store = configureStore({
//     reducer: {
//         dropdown: dropdownReducer 
//     },
// })

import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {
    dropdownBtn: dropdownReducer,
    subBtn: subBtnReducer
  }
})