function preload() {
  // put preload code here
}

let w = 400;
let h = 600;

function setup() {
  createCanvas(w, h);
}

function draw() {
  // Sfondo bianco
  background(240, 243, 238);
  noStroke();

  // corno sx
  // punta verticale
  fill(30, 95, 65); 
  triangle(40, 140, 80, 140, 80, 15);
  // Base orizzontale (Accento Viola Scuro)
  fill(80, 30, 95);
  rect(80, 105, 70, 35);

  // corno dx
  // punta verticale
  fill(160, 205, 120);
  triangle(320, 140, 360, 140, 320, 15);
  // Base orizzontale (Accento Viola Scuro)
  fill(80, 30, 95);
  rect(250, 105, 70, 35);

  
  // orecchie animate
  // Usiamo frameCount per calcolare lo spostamento verticale
  let offsetOrecchie = sin(frameCount * 0.06) * 8 //numero px;

  for (let i = 0; i < 1; i++) {
    push();
    
    translate(0, offsetOrecchie);

    // orecchio sx
    fill(40, 110, 70);
    triangle(20, 210, 110, 175, 70, 250);
    fill(150, 60, 200); // triangolo grande
    triangle(20, 210, 110, 175, 110, 225);

    // orecchio dx
    fill(110, 185, 140);
    triangle(380, 210, 290, 175, 330, 250);
    fill(35, 130, 90); // triangolo grande
    triangle(380, 210, 290, 175, 290, 225);

    pop();
  }

  // corpo/testa
  // lato sx
  fill(20, 60, 40);
  rect(110, 105, 90, 420);
  triangle(110, 525, 200, 525, 200, 560);

  // lato dx
  fill(130, 195, 150);
  rect(200, 105, 90, 420);

  // lato dx triangolo basso
  fill(20, 60, 40);
  triangle(200, 525, 290, 525, 200, 560);

  // lato sx triangolo alto
  fill(35, 130, 90);
  triangle(110, 230, 200, 230, 200, 525);

  // parte superiore muso
  fill(45, 155, 95);
  rect(150, 105, 100, 260);

  // LINGUA DA SOTTO IL NASO (Unico colore rosa)
  if (mouseIsPressed) {
    fill(150, 60, 150);
    rect(180, 440, 40, 45, 0, 0, 20, 20); 
  }

  // muso
  fill(170, 225, 160);
  rect(150, 365, 100, 80);

  // narici
  fill(30, 15, 40);
  ellipse(175, 405, 32, 32);
  ellipse(225, 405, 32, 32);

  // piercing (Corretto parametro PI mancantante)
  stroke(190, 70, 230);
  noFill();
  strokeWeight(8);
  strokeCap(SQUARE);
  arc(200, 400, 55, 60, 0, PI);

  // occhi
  // occhi neri
  noStroke();
  fill(30, 15, 40);
  triangle(110, 230, 150, 230, 150, 210);
  triangle(290, 230, 250, 230, 250, 210);

  // pupille bianche
  fill(255);
  ellipse(130, 222, 12, 12);
  ellipse(270, 222, 12, 12);
}