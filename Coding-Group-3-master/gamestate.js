



var GameState = function() 
{
	this.prototype = BaseState;
}

GameState.prototype.load = function() 
{
	this.delay = 2;
}

GameState.prototype.unload = function() 
{
}

GameState.prototype.update = function(dt) 
{
	player.update(dt);
	if( this.delay > 0 )
		this.delay -= dt;

	//if( this.delay <= 0 && keyboard.isKeyDown( keyboard.KEY_SPACE ) == true )
	//{
	//	stateManager.switchState( new GameOverState() );
	//}
}

GameState.prototype.draw = function() 
{
	var deltaTime = getDeltaTime();
	//drawMap();
	player.draw();

	if(DEBUG == 1)
	{	
			// update the frame counter 
		fpsTime += deltaTime;
		fpsCount++;
		if(fpsTime >= 1)
		{
			fpsTime -= 1;
			fps = fpsCount;
			fpsCount = 0;
		}		
		
		// draw the FPS
		context.fillStyle = "#f00";
		context.font="14px Arial";
		context.fillText("FPS: " + fps, 5, 20, 100);
		context.fillText("X " + player.position.x, 5, 40, 100);
		context.fillText("Y " + player.position.y, 5, 60, 100);
	}

	//context.font="72px Verdana";	
	//context.fillStyle = "#FF0";	
	//var width = context.measureText("GAME STATE").width;
	//context.fillText("GAME STATE", SCREEN_WIDTH/2 - width/2, SCREEN_HEIGHT/2);		
	
	
	/*if( this.delay <= 0 )
	{
		context.font="18px Verdana";	
		context.fillStyle = "#000";	
		width = context.measureText("Press SPACE to Continue.").width;
		context.fillText("Press SPACE to Continue.", SCREEN_WIDTH/2 - width/2, 300);
	}
	else 
	{
		var time = Math.floor(this.delay);
		var decimal = Math.floor(this.delay * 10) - time*10;
	
		context.font="18px Verdana";	
		context.fillStyle = "#000";		
		width = context.measureText(time + "." + decimal).width;
		context.fillText(time + "." + decimal, SCREEN_WIDTH/2 - width/2, 300);
	}*/
}
