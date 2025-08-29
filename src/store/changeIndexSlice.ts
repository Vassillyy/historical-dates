import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface SelectionIndex {
  index: number
}

const initialState: SelectionIndex = {
  index: 0
}

const selectionSlice = createSlice({
  name: 'selection',
  initialState,
  reducers: {
    changeIndex: (state, action: PayloadAction<number>) => {
      state.index = action.payload
    }
  }
})

export const {changeIndex} = selectionSlice.actions
export default selectionSlice.reducer
