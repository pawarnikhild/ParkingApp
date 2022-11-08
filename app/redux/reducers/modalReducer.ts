const initialState = false;

const modalReducer = (state = initialState, action: { type: string, payload: any}) => {
    switch(action.type) {
        case 'CHANGE_MODAL_VISIBILITY': return action.payload;
        default: return state;
    }
}

export default modalReducer;