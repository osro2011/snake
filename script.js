var canvas = document.getElementById("canvas");
var bounds = {
    height: canvas.height,
    width: canvas.width
}

var space = new Gamespace(bounds, 20, 2);
var snake = new Snake(0, 0, space, "black", 5);
var apple = new Apple(space);


function update() {
    clearScreen();
    space.drawSquares();
    snake.moveSnake(1, 0);
}
