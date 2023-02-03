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

const getWeatherDataFromAPI = () => {
    
};
