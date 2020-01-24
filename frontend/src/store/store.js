const initialState = {
  ToCome: [],
  Passed: [],
  kmToUpdate: ["", "", "", "", "", ""],
  numOfKmUpdates: 0,
  isMileageCorrect: true,
  user: {
    id: -1,
    mail: "",
    token: "",
    carData: {
      id: -1,
      lastKmUpdate: "",
      year: 0,
      brand: "",
      model: "",
      enginePower: "",
      horsePower: "",
      currentMileage: 0,
      id: -2
    }
  },
  ProfilIsOpen: false
};

export default initialState;
