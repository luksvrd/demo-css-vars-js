// TODO: create variable assignments for the h1 and h2 in the article
const h1 = document.querySelector("h1");
const h2 = document.querySelector(".art-title");

// TODO: add click event listeners to all the buttons
// const buttons = document.querySelectorAll("button");

// TODO: take buttons and for each one we want to do something.
// call this function back whenever theres an event "click of button"
// line 11 gives us access to each botton element
// buttons.forEach(function (button) {
//   button.addEventListener("click", function (event) {
// Use 'target' property to get the specific button that was clicked
// added .id to tell you the html id once that element was clicked
//     console.log(event.target.id);
//   });
// });

// this is equivalent ot lines 11-17 just the manual
// for(let i = 0; i <= buttons.length; i++) {
//   buttons[i].addEventListener("click", function(event) {
//     console.log(event.target.id);
//   });
// }

// TODO: This is the easiest way (cleanest way to write it) called the handle click  in lines 36-38

// TODO: Add click event listeners to all of the buttons
const buttons = document.querySelectorAll("button");

function handleClick(event) {
  // TODO: add logic to change the text of the h2 elements
  // if we clicked 'increas'...
  // Use 'target' to get the specific button that was clicked
  if (event.taget.id === "increase") {
    console.log("Increase the font size");
  }
}

buttons.forEach(function (button) {
  button.addEventListener("click", handleClick);
});
