const canvas = document.getElementById("confetti");
const checkbox = document.getElementById("page-mode"); 
const ctx = canvas.getContext("2d");
const pieces = [];
const count = 50;
const speed = 2;

const colors = [
  getComputedStyle(document.documentElement).getPropertyValue('--color-primary'),
  getComputedStyle(document.documentElement).getPropertyValue('--color-secondary'),
  getComputedStyle(document.documentElement).getPropertyValue('--color-tertiary')
];

let width = window.innerWidth;
let height = window.innerHeight;
let isPlaying = false;
let animateFrames = null;
let piece;

function Piece(piece, w, h) {
  piece.color = colors[(Math.random() * colors.length) | 0];
  piece.x = Math.random() * w;
  piece.y = (Math.random() * h) - h;
  piece.diameter = Math.random() * (20 - 4) + 4;
  piece.tilt = (Math.random() * 10) - 10;
  piece.tiltAngleIncrement = Math.random() * 0.025 + 0.05;
  piece.tiltAngle = 10;
  
  return piece;
}

function runAnimation() {
  ctx.clearRect(0, 0, width, height);
  
  if (!pieces.length) {
    animateFrames = null;
  } else {
    updatePieces();
    drawPieces(ctx);
    animateFrames = window.requestAnimationFrame(runAnimation);
  }
}

function throwConfetti() {
  isPlaying = true;
  setCanvasDimensions();
  while (pieces.length < count) pieces.push(Piece({}, width, height));
  if (animateFrames === null) runAnimation();
}

function haltConfetti() {
  isPlaying = false;
}

function drawPieces(ctx) {
  let x, y;
  
  for (var i = 0; i < pieces.length; i++) {
    piece = pieces[i];
    ctx.beginPath();
    ctx.lineWidth = piece.diameter;
    ctx.strokeStyle = piece.color;
    x = piece.x + piece.tilt;
    y = piece.y + piece.tilt;
    ctx.moveTo(x + piece.diameter / 2, piece.y);
    ctx.lineTo(x, y + piece.diameter / 2);
    ctx.stroke();
  }
}

function updatePieces() {  
  for (var i = 0; i < pieces.length; i++) {
    piece = pieces[i];
    
    if (!isPlaying && piece.y < -15)
      piece.y = height + 100;
    else {
      piece.tiltAngle += piece.tiltAngleIncrement;
      piece.x += Math.sin(piece.tiltAngle);
      piece.y += (Math.cos(piece.tiltAngle) + piece.diameter + speed) * 0.5;
      piece.tilt = Math.sin(piece.tiltAngle) * 15;
    }
    
    if (piece.x > width + 20 || piece.x < -20 || piece.y > height) {
      if (isPlaying && pieces.length <= count)
        Piece(piece, width, height);
      else {
        pieces.splice(i, 1);
        i--;
      }
    }
  }
}

function setCanvasDimensions() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
}

window.addEventListener("resize", setCanvasDimensions);

checkbox.addEventListener("click", () => {
  if (checkbox.checked) {
    document.body.classList.add('dark-mode');
    throwConfetti(); 
  } else {
    document.body.classList.remove('dark-mode');
    haltConfetti();
  }
});