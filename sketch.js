const density = 'Ñ@#W$9876543210?!abc;:+=-,._ '
let tileSize;
let tileCount;
let img;
function preload() {
img = loadImage('assets/venus-milo.jpg');
}

function setup() {
  createCanvas(400, 400);
  tileSize = 30;
  tileCount = width / tileSize
  img.resize(tileCount, tileCount);
  
  // createLoop({
    //   duration: 8, 
    //   framesPerSecond: 60, 
    //   gif: true,    
    //   gifFileName: '20230721_rasascii-thumbnail.gif', 
    //   open: true, 
    //   download: true
    // });
  }
  
  
  function draw() {
    background(220);

    let w = width / tileCount;
    let h = height / tileCount;

    img.loadPixels();
    
    for (let i=0; i<tileCount; i++) {
      for (let j=0; j<tileCount; j++) {
        const pixelIndex = (i + j * img.width) * 4;
        const r = img.pixels[pixelIndex + 0];
        const g = img.pixels[pixelIndex + 1];
        const b = img.pixels[pixelIndex + 2];
        const avg = (r+g+b)/3;
        
        noStroke();
        fill(0); 
        // squares
        // square(i * w,  j * h, 0.3 * w * avg / 255);

        // chars
        textSize(w)
        textAlign(CENTER, CENTER);
        let length = density.length;
        const charIndex = Math.floor( map(avg, 0, 255, 0, length));
        text(density.charAt(charIndex), i * w + w * 0.5, j * h + h * 0.5); 

      }
    } 

}
