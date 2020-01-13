import initialState from "../store/store";

const reducer = (state = initialState, action) => {
  let { kmToUpdate, numOfKmUpdates, isMileageCorrect, currentMileage } = state;
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
      currentMileage = parseInt(kmToUpdate.join(""));
      for (let i = 0; i <= kmToUpdate.length; i++) {
        kmToUpdate.unshift("");
        kmToUpdate.pop();
      }

      return {
        ...state,
        kmToUpdate,
        currentMileage,
        numOfKmUpdates: 0,
        isMileageCorrect: true
      };

    case "INCORRECT_MILEAGE":
      return {
        ...state,
        isMileageCorrect: false
      };

    default:
      return state;
  }
};

export default reducer;
