const button = document.querySelector("#changeText");
const btn = document.querySelector("#myButton");

function newText() {
  const p = document.querySelector("#myParagraph");
  p.innerText = "The text ha been changed";
}
button.addEventListener("click", newText);
// To remove the event listener
// button.removeEventListener("click", newText);

// add event listeners using HTML attributes
function handleClick() {
  alert("The button is clicked");
}

// with JS
function handleAlert(e) {
  alert("The button was made functional using JS")
}
btn.onclick = handleAlert;

