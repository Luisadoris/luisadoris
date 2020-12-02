var textx=0;

xpos = 200
ypos = 200
dx = 5;
dy = 3;
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background('lavender');
   textSize(15);    
   textFont("fantasy");    
   textStyle(BOLD);    
   textAlign(LEFT);    
   text("By Luisa Doris",textx,480);     
          //add a conditional
  if(textx>600){      
     textx = 0;    
  }else{      
     textx=textx + 3;   
  }
  rect(10,ypos,10,80);
  rect(480,mouseY,10,80);
  ellipse(xpos,ypos,20,20);
  if (xpos>=width-20 || xpos==20)
    {
      dx = -dx
    }
  if (ypos>=height-20 || ypos==20)
    {
      dy = -dy
    }
  fill('white');
  textSize(25);
  textFont('fantasy');
  textStyle(BOLD);
  text('Ping Pong Fun',130,35);
  for (var i=50; i < 450; i+=20) {
    line(250,i,250,i+10);
    stroke('white');
    
  } 
  xpos = xpos +dx;
  ypos = ypos +dy;
}