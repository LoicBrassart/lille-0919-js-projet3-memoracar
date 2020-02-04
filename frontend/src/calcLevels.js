export function calcLevels(oldPlan) {
  if (oldPlan)
    return oldPlan.map((elt, i) => {
      let color = "blue";
      if (elt.trajetFaitPourcentage >= 1 || elt.trajetFaitPourcentage < 0)
        color = "red";
      else if (elt.trajetFaitPourcentage >= 0.9) color = "orange";
      return { ...elt, niveau: color };
    });
}
