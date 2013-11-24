//Character Creation Functions

var name="", gun=false, teleporter=false, comm=false, medicine=false, pic="", mainPic="shipOuter", avatarPic="", advanceTalkCounter=1;

function getName()
{
 name=document.getElementById('nameBox').value;
}


function getTrait(item)
{
 if(item==="gun")
 {
  gun=true;
 }
 else if(item==="teleporter")
 {
  teleporter=true;
 }
 else
 {
  comm=true;
 }
}


function getPic(picID)
{
 pic=picID;
}


//main functions

function startGame()
{
  startScreen.style.display='none'
  characterCreate.style.display='block'
   
}

function picSwitcher(imgName) //switches main image
{
	
    document.getElementById('imgMain2').innerHTML = "<img src='images/"+imgName+".jpg' height='450px' width='90%'>";
	
}

function avatar(ava) //selects the avatar of the user
{
  if(ava==='ronan')
  {
	avatarPic="ronan";
  }
  else if(ava==='john')
  {
	avatarPic="john";
  }
  else if(ava==='mckay')
  {
	avatarPic="mckay";
  }
}

function characterPic(avatarIMG) //avatar of who is speaking
{
  
  document.getElementById('speakerPic').innerHTML = "<img src='images/"+avatarIMG+".jpg' height='115px' width='75px'>";
}

function textDisplay(text) // text that will be spoken
{
  ai='ai'
  document.getElementById('speakerPic').innerHTML = document.getElementById('speakerPic').innerHTML + text + '<input type="button" value="Next" onClick="advanceTalk();">';
}

function characterPic2(avatarIMG) //avatar of who is speaking
{
  
  document.getElementById('speakerPic2').innerHTML = "<img src='images/"+avatarIMG+".jpg' height='115px' width='75px'>";
}

function textDisplay2(text) // text that will be spoken
{
    document.getElementById('speakerPic2').innerHTML = document.getElementById('speakerPic2').innerHTML + text + '<input type="button" value="Next" onClick="advanceTalk();">';
}

function advanceTalk(pic, text) //selects the avatar of who speaking and the dialogue that will be said.
{
	//ai, \'Hello, I am this ships onboard AI\'
	
	if(advanceTalkCounter===1)
	{
		characterPic('ai');
		textDisplay('Hello, I am this ships onboard AI');
		advanceTalkCounter++;
	}
	/*
	else if(advanceTalkCounter===2)
	{
		characterPic(avatarPic);
		textDisplay('How did i get here?');
		advanceTalkCounter++;
	}
	else if(advanceTalkCounter===3)
	{
		characterPic('ai');
		textDisplay('You were placed in stasis 300 years ago to perserve your body for your return to Earth');
		advanceTalkCounter++;
	}
	else if(advanceTalkCounter===4)
	{
		characterPic('ai');
		textDisplay('You were awoken when we reached the edge of the Milky Way.');
		advanceTalkCounter++;
	}
	else if(advanceTalkCounter===5)
	{
		characterPic(avatarPic);
		textDisplay('Why wasnt i awoken when we reached Earth?');
		advanceTalkCounter++;
	}
	else if(advanceTalkCounter===6)
	{
		characterPic('ai');
		textDisplay('Theres a problem with the ship, a hostile ship attacked us in the previous galaxy and a number of systems have been damaged.');
		advanceTalkCounter++;
	}
	else if(advanceTalkCounter===7)
	{
		characterPic('ai');
		textDisplay('You are going to need to beam down to a few planets to gather supplies to fix the ship.');
		advanceTalkCounter++;
	}
	else if(advanceTalkCounter===8)
	{
		characterPic(avatarPic);
		textDisplay('Gather parts, I don\'t even remember what I\'m doing on this ship');
		advanceTalkCounter++;
	}
	else if(advanceTalkCounter===9)
	{
		characterPic('ai');
		textDisplay('My access to that information is restricted, perhaps there is some data on one of the ships computer terminals');
		advanceTalkCounter++;
	}
	else if(advanceTalkCounter===10)
	{
		characterPic('ai');
		textDisplay('The ship has just arrived at Dakara. You will need to beam down and retrieve a new power core. The Dakarans will not part with one too easily, perhaps there is something you can find on the ship to trade with.');
		advanceTalkCounter++;
	}
	else if(advanceTalkCounter===11)
	{
		characterPic(avatarPic);
		textDisplay('What if I have more questions?');
		advanceTalkCounter++;
	}
	else if(advanceTalkCounter===12)
	{
		characterPic('ai');
		textDisplay('If you are on the ship you can ask and I will do my best to answer. If you are on a planet, you will have to return to the ship or if you have a communicator you ask from anywhere.');
		advanceTalkCounter++;
	}
	else if(advanceTalkCounter===13)
	{
		characterPic(avatarPic);
		textDisplay('Last question for now, on the planet how do I beam back up to the ship?');
		advanceTalkCounter++;
	}
	else if(advanceTalkCounter===14)
	{
		characterPic('ai');
		textDisplay('You will need to return to the location of where you where beamed down. If you have a wrist teleporter you can beam up from anywhere on the planet.');
		advanceTalkCounter++;
	}
	*/
	else if(advanceTalkCounter===2)
	{
		characterPic('ai');
		textDisplay('Good Luck');
		advanceTalkCounter++;
		gameShip(); //start game on the ship
		
	}
	else if(advanceTalkCounter===498)
	{
		characterPic2(avatarPic);
		textDisplay2('');
		advanceTalkCounter++;
		
		
	}
	else if(advanceTalkCounter===500)
	{
		characterPic2(avatarPic);
		textDisplay2('There is nothing of interest here');
		advanceTalkCounter++;
		
		
	}
	else if(advanceTalkCounter===502)
	{
		characterPic2(avatarPic);
		textDisplay2('There is a computer in the center of the room, it\'s files may be accessed.');
		advanceTalkCounter++;
		
		
	}
	else if(advanceTalkCounter===504)
	{
		characterPic2('ai');
		textDisplay2('Most of this computers files have been damaged the only ones i can access for you are about the ships journey');
		advanceTalkCounter++;
		
		
	}
	else if(advanceTalkCounter===505)
	{
		characterPic2('ai');
		textDisplay2('This ship was launched from earth 300 years ago with the goal of discovering inhabitable worlds outside our galaxy. This ship was one of many launched.');
		advanceTalkCounter++;
		
		
	}
	else if(advanceTalkCounter===506)
	{
		characterPic2('ai');
		textDisplay2('Each ship carried a crew of 500, Most were kept in stasis to carry out the mission when those awake passed away.');
		advanceTalkCounter++;
		
		
	}
	else if(advanceTalkCounter===507)
	{
		characterPic2('ai');
		textDisplay2('For over 200 years the ships explored the galaxies around the Milky Way, by this time the crews of many ships were down to only 50 crew members in stasis.');
		advanceTalkCounter++;
		
		
	}
	else if(advanceTalkCounter===508)
	{
		characterPic2('ai');
		textDisplay2('At this time we began to lose contact with the ships furthest out. For the next 50 years more and more ships dropped off the grid with no explanation.');
		advanceTalkCounter++;
		
		
	}
	else if(advanceTalkCounter===509)
	{
		characterPic2('ai');
		textDisplay2('Finally a ship got off a transmission before it dropped off, it warned of a great enemy whose technology far outpowered our own, and they seemed bent on total destruction.');
		advanceTalkCounter++;
		
		
	}
	else if(advanceTalkCounter===510)
	{
		characterPic2('ai');
		textDisplay2('Too far out to warn earth, our final five ships formed a convoy and headed toward earth.');
		advanceTalkCounter++;
		
		
	}
	else if(advanceTalkCounter===511)
	{
		characterPic2('ai');
		textDisplay2('On the edge of the Pegasus Galaxy, they caught up to us. Two giant warships bearing down, we gave it all we could, we managed to destroy 1 but 4 of our ships were destroyed. In a desperate measure the remaining crew of this ship boarded fighters and commited a suicide run aganist the enemy');
		advanceTalkCounter++;
		
		
	}
	else if(advanceTalkCounter===512)
	{
		characterPic2('ai');
		textDisplay2('This ship was heavily damaged but they managed to destroy the enemy ship. You are the only crew member remaining, and without our long range communications you must get back to earth to warn them.');
		advanceTalkCounter++;
		
		
	}
	else if(advanceTalkCounter===514)
	{
		characterPic2(avatarPic);
		textDisplay2('There appears to be a crate of medicine in the corner. Perhaps this could be used as a trade with some locals.');
		advanceTalkCounter++;
		
		
	}
	
}

function gameShip()
{
	gameBegin.style.display='none'
	game.style.display='block'
	characterPic2(avatarPic);
	
	
}

function explore(location)
{
 if (location==="stasisChamber")
 {
    buttonStart_Stasis.style.display='none'
	buttonStart_ControlRoom.style.display='none'
	buttonStart_EmbarkationRoom.style.display='none'
    buttonExplore_Stasis.style.display='block'
 } 
 if (location==="embarkationRoom")
 {
    buttonStart_Stasis.style.display='none'
	buttonStart_ControlRoom.style.display='none'
	buttonStart_EmbarkationRoom.style.display='none'
    buttonExplore_EmbarkationRoom.style.display='block'
 }
 if (location==="controlRoom")
 {
    buttonStart_Stasis.style.display='none'
	buttonStart_ControlRoom.style.display='none'
	buttonStart_EmbarkationRoom.style.display='none'
    buttonExplore_ControlRoom.style.display='block'
 }
}

function search(location)
{
 if (location==="stasisChamber")
 {
    advanceTalkCounter=500;
    advanceTalk();
	
 } 
 if (location==="embarkationRoom")
 {
	buttonStart_EmbarkationRoom.style.display='none'
    advanceTalkCounter=514;
    advanceTalk();
	medicine=true;
	buttonSearch_EmbarkationRoom.style.display='block'
 }
 if (location==="controlRoom")
 {
	buttonStart_ControlRoom.style.display='none'
	advanceTalkCounter=502;
    advanceTalk();
    buttonSearch_ControlRoom.style.display='block'
 }
}

