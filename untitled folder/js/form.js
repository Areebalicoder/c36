class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Start');
    this.greeting = createElement('h2');
    this.qusion1 = createElement('h3',"Q1 Will you give money in charaty?");
    this.radio1 = createRadio('h3');
    this.radio1.option('yes');
    this.radio1.option('No');
    this.sumbit=createButton("sumbit");
    
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

    this.input.position(20, 160);
    this.button.position(20, 200);
    this.qusion1.position(20,300);
    this.radio1.position(20,350);
    this.sumbit.position(20,400);

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