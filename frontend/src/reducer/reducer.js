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
          }
          break;
        case "*":
          for (let i = 0; i <= kmToUpdate.length; i++) {
            kmToUpdate.unshift("");
            kmToUpdate.pop();
            newState.numOfKmUpdates = 0;
          }
          break;

        default:
          if (newState.numOfKmUpdates < 6) {
            newState.numOfKmUpdates++;
            action.value = parseInt(action.value);
            kmToUpdate.push(action.value);
            kmToUpdate.shift();
            break;
          }
      }

      return {
        ...newState
      };

    case "UPDATE_MILEAGE":
      let kmToUpdateTest = parseInt(kmToUpdate.join(""));
      newState.numOfKmUpdates = 0;
      if (kmToUpdateTest >= newState.currentMileage) {
        newState.currentMileage = kmToUpdateTest;
      }
      for (let i = 0; i <= kmToUpdate.length; i++) {
        kmToUpdate.unshift("");
        kmToUpdate.pop();
      }
      return {
        ...newState
      };

    default:
      return state;
  }
};

export default reducer;
