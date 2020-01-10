import initialState from "../store/store";

const reducer = (state = initialState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  let kmToUpdate = newState.kmToUpdate;

  switch (action.type) {
    case "UPDATE_KM_COUNTER":
      switch (action.value) {
        case "erase":
          if (newState.numOfKmUpdates <= 6) {
            newState.numOfKmUpdates--;
            kmToUpdate.unshift("");
            kmToUpdate.pop();
            newState.isMileageCorrect = true;
          }
          break;
        case "*":
          for (let i = 0; i <= kmToUpdate.length; i++) {
            kmToUpdate.unshift("");
            kmToUpdate.pop();
            newState.numOfKmUpdates = 0;
            newState.isMileageCorrect = true;
          }
          break;

        default:
          if (newState.numOfKmUpdates < 6) {
            newState.numOfKmUpdates++;
            action.value = parseInt(action.value);
            kmToUpdate.push(action.value);
            kmToUpdate.shift();
            newState.isMileageCorrect = true;
            break;
          }
      }

      return {
        ...newState
      };

    case "UPDATE_MILEAGE":
      newState.numOfKmUpdates = 0;
      newState.currentMileage = parseInt(kmToUpdate.join(""));
      newState.isMileageCorrect = true;
      for (let i = 0; i <= kmToUpdate.length; i++) {
        kmToUpdate.unshift("");
        kmToUpdate.pop();
      }
      return {
        ...newState
      };

    case "INCORRECT_MILEAGE":
      newState.isMileageCorrect = false;
      return {
        ...newState
      };

    default:
      return state;
  }
};

export default reducer;
