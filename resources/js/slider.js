var images,index;
var autoSlider = setInterval(slider,5000);
var pause;

var solar=['resources/img/solarPower/c1.jpg','resources/img/solarPower/c2.png','resources/img/solarPower/c3.jpg','resources/img/solarPower/c4.jpg','resources/img/solarPower/c5.jpg','resources/img/solarPower/c6.jpg','resources/img/solarPower/c7.jpg'];

var transmission=['resources/img/powertransmissionlines/c1.jpg','resources/img/powertransmissionlines/c2.jpg','resources/img/powertransmissionlines/c3.png','resources/img/powertransmissionlines/c4.jpg','resources/img/powertransmissionlines/c5.png','resources/img/powertransmissionlines/c6.jpg','resources/img/powertransmissionlines/c7.jpg'];

var station=['resources/img/powersubstations/c1.jpg','resources/img/powersubstations/c2.jpg','resources/img/powersubstations/c3.jpg','resources/img/powersubstations/c4.jpg','resources/img/powersubstations/c5.jpg','resources/img/powersubstations/c6.jpg','resources/img/powersubstations/c7.jpg'];

var electrification=['resources/img/solarPower/c1.jpg','resources/img/solarPower/c2.png','resources/img/solarPower/c3.jpg','resources/img/solarPower/c4.jpg','resources/img/solarPower/c5.jpg','resources/img/solarPower/c6.jpg','resources/img/solarPower/c7.jpg'];

var imagesArray = [solar,transmission,station,electrification];
var imgNumber = 0;

function init(){
	var pause=false;
	index=0;
	selectImages(imgNumber);
}

function selectImages(number){
	
	images = imagesArray[number];
	next();
}

function slider(){
	if(!pause){
		if(index<images.length)
			next();
		else{
			index=0;
			next();
		}
	}	
}
function stopCarousel(){
	pause = true;
}
function satrtCarousel(){ 
	pause =false;
}
function next(){
//	console.log(index);
	if(index>=images.length){
		index=0;
	}
	if(index<0){
		index=0;
	}
	
		document.querySelector('#solar-carousel-'+imgNumber).src=images[index];
		index++;
}
function previous(){
//	console.log(index);
	if(index<0){
		index=images.length-1;
	}
	if(index>=images.length){
		index=0;
	}
	document.querySelector('#solar-carousel').src=images[index];
		index--;
}


function transmissionShow(){
	imgNumber = 1;
	init();
	document.querySelector('#solar').style.display = 'none';
	document.querySelector('#transmission').style.display = 'block';
	document.querySelector('#station').style.display = 'none';
	document.querySelector('#electrification').style.display = 'none';
	
}

function solarShow(){
	document.querySelector('#solar').style.display = 'block';
	document.querySelector('#transmission').style.display = 'none	';
	document.querySelector('#station').style.display = 'none';
	document.querySelector('#electrification').style.display = 'none';
	imgNumber = 0;
	selectImages(imgNumber);
}

function stationShow(){
	document.querySelector('#solar').style.display = 'none';
	document.querySelector('#transmission').style.display = 'none	';
	document.querySelector('#station').style.display = 'block';
	document.querySelector('#electrification').style.display = 'none';
	imgNumber = 2;
	selectImages(imgNumber);
}

function electrificationShow(){
	document.querySelector('#solar').style.display = 'none';
	document.querySelector('#transmission').style.display = 'none	';
	document.querySelector('#station').style.display = 'none';
	document.querySelector('#electrification').style.display = 'block';
}