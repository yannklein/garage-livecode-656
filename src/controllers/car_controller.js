import { Controller } from 'stimulus';

// DON'T CHANGE THIS LINE
const MYBADASSGARAGE = "yann-test";
if (MYBADASSGARAGE) document.querySelector("#garage-name").innerText = MYBADASSGARAGE.replace(/-/g, " ");
// //////////////////////

export default class extends Controller {
  static targets = [ 'brand', 'owner', 'plate', 'model', 'list', 'form' ]
  connect() {
    this.url = `https://wagon-garage-api.herokuapp.com/${MYBADASSGARAGE}/cars`;
    this.showCars();
  }

  showCars() {
    fetch(this.url)
    .then(response => response.json())
    .then((data) => {
      this.displayCars(data);
    });
  }

  displayCars(data) {
    this.listTarget.innerHTML = "";
    data.forEach((car) => {
      this.listTarget.insertAdjacentHTML(
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

  postCar(event) {
    event.preventDefault()
    const carData = {
      brand: this.brandTarget.value,
      model: this.modelTarget.value,
      owner: this.ownerTarget.value,
      plate: this.plateTarget.value,
    }
    fetch(this.url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(carData),
    })
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        this.showCars();
      });
  };
}