		var sketchProc=function(processingInstance){ with (processingInstance){

size(600, 600); 
// Bortnite Battle Boiale
//Left and right button to move(moving is pretty bad so far),q to switch from from tool and building.
//All blocks you can go through, They act was barriers from projectiles
//f1 is for building a wall,f2 is for building a floor/ceiling, f3 is for building stairs which you can rotate with r, f4 is for building a block, and f5 is for a cover wall
//z for wall in non f1-5 mode, x for floor/ceiling in non f1-5 mode, c for stairs in non f1-5 mode, v for a block in non f1-5 mode, and b for cover wall in non f1-5 mode.
//switch to pickaxe to break blocks
//The rectangle in the middle of the screen IS a button. It transfrers you to the test place
/**UPDATE LOG
 * 5/6/18 added offline mode! also added starting messsages
 * 5/5/18 some minor updates, fixed three-D back cover walls placement and fixed 2-d modes preview back cover wall. Im thinking about adding guns pretty soon
 * 5/3/18 added three-D effect on cover walls and 2-D coverwalls. FINALLY MADE three-D GRAPHICS NOT LAGGY thanks to 𝐵𝓁𝓊𝑒𝒷𝒾𝓇𝒹
 * 5/2/18 added cover walls
 * 5/1/18 added option to turn off f1-f5 controls(for computers without f1-5 keys)
 * 4/30/18 added semi-3d stuff. kinda laggy tbh. Selection screen now has text and there is is an option to turn off three-D mode.
 * 4/28/18 added blocks(2 walls and 2 floors) and added pickaxe(does not function so far.) minor graphical changes. Also added breaking walls stairs and floors
 * 4/24/18 finished stairs added rotation
 * 4/23/18 added glitchy movement started adding stairs
 * 4/22/18 added test place and added building for the wall and ceiling afterwards refined
 * 4/21/18 added title screen selection screeen
**/
//starting messages not meant to be offensive (nibba is not a bad word, just a meme -_-)
var screen = "title";
var blinky = 0;
var mono = createFont("monospace");
var ar = createFont("Arial");
var shine = 0;
var shines = 5;
var scaley = 1;
var tran = 0;
var scaleyi = 0;
var trani = 300;
var mover = 150;
var mover2 = 150;
var charx = 0;
var charmode = "tool";
var f1 = true;
var threedb = "green";
var f1b = "green";
var charh = 0;
var selected = 1;
var Inventory = ["pickaxe","pistol","shotgun","AR"];
var startmessages = ["How r u m8",'"E"',"Wen u bortnite","1v1 me ezpz","LMAO","rekt","m3m3s lol","this is so sad can we hit a download","ur mum nice","Do you Prefer Bortnite over Fortnite?\ny/n","Jimmy Neutron Supports this message",'"best game ever"-noonesofar','"I like to build walls...\nin bornite"-Donald E. Brump',"boy:do u play bor...\ngirl suicides\nboy visits grave\nboy:...bortnite","in development","nothing xd","4chan is a person","number fifteen, Bortnite battle boiale,\nthe last thing you want on khanacademy\nis a game called bortnite battle boiale","NORMIES\nREEEEEEEEEE","do you ever just play bornite\nto flex on them fornite nibbas?","join my minecraft server:\nholychristanserver.com\nremember! no swearing!","kys(kiss yourself)","Garfield dies in infinity war","wen dem normies talk bout fornite\nan u just mention bornite","#1 most played game on my computer 2018","boi","#JusticeForOrangeShirtKid\n(even though the thingy is over)","zucc juice yummmm...","Add me on discord:MinyTale#4089","dont worry ur pickaxe wont break","RUN FROM THE CREEPERS","wait does khanacademy have a discord?","Also play Terraria!","If u\ndont play bornite then u aint a real G","on a more serious note,\nthese start messages are\nNOT meant to be offense","2 fast 4 u","Added TURBO mode!","Three-D GRAPHICS!!!","2-d grapics","IN COLOR!!!!","wen u soposed to be working on ur game\nbut u just add more start messages","XD","!!!","...","Sensational!","Save the world?\npff more like save ur mum.","like why dont u just like get money\ni dont get it","go play pubg instead","you could be doing more useful things","makes u smarter","Loads of dead memes","why u lok at ifunny heheh xd"];
//building variables
{
var placex = 0;
var placey = 0;
var wallx = [];
var wally = [];
var wallh = [];
var flatx = [];
var flaty = [];
var flath = [];
var stairx = [];
var stairy = [];
var staird = [];
var stairh = [];
var fwallx = [];
var fwally = [];
var fwalld = [];
var charmov = 0;
var bmode = "wall";
var movtrans = 0;
var movallr = 0;
var movalll = 0;
var dirp = 0;
var paused = false;
var threed = true;
var fps = 60;
var turbob = "red";
var startm = round(random(0,startmessages.length));
var seethrough = 255;
var touchingcw = 0;
}
var draw = function() {
    frameRate(fps);
    noStroke();
    translate(movtrans,0);
    if(screen==="title"){
        fill(0, 0, 40);
        rect(0,0,600,600);
        fill(100);
        rect(0,450,600,150);
        textAlign(CENTER,CENTER);
		textFont(mono,25);
		fill(random(0,255));
		text(startmessages[startm],300,240);
		textFont(ar,75);
        fill(150);
        text("BORTNITE",300,100);
        fill(200, 0, 0);
        textFont(mono,35);
        text("Battle Boiale \n",300,170);
        fill(50);
        textFont(mono,35);
        text("B      B      \n ",300,170);
        fill(0);
        blinky=blinky+1;
        //Blink
        {
        if(blinky>=25){
            text("|",420,150);
        }
        if(blinky>=50){
            blinky=0;
        }
        }
        fill(255, 0, 0);
        rect(105,70,60,60,10);
        fill(255);
        textFont(ar,75);
        text("B",136,100);
        fill(0, 100, 0);
        rect(265,440,75,125);
        fill(255, 220, 120);
        ellipse(300,400,75,75);
        pushMatrix();
        fill(35);
        rotate(radians(25) );
        rect(390,280,170,35);
        rect(510,315,10,25);
        rect(456,315,10,25);
        rect(560,275,5,45);
        rect(385,275,5,45);
        fill(25);
        rect(420,276,25,42);
        popMatrix();
        fill(255, 220, 120);
        ellipse(330,515,22,22);
        ellipse(280,492,22,22);
        fill(255,255,255,shine);
        shine=shine+shines;
        if(shine>255){
            shines=-5;
        }else if(shine<0){
            shines=5;
        }
        textSize(20);
        text("press f to pay resp- no i mean to start the game",300,580);
        keyReleased = function(){
            if(keyCode===70){
                screen="trans";
            }
        };
    }else if(screen==="trans"){
        fill(0);
        rect(0,0,600,600);
        translate(0,tran);
        scale(1,scaley);
        if(scaley<0){
            screen="selection";
        }else{
            fill(0, 0, 40);
            rect(0,0,600,600);
            {
        fill(100);
        rect(0,450,600,150);
        textAlign(CENTER,CENTER);
        textSize(75);
        fill(150);
        text("BORTNITE",300,100);
        fill(200, 0, 0);
        textFont(mono,35);
        text("Battle Boiale \n",300,170);
        fill(50);
        textFont(mono,35);
        text("B      B      \n ",300,170);
        fill(0);
        blinky=blinky+1;
        //Blink
        {
        if(blinky>=25){
            text("|",420,150);
        }
        if(blinky>=50){
            blinky=0;
        }
        }
        fill(255, 0, 0);
        rect(105,70,60,60,10);
        fill(255);
        textFont(ar,75);
        text("B",136,100);
        fill(0, 100, 0);
        rect(265,440,75,125);
        fill(255, 220, 120);
        ellipse(300,400,75,75);
        pushMatrix();
        fill(35);
        rotate(radians(25));
        rect(390,280,170,35);
        rect(510,315,10,25);
        rect(456,315,10,25);
        rect(560,275,5,45);
        rect(385,275,5,45);
        fill(25);
        rect(420,276,25,42);
        popMatrix();
        fill(255, 220, 120);
        ellipse(330,515,22,22);
        ellipse(280,492,22,22);
        fill(255,255,255,shine);
        shine=shine+shines;
        if(shine>255){
            shines=-5;
        }else if(shine<0){
            shines=5;
        }
        textSize(20);
        text("Starting...",300,580);
    }
            tran=tran+7.5;
            scaley=scaley-0.025;
        }
    }else if(screen==="selection"){
        fill(0);
        rect(0,0,600,600);
        translate(0,trani);
        scale(1,scaleyi);
        fill(100);
        rect(0,0,600,600);
        if(scaleyi<1){
            trani=trani-7.5;
            scaleyi=scaleyi+0.025;
        }
        fill(mover);
        rect(200,300,200,50);
        fill(mover2);
        rect(10,10,200,50);
        fill(0);
        textFont(mono,30);
        text("Options",110,32.5);
        text("Test Place",300,325);
		if(mouseX>=200&&mouseX<=400&&mouseY>=300&&mouseY<=350){
			mover=200;
		}else{
			mover=150;
		}
		if(mouseX>=10&&mouseX<=210&&mouseY>=10&&mouseY<=60){
			mover2=200;
		}else{
			mover2=150;
		}
		mousePressed = function(){
			if(mouseX>=200&&mouseX<=400&&mouseY>=300&&mouseY<=350){
				screen="testplace";
			}
			if(mouseX>=10&&mouseX<=210&&mouseY>=10&&mouseY<=60){
				screen="options";
			}
		};
    }else if(screen==="testplace"){
        fill(0, 255, 255);
        rect(-100,0,800,600);
        if(threed){
            fill(0,150,0);
            rect(-100,475,800,100);
        }
        fill(0,200,0);
        rect(-100,500,800,100);
        keyReleased = function(){
            if(keyCode===81){
                if(charmode==="tool"){
                    charmode="build";
                }else{
                    charmode="tool";
                }
            }else if(keyCode===112&&f1){
                charmode="build";
                bmode="wall";
            }else if(keyCode===113&&f1){
                charmode="build";
                bmode="flat";
            }else if(keyCode===114&&f1){
                charmode="build";
                bmode="stair";
            }else if(keyCode===115&&f1){
                charmode="build";
                bmode="square";
            }else if(keyCode===116&&f1){
                charmode="build";
                bmode="cover wall";
            }else if(keyCode===90&&f1===false){
                charmode="build";
                bmode="wall";
            }else if(keyCode===88&&f1===false){
                charmode="build";
                bmode="flat";
            }else if(keyCode===67&&f1===false){
                charmode="build";
                bmode="stair";
            }else if(keyCode===86&&f1===false){
                charmode="build";
                bmode="square";
            }else if(keyCode===66&&f1===false){
                charmode="build";
                bmode="cover wall";
            }
            if(keyCode===49){
                charmode="tool";
                selected=1;
            }else if(keyCode===50){
                charmode="tool";
                selected=2;
            }
            if(keyCode===82){
                if(dirp===0){
                    dirp=1;
                }else{
                    dirp=0;
                }
            }
            if(keyCode===80){
                screen="options";
                paused=true;
            }
        };
        {
        if(movallr===1){
            if(movtrans>=-50){
                movtrans=movtrans-10;
            }else{
                for(var k = 0; k<wallx.length; k++){
                    wallx[k]=wallx[k]-50;
                }
                for(var l = 0; l<flatx.length; l++){
                    flatx[l]=flatx[l]-50;
                }
                for(var m = 0; m<stairx.length; m++){
                    stairx[m]=stairx[m]-50;
                }
                for(var h = 0; h<fwallx.length; h++){
                    fwallx[h]=fwallx[h]-50;
                }
                charx=0;
                charmov=0;
                movtrans=0;
            }
            movallr=0;
        }
		keyPressed = function(){
			if(keyCode===LEFT){
				charx=charx+2.5;
				charmov=charmov-2.5;
				if(charx>=50){
					movalll=1;
				}
			}
			if(keyCode===RIGHT){
				charx=charx-2.5;
				charmov=charmov+2.5;
				if(charx<=-50){
					movallr=1;
				}
			}
		};
		mousePressed= function(){
			for(var h = 0; h<=fwallx.length; h++){
				if(charmode==="tool"){
					if(threed){
						if(mouseX>=fwallx[h]&&mouseX<=fwallx[h]+50&&mouseY+20>=fwally[h]&&mouseY+20<=fwally[h]+50){
								fwallx.splice(h,1);
								fwally.splice(h,1);
								fwalld.splice(h,1);
						}
					}else{
						if(mouseX>=fwallx[h]&&mouseX<=fwallx[h]+50&&mouseY>=fwally[h]&&mouseY<=fwally[h]+50){
								fwallx.splice(h,1);
								fwally.splice(h,1);
								fwalld.splice(h,1);
						}
					}
				}
			}
			for(var i = 0; i<=wallx.length; i++){
            if(charmode==="tool"){
                if(mouseX>=wallx[i]-2.5&&mouseX<=wallx[i]+2.5&&mouseY>=wally[i]&&mouseY<=wally[i]+50){
                    wallx.splice(i,1);
                    wally.splice(i,1);
                }
            }
        }
        for(var j = 0; j<=flatx.length; j++){
            if(charmode==="tool"){
                if(mouseX>=flatx[j]&&mouseX<=flatx[j]+50&&mouseY>=flaty[j]-2.5&&mouseY<=flaty[j]+2.5){
                        flatx.splice(j,1);
                        flaty.splice(j,1);
                }
            }
        }
        for(var k = 0; k<=stairx.length; k++){
            if(charmode==="tool"){
                if(mouseX>=stairx[k]+2.5&&mouseX<=stairx[k]+45&&mouseY>=stairy[k]+2.5&&mouseY<=stairy[k]+45){
                        stairx.splice(k,1);
                        stairy.splice(k,1);
                        staird.splice(k,1);
                }
            }
        }
        for(var h = 0; h<=fwallx.length; h++){
            if(charmode==="tool"){
                if(mouseX>=fwallx[h]&&mouseX<=fwallx[h]+50&&mouseY>=fwally[h]&&mouseY<=fwally[h]+50){
                        fwallx.splice(h,1);
                        fwally.splice(h,1);
                        fwalld.splice(h,1);
                }
            }
        }
		};
        if(movalll===1){
            if(movtrans<=50){
                movtrans=movtrans+10;
            }else{
                for(var k = 0; k<wallx.length; k++){
                    wallx[k]=wallx[k]+50;
                }
                for(var l = 0; l<flatx.length; l++){
                    flatx[l]=flatx[l]+50;
                }
                for(var m = 0; m<stairx.length; m++){
                    stairx[m]=stairx[m]+50;
                }
                for(var h = 0; h<fwallx.length; h++){
                    fwallx[h]=fwallx[h]+50;
                }
                charx=0;
                charmov=0;
                movtrans=0;
            }
            movalll=0;
        }
        }
        //three-D effect on backwall
        {
            for(var h = 0; h<=fwallx.length; h++){
                if(fwalld[h]===1&&threed){
                    /*for(var fwall13d = 0; fwall13d<5; fwall13d++){
                        fill(100,50,0);
                        rect(fwallx[h]-20-fwall13d,fwally[h]-20-fwall13d,50,50);
                    }
                    */
                    fill(100,50,0);
                    beginShape();
                    vertex(fwallx[h]+20,fwally[h]-20);
                    vertex(fwallx[h]+20+5,fwally[h]-20-5);
                    vertex(fwallx[h]+20+5+50,fwally[h]-20-5);
                    vertex(fwallx[h]+20+5+50,fwally[h]-20-5+50);
                    vertex(fwallx[h]+20+50,fwally[h]-20+50);
                    endShape();
                }
            }
        }
        //backwall
        {
        for(var h = 0; h<=fwallx.length; h++){
            if(charmode==="tool"){
                if(threed){
                    if(mouseX>=fwallx[h]&&mouseX<=fwallx[h]+50&&mouseY+20>=fwally[h]&&mouseY+20<=fwally[h]+50){
                        stroke(255,0,0);
                    }
                }else{
					if(mouseX>=fwallx[h]&&mouseX<=fwallx[h]+50&&mouseY>=fwally[h]&&mouseY<=fwally[h]+50){
                        stroke(255,0,0);
                    }
				}
            }
            if(fwalld[h]===1){
                if(threed){
                    fill(125,75,0);
                    rect(fwallx[h]+20,fwally[h]-20,50,50);
                }else{
                    fill(125,75,0);
                    rect(fwallx[h],fwally[h],50,50);
                }
            }
            noStroke();
        }
        }
        //Three-D building effect
        {
        if(threed){
            for(var i = 0; i<=wallx.length; i++){
                //for(var wall3d = 0; wall3d<20;wall3d++){
                    fill(100, 50, 0);
                    //rect(wallx[i]-2.5-wall3d,wally[i]-wall3d,5,50);
                    beginShape();
                    vertex(wallx[i]-2,wally[i]);
                    vertex(wallx[i]-2.5+20,wally[i]-20);
                    vertex(wallx[i]-2.5+20+5,wally[i]-20);
                    vertex(wallx[i]-2.5+20+5,wally[i]-20+50);
                    vertex(wallx[i]-2.5+5,wally[i]+50);
                    endShape();
                //}
            }
            for(var j = 0; j<=flatx.length; j++){
                //for(var flat3d = 0; flat3d<20;flat3d++){
                    fill(100, 50, 0);
                    beginShape();
                    vertex(flatx[j],flaty[j]-2.5);
                    vertex(flatx[j]+20,flaty[j]-20);
                    vertex(flatx[j]+20+50,flaty[j]-20);
                    vertex(flatx[j]+20+50,flaty[j]-20+5);
                    vertex(flatx[j]+50,flaty[j]+2);
                    endShape();
                //}
            }
            for(var k = 0; k<=stairx.length; k++){
                strokeWeight(5);
                if(staird[k]===0){
                    /*
                    stroke(100,50,0);
                    for(var stair13d = 0; stair13d<20;stair13d++){
                        line(stairx[k]+stair13d,stairy[k]-stair13d,stairx[k]+50+stair13d,stairy[k]-stair13d+50);
                    }
                    */
                    fill(100, 50, 0);
                    beginShape();
                    vertex(stairx[k],stairy[k]);
                    vertex(stairx[k]+20,stairy[k]-20);
                    vertex(stairx[k]+70,stairy[k]+30);
                    vertex(stairx[k]+50,stairy[k]+50);
                    endShape();
                }else if(staird[k]===1){
                
                    /*
                    for(var stair13d = 0; stair13d<20;stair13d++){
                        line(stairx[k]+50+stair13d,stairy[k]-stair13d,stairx[k]+stair13d,stairy[k]+50-stair13d);
                    }
                    */
                    stroke(100, 50, 0);
                    fill(100, 50, 0);
                    line(stairx[k]+70,stairy[k]-20,stairx[k],stairy[k]+50);
                    noStroke();
                }
            }
        }
        }
        //character
        {
        if(threed===false){
            charh=10;
        }
        noStroke();
        fill(0,100,0);
        rect(charmov+287.5,450+charh,25,40);
        fill(255,220,120);
        ellipse(charmov+300,440+charh,25,25);
        if(charmode==="build"){
            fill(0, 100, 200);
            rect(charmov+300,450+charh,15,20);
            fill(255, 220, 120);
            ellipse(charmov+300,462+charh,7,7);
            ellipse(charmov+317,462+charh,7,7);
        }else{
            if(selected===1){
                fill(150, 100, 0);
                rect(charmov+290,470+charh,35,5);
                fill(200);
                rect(charmov+320,460+charh,5,25);
                fill(255, 220, 120);
                ellipse(charmov+297,472+charh,7,7);
                ellipse(charmov+312,472+charh,7,7);
            }else if(selected===2){
                if(Inventory[1]==="pistol"){
                    fill(50);
                    rect(charmov+315,460+charh,10,5);
                    rect(charmov+310,460+charh,5,12.5);
                    fill(255, 220, 120);
                    ellipse(charmov+313,470+charh,7,7);
                }
            }
        }
        }
		//coverwall three-D effect
		{
		if(threed){
			for(var h = 0; h<=fwallx.length; h++){
                if(fwalld[h]===0){
                    /*for(var fwall13d = 0; fwall13d<5; fwall13d++){
                        noStroke();
                        fill(100,50,0);
                        rect(fwallx[h]-fwall13d,fwally[h]-fwall13d,50,50);
                    }*/
					if(seethrough===255){
						fill(100, 50, 0);
						beginShape();
						vertex(fwallx[h],fwally[h]);
						vertex(fwallx[h]+5,fwally[h]-5);
						vertex(fwallx[h]+5+50,fwally[h]-5);
						vertex(fwallx[h]+5+50,fwally[h]-5+50);
						vertex(fwallx[h]+50,fwally[h]+50);
						endShape();
					}
                }
            }
		}
		}
        //Actual wall
        {
        for(var i = 0; i<=wallx.length; i++){
            if(charmode==="tool"){
                if(mouseX>=wallx[i]-2.5&&mouseX<=wallx[i]+2.5&&mouseY>=wally[i]&&mouseY<=wally[i]+50){
                    stroke(255,0,0);
                    strokeWeight(2.5);
                }
            }
            fill(150, 100, 0);
            rect(wallx[i]-2.5,wally[i],5,50);
            noStroke();
        }
        for(var j = 0; j<=flatx.length; j++){
            if(charmode==="tool"){
                if(mouseX>=flatx[j]&&mouseX<=flatx[j]+50&&mouseY>=flaty[j]-2.5&&mouseY<=flaty[j]+2.5){
                    stroke(255,0,0);
                    strokeWeight(2.5);
                    
                }
            }
            fill(150, 100, 0);
            rect(flatx[j],flaty[j]-2.5,50,5);
            noStroke();
        }
        for(var k = 0; k<=stairx.length; k++){
            strokeWeight(5);
            stroke(150,100,0);
            if(charmode==="tool"){
                if(mouseX>=stairx[k]+2.5&&mouseX<=stairx[k]+45&&mouseY>=stairy[k]+2.5&&mouseY<=stairy[k]+45){
                    stroke(255,0,0);
                }
            }
            if(staird[k]===0){
                line(stairx[k],stairy[k],stairx[k]+50,stairy[k]+50);
            }else if(staird[k]===1){
                line(stairx[k]+50,stairy[k],stairx[k],stairy[k]+50);
            }
        }
        for(var h = 0; h<=fwallx.length; h++){
            if(charmode==="tool"){
                if(mouseX>=fwallx[h]&&mouseX<=fwallx[h]+50&&mouseY>=fwally[h]&&mouseY<=fwally[h]+50){
                    stroke(255,0,0);
                }
            }
            if(fwalld[h]===0){
				noStroke();
				fill(150,100,0,seethrough);
				rect(fwallx[h],fwally[h],50,50);
            }
            noStroke();
        }
        }
			for(var h = 0; h<=fwallx.length; h++){
				if(fwalld[h]===0){
					if(fwallx[h]>=240+charmov&&fwallx[h]<=315+charmov&&fwally[h]>=440&&fwally[h]<=490){
						touchingcw=touchingcw+1;
					}
				}
			}
			if(touchingcw===0){
				seethrough=255;
			}else{
				seethrough=100;
			}
			touchingcw=0;
        //building
        {
        if(charmode==="build"){
            if(bmode==="wall"){
                fill(0,200,200,125);
                rect(placex-2.5,placey,5,50);
                fill(0);
                textSize(15);
                text("wooden wall",placex,placey-10);
            }else if(bmode==="flat"){
                fill(0,200,200,125);
                rect(placex,placey-2.5,50,5);
                fill(0);
                textSize(15);
                text("wooden floor",placex,placey-10);
            }else if(bmode==="stair"){
                stroke(0,200,200,125);
                strokeWeight(5);
                if(dirp===0){
                    line(placex,placey,placex+50,placey+50);
                }else if(dirp===1){
                    line(placex+50,placey,placex,placey+50);
                }
                textSize(15);
                fill(0);
                text("wooden stairs(r to rotate)",placex,placey-10);
                noStroke();
            }else if(bmode==="square"){
                fill(0,200,200,125);
                rect(placex-2.5,placey,5,50);
                rect(placex+50-2.5,placey,5,50);
                rect(placex,placey-2.5,50,5);
                rect(placex,placey+50-2.5,50,5);
                textSize(15);
                fill(0);
                text("wooden block",placex+25,placey-10);
            }else if(bmode==="cover wall"){
                if(dirp===1&&threed){
                    fill(0,200,200,125);
                    rect(placex+20,placey-20,50,50);
					fill(200,200,200,50);
                    rect(placex,placey,50,50);
                    textSize(15);
                    fill(0);
                    text("wooden back cover wall \n(r to move layers)",placex+25,placey-40);
                }else{
                    fill(0,200,200,125);
                    rect(placex,placey,50,50);
					fill(200,200,200,50);
                    rect(placex+20,placey-20,50,50);
                    textSize(15);
                    fill(0);
                    if(dirp===0){
                        text("wooden cover wall \n(r to move layers)",placex+25,placey-40);
                    }else{
                        text("wooden back cover wall \n(r to move layers)",placex+25,placey-40);
                    }
                }
            }
            placex=round(mouseX/50)*50;
            placey=round(mouseY/50)*50;
            mousePressed = function(){
                if(bmode==="wall"&&placey<=450){
                    wallx.push(placex);
                    wally.push(placey);
                    wallh.push(400);
                }else if(bmode==="cover wall"&&placey<=450){
                    fwallx.push(placex);
                    fwally.push(placey);
                    fwalld.push(dirp);
                }else if(bmode==="flat"&&placey<=500){
                    flatx.push(placex);
                    flaty.push(placey);
                    flath.push(400);
                }else if(bmode==="stair"&&placey<=450){
                    stairx.push(placex);
                    stairy.push(placey);
                    staird.push(dirp);
                    stairh.push(400);
                }else if(bmode==="square"&&placey<=450){
                    wallx.push(placex);
                    wally.push(placey);
                    wallh.push(400);
                    wallx.push(placex+50);
                    wally.push(placey);
                    wallh.push(400);
                    flatx.push(placex);
                    flaty.push(placey);
                    flath.push(400);
                    flatx.push(placex);
                    flaty.push(placey+50);
                    flath.push(400);
                }
            };
        }
        }
    }else if(screen==="options"){
        fill(100);
        rect(0,0,600,600);
        fill(0);
        textFont(mono,30);
        if(paused===false){
            text("Options:",100,50);
        }else{
            text("Paused:",100,50);
        }
        text("Three-D Graphics:",200,100);
        text("F1-4 Controls:",200,160);
		text("Turbo mode:",200,220);
        mouseReleased = function(){
            if(mouseX>=350&&mouseX<=450&&mouseY>=80&&mouseY<=120){
                if(threedb==="green"){
                    threedb="red";
                }else{
                    threedb="green";
                }
            }
            if(mouseX>=350&&mouseX<=450&&mouseY>=140&&mouseY<=180){
                if(f1b==="green"){
                    f1b="red";
                }else{
                    f1b="green";
                }
            }
			if(mouseX>=350&&mouseX<=450&&mouseY>=200&&mouseY<=240){
                if(turbob==="green"){
                    turbob="red";
                }else{
                    turbob="green";
                }
            }
        };
        if(mouseX>=230&&mouseX<=570&&mouseY>=550&&mouseY<=590){
			mousePressed = function(){
            if(paused===true){
                paused=false;
                screen="testplace";
            }else{
                screen="selection";
            }
			};
        }
        if(threedb==="green"){
            threed=true;
            fill(0, 255, 0);
        }else{
            threed=false;
            fill(255, 0, 0);
        }
        rect(350,80,100,40);
        if(f1b==="green"){
            f1=true;
            fill(0, 255, 0);
        }else{
            f1=false;
            fill(255, 0, 0);
        }
        rect(350,140,100,40);
		if(turbob==="green"){
			fps=1000;
			fill(0,255,0);
		}else{
			fps=60;
			fill(255,0,0);
		}
		rect(350,200,100,40);
        fill(150);
        rect(230,550,340,40);
        textFont(mono,20);
        fill(0);
        text("Back to selection screen/game",400,570);
    }
};

		}};