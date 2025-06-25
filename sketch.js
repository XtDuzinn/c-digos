function setup() {
  createCanvas(600, 400);
}

let xJogador = [0, 0, 0, 0, 0];
let yJogador = [80, 150, 220, 290, 360];
let Jogador = ["🐒", "🐎", "🐐", "🐕", "🐘"];

function draw() {
  ativajogo();
  desenhajogadores();
  desenhalinhadechegada();
  verifica();
}
function ativajogo() {
  if (focused == true) {
    background("green");
  } else {
    background("red");
  }
}
function desenhajogadores() {
  textSize(35);
  for (let i = 0; i < 5; i++) text(Jogador[i], xJogador[i], yJogador[i]);
}
function desenhalinhadechegada() {
  fill("black");
  rect(550, 0, 30, 600);
  fill("red");
  for (let yAtual = 0; yAtual < 550; yAtual += 20) rect(550, yAtual, 30, 10);
}
function verifica() {
  for (let i = 0; i < 5; i++) {
    if (xJogador[i] > 550) {
      text(Jogador[i] + "Venceu", 190, 200);
      noLoop();
    }
  }
}
function keyReleased() {
  if (key === "z") {
    xJogador[0] += random(15);
  }
  if (key === "q") {
    xJogador[1] += random(15);
  }
  if (key === "r") {
    xJogador[2] += random(15);
  }
  if (key === "o") {
    xJogador[3] += random(15);
  }
  if (key === "m") {
    xJogador[4] += random(15);
  }
}
