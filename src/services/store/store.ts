
import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit";
import {mainSlice} from '../reducers/index'
import  {contactsSlice}  from "../reducers/index";
export const rootReducer = combineReducers({
    mainSlice: mainSlice.reducer,
    contactsSlice: contactsSlice.reducer,
})
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}
export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof store.getState>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']