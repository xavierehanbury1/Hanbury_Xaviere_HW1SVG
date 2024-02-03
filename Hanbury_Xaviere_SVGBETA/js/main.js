//The Window.console property returns a reference to the console object, which provides methods for logging information to the browser's console.
console.log("JS file connected");

const vectorGraphic = document.querySelector('#starbadge');

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

const vector3Graphic = document.querySelector('#bird');

function logThisId3() {
    console.log(this);
    console.log('You met a:', this.id);
}

vector3Graphic.addEventListener('click', logThisId3);

const vector4Graphic = document.querySelector('#moon');

function logThisId4() {
    console.log(this);
    console.log('Behold, the:', this.id);
}

vector4Graphic.addEventListener('click', logThisId4);

const vector5Graphic = document.querySelector('#sickle');

function logThisId5() {
    console.log(this);
    console.log('A cutting edge:', this.id);
}

vector5Graphic.addEventListener('click', logThisId5);


const vector6Graphic = document.querySelector('#symbol');

function logThisId6() {
    console.log(this);
    console.log('Look, a:', this.id);
}

vector6Graphic.addEventListener('click', logThisId6);


