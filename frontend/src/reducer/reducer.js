import initialState from "../store/store";

const reducer = (state = initialState, action) => {
  const newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case "OPEN_PROFIL":
      newState.ProfilIsOpen = newState.ProfilIsOpen ? false : true;
      return newState;

    case "LOGOUT":
      newState.user = initialState.user;
      return newState;

    case "UPDATE_KM_COUNTER":
      switch (action.value) {
        case "erase":
          if (newState.numOfKmUpdates <= 6) {
            newState.numOfKmUpdates -= 1;
            newState.kmToUpdate.unshift("");
            newState.kmToUpdate.pop();
            newState.isMileageCorrect = true;
          }
          break;
        case "*":
          newState.kmToUpdate = initialState.kmToUpdate;
          newState.numOfKmUpdates = initialState.numOfKmUpdates;
          newState.isMileageCorrect = initialState.isMileageCorrect;
          break;

        default:
          if (newState.numOfKmUpdates < 6) {
            newState.numOfKmUpdates += 1;
            action.value = parseInt(action.value);
            newState.kmToUpdate.push(action.value);
            newState.kmToUpdate.shift();
            newState.isMileageCorrect = true;
            break;
          }
      }

      return newState;

    case "FETCHING_USER_DATA":
      const data = action.value;
      return {
        ...newState,
        user: {
          id: data.user.id,
          mail: data.user.mail,
          token: data.token,
          carData: {
            id: data.user.carData.id_exemplaire_voiture,
            lastKmUpdate: data.user.carData.date.slice(0, 10),
            year: data.user.carData.annee,
            brand: data.user.carData.marque,
            model: data.user.carData.modele,
            enginePower: data.user.carData.motorisation,
            horsePower: data.user.carData.puissance,
            currentMileage: data.user.carData.km
          }
        }
      };

    case "UPDATE_MILEAGE":
      newState.user.carData.currentMileage = parseInt(
        newState.kmToUpdate.join("")
      );
      newState.user.carData.lastKmUpdate = action.value;
      return newState;

    case "INCORRECT_MILEAGE":
      newState.isMileageCorrect = false;
      return newState;

    case "CLEAN_STORE":
      newState.kmToUpdate = initialState.kmToUpdate;
      newState.numOfKmUpdates = initialState.numOfKmUpdates;
      newState.isMileageCorrect = initialState.isMileageCorrect;
      return newState;

    default:
      return newState;
  }
};

export default reducer;
