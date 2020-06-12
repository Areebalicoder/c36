class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.qusion1 = createElement('h3',"Q1 Will you give money in charaty?");
    this.radio1 = createRadio('h3');
    this.radio1.option('yes');
    this.radio1.option('No');
    
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Q & A");
    title.position(130, 0);

    this.input.position(130, 160);
    this.button.position(250, 200);
    this.qusion1.position(400,200);
    this.radio1.position(330,250);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(130, 100);
    });

  }
}