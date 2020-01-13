import initialState from "../store/store";

const reducer = (state = initialState, action) => {

  let { kmToUpdate, numOfKmUpdates, isMileageCorrect, user } = state;

  switch (action.type) {
    case "UPDATE_KM_COUNTER":
      switch (action.value) {
        case "erase":
          if (numOfKmUpdates <= 6) {
            numOfKmUpdates -= 1;
            kmToUpdate.unshift("");
            kmToUpdate.pop();
            isMileageCorrect = true;
          }
          break;
        case "*":
          for (let i = 0; i <= kmToUpdate.length; i++) {
            kmToUpdate.unshift("");
            kmToUpdate.pop();
            numOfKmUpdates = 0;
            isMileageCorrect = true;
          }
          break;

        default:
          if (numOfKmUpdates < 6) {
            numOfKmUpdates += 1;
            action.value = parseInt(action.value);
            kmToUpdate.push(action.value);
            kmToUpdate.shift();
            isMileageCorrect = true;
            break;
          }
      }

      return JSON.parse(
        JSON.stringify({
          ...state,
          kmToUpdate,
          numOfKmUpdates,
          isMileageCorrect
        })
      );

    case "UPDATE_MILEAGE":

      let newMileage = parseInt(kmToUpdate.join(""));

      for (let i = 0; i <= kmToUpdate.length; i++) {
        kmToUpdate.unshift("");
        kmToUpdate.pop();
      }


      return JSON.parse(
        JSON.stringify({
          ...state,
          kmToUpdate,
          numOfKmUpdates: 0,
          isMileageCorrect: true,
          user: {
            carData: {
              currentMileage: newMileage
            }
          }
        })
      );

    case "INCORRECT_MILEAGE":
      return {
        ...state,
        isMileageCorrect: false
      };

    case "FETCHING_CAR_DATA":
      const data = action.data;
      let mileage = user.carData.currentMileage;
      if (mileage === 0) {
        mileage = data.km;
      }
      return {
        ...state,
        user: {
          carData: {
            lastKmUpdate: data.date.slice(0, 10),
            year: data.année,
            brand: data.marque,
            model: data.modele,
            enginePower: data.motorisation,
            horsePower: data.puissance,
            currentMileage: mileage
          }
        }
      };
    default:
      return state;
  }
};

export default reducer;
