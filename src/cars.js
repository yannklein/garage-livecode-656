const myBadAssGarage = "kenns-garage";
const url = `https://wagon-garage-api.herokuapp.com/${myBadAssGarage}/cars`;

const carsList = document.querySelector(".cars-list");

const displayCars = (data) => {
  carsList.innerHTML = "";
  data.forEach((car) => {
    carsList.insertAdjacentHTML(
      "beforeend",
      `<div class="car">
        <div class="car-image">
          <img src="http://loremflickr.com/280/280/${car.brand} ${car.model}" />
        </div>
        <div class="car-info">
          <h4>${car.brand} ${car.model}</h4>
          <p><strong>Owner:</strong>${car.owner}</p>
          <p><strong>Plate:</strong>${car.plate}</p>
        </div>
      </div>
      `
    );
  });
};

const fetchCars = () => {
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      displayCars(data);
    });
};

const postCar = (carData) => {
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(carData),
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      fetchCars();
    });
};

export { fetchCars, postCar };
