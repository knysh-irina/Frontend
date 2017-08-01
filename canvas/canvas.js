var div = document.getElementById("canvas");
drowCercul();
drawStr();
drawSmile();
drawSaySomething();

function createCanvas() {
    var c = document.createElement('canvas');
    c.setAttribute('width', '200');
    c.setAttribute('height', '200');
    return c;
}

function drowCercul() {
    var c = createCanvas();
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.fillStyle = "#fff71b";
    ctx.strokeStyle = "#FF0000";
    ctx.fill();
    ctx.stroke();
    div.appendChild(c);
}


function drawStr() {
    var c = document.createElement('canvas');
    c.setAttribute('width', '200');
    c.setAttribute('height', '200');
    var ctx = c.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();

    ctx.moveTo(150, 50);
    ctx.lineTo(125, 75);
    ctx.lineTo(125, 25);
    ctx.fill();
    div.appendChild(c);
}

function drawSmile() {
    var c = document.createElement('canvas');
    c.setAttribute('width', '200');
    c.setAttribute('height', '200');
    var ctx = c.getContext('2d');

    ctx.beginPath();

    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Внешняя окружность
    ctx.fillStyle = "#fff71b";
    ctx.fill();
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false);  // рот (по часовой стрелке)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Левый глаз
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Правый глаз
    ctx.stroke();
    div.appendChild(c);
}

function drawSaySomething() {
    var c = document.createElement('canvas');
    c.setAttribute('width', '200');
    c.setAttribute('height', '200');
    var ctx = c.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(75, 25);
    ctx.quadraticCurveTo(25, 25, 25, 62.5);
    ctx.quadraticCurveTo(25, 100, 50, 100);
    ctx.quadraticCurveTo(50, 120, 30, 125);
    ctx.quadraticCurveTo(60, 120, 65, 100);
    ctx.quadraticCurveTo(125, 100, 125, 62.5);
    ctx.quadraticCurveTo(125, 25, 75, 25);
    ctx.stroke();
    div.appendChild(c);
}


