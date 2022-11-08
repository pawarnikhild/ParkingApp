const initialState = {
  parkingSlots: <object[]>[],
  noOfAvailableParkingSlots: <number>0,
};

// const parkingSlot = {
//     id: 0,
//     registeredCar: "",
//     arrivedTime: "",
//     departureTime: "",
//     timeSpent: 0,
//     parkingCharge: 0
// }

const produceParkingSlots = (param: number) => {
  let newArray = [];
  for (let i = 0; i < param; i++) {
    newArray.push({
      id: i,
      registeredVehicle: '',
      arrivedTime: {},
      departureTime: {},
      timeSpent: 0,
      parkingCharge: 0,
      occupied: false,
    });
  }
  initialState.parkingSlots = newArray;
  initialState.noOfAvailableParkingSlots = param;
  // console.log('initialState',initialState);
  return initialState;
};

const addVehicle = (param: string) => {
  // getting random id
  var idArray = [];
  for (var i = 0; i < initialState.parkingSlots.length; i++) {
    if (!initialState.parkingSlots[i].occupied) {
      idArray.push(initialState.parkingSlots[i].id);
    }
  }
//   console.log('idArray', idArray);
  var randomId = idArray[Math.floor(Math.random() * idArray.length)];
//   console.log('randomId', randomId);
  let d = new Date();

  // generating arrived time
  var arrivedDateTime = new Date();
  // var arrivedDateTimeString = arrivedDateTime.toLocaleString();

  let newObject = {
    registeredVehicle: param,
    arrivedTime: arrivedDateTime,
    occupied: true,
  };
  initialState.parkingSlots[randomId] = {
    ...initialState.parkingSlots[randomId],
    ...newObject,
  };
  initialState.noOfAvailableParkingSlots = initialState.noOfAvailableParkingSlots - 1;
//   console.log('Added vehicle', initialState);
  return initialState;
};

const generateBill = (param: number) => {
  var charge = 0;
  var chargeForOneHour = 10;
  // generating departure time
  var departureDateTime = new Date();

  // getting arrivedTime
  var arrivedTimeDateTime = initialState.parkingSlots[param].arrivedTime;
  var Difference_In_Time =
    departureDateTime.getTime() - arrivedTimeDateTime.getTime();
  var Difference_In_Hours = Difference_In_Time / (1000 * 3600);
  if (Difference_In_Hours < 2) {
    charge = 10;
  } else {
    var hoursAfterTowHours = Difference_In_Hours - 2;
    hoursAfterTowHours = Math.ceil(hoursAfterTowHours);
    charge = 10 + hoursAfterTowHours * chargeForOneHour;
  }
//   console.log('arrivedTimeDateTime', arrivedTimeDateTime);
//   console.log('departureDateTime', departureDateTime);
//   console.log('Difference_In_Time', Difference_In_Time);
//   console.log('Difference_In_Hours', Difference_In_Hours);
//   console.log('Math.ceil(Difference_In_Hours)', Math.ceil(Difference_In_Hours));
//   console.log('charge', charge);

  let newObject = {
    departureTime: departureDateTime,
    timeSpent: Math.ceil(Difference_In_Hours),
    parkingCharge: charge,
  };
  initialState.parkingSlots[param] = {
    ...initialState.parkingSlots[param],
    ...newObject,
  };
//   console.log('Bill generated', initialState);
  return initialState;
};

const removeVehicle = (param: number) => {
  let emptyObject = {
    registeredVehicle: '',
    arrivedTime: {},
    departureTime: {},
    timeSpent: 0,
    parkingCharge: 0,
    occupied: false,
  };
  initialState.parkingSlots[param] = {
    ...initialState.parkingSlots[param],
    ...emptyObject,
  };
  initialState.noOfAvailableParkingSlots = initialState.noOfAvailableParkingSlots + 1;
//   console.log('Removed vehicle', initialState);
  return initialState;
};

const ParkingSlotsReducer = (
  state = initialState,
  action: {type: string; payload: any},
) => {
  // console.log('payload in reducer', action.payload)
  switch (action.type) {
    case 'PRODUCE_PARKING_SLOTS':
      return produceParkingSlots(action.payload);
    case 'ADD_VEHICLE':
      return addVehicle(action.payload);
    case 'REMOVE_VEHICLE':
      return removeVehicle(action.payload);
    case 'GENERATE_BILL':
      return generateBill(action.payload);
    // case 'CHANGE_INPUTTEXT': return Object.assign({}, state, {value: action.payload})
    default:
      return state;
  }
};

export default ParkingSlotsReducer;