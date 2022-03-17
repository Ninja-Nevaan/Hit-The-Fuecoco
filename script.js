canvas=new fabric.Canvas('myCanvas');

quaxlyY=0;
quaxlyX=0;
fuecocoY=300;
fuecocoX=940;

blockImageWidth=5;
blockImageHeight=5;

function load_img(){
	fabric.Image.fromURL("Fuecoco.png", function(Img){
		fuecocoObject=Img;
		fuecocoObject.scaleToWidth(160);
		fuecocoObject.scaleToHeight(200);
		fuecocoObject.set({
			top:fuecocoY,
			left:fuecocoX
		});
		canvas.add(fuecocoObject);
	});
	new_image();
}

function new_image(){
	fabric.Image.fromURL("Quaxly.png", function(Img){
		quaxlyObject=Img;
		quaxlyObject.scaleToWidth(160);
		quaxlyObject.scaleToHeight(200);
		quaxlyObject.set({
			top:quaxlyY,
			left:quaxlyX
		});
		canvas.add(quaxlyObject);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((quaxlyX==fuecocoX)&&(quaxlyY==fuecocoY)){
		canvas.remove(fuecocoObject);
		document.getElementById("result").innerHTML="You hit the Fuecoco! You won! Game over!";
	}	
	else{
		if(keyPressed == '38'){
			up();
			console.log("up");
		}
		if(keyPressed == '40'){
			down();
			console.log("down");
		}
		if(keyPressed == '37'){
			left();
			console.log("left");
		}
		if(keyPressed == '39'){
			right();
			console.log("right");
		}
	}
	
	function up(){
		if(quaxlyY>=0){
			quaxlyY-=blockImageHeight;
			canvas.remove(quaxlyObject);
			new_image();
		}
	}

	function down(){
		if(quaxlyY<=300){
			quaxlyY+=blockImageHeight;
			canvas.remove(quaxlyObject);
			new_image();
		}
	}

	function left(){
		if(quaxlyX>=0){
			quaxlyX-=blockImageWidth;
			canvas.remove(quaxlyObject);
			new_image();
		}
	}

	function right(){
		if(quaxlyX<=940){
			quaxlyX+=blockImageWidth;
			canvas.remove(quaxlyObject);
			new_image();
		}
	}
	
}

