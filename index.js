function showTimezone(event) {
  if (event.target.value.length > 0) {
    if (event.target.value === "paris") {
      alert(`It is ${firstCountry}`);
    }
    if (event.target.value === "tokyo") {
      alert(`It is ${secondCountry}`);
    }
    if (event.target.value === "sydney") {
      alert(`It is ${thirdCountry}`);
    }
  }
}

let firstCountry = moment()
  .tz("Europe/Paris")
  .format("dddd, MMMM Do, YYYY HH:MM A");

let secondCountry = moment()
  .tz("Asia/Tokyo")
  .format("dddd, MMMM Do, YYYY HH:MM A");

let thirdCountry = moment()
  .tz("Australia/Sydney")
  .format("dddd, MMMM Do, YYYY HH:MM A");

let countryElement = document.querySelector("#countries");
countryElement.addEventListener("change", showTimezone);
