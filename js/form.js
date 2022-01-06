class Form {
    constructor() {
      this.input = createInput("").attribute("placeholder", "Enter your name");
      this.input2 = createInput("").attribute("placeholder", "Type in Color Choice");
      this.playButton = createButton("Play");
      this.greeting = createElement("h2");
      this.colorChoice = createElement("h2");
    }
  
    setElementsPosition() {
      this.input.position(width / 2 - 110, height / 2 - 100);
      this.input2.position(width/2 - 110, height / 2 - 20);
      this.playButton.position(width / 2 - 90, height / 2 + 70);
      this.greeting.position(width / 2 - 300, height / 2 - 100);
      this.colorChoice.position(width/2 - 400, height /2 +100);
    }
  
    setElementsStyle() {
      this.input.class("customInput");
      this.input2.class("customInput")
      this.playButton.class("customButton");
      this.greeting.class("greeting");
      this.colorChoice.class("greeting");
    }
  
    //BP
    hide() {
      this.greeting.hide();
      this.colorChoice.hide();
      this.playButton.hide();
      this.input.hide();
      this.input2.hide();
    }
  
    colors(){
        var colorText = 'Type one color choice in: Red, Blue, Green, Pink'
        this.colorChoice.html(colorText);
    }
    
    //BP
    handleMousePressed() {
      this.playButton.mousePressed(() => {
        this.input.hide();
        this.input2.hide();
        this.playButton.hide();
        var message = `
        Hello ${this.input.value()}
        </br>wait for another player to join...`;
        this.greeting.html(message);
        playerCount += 1;
        player.name = this.input.value();
        player.index = playerCount;
      player.addPlayer();//aa
        player.updateCount(playerCount); // BP
       player.getDistance(); //aa
      });
    }
  
    display() {
      this.setElementsPosition();
      this.setElementsStyle();
      this.handleMousePressed();
      this.colors();
    }
  }