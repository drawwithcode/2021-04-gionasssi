function preload() {
  bg = loadImage("assets/background.png")

  vincisalvini = loadImage("assets/vincisalvini.jpg")
  vincisalvinisound = loadSound("assets/vincisalvinisound.mp4")
  
  leispaccia = loadImage("assets/leispaccia.jpg")
  leispacciasound = loadSound("assets/leispacciasound.mp4")
  
  gallagher = loadImage("assets/gallagher.jpg")
  gallaghersound = loadSound("assets/gallaghersound.mp4")

  cannolo = loadImage("assets/cannolo.jpg")
  cannolosound = loadSound("assets/cannolosound.mp4")

  pentitevi = loadImage("assets/pentitevi.jpg")
  pentitevisound = loadSound("assets/pentitevisound.mp4")

  albero = loadImage("assets/albero.jpg")
  alberosound = loadSound("assets/alberosound.mp4")

  brutto = loadImage("assets/brutto.jpg")
  bruttosound = loadSound("assets/bruttosound.mp4")

  riccardo = loadImage("assets/riccardo.jpg")
  riccardosound = loadSound("assets/riccardosound.mp4")

  albachiara = loadImage("assets/albachiara.jpg")
  albachiarasound = loadSound("assets/albachiarasound.mp4")

  greg = loadImage("assets/greg.jpg")
  gregsound = loadSound("assets/gregsound.mp4")
}

function setup() {
  createCanvas(windowWidth,windowHeight)

  speed = 1.5;

  x1 = random(width);
  y1 = random(height);
  xDir1 = -1;
  yDir1 = 1;

  x2 = random(width);
  y2 = random(height);
  xDir2 = 1;
  yDir2 = -1;

  x3 = random(width);
  y3 = random(height);
  xDir3 = -1;
  yDir3 = -1;

  x4 = random(width);
  y4 = random(height);
  xDir4 = 1;
  yDir4 = 1;

  x5 = random(width);
  y5 = random(height);
  xDir5 = -1;
  yDir5 = 1;

  x6 = random(width);
  y6 = random(height);
  xDir6 = 1;
  yDir6 = -1;

  x7 = random(width);
  y7 = random(height);
  xDir7 = -1;
  yDir7 = -1;

  x8 = random(width);
  y8 = random(height);
  xDir8 = 1;
  yDir8 = 1;

  x9 = random(width);
  y9 = random(height);
  xDir9 = -1;
  yDir9 = 1;

  x10 = random(width);
  y10 = random(height);
  xDir10 = 1;
  yDir10 = 1;

  button1 = createElement("button","SOCIEVOLE");
  button2 = createElement("button","INVESTIGATORE");
  button3 = createElement("button","TRAPPER");
  button4 = createElement("button","AFFAMATO");
  button5 = createElement("button","PACIFISTA");
  button6 = createElement("button","AGGRESSIVO");
  button7 = createElement("button","RIFLESSIVO");
  button8 = createElement("button","DIVERTITO");
  button9 = createElement("button","ROMANTICO");
  button10 = createElement("button","IRRITATO");
}


function draw() {
  background(243, 255, 0)
  
  push()
  imageMode(CENTER)
  translate(width/2, height/2)
  image(bg, 0, 0)
  pop()

  // rect(x,y,10,10)
  button1.position(x1,y1);
  button2.position(x2,y2);
  button3.position(x3,y3);
  button4.position(x4,y4);
  button5.position(x5,y5);
  button6.position(x6,y6);
  button7.position(x7,y7);
  button8.position(x8,y8);
  button9.position(x9,y9);
  button10.position(x10,y10);
  
x1 += speed * xDir1;
y1 += speed * yDir1;
if (x1 >= width/2 || x1 <= 0) {xDir1 *= -1;}
if (y1 >= height || y1 <= 0) {yDir1 *= -1;}

x2 += speed * xDir2;
y2 += speed * yDir2;
if (x2 >= width || x2 <= 0) {xDir2 *= -1;}
if (y2 >= height || y2 <= 0) {yDir2 *= -1;}

x3 += speed * xDir3;
y3 += speed * yDir3;
if (x3 >= width || x3 <= 0) {xDir3 *= -1;}
if (y3 >= height || y3 <= 0) {yDir3 *= -1;}

x4 += speed * xDir4;
y4 += speed * yDir4;
if (x4 >= width || x4 <= 0) {xDir4 *= -1;}
if (y4 >= height || y4 <= 0) {yDir4 *= -1;}

x5 += speed * xDir5;
y5 += speed * yDir5;
if (x5 >= width || x5 <= 0) {xDir5 *= -1;}
if (y5 >= height || y5 <= 0) {yDir5 *= -1;}

x6 += speed * xDir6;
y6 += speed * yDir6;
if (x6 >= width || x6 <= 0) {xDir6 *= -1;}
if (y6 >= height || y6 <= 0) {yDir6 *= -1;}

x7 += speed * xDir7;
y7 += speed * yDir7;
if (x7 >= width || x7 <= 0) {xDir7 *= -1;}
if (y7 >= height || y7 <= 0) {yDir7 *= -1;}

x8 += speed * xDir8;
y8 += speed * yDir8;
if (x8 >= width || x8 <= 0) {xDir8 *= -1;}
if (y8 >= height || y8 <= 0) {yDir8 *= -1;}

x9 += speed * xDir9;
y9 += speed * yDir9;
if (x9 >= width || x9 <= 0) {xDir9 *= -1;}
if (y9 >= height || y9 <= 0) {yDir9 *= -1;}

x10 += speed * xDir10;
y10 += speed * yDir10;
if (x10 >= width || x10 <= 0) {xDir10 *= -1;}
if (y10 >= height || y10 <= 0) {yDir10 *= -1;}

button1.mouseOver(noLoop)
button1.mousePressed(display1)
button1.mouseOut(loop, vincisalvinisound.stop())


button2.mouseOver(noLoop);
button2.mousePressed(display2)
button2.mouseOut(loop, leispacciasound.stop())


button3.mouseOver(noLoop);
button3.mousePressed(display3)
button3.mouseOut(loop, gallaghersound.stop())


button4.mouseOver(noLoop);
button4.mousePressed(display4)
button4.mouseOut(loop, cannolosound.stop())


button5.mouseOver(noLoop);
button5.mousePressed(display5)
button5.mouseOut(loop, pentitevisound.stop())


button6.mouseOver(noLoop);
button6.mousePressed(display6)
button6.mouseOut(loop, alberosound.stop())


button7.mouseOver(noLoop);
button7.mousePressed(display7)
button7.mouseOut(loop, bruttosound.stop())


button8.mouseOver(noLoop);
button8.mousePressed(display8)
button8.mouseOut(loop, riccardosound.stop())


button9.mouseOver(noLoop);
button9.mousePressed(display9)
button9.mouseOut(loop, albachiarasound.stop())


button10.mouseOver(noLoop);
button10.mousePressed(display10)
button10.mouseOut(loop, gregsound.stop())


}

function display1() {
  push()
  translate(width/2,height/2)
  imageMode(CENTER)
  image(vincisalvini, 0, 0)
  pop()
  if (vincisalvinisound.isPlaying() == false) {
    vincisalvinisound.play();
    }
}

function display2() {
  push()
  translate(width/2,height/2)
  imageMode(CENTER)
  image(leispaccia, 0, 0)
  pop()
  if (leispacciasound.isPlaying() == false) {
    leispacciasound.play();
    }
}

function display3() {
  push()
  translate(width/2,height/2)
  imageMode(CENTER)
  image(gallagher, 0, 0)
  pop()
  if (gallaghersound.isPlaying() == false) {
    gallaghersound.play();
    }
}

function display4() {
  push()
  translate(width/2,height/2)
  imageMode(CENTER)
  image(cannolo, 0, 0)
  pop()
  if (cannolosound.isPlaying() == false) {
    cannolosound.play();
    }
}

function display5() {
  push()
  translate(width/2,height/2)
  imageMode(CENTER)
  image(pentitevi, 0, 0)
  pop()
  if (pentitevisound.isPlaying() == false) {
    pentitevisound.play();
    }
}

function display6() {  
  push()
  translate(width/2,height/2)
  imageMode(CENTER)
  image(albero, 0, 0)
  pop()
  if (alberosound.isPlaying() == false) {
    alberosound.play();
    }
}

function display7() { 
  push()
  translate(width/2,height/2)
  imageMode(CENTER)
  image(brutto, 0, 0)
  pop()
  if (bruttosound.isPlaying() == false) {
    bruttosound.play();
    }
}

function display8() {
  push()
  translate(width/2,height/2)
  imageMode(CENTER)
  image(riccardo, 0, 0)
  pop()
  if (riccardosound.isPlaying() == false) {
    riccardosound.play();
    }
}

function display9() {
  push()
  translate(width/2,height/2)
  imageMode(CENTER)
  image(albachiara, 0, 0)
  pop()
  if (albachiarasound.isPlaying() == false) {
    albachiarasound.play();
    }
}

function display10() {
  push()
  translate(width/2,height/2)
  imageMode(CENTER)
  image(greg, 0, 0)
  pop()
  if (gregsound.isPlaying() == false) {
    gregsound.play();
    }
}
