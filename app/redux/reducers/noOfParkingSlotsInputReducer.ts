// const initialState = {
//     value: ""
// };

const initialState = "";

const noOfParkingSlotsInputReducer = (state = initialState, action: {type: string, payload: string}) => {
    switch(action.type) {
        case 'CHANGE_INPUTTEXT': return state = action.payload;
        // case 'CHANGE_INPUTTEXT': return Object.assign({}, state, {value: action.payload})
        default: return state;

    }

}
export default noOfParkingSlotsInputReducer;