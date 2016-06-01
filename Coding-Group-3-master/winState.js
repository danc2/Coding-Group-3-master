
var WinState = function() 
{
	this.prototype = BaseState;
	this.img = document.createElement("img");
	this.img.src = "winImage.png";
}

WinState.prototype.load = function() 
{
}

WinState.prototype.unload = function() 
{
}

WinState.prototype.update = function(dt) 
{

}

WinState.prototype.draw = function() 
{   
	context.drawImage(this.img,0,0,SCREEN_WIDTH,SCREEN_HEIGHT);
}