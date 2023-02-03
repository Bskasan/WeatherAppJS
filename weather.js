const form = document.querySelector("form");
const input = document.querySelector("form input");
const msgSpan = document.querySelector(".msg");
//! .class .class(Parent-Child Relationship) vs .class.class(Directly class name)
const list = document.querySelector("container .cities");

//? To store our API key to Local Storage
//localStorage.setItem(
//  "apiKey",
//  EncryptStringAES("c329c3b96528c0c0f92577a6850e5a5e")
//);

//? Inline assign (HTML), addEventListener, onclick, setAttribute("submit", submitFunction) -> 4 methods to provide click functionality.
form.addEventListener("submit", (event) => {
  event.preventDefault();
  getWeatherDataFromAPI();
  // ? Different ways.
  // ? form.reset();
  // ? input.value = "";
  // ? event.target.reset();
  // ! target vs currentTarget
  event.currentTarget.reset();
});

const getWeatherDataFromAPI = async () => {
  //? Postman practised
  //? Creating Collection
  //? Creating request (GET)

  const apiKey = DecryptStringAES(localStorage.getItem("apiKey"));
  console.log(apiKey);
  const cityName = input.value;
  const units = "metric";
  const lang = "en";

  //* http request url(endpoint)
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}&lang=${lang}`;

  try {
    const response = await fetch(url).then((response) => response.json());

    console.log(response);

    //! --- obj-destructuring ---
    const { main, name, sys, weather } = response;

    const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

    const iconUrlAWS = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;
  } catch (error) {
    msgSpan.innerText = "City Not Found";
  }
};
