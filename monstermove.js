var k;
function setup(){
  createCanvas(480, 720);
  background(0,0,0);
k=1;
}

function draw(){
  
  if(k==1){
  fill(255,255,255);
  rect(0,0,480,720);
  
fill(255,200,0);
noStroke();
stroke(0, 0, 0);
beginShape();
vertex(268.4, 51.3);
vertex(254.9, 41.5);
vertex(259.4, 57.6);
vertex(NaN);
endShape(CLOSE);
beginShape();
vertex(250.9, 69.7);
vertex(236.5, 69.7);
vertex(250.9, 78.2);
vertex(NaN);
endShape(CLOSE);
beginShape();
vertex(250.9, 92.6);
vertex(239.7, 105.1);
vertex(254.9, 101.1);
vertex(NaN);
endShape(CLOSE);
beginShape();
vertex(268.4, 109.6);
vertex(276, 111.9);
vertex(268.4, 126.2);
vertex(NaN);
endShape(CLOSE);
beginShape();
vertex(291.2, 109.6);
vertex(302.5, 121.7);
vertex(298.9, 105.1);
vertex(NaN);
endShape(CLOSE);
beginShape();
vertex(308.3, 92.6);
vertex(323.5, 92.6);
vertex(308.3, 85);
vertex(NaN);
endShape(CLOSE);
beginShape();
vertex(304.7, 64.8);
vertex(308.3, 69.7);
vertex(319.5, 57.6);
vertex(NaN);
endShape(CLOSE);
beginShape();
vertex(283.2, 51.3);
vertex(291.2, 38.3);
vertex(291.2, 53.6);
vertex(NaN);
endShape(CLOSE);
beginShape();
vertex(277.3, 58.5);
bezierVertex(269.2, 58.9, 261.9, 64.5, 258.5, 72);
bezierVertex(258.1, 72.8, 253.4, 83.6, 259.8, 94);
bezierVertex(264.3, 101.2, 272.6, 105.6, 281.3, 104.8);
bezierVertex(291.6, 103.8, 299.7, 95.9, 301.5, 86.9);
bezierVertex(304.4, 72.6, 291, 57.9, 277.3, 58.5);
endShape();

  
  fill(255,255,255);
  rect(280,360,160,130); //house body
  
  fill(255,0,0);
  triangle(280,360,440,360,360,300); // house roof
  
  fill(55,54,255);
  rect(300,380,50,50); //window
  
  strokeWeight(1.5);
  line(300,405,350,405); //window horizontal line
  
  strokeWeight(1.5);
  line(325,380,325,430); //window vertical line
  
  fill(171,74,18);
  rect(375,410,50,80); //door
  
  fill(0,0,0);
  ellipse(382,450,5,5); // door handle
 
  fill(183,240,177);
  rect(295+mouseX-237,80+mouseY-150,25,50); //
  fill(183,240,177);
  rect(160+mouseX-237,80+mouseY-150,40,50);
  fill(183,240,177);
  rect(205+mouseX-237,150+mouseY-150,75,80); //BODY
  fill(255,255,255);
  rect(212+mouseX-237,150+mouseY-150,61,75); //TOP
  fill(91,90,255);
  stroke(0);
  fill(183,240,177);
  strokeWeight(2);
  ellipse(240+mouseX-237, 110+mouseY-150, 145, 145); //head
  fill(91,90,255);
  rect(250+mouseX-237,40+mouseY-150,70,10); //ball cap's tail
  strokeWeight(1.5);
  fill(91,90,255);
  arc(240+mouseX-237, 50+mouseY-150, 80, 80, PI, TWO_PI, CHORD); //ball cap
  fill(255,0,0);
  strokeWeight(1.5);
  fill(255,255,255);
  ellipse(210+mouseX-237,85+mouseY-150,58,65); //left eye
  strokeWeight(1.5);
  fill(255,255,255);
  ellipse(270+mouseX-237,85+mouseY-150,58,65); //right eye
  strokeWeight(0.5);
  fill(0,0,0);
  ellipse(265+mouseX-237,85+mouseY-150,25,30);//right eye black
  strokeWeight(0.5);
  fill(0,0,0);
  ellipse(215+mouseX-237,85+mouseY-150,25,30); //left eye black
  fill(255,255,255);
  strokeWeight(1.5);
  line(220+mouseX-237,140+mouseY-150,260+mouseX-237,140+mouseY-150); //mouse

  fill(0,0,0);
  text("SSU",216+mouseX-237,217+mouseY-150); //SSU
  
  fill(183,240,177);
  rect(220+mouseX-237,230+mouseY-150,13,15); //left leg
  fill(183,240,177);
  rect(252+mouseX-237,230+mouseY-150,13,15); //right leg
  fill(255,255,36);
  rect(210+mouseX-237,245+mouseY-150,23,10); //left shoe
  fill(255,255,36);
  rect(252+mouseX-237,245+mouseY-150,23,10); //right shoe
  
  fill(255,108,108);
  rect(225+mouseX-237,140+mouseY-150,30,mouseY/1.8);
  strokeWeight(1.5);
  line(240+mouseX-237,mouseY+140-150,240+mouseX-237,mouseY+160-150); //tongue
  
  
  rect(228+mouseX-237,20+mouseY-150,6.5,24); //A first
  fill(255,0,0);
  rect(235.5+mouseX-237,20+mouseY-150,10,6.5); //A second
  fill(255,0,0);
  rect(245.5+mouseX-237,20+mouseY-150,6.5,24); //A third
  fill(255,0,0);
  rect(235.5+mouseX-237,30+mouseY-150,10,6.5); //A fourth
}

else if(k==2){
   fill(0,0,0);
  rect(0,0,480,720);
  
  fill(255,255,18);
ellipse(380,60,85,85); //moon

noStroke();
fill(0, 255, 249);
stroke(0, 0, 0);
beginShape();
vertex(78, 56.5);
vertex(73.8, 63.8);
vertex(66.1, 65.3);
vertex(71.3, 72);
vertex(70.7, 80.2);
vertex(78, 77.1);
vertex(86.2, 80.2);
vertex(85.3, 71.7);
vertex(90.3, 65.5);
vertex(82.8, 63.7);
endShape(CLOSE);
beginShape();
vertex(115.9, 72.1);
vertex(111.7, 79.4);
vertex(104, 80.9);
vertex(109.2, 87.6);
vertex(108.6, 95.8);
vertex(115.9, 92.7);
vertex(124.1, 95.8);
vertex(123.2, 87.3);
vertex(128.2, 81.1);
vertex(120.6, 79.3);
endShape(CLOSE);
beginShape();
vertex(75.3, 86.4);
vertex(71.1, 93.7);
vertex(63.4, 95.2);
vertex(68.6, 101.9);
vertex(68, 110.1);
vertex(75.3, 106.9);
vertex(83.5, 110.1);
vertex(82.6, 101.6);
vertex(87.7, 95.3);
vertex(80.1, 93.5);
endShape(CLOSE);
beginShape();
vertex(150.4, 48.1);
vertex(146.2, 55.4);
vertex(138.5, 56.9);
vertex(143.7, 63.6);
vertex(143.1, 71.8);
vertex(150.4, 68.7);
vertex(158.6, 71.8);
vertex(157.7, 63.3);
vertex(162.8, 57.1);
vertex(155.2, 55.3);
endShape(CLOSE);
beginShape();
vertex(206.1, 24.6);
vertex(201.9, 31.9);
vertex(194.2, 33.4);
vertex(199.4, 40.1);
vertex(198.8, 48.2);
vertex(206.1, 45.1);
vertex(214.2, 48.2);
vertex(213.4, 39.8);
vertex(218.4, 33.5);
vertex(210.8, 31.7);
endShape(CLOSE);
beginShape();
vertex(198.8, 59.3);
vertex(194.7, 66.6);
vertex(186.9, 68.1);
vertex(192.1, 74.8);
vertex(191.6, 82.9);
vertex(198.8, 79.8);
vertex(207, 82.9);
vertex(206.1, 74.5);
vertex(211.2, 68.2);
vertex(203.6, 66.4);
endShape(CLOSE);
beginShape();
vertex(224.3, 80.2);
vertex(220.1, 87.5);
vertex(212.4, 89);
vertex(217.6, 95.7);
vertex(217, 103.9);
vertex(224.3, 100.8);
vertex(232.4, 103.9);
vertex(231.6, 95.4);
vertex(236.6, 89.2);
vertex(229, 87.4);
endShape(CLOSE);
beginShape();
vertex(175.3, 87.9);
vertex(171.1, 95.2);
vertex(163.4, 96.7);
vertex(168.6, 103.4);
vertex(168, 111.5);
vertex(175.3, 108.4);
vertex(183.5, 111.5);
vertex(182.6, 103.1);
vertex(187.6, 96.8);
vertex(180.1, 95);
endShape(CLOSE);

  fill(255,255,255);
  rect(280,360,160,130); //house body
  
  fill(255,0,0);
  triangle(280,360,440,360,360,300); // house roof
  
  fill(55,54,255);
  rect(300,380,50,50); //window
  
  strokeWeight(1.5);
  line(300,405,350,405); //window horizontal line
  
  strokeWeight(1.5);
  line(325,380,325,430); //window vertical line
  
  fill(171,74,18);
  rect(375,410,50,80); //door
  
  fill(0,0,0);
  ellipse(382,450,5,5); // door handle
}
}


function keyPressed(){
  if(key=='n'||key=='N')
  k=2;
  else if(key=='m'||key=='M')
  k=1;
}
