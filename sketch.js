var viajante;
var viajanteImage;
var atiradores;
var atiradoresImage;
var escambaia;
var escambaiaImage;
var morcegos;
var morcego1;
var morecgo2;
var morcegosImage;

var estrela;
var estrela01;
var estrela02;
var estrelaImage;
var ponto;
var pontosGroup;
var pontoImage;
var moeda;
var moedasGroup;
var moedaImage;

var contador;
var contadorImage;
var estrela0;
var estrela0Image;
var estrela1;
var estrela1Image;
var estrela2;
var estrela2Image;
var estrela3;
var estrela3Image;

var fundo;
var fundoImage;
var paredeDireita;
var paredeEsquerda;



function preload(){
	viajanteImage=loadImage("viajante.png");
	morcegosImage=loadAnimation("morcego1.png","morcego2.png","morcego3.png","morcego4.png");
	atiradoresImage= loadAnimation("atirador1.png","atirador2.png","atirador3.png");
	escambaiaImage=loadAnimation("escambaia1.png","escambaia2.png","escambaia3.png","escambaia4.png");
	estrelaImage=loadAnimation("estrela.png");
	pontoImage=loadAnimation("ponto.png");
	moedaImage=loadAnimation("moeda.png");
	contadorImage=loadImage("contador.png");
	estrela0Image=loadImage("estrela0.png");
	estrela1Image=loadImage("estrela1.png");
	estrela2Image=loadImage("estrela2.png");
	estrela3Image=loadImage("estrela3.png");
	fundoImage=loadImage("fundo1.png");
}

function setup() {
	createCanvas(800, 800);

	//Crie os Corpos aqui.
	fundo= createSprite(400,400);
	fundo.addAnimation("fundo",fundoImage);
	fundo.scale=0.78;

	viajante= createSprite(750,760)
	viajante.addAnimation("viajante",viajanteImage);
	viajante.scale=0.07;

	morcegos= createSprite(700,400);
	morcegos.addAnimation("morcegos",morcegosImage);
	morcegos.scale=0.08;  
	morcegos

	morcegos01= createSprite(700,330);
	morcegos01.addAnimation("morcegos",morcegosImage);
	morcegos01.scale=0.08;  
	morcegos

	morcegos= createSprite(700,400);
	morcegos.addAnimation("morcegos",morcegosImage);
	morcegos.scale=0.08;  
	morcegos

	atiradores= createSprite(500,400);
	atiradores.addAnimation("atiradores", atiradoresImage);
	atiradores.scale=0.15;  
	atiradores.frameDelay=20;

	escambaia= createSprite(200,400);
	escambaia.addAnimation("escambaia", escambaiaImage);
	escambaia.scale=0.3;  
	escambaia.frameDelay=20;

	estrela=createSprite(590,470);
	estrela.addAnimation("estrela",estrelaImage);
	estrela.scale=0.08;

	estrela01=createSprite(680,215);
	estrela01.addAnimation("estrela",estrelaImage);
	estrela01.scale=0.08;

	estrela02=createSprite(460,400);
	estrela02.addAnimation("estrela",estrelaImage);
	estrela02.scale=0.08;

	ponto=createSprite(100,400);
	ponto.addAnimation("ponto",pontoImage);
	ponto.scale=0.1;

	moeda=createSprite(700,400);
	moeda.addAnimation("moeda",moedaImage);
	moeda.scale=0.1;

	contador=createSprite(100,50);
	contador.addAnimation("contador",contadorImage);
	contador.scale=0.15;

	estrela0=createSprite(400,50);
	estrela0.addAnimation("estrela0",estrela0Image);
	estrela0.scale=0.2;

	paredeDireita=createSprite(600,325,2,200);

	paredeEsquerda= createSprite(775,325,2,200)

}


function draw() {
  background(0);
  
  drawSprites();

  textSize(30);
  fill("yellow");
  text("0",130,65);
 
}



