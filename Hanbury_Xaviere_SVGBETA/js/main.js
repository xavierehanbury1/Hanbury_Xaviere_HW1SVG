//The Window.console property returns a reference to the console object, which provides methods for logging information to the browser's console.
console.log("JS file connected");

const vectorGraphic = document.querySelector('#badge');

function logThisId() {
    console.log(this);
    console.log('clicked on this element', this.id);
}

vectorGraphic.addEventListener('click', logThisId);