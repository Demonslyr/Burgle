var player = {}

var xpos=60;
var ypos=60;
var alive=false;

player.draw=function(){
context.drawImage(pShip,player.xpos-30, player.ypos-30, 60, 60);
}

player.res= function(){
	xpos=60;//
	ypos=60;
	alive=true;
	health= 100;
	//shield=50;*/
}


////////////////////////////////////////////////////////////
//Make a function that recieves an X and a y direction.
//makes sure the player can go there (it's not outside the boundary of the screen)
//updates the player position
///////////////////////////////////////////////////////////


player.shield_draw=function(){
	/*context.globalAlpha = shield_tick/20;
	context.drawImage(shield_dmg,player.xpos-40, player.ypos-50, 80, 70);
	context.globalAlpha = 1;
	shield_tick--;*/
}

player.drawpaused=function(){
/*context.drawImage(pShip,player.xpos-30, player.ypos-30, 60, 60);
*/
}
player.collision = function(x){
//updates the player info after a collision with upgrades or damage
//console.log("I made it in here",x);
/*
	if(x==1||x==2){
	
		if(shield>0){
		//player.alive=true;
			play_multi_sound_dmg('shield_damaged');
			shield_tick=20;
			shield--;}
		else if(health<1){
			play_multi_sound_exp('explosion');
			player.alive=false;
			paused=true;
			game_tunes.pause();
			menu.update();}
		else if(shield<1){
			play_multi_sound_dmg('hp_damaged');
			shield_tick=0;
			health--;}
		
		}
*/
}