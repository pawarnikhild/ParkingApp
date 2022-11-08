import { createStore, combineReducers } from 'redux'

import noOfParkingSlotsInputReducer from './reducers/noOfParkingSlotsInputReducer'
import modalReducer from './reducers/modalReducer';
import parkingSlotsReducer from './reducers/parkingSlotsReducer';
import registrationVehicleNoInputReducer from './reducers/registrationVehicleNoInputReducer';

const rootReducer = combineReducers({
    noOfParkingSlotsInputReducer,
    modalReducer,
    parkingSlotsReducer,
    registrationVehicleNoInputReducer,
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;