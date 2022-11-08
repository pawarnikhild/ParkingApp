const initialState = '';

const registrationVehicleNoInputReducer = (state = initialState, action: { type: string, payload: string }) => {
    switch(action.type) {
        case 'CHANGE_VEHICLE_N0_INPUT': return state = action.payload;
        default: return state;
    }
}

export default registrationVehicleNoInputReducer;