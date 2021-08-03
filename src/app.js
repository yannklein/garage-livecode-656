// DON'T CHANGE THIS LINE
const myBadAssGarage = "kenns-garage";
document.querySelector("#garage-name").innerText = myBadAssGarage.replace(
  /-/g,
  " "
);
// //////////////////////

import { fetchCars, postCar } from "./cars";

fetchCars();

const carBrand = document.querySelector("#brand");
const carModel = document.querySelector("#model");
const carPlate = document.querySelector("#plate");
const carOwner = document.querySelector("#owner");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const carData = {
    brand: carBrand.value,
    model: carModel.value,
    plate: carPlate.value,
    owner: carOwner.value,
  };
  postCar(carData);
});
