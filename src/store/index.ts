import {configureStore} from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useSelector, useDispatch} from 'react-redux'
import changeIndex from './changeIndexSlice'

export const store = configureStore({
  reducer: {
    selection: changeIndex
  }
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
