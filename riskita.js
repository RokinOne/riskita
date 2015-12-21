var iBg = iHead = iBody = iShoe = iAnimal = 1;
var canvas, context;
var imageBg = new Image();
var imageHead = new Image();
var imageBody = new Image();
var imageShoe = new Image();
var imageAnimal = new Image();

function change (element, forward) {
  var counter;
  var selected;

  switch (element) {
    case 1: counter = iBg; break;
    case 2: counter = iHead; break;
    case 3: counter = iBody; break;
    case 4: counter = iShoe; break;
    case 5: counter = iAnimal; break; }

  if (forward == 1) {
    if (++counter > 5) { counter = 1; } }
  else if (forward == 0) { if (--counter < 1) { counter = 5; } }

  switch (element) {
    case 1: selected = "bg";
            imageBg.onload = function() {
              imageBg.setAttribute('crossOrigin', 'anonymous');
              context.drawImage(imageBg, 0, 0, 1000, 600);
            change(2,2);change(3,2);change(4,2);change(5,2); };
            imageBg.src = 'img/'+selected+counter+'.jpg';
            iBg = counter;
            break;
    case 2: selected = "head";
            imageHead.onload = function() {
              imageHead.setAttribute('crossOrigin', 'anonymous');
              context.drawImage(imageHead, 425, 200, 100, 100); };
            imageHead.src = 'img/'+selected+counter+'.jpg';
            iHead = counter;
            break;
    case 3: selected = "body";
            imageBody.onload = function() {
              imageBody.setAttribute('crossOrigin', 'anonymous');
              context.drawImage(imageBody, 400, 300, 150, 200); };
            imageBody.src = 'img/'+selected+counter+'.jpg';
            iBody = counter;
            break;
    case 4: selected = "shoe";
            imageShoe.onload = function() {
              imageShoe.setAttribute('crossOrigin', 'anonymous');
              context.drawImage(imageShoe, 425, 500, 100, 50); };
            imageShoe.src = 'img/'+selected+counter+'.jpg';
            iShoe = counter;
            break;
    case 5: selected = "animal";
            imageAnimal.onload = function() {
              imageAnimal.setAttribute('crossOrigin', 'anonymous');
              context.drawImage(imageAnimal, 600, 350, 200, 200); };
            imageAnimal.src = 'img/'+selected+counter+'.jpg';
            iAnimal = counter;
            break; } }

function init () {
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");
  change(1,1); }

function save () {
  var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
  window.location.href=image; }
