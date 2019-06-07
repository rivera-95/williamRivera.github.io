let size, x, y, diaMain, diaShadow;
let time = 100;
let num = 1100;
let particle = [];
let noiseScale = 500;
let colorPalette = ['#000090', '#0D809C', '#FFC200', '#D63826', '#FF7400',
 										'#0F4155', '#5399A1', '#8CA96B', '#FF2600', '#EFAC55',
 										'#668065', '#DBE5EC', '#336B87', '#2A3132', '#E94D35'];

function setup() {
	size = min(800, 1000);
	var fondo= createCanvas(windowWidth, windowHeight);
  fondo.position(0,0);
  fondo.style('z-index',-1);
  fondo.parent('fondo1');
	background(25);
	diaMain = size / 390;
  diaShadow = size / 1300;
	for (let i = 0; i < num; i++) {
		particle[i] = new Particle(random(2500), random(size));
	}
}

function draw() {
	noStroke();
	smooth();
	for (let i = 0; i < num; i++) {
		fill(colorPalette[i % colorPalette.length]);
	  particle[i].move(i);
	  particle[i].display();
	  particle[i].checkEdge();
	}
	if (round(time * 1000) % 900 == 0) {
		drawCircle();
	}
}

function Particle(x, y) {
	this.dir = createVector(0, 0);
	this.vel = createVector(0, 0);
	this.pos = createVector(x, y);
	this.speed = 0.5;

	this.move = function(i) {
		let angle = noise(time / noiseScale) * TWO_PI * noiseScale / i;
		this.dir.x = cos(angle);
		this.dir.y = sin(angle);
		this.vel = this.dir.copy();
		this.vel.mult(this.speed);
		this.pos.add(this.vel);
		time += 0.001;
	}
	
	this.checkEdge = function() {
		if (this.pos.x > 1600 || this.pos.x < 0 || this.pos.y > size || this.pos.y < 0) {
			this.pos.x = random(2000);
			this.pos.y = random(size);
		}
	}

	this.display = function() {
		push();
		fill(25);
		ellipse(this.pos.x + diaShadow, this.pos.y + diaShadow, diaShadow, diaShadow);
		pop();
		ellipse(this.pos.x, this.pos.y, diaMain, diaMain);
	}
}

function drawCircle() {
	let index = round(random(colorPalette.length - 1));
	fill(colorPalette[index]);
	let dia = random(size / 400, size / 100);
	ellipse(random(size), random(size), dia, dia);
}



function i(id){
	return document.getElementById(id);
}

window.onscroll = function() {scrl()};
var hover = false;
	 
function start(){
var dt = new Date("xdfcff "),
dt1= dt.getTime();

var intv = setInterval(function() {

  
 
  
  
  if(!hover){
 i("out").innerHTML = '<i class="fas fa-clock"></i> &nbsp;'+dz + "d "+hrs+ "h "+mins+"m "+secs+"s";
 }else{
	i("out").innerHTML =  '<i style="color: #59adf7" class="fas fa-clock"></i>';
 }
i("out2").innerHTML = '<i style="color: #59adf7" class="fas fa-clock"></i> &nbsp;'+"<b>"+dz + "d "+hrs+ "h "+mins+"m "+secs+"s </b>To Go!";

  if (d < 0) {
	clearInterval(intv);
	i("out").innerHTML = "Released!";
	i("out2").innerHTML = "Released!";
  }
}, 1000);
}

function mov(v){
	v.innerHTML = "2019";
}
function mot(v){
	v.innerHTML = "William David Rivera";
}
function mov2(v){
	v.innerHTML = '<i style="color: #59adf7" class="fas fa-clock"></i>';
	hover =true;
}
function mot2(v){

   hover=false;
}



 






