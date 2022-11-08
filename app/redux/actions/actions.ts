export const changeNoOfParkingSlotInput = (param: string) => {
    return {
        type: 'CHANGE_INPUTTEXT',
        payload: param
    }
}

export const produceParkingSlots = (param: number) => {
    return {
        type: 'PRODUCE_PARKING_SLOTS',
        payload: param
    }
}

export const changeModalVisibility = (param: boolean) => {
    return {
        type: 'CHANGE_MODAL_VISIBILITY',
        payload: param
    }
}

export const changeVehicleNoInput = (param: string) => {
    return {
        type: 'CHANGE_VEHICLE_N0_INPUT',
        payload: param
    }
}

export const addVehicle = (param: string) => {
    return {
        type: 'ADD_VEHICLE',
        payload: param
    }
}

export const generateBill = (param: number) => {
    return {
        type: 'GENERATE_BILL',
        payload: param
    }
}


export const removeVehicle = (param: number) => {
    return {
        type: 'REMOVE_VEHICLE',
        payload: param
    }
}
