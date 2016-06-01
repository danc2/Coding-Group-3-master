
var GameOverState = function() 
{
	this.prototype = BaseState;
	this.img = document.createElement("img");
	this.img.src = "loseImage.png";
}

GameOverState.prototype.load = function() 
{
}

GameOverState.prototype.unload = function() 
{
}

GameOverState.prototype.update = function(dt) 
{
}

GameOverState.prototype.draw = function() 
{
	context.drawImage(this.img,0,0,SCREEN_WIDTH,SCREEN_HEIGHT);
}