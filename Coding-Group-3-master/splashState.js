
var SplashState = function() 
{
	this.prototype = BaseState;
	this.img = document.createElement("img");
	this.img.src = "splashImage.png";
}

SplashState.prototype.load = function() 
{
}

SplashState.prototype.unload = function() 
{
}

SplashState.prototype.update = function(dt) 
{
	if( keyboard.isKeyDown( keyboard.KEY_SPACE ) == true )
	{
		stateManager.switchState( new GameState() );
	}
}

SplashState.prototype.draw = function() 
{   
	context.drawImage(this.img,0,0,SCREEN_WIDTH,SCREEN_HEIGHT);
}