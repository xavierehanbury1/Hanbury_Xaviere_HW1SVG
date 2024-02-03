//The Window.console property returns a reference to the console object, which provides methods for logging information to the browser's console.
console.log("JS file connected");

const vectorGraphic = document.querySelector('#starbadge', 'crystalball');

function logThisId() {
    console.log(this);
    console.log('Clicked on this graphic:', this.id);
}

vectorGraphic.addEventListener('click', logThisId);

const vector2Graphic = document.querySelector('#crystalball');

function logThisId2() {
    console.log(this);
    console.log('You pressed the:', this.id);
}

vector2Graphic.addEventListener('click', logThisId2);
