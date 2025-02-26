// TODO: create variable assignments for the h1 and h2 in the article
const h1 = document.querySelector("h1");
const h2 = document.querySelector(".art-title");

//  TODO: Select the only input element
const input = document.querySelector("input");

// TODO: add event listener to the input selector and updat recolor property of h1 element
document.querySelector("input").addEventListener("input", function (event) {
  h1.style.setProperty("--color", event.target.value);
});

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
  // saying get all the styles of the h2 and get the specific style of that element ie. the font size (+0.05)
  const currentFontSize =
    Number.parseFloat(getComputedStyle(h2).getPropertyValue("--font-size")) +
    0.05;

  // TODO: Add logic to change the text of the h2 elements
  // If we clicked 'increase'...
  if (event.target.id === "increase") {
    h2.style.setProperty("--font-size", currentFontSize + 0.5 + "em");
  } else {
    h2.style.setProperty("--font-size", currentFontSize - 0.5 + "em");
  }
}

// Loop over buttons and add event listener to each individual button
buttons.forEach(
  //  callback function
  function (button) {
    button.addEventListener(
      "click",
      // Reference the function we created above - ue it for each button
      handleClick
    );
  }
);
