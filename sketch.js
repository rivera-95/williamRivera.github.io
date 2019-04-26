function setup() {
	
	createCanvas(windowWidth, windowHeight);
		
}

function draw() {
	
for (var x=0; x<width; x+=1){
		stroke(x/width*255);
		line(x,0,x,height);
	}
	for (y=0; y<height; y+=25){
		stroke(50);
		line(0,y,width,y);
	}
texto();

}
		function texto(){
	noStroke();
	
	fill(150,200,200,190);
	textFont('Hobo Std');
	textAlign(CENTER);
	textStyle(BOLD);
	textSize(50);
	text(" William Rivera ", width/6+random(0), height - 9*(height/11)+random(0) );
	
	


	
}

	textSize(20);
	
	fill(0,0,0,190);
	//text("open processing ", width/2, height - 9*(height/11) );
	fill(100,180,210,80);
	ellipse(width/2,height - 8.6*(height/11)-30, 260+random(15),90+random(15));
	
	fill(0,0,0,190);
	//text("GitHub", width-300, height - 9*(height/11));
	fill(100,180,210,80);
	ellipse(width-300,height - 8.6*(height/11)-30,100+random(15),60+random(15));
	
	
	
	
	
