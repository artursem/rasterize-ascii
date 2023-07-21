const density = 'Ñ@#W$9876543210?!abc;:+=-,._ '

let img;
function preload() {
img = loadImage('assets/venus-milo.jpg');
}

function setup() {
  createCanvas(400, 400);
  img.resize(50, 50)
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
    background(0);
    // image(im g, 0, 0, width, height);
    
    let w = width / img.width;
    let h = height / img.height;

    img.loadPixels();
    
    for (let i=0; i<img.width; i++) {
      for (let j=0; j<img.height; j++) {
        const pixelIndex = (i + j * img.width) * 4;
        const r = img.pixels[pixelIndex + 0];
        const g = img.pixels[pixelIndex + 1];
        const b = img.pixels[pixelIndex + 2];
        const avg = (r+g+b)/3;
        
        noStroke();
        fill(avg);
        // square(i * w,  j * h, w);
        textSize(w)
        text('V', i * w, j * h);
      }
    } 

}
