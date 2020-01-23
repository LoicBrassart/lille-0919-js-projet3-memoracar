const initialState = {
  ToCome: [],
  Passed: [],
  kmToUpdate: ["", "", "", "", "", ""],
  numOfKmUpdates: 0,
  isMileageCorrect: true,
  Motor: {
    Futur: [
      {
        title: "huile",
        subtitle: "Vidange recommandée dans: ",
        icon: "/pictures/icons/blue_oil.png",
        km: "9948 km"
      }
    ],
    Passed: [
      {
        title: "huile",
        subtitle: "Vidange effectuée à: ",
        icon: "/pictures/icons/blue_oil.png",
        km: "26 450 km"
      },
      {
        title: "huile",
        subtitle: "Vidange effectuée à: ",
        icon: "/pictures/icons/blue_oil.png",
        km: "20 450 km"
      },
      {
        title: "huile",
        subtitle: "Vidange effectuée à: ",
        icon: "/pictures/icons/blue_oil.png",
        km: "450 km"
      },
      {
        title: "huile",
        subtitle: "Vidange effectuée à: ",
        icon: "/pictures/icons/blue_oil.png",
        km: "26 450 km"
      }
    ]
  },
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
      currentMileage: 0
    }
  },
  ProfilIsOpen: false
};

export default initialState;
