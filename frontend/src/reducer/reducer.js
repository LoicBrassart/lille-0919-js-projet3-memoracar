import initialState from "../store/store";

const reducer = (state = initialState, action) => {
  const newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case "OPENCLOSE_PROFIL":
      newState.ProfilIsOpen = newState.ProfilIsOpen ? false : true;
      return newState;

    case "CLOSE_PROFIL":
      newState.ProfilIsOpen = false;
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

    case "CREATE_USER_DATA":
      newState.user.id = action.value.returnData.id;
      newState.user.mail = action.value.returnData.mail;
      newState.user.token = action.value.token;
      newState.user.carData = initialState.user.carData;
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
            lastKmUpdate: data.user.carData.date_format,
            year: data.user.carData.annee,
            brand: data.user.carData.marque,
            model: data.user.carData.modele,
            enginePower: data.user.carData.motorisation,
            horsePower: data.user.carData.puissance,
            currentMileage: data.user.carData.km
          }
        }
      };

    case "CREATE_CAR":
      const dataCar = action.value;
      return {
        ...newState,
        user: {
          ...newState.user,
          carData: {
            lastKmUpdate: dataCar.date,
            year: dataCar.annee,
            brand: dataCar.marque,
            model: dataCar.modele,
            enginePower: dataCar.motorisation,
            horsePower: dataCar.puissance,
            currentMileage: dataCar.km,
            id: dataCar.id_exemplaire_voiture
          }
        }
      };

    case "UPDATE_MILEAGE":
      newState.user.carData.currentMileage = parseInt(
        newState.kmToUpdate.join("")
      );
      newState.user.carData.lastKmUpdate = action.value;
      return newState;

    case "DATE_NEW_CAR":
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

    case "DATA_FUTURE_MAINTENANCE":
      const dataFuture = action.data;
      newState.ToCome = [];
      dataFuture.map(obj => {
        return newState.ToCome.push(obj);
      });
      return newState;

    case "DATA_PASSED_MAINTENANCE":
      const dataPassed = action.data;
      newState.Passed = [];
      dataPassed.map(obj => {
        return newState.Passed.push(obj);
      });
      return newState;

    default:
      return newState;
  }
};

export default reducer;
