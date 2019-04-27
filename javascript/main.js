var field = document.getElementById("main-graphics");
var context = field.getContext("2d");


function drawTriangle() {
    // the triangle
    context.beginPath();
    context.moveTo(200, 100);
    context.lineTo(170, 150);
    context.lineTo(230, 150);
    context.closePath();

    // the outline
    context.lineWidth = 10;
    context.strokeStyle = "rgba(102, 102, 102, 1)";
    context.stroke();

    // the fill color
    context.fillStyle = "rgba(255, 204, 0, 1)";
    context.fill();
}
drawTriangle();

context.moveTo(200, 100);
context.lineTo(170, 150);
context.lineTo(230, 150);


function drawTriangle() {
    // the triangle
    context.clearRect(0, 0, field.width, field.height);
    context.beginPath();
    context.moveTo(200 + deltaX, 100 + deltaY);
    context.lineTo(170 + deltaX, 150 + deltaY);
    context.lineTo(230 + deltaX, 150 + deltaY);
    context.closePath();

    // the outline
    context.lineWidth = 10;
    context.strokeStyle = "rgba(12, 102, 182, 1)";
    context.stroke();

    // the fill color
    context.fillStyle = "rgba(110, 204, 0, 1)";
    context.fill();
}
drawTriangle();

context.moveTo(200, 100);
context.lineTo(170, 150);
context.lineTo(230, 150);

window.addEventListener("keydown", moveSomething, false);
var deltaX = 0;
var deltaY = 0;
function moveSomething(e) {
    switch (e.keyCode) {
        case 37:
            deltaX -= 20;
            console.log("Left key pressed")
            break;
        case 38:
            deltaY -= 20;
            console.log("Up key pressed")
            break;
        case 39:
            deltaX += 20;
            console.log("Right key pressed")
            break;
        case 40:
            deltaY += 20;
            console.log("Down key pressed!")
            break;
    }
    drawTriangle();
}

drawTriangle();