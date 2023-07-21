const density = 'Ñ@#W$9876543210?!abc;:+=-,._ '
let tileSize;
let tileCount;
let img;
function preload() {
img = loadImage('assets/venus-milo.jpg');
}

function setup() {
  noCanvas();
  tileSize = 1;
  tileCount = width / tileSize
  img.resize(tileCount, tileCount);
  
  background(0);

  let w = width / tileCount;
  let h = height / tileCount;

  img.loadPixels();
  
  for (let j=0; j<tileCount; j++) {
    let row = "";

    for  (let i=0; i<tileCount; i++) {
      const pixelIndex = (i + j * img.width) * 4;
      const r = img.pixels[pixelIndex + 0];
      const g = img.pixels[pixelIndex + 1];
      const b = img.pixels[pixelIndex + 2];
      const avg = (r+g+b)/3;

      textSize(w)
      textAlign(CENTER, CENTER);
      const length = density.length;
      const charIndex = Math.floor( map(avg, 0, 255, length, 0));
      const c = density.charAt(charIndex);
      if (c === ' ') {
        row += '&nbsp;';
      } else {
        row += c;
      }
    }
    createDiv(row)
   } 
}
