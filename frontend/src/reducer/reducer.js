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
            kmToUpdate.push(action.value);
            kmToUpdate.shift();
            break;
          }
      }

      return {
        ...newState
      };

    case "UPDATE_MILEAGE":
      kmToUpdate = parseInt(kmToUpdate.join(""));
      console.log(kmToUpdate);
      if (kmToUpdate >= newState.currentMileage) {
        newState.currentMileage = kmToUpdate;
      }
      return {
        ...newState
      };

    default:
      return state;
  }
};

export default reducer;
