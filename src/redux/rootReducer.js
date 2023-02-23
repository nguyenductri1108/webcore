import { createSlice } from '@reduxjs/toolkit'
export const rootSlice = createSlice({
  name: 'root',
  initialState: {
    isMobile: false,
  },
  reducers: {
    setIsMobile: (state, action) => {
      state.isMobile = action.payload
    },
  }
})

export const { setIsMobile } = rootSlice.actions

export default rootSlice.reducer