import { createStore, combineReducers } from 'redux'

import parkingSlotsReducer from './reducers/parkingSlotsReducer';

const rootReducer = combineReducers({
    parkingSlotsReducer,
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;