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
            kmToUpdate.unshift(0);
            kmToUpdate.pop();
          }
          break;
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
            kmToUpdate.push(action.value);
            kmToUpdate.shift();
            break;
          }
      }

      return {
        ...newState
      };

    case "FETCHING_USER_DATA":
      console.log("sdf");
      const user = newState.user;
      const data = action.value;
      user.id = data.user.id;
      user.mail = data.user.mail;
      user.token = data.token;
      return { ...newState };

    default:
      return state;
  }
};

export default reducer;
