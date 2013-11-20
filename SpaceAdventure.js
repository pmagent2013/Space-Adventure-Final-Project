//Character Creation Functions

var name="", gun=false, teleporter=false, comm=false, pic="", mainPic="shipOuter", avatarPic="", advanceTalkCounter=1;

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

function picSwitcher(imgID) //switches main image
{
  
    document.getElementById('imgMain').innerHTML = "<img src='images/"+imgID+".jpg' height='450px' width='90%'>";
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
}

function gameShip()
{
	gameBegin.style.display='none'
	game.style.display='block'
	
}

function explore(location)
{
 if (location==="stasisChamber")
 {
    buttonStart.style.display='none'
    buttonExplore.style.display='block'
 } 
}

