export const produceParkingSlots = (param: number) => {
    return {
        type: 'PRODUCE_PARKING_SLOTS',
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
