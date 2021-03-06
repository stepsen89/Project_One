"use strict";

function Bugs(ctx, width, height){
    var self = this;

    self.size = 50;
    self.dx = -4;
    self.ctx = ctx;

    self.gameWidth = width;
    self.gameHeight = height;

    self.x = 850;
    self.y = Math.random() * 350;
    self.direction = null;

    self.sprites = 0;

    self.sprites = [document.getElementById("sprite2"), document.getElementById("sprite2"),
    document.getElementById("sprite3"), document.getElementById("sprite4"),document.getElementById("sprite5")];

}

Bugs.prototype.setDirection = function (){
    var self = this;

    self.direction = direction;
}

Bugs.prototype.draw = function () {                                             // drawing the bugs in general
    var self = this;
    
    self.ctx.fillStyle = "white";
    self.ctx.fillRect(self.x, self.y, self.size, self.size);
}

Bugs.prototype.render = function () {                                           // rendering images sprites
    var self = this;
    var renderX = self.x - self.size/2;
    var renderY = self.y - self.size/2;
    self.ctx.drawImage(self.sprites[0], renderX, renderY)
}


Bugs.prototype.animation = function () {                                        // moving bugs
    var self = this;
    
    self.x = self.x -7;
    self.ctx.clearRect(0, 0, self.ctx.width, self.ctx.height);
}