const initialState = {
  ToCome: [
    {
      date: "01 / 02 / 2020",
      title: "remplacement des pneus",
      icon: "/pictures/icons/blue_pneus.png",
      place: "NORAUTO Seclin"
    },
    {
      date: "01 / 03 / 2020",
      title: "remplacement des pneus",
      icon: "/pictures/icons/blue_pneus.png",
      place: "NORAUTO Seclin"
    },
    {
      date: "01 / 04 / 2020",
      title: "remplacement des pneus",
      icon: "/pictures/icons/blue_pneus.png",
      place: "NORAUTO Seclin"
    }
  ],
  Passed: [
    {
      date: "01 / 02 / 2010",
      title: "remplacement des pneus",
      icon: "/pictures/icons/blue_pneus.png",
      place: "NORAUTO Seclin"
    },
    {
      date: "01 / 03 / 2010",
      title: "remplacement des pneus",
      icon: "/pictures/icons/blue_pneus.png",
      place: "NORAUTO Seclin"
    },
    {
      date: "01 / 04 / 2010",
      title: "remplacement des pneus",
      icon: "/pictures/icons/blue_pneus.png",
      place: "NORAUTO Seclin"
    }
  ],
  kmToUpdate: ["", "", "", "", "", ""],
  numOfKmUpdates: 0,
  currentMileage: 45000,
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
      lastKmUpdate: "",
      year: 0,
      brand: "",
      model: "",
      enginePower: "",
      horsePower: "",
      currentMileage: 0
    }
  }
};

export default initialState;
