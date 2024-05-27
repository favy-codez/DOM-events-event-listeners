### Here is what I learnt during the course of this project
- Listening to DOM events in JavaScript allows you to respond to user interactions with your web page, such as clicks, mouse movements, key presses, and more. 
- Using addEventListener Method - The addEventListener method is the most common way to listen for events. It attaches an event handler to an element without overwriting existing event handlers.
```
element.addEventListener(type, function);
```
- To add event listener
```
button.addEventListener("click", newText);
```
To add an event listener to a button that calls a function named newText when the button is clicked, you use addEventListener.
- To remove event listener
```
button.removeEventListener("click", newText);
```
To remove the same event listener, you use removeEventListener. It's important that the function reference used in removeEventListener matches the one used 
- How to Listen to Events using HTML Attributes - Listening to events using HTML attributes involves embedding event handlers directly within the HTML elements. This approach is often referred to as inline event handling. 
Some commonly used HTML event attributes and the events they handle:
1. onclick: Handles click events.
2. onmouseover: Handles mouseover events.
3. onmouseout: Handles mouseout events.
4. onkeydown: Handles keydown events.
5. onkeyup: Handles keyup events.
6. onchange: Handles change events (e.g., for input fields).

- add the onclick attribute using JavaScript 
```
<button id="myButton">Click using JS!</button>

const btn = document.querySelector("#myButton");
function handleAlert(e) {
  alert("The button was made functional using JS")
}
btn.onclick = handleAlert;
```
- To remove the onclick attribute, you can assign the property to null:
```
const btn = document.querySelector("#myButton");
btn.onclick = null;
```