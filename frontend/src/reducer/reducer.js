import initialState from "../store/store";

const reducer = (state = initialState, action) => {
  const newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case "UPDATE_KM_COUNTER":
      const kmToUpdate = newState.kmToUpdate;

      switch (action.value) {
        case "erase":
          if (newState.numOfKmUpdates <= 6) {
            newState.numOfKmUpdates--;
            console.log(newState.numOfKmUpdates);
            kmToUpdate.unshift(0);
            kmToUpdate.pop();
            console.log(action.value);
            break;
          }
        case "*":
          for (let i = 0; i <= kmToUpdate.length; i++) {
            kmToUpdate.unshift(0);
            kmToUpdate.pop();
            newState.numOfKmUpdates = 0;
          }
          break;

        default:
          if (newState.numOfKmUpdates < 6) {
            newState.numOfKmUpdates++;
            console.log(newState.numOfKmUpdates);
            kmToUpdate.push(action.value);
            kmToUpdate.shift();
            break;
          }
      }

      return {
        ...newState
      };

    default:
      return state;
  }
};

export default reducer;
