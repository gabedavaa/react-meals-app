import React from "react";
import MealsSummary from "./MealsSummary.js";
import AvailableMeals from "./AvailableMeals.js";

function Meals(props) {
  return (
    <React.Fragment>
      <MealsSummary />
      <AvailableMeals />
    </React.Fragment>
  );
}

export default Meals;
