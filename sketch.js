
// var symbol;
var symbolSize = 22;
var streams = [];

function setup(){

    createCanvas( // spend to whold page
      window.innerWidth,
      window.innerHeight
    );


    background(0,150);




    //   symbol = new Symbol(
    //     width/2,
    //     0, // start from the top
    //     random(5,10)
    //
    //   );
    //

    var x = 0;
    var y = 0;
    for(var i = 0; i<= width /symbolSize; i++){
      var stream = new Stream();
      stream.generateSymbols(x, random(-1000,0));

      streams.push(stream);

      x += symbolSize;

    }
    // symbol.setToRandomSymbol();
    textSize(symbolSize);

    // stream = new Stream();
    // stream.generateSymbols();

} // function setpup



function draw(){ // gets called repeatedly at 60 frames per second

  background(0);
  // stream.render();
streams.forEach(function(stream){

  stream.render();
});
}


function Symbol(x, y, speed, first){ // show the location
    this.x=x;
    this.y=y;
    this.value;
    this.speed=speed;
    this.swithchInterval = round(random(2,20));

    this.first = first;

    this.setToRandomSymbol = function(){

      if(frameCount % this.swithchInterval === 0){
        this.value = String.fromCharCode(
          0x30A0 + round(random(0,96))
        );
      }//if


    } // setToRandomSymbol

    // this.render=function(){
    //   fill(0,255,70); // color
    //   text(this.value, this.x, this.y);
    //   this.rain();
    //   this.setToRandomSymbol(); // switchthecharcters
    // }




/*
      // check if it reatch to the bottom

      this.rain=function(){
      if(this.y >=height){   // to bottom
        this.y=0;            // reset to 0
      }else{                 // to normal
        this.y+=this.speed;
      }
 */
      // cleanerCode check if it reatch to the bottom
      this.rain=function(){
      this.y = (this.y >= height) ? 0 : this.y += this.speed;


    }// rainFunction */


} // Symbol Function



function Stream(){
  this.symbols=[];
  this.totalSymbols=round(random(5, 30));
  this.speed=random(2,10);

  this.generateSymbols = function(x, y){
    // var y = 0;  // start from top of the page
    // var x = width / 2;  // from topMiddle
    var first = round(random(0,4))==1;

    for(var i=0; i<this.totalSymbols; i++){
      // createNewSymbols
      symbol=new Symbol(x,y,this.speed, first);

      // set to initialValueOftheSymbol
      symbol.setToRandomSymbol();

      // take that symbol and push it into the streams symbolarray so that it can live there
      this.symbols.push(symbol);

      // decreament y by the symbolSize
      y -= symbolSize;
      first = false;
    }
  }


  this.render=function(){
    this.symbols.forEach(function(symbol){

      if(symbol.first){
        fill(180,255,180);
      }else{
          fill(0,255,70); // color
      }


      text(symbol.value, symbol.x, symbol.y);
      symbol.rain();
      symbol.setToRandomSymbol(); // switchthecharcters

    });
  }
}
