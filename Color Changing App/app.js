//Select 7 colors
let colors = ['red', 'blue', 'green', 'orange', 'purple', 'black', 'yellow'];

let colorHistory = [];
let currentColorIndex = -1;

//change the background of canvas when button is clicked
let button = document.getElementById('button');

button.addEventListener('click', function () {
  //select a random number between 0 - 6
  let index = parseInt((Math.random() * colors.length) + 1);
  colorHistory.push(index);
  currentColorIndex = colorHistory.length - 1;

  //grab the canvas
  let canvas = document.getElementById('canvas');

  canvas.style.background = `${colors[index]}`
})

let previousButton = document.getElementById('previousButton');
previousButton.addEventListener('click', function(){
    console.log('Previous button clicked, history length:', colorHistory.length);

    if (colorHistory.length > 1) {colorHistory.pop();
        currentColorIndex = colorHistory.length - 1;

        let canvas = document.getElementById('canvas');
        canvas.style.background = colors[colorHistory[currentColorIndex]];

        console.log('Changed to previous color:', colors[colorHistory[currentColorIndex]]);
    } else {
        console.log('No previous color available');
    }
});
