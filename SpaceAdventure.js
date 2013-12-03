//Character Creation Functions

//global variables required for the game
var medicine=false, name="", powerCore=false, newhyperdrive=false, airFilter=false, goldChest=false, goldChest2=false, artifact=false, councilTalk=false, councilApprove=false, asgardWeapons=false, battle=false, pic="", weaponSelect="", weaponFired=false, mainPic="shipOuter", avatarPic="", hyperdriveCounter=0, advanceTalkCounter=1, shipHealth=100, wraithHealth=100;


//main functions
//draws the inital screens of the game
function startGame()
{
  startScreen.style.display='none'
  characterCreate.style.display='block'
   
}

function picSwitcher(imgName) //switches main image
{
	
    document.getElementById('imgMain2').innerHTML = "<img src='images/"+imgName+".jpg' height='450px' width='90%'>";
	
}
//these are the possible characters to be selected
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
  else if(ava==='carter')
  {
	avatarPic="carter";
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

//these functions had to be duplicated due to the need to redraw the divs and was unable to reuse the same div
function characterPic2(avatarIMG) //avatar of who is speaking
{
  
  document.getElementById('speakerPic2').innerHTML = "<img src='images/"+avatarIMG+".jpg' height='115px' width='75px'>";
}

function textDisplay2(text) // text that will be spoken
{
    document.getElementById('speakerPic2').innerHTML = document.getElementById('speakerPic2').innerHTML + text + '<input type="button" value="Next" onClick="advanceTalk();">';
}

//This is the entire dialogue contained in the game. Some will be said no matter what, others will be said based on player choices.
//Large gaps in numbers is because of deleted dialogue or functionality that was not implemented for various reasons.
function advanceTalk(pic, text) //selects the avatar of who speaking and the dialogue that will be said.
{
	//ai, \'Hello, I am this ships onboard AI\'
	
	if(advanceTalkCounter===1)
	{
		characterPic('ai');
		textDisplay('Hello, I am this ships onboard AI');
		advanceTalkCounter++;
	}
	
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
		textDisplay('On the planet how do I beam back up to the ship?');
		advanceTalkCounter++;
	}
	else if(advanceTalkCounter===12)
	{
		characterPic('ai');
		textDisplay('You will need to return to the location of where you where beamed down.');
		advanceTalkCounter++;
	}
	
	else if(advanceTalkCounter===13)
	{
		characterPic('ai');
		textDisplay('Good Luck');
		advanceTalkCounter++;
		gameShip(); //start game on the ship
		
	}
	//number jump due to deleted dialogue
	else if(advanceTalkCounter===498)
	{
		characterPic2(avatarPic);
		textDisplay2('');
		advanceTalkCounter++;
				
	}
	//ship exploration dialogue
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
	
	else if(advanceTalkCounter===516)
	{
		characterPic2(avatarPic);
		textDisplay2('I can\'t teleport off the ship from here. I need to be in the embarkation room.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===518)
	{
		characterPic2(avatarPic);
		textDisplay2('If I\'m ready i can teleport to Dakara now.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===520)
	{
		characterPic2('ai');
		textDisplay2('I suggest you explore the entire ship before you beam down to Dakara');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===521)
	{
		characterPic2('ai');
		textDisplay2('This ship is very large, unfortunately you cant access most areas due to the damage.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===522)
	{
		characterPic2('ai');
		textDisplay2('Time is of the importance');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===523)
	{
		characterPic2('ai');
		textDisplay2('I have nothing else to say currently');
		advanceTalkCounter++;
		
	}
	//dakara dialogue
	else if(advanceTalkCounter===600)
	{
		characterPic2(avatarPic);
		textDisplay2('Hello.... Anybody here?');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===601)
	{
		characterPic2('telc');
		textDisplay2('Stop! Don\'t come any closer, there is a great sickness here.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===602)
	{
		if(medicine===true)
		{
		characterPic2(avatarPic);
		textDisplay2('I have medicine I\'d be willing to trade.');
		advanceTalkCounter++;
		}
		else
		{
		characterPic2(avatarPic);
		textDisplay2('Perhaps there is medicine on my ship.');
		}
		
		
	}
	else if(advanceTalkCounter===603)
	{
		characterPic2('telc');
		textDisplay2('Trade for what?');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===604)
	{
		characterPic2(avatarPic);
		textDisplay2('I need a new power core for my ship, it was damaged in battle.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===605)
	{
		characterPic2('telc');
		textDisplay2('The men in the ruins can help you. Tell them Tel\'c sent you and that i approve the trade.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===606)
	{
		characterPic2(avatarPic);
		textDisplay2('Thank you very much.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===607)
	{
		characterPic2('telc');
		textDisplay2('If the enemy that attacked your ship is who think, it would be wise of you to talk to the priest in the temple.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===608)
	{
		characterPic2('telc');
		textDisplay2('He has knowlege that may be interesting to you.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===609)
	{
		characterPic2('telc');
		textDisplay2('Also you may want to seach around, we have lots of extra gold that people on other planets may be willing to trade for.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===612)
	{
		characterPic2('bratak');
		textDisplay2('Hello. How can i help you?');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===613)
	{
		characterPic2(avatarPic);
		textDisplay2('Tel\'c told me you could tell me about the great enemy.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===614)
	{
		characterPic2('bratak');
		textDisplay2('A long time ago the galaxies were ruled by a ferocious race called the Wraith. They dominated through fear, feasting on the populations of world for food.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===615)
	{
		characterPic2('bratak');
		textDisplay2('They leave just enough of a worlds population alive to allow them to reproduce and move on to the next planet. Once the have attacked all the worlds they retreat back to outer galaxies and wait for the populations to get high enough again.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===616)
	{
		characterPic2('bratak');
		textDisplay2('This cycle has gone on for thousands and thousands of years. But this is the first time the Wraith have ever made it to the Milky Way. There must not have enough food in the other galaxies to feed them');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===617)
	{
		characterPic2('bratak');
		textDisplay2('If your planet can mount any sort of defense you should get back and warn them as soon as possible.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===618)
	{
		characterPic2(avatarPic);
		textDisplay2('Thank you for everything.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===619)
	{
		characterPic2(avatarPic);
		textDisplay2('');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===621)
	{
		characterPic2(avatarPic);
		textDisplay2('If I\'m ready I can beam up to the ship');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===625)
	{
		characterPic2('daniel');
		textDisplay2('Stop right there');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===626)
	{
		characterPic2('vala');
		textDisplay2('Who are you?');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===627)
	{
		characterPic2(avatarPic);
		textDisplay2('Whoah, don\'t shoot! Teal\'c told me I could come here to trade.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===628)
	{
		characterPic2('daniel2');
		textDisplay2('What do you have to trade?');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===629)
	{
		characterPic2('vala');
		textDisplay2('And for what?');
		advanceTalkCounter++;
		
	}
	else if(advanceTalkCounter===630)
	{
		characterPic2(avatarPic);
		textDisplay2('I have medicine to trade in exchange for a power core. Teal\'c said he approved the trade.');
		advanceTalkCounter++;
		
	}
	else if(advanceTalkCounter===631)
	{
		characterPic2('vala');
		textDisplay2('There is great sickness here, you couldn\'t have come at a better time.');
		advanceTalkCounter++;
		
	}
	else if(advanceTalkCounter===632)
	{
		characterPic2('daniel2');
		textDisplay2('These power cores are very valuble, you better have alot of medicine.');
		advanceTalkCounter++;
		
	}
	else if(advanceTalkCounter===633)
	{
		characterPic2('vala');
		textDisplay2('Daniel cut it out, give him the power core, we need to get the medicine to the people.');
		advanceTalkCounter++;
		
	}
	else if(advanceTalkCounter===634)
	{
		characterPic2('daniel2');
		textDisplay2('Here you go, thank you for the medicine.');
		advanceTalkCounter++;
		powerCore=true;
		
	}
	else if(advanceTalkCounter===635)
	{
		characterPic2(avatarPic);
		textDisplay2('Thank you. I hope your people recover quickly.');
		advanceTalkCounter++;
		
	}
	else if(advanceTalkCounter===636)
	{
		characterPic2(avatarPic);
		textDisplay2('');
		advanceTalkCounter++;
		
	}
	else if(advanceTalkCounter===650)
	{
		characterPic2(avatarPic);
		textDisplay2('I already picked up the item from here');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===652)
	{
		characterPic2(avatarPic);
		textDisplay2('There appears to be a chest of gold here');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===690)
	{
		characterPic2(avatarPic);
		textDisplay2('I can\'t teleport to the ship from here, i need to be in the village');
		advanceTalkCounter++;
				
	}
	//transport back to ship and orilla dialogue
	else if(advanceTalkCounter===700)
	{
		characterPic2('ai');
		textDisplay2('Welcome back aboard, i see you have retrieved a new power core, bring it over to the console.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===701)
	{
		characterPic2('ai');
		textDisplay2('Next up on our part list is a new hyperdrive, the current one will probably only last for one more jump.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===702)
	{
		characterPic2('ai');
		textDisplay2('Luckily there is a planet  that might be able to help that we should reach before the drive fails');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===703)
	{
		characterPic2('ai');
		textDisplay2('I hope you found something on Dakara that you can use to trade with, because once we jump there is no coming back here.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===704)
	{
		characterPic2('ai');
		textDisplay2('If you are ready to engage the hyperdrive go to the control room.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===705)
	{
		characterPic2(avatarPic);
		textDisplay2('');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===707)
	{
		characterPic2(avatarPic);
		textDisplay2('If I\'m ready i can teleport to Orilla now.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===710)
	{
		characterPic2('ai');
		textDisplay2('The ship has arrived at Orilla. As I feared the hyperdrive has failed. If you can\'t secure a new one, we\'re not going anywhere.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===711)
	{
		characterPic2('ai');
		textDisplay2('The indigenious population of Orilla are the Asgard, they are a highly advanced civilization.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===712)
	{
		characterPic2('ai');
		textDisplay2('When you\'re ready, beam down to the planet.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===714)
	{
		characterPic2('ai');
		textDisplay2('You can\'t engage the hyperdrive at this time.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===718)
	{
		characterPic2(avatarPic);
		textDisplay2('I can beam down to Orilla if I\'m ready.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===720)
	{
		characterPic2('thor');
		textDisplay2('Hello traveler, I am Thor of the Asgard. Welcome to Orilla');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===721)
	{
		characterPic2(avatarPic);
		textDisplay2('I need a new hyperdrive for my ship, I must get back to my planet to warn them of the coming Wraith attack.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===722)
	{
		characterPic2('thor');
		textDisplay2('The wraith have never been a problem for us. As for the hyperdrive you must talk to the council about that.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===723)
	{
		characterPic2(avatarPic);
		textDisplay2('Why have the Wraith never been a problem for you?');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===724)
	{
		characterPic2('thor');
		textDisplay2('We are technologically superior to them. Past that I can\'t tell you anymore, you would need to talk to the council.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===725)
	{
		characterPic2(avatarPic);
		textDisplay2('Thank you, i will go to the council now.');
		advanceTalkCounter++;
				
	}
	
	else if(advanceTalkCounter===727)
	{
		characterPic2(avatarPic);
		textDisplay2('Hello, I am a traveler who needs a new hyperdrive to reach my planet to warn them before the Wraith arrive.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===728)
	{
		characterPic2('archon');
		textDisplay2('Yes, Thor told us you would be coming.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===729)
	{
		characterPic2(avatarPic);
		textDisplay2('So, are you willing to help?');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===730)
	{
		characterPic2('archon');
		textDisplay2('That has not yet been decided.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===731)
	{
		characterPic2(avatarPic);
		textDisplay2('Why not? I must warn my people!');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===732)
	{
		characterPic2('archon');
		textDisplay2('The Asgard do not part with the technology lightly, our technological advantage is all that we have.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===731)
	{
		characterPic2(avatarPic);
		textDisplay2('Why not? I must warn my people!');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===732)
	{
		characterPic2('archon');
		textDisplay2('The Asgard do not part with the technology lightly, our technological advantage is all that we have.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===733)
	{
		characterPic2(avatarPic);
		textDisplay2('Well while you think it over, can you tell me why you never worry about the Wraith?');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===734)
	{
		characterPic2('archon');
		textDisplay2('The Asgard and the Wraith first met over 3 centuries ago. They outnumbered us 100 to 1. We tried to negotiate a truce, but all the wanted was war.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===735)
	{
		characterPic2('archon');
		textDisplay2('In the inital years of the war things went very badly, our ships were more powerfull but the enemy numbers were too great.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===736)
	{
		characterPic2('archon');
		textDisplay2('We had our fleet spread out trying to defend the galaxies from the Wraith.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===737)
	{
		characterPic2('archon');
		textDisplay2('A single Asgard ship was a match for five Wraith ships. But because we tried defending so many planets we could only spare one to ships per planet.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===738)
	{
		characterPic2('archon');
		textDisplay2('The wraith would send ten ships to every planet we defended. There was nothing we could do. We were losing ships and the war rapidly.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===739)
	{
		characterPic2('archon');
		textDisplay2('We made the only decision we could, we fell back to our five core worlds. We developed advanced defense satelites and even more power ships.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===740)
	{
		characterPic2('archon');
		textDisplay2('When the Wraith came for us, we were ready. The battle lasted months, at the end, we had destroyed over 1,000 wraith ships, and suffered no major casualties.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===741)
	{
		characterPic2('archon');
		textDisplay2('The Wraith came again and again for over 100 years before deciding we weren\'t worth it. We have lived free of fear from the wraith for over a century now.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===742)
	{
		characterPic2('archon');
		textDisplay2('So you see, even if you could defend againist the first wave you never could never win. ');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===743)
	{
		characterPic2(avatarPic);
		textDisplay2('Then help us, send ships and some satelites and help defend Earth! ');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===744)
	{
		characterPic2('archon');
		textDisplay2('That is a decision the entire council must make, if we decide to help our ships will arrive at earth when they are needed. ');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===745)
	{
		characterPic2('archon');
		textDisplay2('For now, you may purchase a hyperdrive from us. Go to the shipyard and talk to Loki, we will let him know your\'e coming. ');
		advanceTalkCounter++;
		councilApprove=true;
		councilTalk=true;
	}
	else if(advanceTalkCounter===746)
	{
		characterPic2(avatarPic);
		textDisplay2('');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===748)
	{
		characterPic2('archon');
		textDisplay2('We have not reached a decision yet.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===749)
	{
		characterPic2(avatarPic);
		textDisplay2('');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===751)
	{
		characterPic2('loki');
		textDisplay2('I can\'t sell you a hyperdrive without the council\'s approval.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===752)
	{
		characterPic2(avatarPic);
		textDisplay2('');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===754)
	{
		characterPic2('loki');
		textDisplay2('The council has approved the purchase of a new hyperdrive. You better have the gold to pay for it, otherwise you will be stranded here forever.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===755)
	{
		characterPic2(avatarPic);
		if((goldChest || goldChest2) === true)
		{
		textDisplay2('Yes i have the money to pay for it');
		advanceTalkCounter++;
		}
		else if(goldChest && goldChest2 === false)
		{
		textDisplay2('Shit! Well I guess im trapped here, what\'s good to eat?');
		}
						
	}
	else if(advanceTalkCounter===756)
	{
		characterPic2('loki');
		textDisplay2('Good here you go.');
		newhyperdrive=true;
		if((goldChest && goldChest2)===true)
		{
		 goldChest=false;
		}
		else if(goldChest === false && goldChest2===true)
		{
		 goldChest2=false;
		}
		else if(goldChest === true && goldChest2===false)
		{
		 goldChest=false;
		}
		advanceTalkCounter++;
								
	}
	else if(advanceTalkCounter===757)
	{
		characterPic2('loki');
		textDisplay2('If you have any more gold, i could be sell you advanced Asgard Beam Weapons for your ship if you don\'t tell anyone.');
		advanceTalkCounter++;
								
	}
	else if(advanceTalkCounter===758)
	{
		characterPic2(avatarPic);
		if((goldChest || goldChest2)===true)
		{
		textDisplay2('I have more gold, please sell me the weapon system.');
		asgardWeapons=true;
		}
		else
		{
		textDisplay2('Sorry, no more gold. Thanks for the offer though.');
		}
		advanceTalkCounter++;
								
	}
	else if(advanceTalkCounter===759)
	{
		characterPic2('loki');
		if(asgardWeapons===true)
		{
		textDisplay2('Here you go.');
		}
		else
		{
		textDisplay2('Oh well, have a good one.');
		}
		advanceTalkCounter++;
								
	}
	else if(advanceTalkCounter===760)
	{
		characterPic2(avatarPic);
		textDisplay2('');
		advanceTalkCounter++;
								
	}
	else if(advanceTalkCounter===790)
	{
		characterPic2(avatarPic);
		textDisplay2('I can\'t beam to the ship from here, i need to be in the city.');
		advanceTalkCounter++;
				
	}
	//transport back to ship and abydos dialogue
	else if(advanceTalkCounter===800)
	{
		characterPic2('ai');
		textDisplay2('Welcome back aboard, i see you have retrieved a new hyperdrive, bring it over to the console.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===801)
	{
		characterPic2('ai');
		textDisplay2('The air filtration system failed while you were dwon on Orilla, without a new one I fear you will not survive the journey to earth.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===802)
	{
		characterPic2('ai');
		textDisplay2('Luckily there is a planet nearby that should have what we need to repair it.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===803)
	{
		characterPic2('ai');
		textDisplay2('These people are very simple, they will not have it to trade for, you will need to search for it yourself. Luckily you don\'t need to find anything to trade with on Orilla.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===804)
	{
		characterPic2('ai');
		textDisplay2('If you are ready to engage the hyperdrive go to the control room.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===805)
	{
		if(asgardWeapons===true)
		{
		characterPic2('ai');
		textDisplay2('I see you have also aquired some asgard weaponry, hopefully we won\'t need it.');
		}
		else if(asgardWeapons===false)
		{
		characterPic2(avatarPic);
		textDisplay2('');
		}
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===806)
	{
		characterPic2(avatarPic);
		textDisplay2('');
		advanceTalkCounter++;
				
	}
	
	else if(advanceTalkCounter===810)
	{
		characterPic2('ai');
		textDisplay2('The ship has arrived at Abydos. The air in here is becoming quickly toxic. If you can\'t secure what we need to repair the filtration system you will not survive.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===811)
	{
		characterPic2('ai');
		textDisplay2('The indigenious population of Abydos are very simple people.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===812)
	{
		characterPic2('ai');
		textDisplay2('When you\'re ready, beam down to the planet.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===815)
	{
		characterPic2(avatarPic);
		textDisplay2('Hello. Anybody here?');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===816)
	{
		characterPic2('shauri');
		textDisplay2('Hello, I am Shauri. We have not had visotrs in quite some time');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===817)
	{
		characterPic2(avatarPic);
		textDisplay2('I need to find parts to fix my ships air filtration system. Can you help me?');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===818)
	{
		characterPic2('shauri');
		textDisplay2('Honestly I\'m not sure. We are a simple people, our technology is not that advanced. But many ships have crash landed here over the years, perhaps you can find what you need by searching around.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===819)
	{
		characterPic2(avatarPic);
		textDisplay2('Thank you. Also, can you tell me anything about the Wraith?');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===820)
	{
		characterPic2('shauri');
		textDisplay2('Wraith? I\'ve never heard of them. Maybe you can ask Kasuf in the city, he is very wise and is always willing to trade information.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===821)
	{
		characterPic2(avatarPic);
		textDisplay2('Thank you, I\'ll be sure to talk to him.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===823)
	{
		characterPic2(avatarPic);
		textDisplay2('Kasuf, are you here?.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===824)
	{
		characterPic2('kasuf');
		textDisplay2('I am Kasuf, what can i do for you.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===825)
	{
		characterPic2(avatarPic);
		textDisplay2('I was wondering if you could tell me more about the Wraith?');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===826)
	{
		characterPic2('kasuf');
		textDisplay2('No one has asked me about the Wraith in a very long time.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===827)
	{
		characterPic2('kasuf');
		textDisplay2('If you bring me an artifact, I will tell you what I can.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===828)
	{
		characterPic2(avatarPic);
		if(artifact===true)
		{
			textDisplay2('I found an artifact in the ruins, will this work?.');
		}
		else
		{
			textDisplay2('I will go try and find one.');
		}
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===829)
	{
		
		if(artifact===true)
		{
		 characterPic2('kasuf');
		 textDisplay2('That will go great in my collection. I will tell you what I know.');
		 advanceTalkCounter++;
		}
		else
		{
		 characterPic2(avatarPic);
		 textDisplay2('');
		}
		
				
	}
	else if(advanceTalkCounter===830)
	{
		characterPic2('kasuf');
		textDisplay2('The wraith have been the dominate force in the universe for as long as anyone can remember. They have never ventured this far into the universe before but i have heard pleantly of stories from those in other galaxies.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===831)
	{
		characterPic2('kasuf');
		textDisplay2('When they reach a planet they bomb it from orbit destroying all military infrastructure. Then the begin to cull the population, bringing them up to their ships to feast on later.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===832)
	{
		characterPic2('kasuf');
		textDisplay2('There numbers are so large that there are only rumors of those that can oppose them.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===833)
	{
		characterPic2('kasuf');
		textDisplay2('If they never visited your planet before, perhaps if you destroy their ship before they can send a single to their fleet you may be able to stop anymore ships from coming..');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===834)
	{
		characterPic2('kasuf');
		textDisplay2('I have heard stories of a few planets that managed to survive like this. Perhaps it can work for yuor planet as well.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===835)
	{
		characterPic2('kasuf');
		textDisplay2('That\'s all I have to say on the matter, I hope I have been of some help.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===836)
	{
		characterPic2(avatarPic);
		textDisplay2('Thank you, you have been very helpful');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===837)
	{
		characterPic2(avatarPic);
		textDisplay2('');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===839)
	{
		characterPic2('scara');
		textDisplay2('Hello stranger, my name is Scara.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===840)
	{
		characterPic2(avatarPic);
		textDisplay2('Hello, is there anything of interest here?');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===841)
	{
		characterPic2('scara');
		textDisplay2('If you search around you could probably find an artifact or two.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===842)
	{
		characterPic2(avatarPic);
		textDisplay2('Thank you');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===843)
	{
		characterPic2(avatarPic);
		textDisplay2('');
		advanceTalkCounter++;
				
	}	
	else if(advanceTalkCounter===852)
	{
		characterPic2(avatarPic);
		textDisplay2('There appears to be the parts to fix the air filter.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===854)
	{
		characterPic2(avatarPic);
		textDisplay2('There appears to be an artifact here.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===890)
	{
		characterPic2(avatarPic);
		textDisplay2('I can\'t beam to the ship from here, i need to be in the pyramid.');
		advanceTalkCounter++;
				
	}
	//return to ship and battle dialogue
	else if(advanceTalkCounter===900)
	{
		characterPic2('ai');
		textDisplay2('Welcome back aboard, i see you have retrieved the parts to fix the air filtration system.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===901)
	{
		characterPic2('ai');
		textDisplay2('It\'s a good thing too. The oxygen levels are dangeriously low, so go repair it.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===902)
	{
		characterPic2('ai');
		textDisplay2('Good, now that it is fixed, we can travel to earth. With even a little luck, we will reach earth to warn them before the Wraith arrive.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===903)
	{
		characterPic2('ai');
		textDisplay2('When you are ready, go to the control room and engage the hyperdrive.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===904)
	{
		characterPic2('ai');
		textDisplay2('');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===906)
	{
		characterPic2('ai');
		textDisplay2('Wait. The sensors have detected another ship in orbit.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===907)
	{
		characterPic2('ai');
		textDisplay2('It\'s the Wraith! They opened fire, they\'re targeting the hyperdrive, it\'s offline, we can\'t make the jump yet.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===908)
	{
		characterPic2('ai');
		textDisplay2('They\'ve stopped firing, we\'re recieving a communication.');
		advanceTalkCounter++;
						
	}
	else if(advanceTalkCounter===909)
	{
		picSwitcher('hiveShip');
		characterPic2('wraith');
		textDisplay2('Prepare to die.');
		advanceTalkCounter++;
						
	}
	else if(advanceTalkCounter===910)
	{
		picSwitcher('shipControlRoom');
		characterPic2('ai');
		textDisplay2('Quick, activate the weapons system.');
		advanceTalkCounter++;
		battle=true;				
	}
	else if(advanceTalkCounter===916)
	{
		characterPic2('ai');
		textDisplay2('There is no need to activate the weapon system at this time.');
		advanceTalkCounter++;
						
	}
	else if(advanceTalkCounter===917)
	{
		characterPic2(avatarPic);
		textDisplay2('');
								
	}
	else if(advanceTalkCounter===918)
	{
		characterPic2('ai');
		textDisplay2('Ship Health: '+shipHealth +' '+' '+' '+ '    You have selected to divert power to the shields. Ship health increased by 40.');
		advanceTalkCounter=923;
						
	}
	else if(advanceTalkCounter===920)
	{
		characterPic2('ai');
		textDisplay2('Weapon system engaged. Select weapon to engage.');
						
	}
	else if(advanceTalkCounter===922)
	{
		characterPic2('ai');
		textDisplay2('Ship Health: '+shipHealth +' '+' '+' '+'      You have selected to engage the: '+weaponSelect+'. Engaging now.');
		advanceTalkCounter++;
						
	}
	else if(advanceTalkCounter===923)
	{
		if(wraithHealth>0)
		{
		 picSwitcher('hiveFiring');
		 characterPic2('ai');
		 textDisplay2('The wraith ship has fired again. Our ship has suffered 25 damage.');
		 shipHealth-=25;	
		 advanceTalkCounter=920;
		 weaponFired=false;
		 gameOver();
		}
		else
		{
		 advanceTalkCounter=930;
		 advanceTalk();
		}
	}
	else if(advanceTalkCounter===925)
	{
		characterPic2('ai');
		textDisplay2('Cannot fire again yet. Click next to see what the Wraith do.');
		advanceTalkCounter=923;
		
	}
	else if(advanceTalkCounter===930)
	{
		characterPic2('ai');
		textDisplay2('The Wraith ship has been destroyed! The hyperdrive is back online, when your ready we can finally go to Earth.');
		advanceTalkCounter++;
		buttonWeaponSystem_ControlRoom.style.display='none'
		buttonStart_ControlRoom.style.display='block'
		
	}
	else if(advanceTalkCounter===931)
	{
		characterPic2(avatarPic);
		textDisplay2('');
		advanceTalkCounter++;
		buttonWeaponSystem_ControlRoom.style.display='none'
		buttonStart_ControlRoom.style.display='block'
		
	}
	
	//end game dialogue
	else if(advanceTalkCounter===935)
	{
		characterPic2('ai');
		textDisplay2('The ship has arrived at earth, I will open a communication channel with them.');
		advanceTalkCounter+=2;
		buttonWeaponSystem_ControlRoom.style.display='none'
		buttonStart_ControlRoom.style.display='none'
		picSwitcher('earth');
		
	}
	else if(advanceTalkCounter===937)
	{
		characterPic2('hammond');
		textDisplay2('Hello I am General Hammond, our sensors tell us that this is an Earth vessel from the exploaritory expedition. We would like to debrief your crew as soon as possible, are any more ships returning.');
		advanceTalkCounter++;
		
	}
	else if(advanceTalkCounter===938)
	{
		characterPic2(avatarPic);
		textDisplay2('General Hammond Sir, I am the only crew member left aboard this ship, and no other ships are coming, they have all been destroyed.');
		advanceTalkCounter++;
		
	}
	else if(advanceTalkCounter===939)
	{
		characterPic2(avatarPic);
		textDisplay2('They were destroyed by a powerful enemy called the Wraith. The Wraith are on their way here right now, you need to deploy any forces you have.');
		advanceTalkCounter++;
		
	}
	else if(advanceTalkCounter===940)
	{
		characterPic2('hammond');
		textDisplay2('We only have a few ships left but we\'ll put up one hell of a fight.');
		advanceTalkCounter++;
		
	}
	else if(advanceTalkCounter===941)
	{
		characterPic2(avatarPic);
		textDisplay2('Good the Wraith will probably be here soon.');
		advanceTalkCounter++;
		
	}
	else if(advanceTalkCounter===942)
	{
		picSwitcher('wraithFleet');
		characterPic2('ai');
		textDisplay2('Our sensors have detected the Wraith fleet emerging from hyperspace.');
		advanceTalkCounter+=2;
		
	}
	else if(advanceTalkCounter===944)
	{
		characterPic2('hammond');
		textDisplay2('Our ships are ready for battle. Good luck everyone');
		picSwitcher('earthFleet');
		advanceTalkCounter++;
		
	}
	else if(advanceTalkCounter===945)
	{
		
		picSwitcher('battle1');
		characterPic2('caldwell');
		textDisplay2('Engaging hostile vessels. Firing missiles.');
		advanceTalkCounter++;
		
	}
	else if(advanceTalkCounter===946)
	{
		
		picSwitcher('battle2');
		characterPic2('caldwell');
		textDisplay2('Minimal effect. Switch to beam weapons.');
		advanceTalkCounter++;
		
	}
	else if(advanceTalkCounter===947)
	{
		
		picSwitcher('battle3');
		characterPic2('ellis');
		textDisplay2('Firing beam weapons, direct hit.');
		advanceTalkCounter++;
		
	}else if(advanceTalkCounter===948)
	{
		
		picSwitcher('battle4');
		characterPic2('ellis');
		textDisplay2('That\'s a kill!.');
		advanceTalkCounter++;
		
	}
	else if(advanceTalkCounter===949)
	{
		
		picSwitcher('battle5');
		characterPic2('caldwell');
		textDisplay2('Three hives firing on us. Shields are failing. We\'re not going to make it!');
		advanceTalkCounter++;
		
	}
	else if(advanceTalkCounter===950)
	{
		characterPic2('hammond');
		textDisplay2('Their forces are too many, we\'ve lost contact with half our fleet. Their ships are attacking the planet!');
		picSwitcher('wraithEarth');
		advanceTalkCounter++;
		
	}
	else if(advanceTalkCounter===951)
	{
		characterPic2('ai');
		textDisplay2('I\'m detecting another fleet entering orbit');
		advanceTalkCounter++;
		
	}
	else if(advanceTalkCounter===952)
	{
		characterPic2('ai');
		textDisplay2('It\'s the Asgard');
		advanceTalkCounter++;
		picSwitcher('asgardFleet');
		
	}
	else if(advanceTalkCounter===953)
	{
		characterPic2('thor');
		textDisplay2('Hello friend, the Asgard high council approved a mission to protect Earth.');
		advanceTalkCounter++;
		
	}
	else if(advanceTalkCounter===954)
	{
		characterPic2(avatarPic);
		textDisplay2('Thor! It\'s great to see you. I don\'t think we would\'ve lasted much longer.');
		advanceTalkCounter++;
		
	}
	else if(advanceTalkCounter===955)
	{
		characterPic2('thor');
		textDisplay2('The enemy fleet is in full retreat, I seriously doubt they will return.');
		advanceTalkCounter++;
		picSwitcher('asgardMeeting');
		
	}
	else if(advanceTalkCounter===956)
	{
		characterPic2('thor');
		textDisplay2('General Hammond, you owe the survival of your planet to...');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===957)
	{
		characterPic2('thor');
		textDisplay2('I just realized I never got your name.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===958)
	{
		characterPic2('thor');
		textDisplay2('What\'s your name?');
		advanceTalkCounter++;
		nameDiv.style.display='block'
		nameBox.style.display='block'
		nameButton.style.display='block'
		getName();		
	}
  else if(advanceTalkCounter===959)
	{
		characterPic2('thor');
		textDisplay2('Well '+name+', thank you once again, I hope we see each other again.');
		advanceTalkCounter++;
		nameDiv.style.display='none'		
	}
	else if(advanceTalkCounter===960)
	{
		characterPic2('hammond');
		textDisplay2(name+' you will be greatly rewarded.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===961)
	{
		characterPic2(avatarPic);
		textDisplay2('Thank you sir, glad to have helped.');
		advanceTalkCounter++;
				
	}
	else if(advanceTalkCounter===962)
	{
		characterPic2(avatarPic);
		textDisplay2('Congrationaltions you have won! Thanks for playing');
		picSwitcher('victory');
				
	}
	else if(advanceTalkCounter===980)
	{
		characterPic2('ai');
		textDisplay2('That weapon system is not installed on the ship.');
		
				
	}
	else if(advanceTalkCounter===1000)
	{
		characterPic2('wraith');
		textDisplay2('Your ship has been destroyed. You Lose. To try again, refresh the page.');
		advanceTalkCounter++;
		
	}
	
}

function gameShip()
{
	gameBegin.style.display='none'
	game.style.display='block'
	characterPic2(avatarPic);
	
	
}
//depending on location will determine which div element is visible. This will display the row of buttons that correspond to the location.
function explore(location)
{
 if (location==="stasisChamber")
 {
    buttonStart_Stasis.style.display='none'
	buttonExplore_Stasis.style.display='block'
 } 
 if (location==="embarkationRoom")
 {
    buttonStart_EmbarkationRoom.style.display='none'
    buttonExplore_EmbarkationRoom.style.display='block'
 }
 if (location==="controlRoom")
 {
    buttonStart_ControlRoom.style.display='none'
    buttonExplore_ControlRoom.style.display='block'
 }
 if(location==="dakaraVillage")
  {
    buttonStart_DakaraVillage.style.display='none'
	buttonExplore_DakaraVillage.style.display='block'
  }
  if(location==="dakaraTemple")
  {
    buttonStart_DakaraTemple.style.display='none'
	buttonExplore_DakaraTemple.style.display='block'
  }
  if(location==="dakaraRuins")
  {
    buttonStart_DakaraRuins.style.display='none'
	buttonExplore_DakaraRuins.style.display='block'
  }
  if(location==="orillaCity")
  {
    buttonStart_OrillaCity.style.display='none'
	buttonExplore_OrillaCity.style.display='block'
  }
  if(location==="orillaCouncil")
  {
    buttonStart_OrillaCouncil.style.display='none'
	buttonExplore_OrillaCouncil.style.display='block'
  }
  if(location==="orillaShipyard")
  {
    buttonStart_OrillaShipyard.style.display='none'
	buttonExplore_OrillaShipyard.style.display='block'
  }
  if(location==="abydosCity")
  {
    buttonStart_AbydosCity.style.display='none'
	buttonExplore_AbydosCity.style.display='block'
  }
  if(location==="abydosPyramid")
  {
    buttonStart_AbydosPyramid.style.display='none'
	buttonExplore_AbydosPyramid.style.display='block'
  }
  if(location==="abydosRelic")
  {
    buttonStart_AbydosRelic.style.display='none'
	buttonExplore_AbydosRelic.style.display='block'
  }
}

//Takes the location and will if there is an item present will return the option to pick it up. if it has already been picked up it will display as such.
function search(location)
{
 if (location==="stasisChamber")
 {
    advanceTalkCounter=500;
    advanceTalk();
	
 } 
 if (location==="embarkationRoom")
 {
    if(medicine===true)
	{
	 advanceTalkCounter=650;
     advanceTalk();
	}
	else
	{
	 buttonStart_EmbarkationRoom.style.display='none'
     advanceTalkCounter=514;
     advanceTalk();
	 medicine=true;
	 buttonSearch_EmbarkationRoom.style.display='block'
	}
 }
 if (location==="controlRoom")
 {
	buttonStart_ControlRoom.style.display='none'
	advanceTalkCounter=502;
    advanceTalk();
    buttonSearch_ControlRoom.style.display='block'
 }
 if (location==="dakaraVillage")
 {
	if(goldChest===true)
	{
	 advanceTalkCounter=650;
     advanceTalk();
	}
	else
	{
	 buttonStart_DakaraVillage.style.display='none'
	 advanceTalkCounter=652;
     advanceTalk();
     buttonSearch_DakaraVillage.style.display='block'
	 goldChest=true;
	}
 }
 if (location==="dakaraTemple")
 {
    advanceTalkCounter=500;
    advanceTalk();
	
 }
 if (location==="dakaraRuins")
 {
	if(goldChest2===true)
	{
	 advanceTalkCounter=650;
     advanceTalk();
	}
	else
	{
	 buttonStart_DakaraRuins.style.display='none'
	 advanceTalkCounter=652;
     advanceTalk();
     buttonSearch_DakaraRuins.style.display='block'
	 goldChest2=true;
	}
 }
 if (location==="orillaCity")
 {
    advanceTalkCounter=500;
    advanceTalk();
	
 }
 if (location==="orillaCouncil")
 {
    advanceTalkCounter=500;
    advanceTalk();
	
 }
 if (location==="orillaShipyard")
 {
    advanceTalkCounter=500;
    advanceTalk();
	
 }

if (location==="abydosCity")
 {
	if(airFilter===true)
	{
	 advanceTalkCounter=650;
     advanceTalk();
	}
	else
	{
	 buttonStart_AbydosCity.style.display='none'
	 advanceTalkCounter=852;
     advanceTalk();
     buttonSearch_AbydosCity.style.display='block'
	 airFilter=true;
	}
 }
 if (location==="abydosPyramid")
 {
    advanceTalkCounter=500;
    advanceTalk();
	
 }
 if (location==="abydosRelic")
 {
	if(artifact===true)
	{
	 advanceTalkCounter=650;
     advanceTalk();
	}
	else
	{
	 buttonStart_AbydosRelic.style.display='none'
	 advanceTalkCounter=854;
     advanceTalk();
     buttonSearch_AbydosRelic.style.display='block'
	 artifact=true;
	}
 } 
 
}
//based on location it will start a conversation with the person in the location. If the dialogue is too long it will not allow player to accidently restart dialogue
function talk(location)
{
if(location==="stasisChamber")
  {
  	advanceTalkCounter=520;
    advanceTalk();
  }
  if(location==="embarkationRoom")
  {
    advanceTalkCounter=520;
	advanceTalk();
  	
  }
  if(location==="controlRoom")
  {
  	advanceTalkCounter=520;
    advanceTalk();
  }
  if(location==="dakaraVillage")
  {
	advanceTalkCounter=600;
    advanceTalk();
  }
  if(location==="dakaraTemple")
  {
	advanceTalkCounter=612;
    advanceTalk();
  }
  if(location==="dakaraRuins")
  {
	advanceTalkCounter=625;
    advanceTalk();
  }
  if(location==="orillaCity")
  {
	advanceTalkCounter=720;
    advanceTalk();
  }
  if(location==="orillaCouncil")
  {
	if(councilTalk===false)
	{
	 advanceTalkCounter=727;
	 advanceTalk();
	}
	else
	{
	 advanceTalkCounter=748;
	 advanceTalk();
	}
  }
  if(location==="orillaShipyard")
  {
	if(councilApprove===false)
	{
	 advanceTalkCounter=751;
	 advanceTalk();
	}
	else
	{
	 advanceTalkCounter=754;
	 advanceTalk();
	}
  }
  if(location==="abydosPyramid")
  {
	advanceTalkCounter=815;
    advanceTalk();
  }
  if(location==="abydosCity")
  {
	advanceTalkCounter=823;
    advanceTalk();
  }
  if(location==="abydosRelic")
  {
	advanceTalkCounter=839;
    advanceTalk();
  }
  
}
//allows the player to transport off the ship and back on the ship if the location is right.
function teleport(location)
{
 if(location==="stasisChamber")
  {
  	advanceTalkCounter=516;
    advanceTalk();
  }
  if(location==="embarkationRoom")
  {
   if(hyperdriveCounter===0)
    {
     advanceTalkCounter=518;
	 advanceTalk();
  	 buttonStart_EmbarkationRoom.style.display='none'
	 buttonTeleport_EmbarkationRoom.style.display='block'
	}
	if(hyperdriveCounter===1)
    {
     advanceTalkCounter=718;
	 advanceTalk();
  	 buttonStart_EmbarkationRoom.style.display='none'
	 buttonTeleport_EmbarkationRoom2.style.display='block'
	}
	if(hyperdriveCounter===2)
    {
     advanceTalkCounter=898;
	 advanceTalk();
  	 buttonStart_EmbarkationRoom.style.display='none'
	 buttonTeleport_EmbarkationRoom3.style.display='block'
	}
  }
  if(location==="controlRoom")
  {
  	advanceTalkCounter=516;
    advanceTalk();
  }
  if(location==="dakaraVillage")
  {
    advanceTalkCounter=621;
	advanceTalk();
  	buttonStart_DakaraVillage.style.display='none'
	buttonTeleport_DakaraVillage.style.display='block'
	if(powerCore===true)
	{
	 advanceTalkCounter=700;
	 advanceTalk();
	}
  }
  if(location==="dakaraRuins")
  {
  	advanceTalkCounter=690;
    advanceTalk();
  }
  if(location==="dakaraTemple")
  {
  	advanceTalkCounter=690;
    advanceTalk();
  }
  if(location==="orillaCity")
  {
    advanceTalkCounter=621;
	advanceTalk();
  	buttonStart_OrillaCity.style.display='none'
	buttonTeleport_OrillaCity.style.display='block'
	if(newhyperdrive===true)
	{
	 advanceTalkCounter=800;
	 advanceTalk();
	}
  }
  if(location==="orillaCouncil")
  {
  	advanceTalkCounter=790;
    advanceTalk();
  }
  if(location==="orillaShipyard")
  {
  	advanceTalkCounter=790;
    advanceTalk();
  }
  if(location==="abydosPyramid")
  {
    advanceTalkCounter=621;
	advanceTalk();
  	buttonStart_AbydosPyramid.style.display='none'
	buttonTeleport_AbydosPyramid.style.display='block'
	if(airFilter===true)
	{
	 advanceTalkCounter=900;
	 advanceTalk();
	}
  }
  if(location==="abydosCity")
  {
  	advanceTalkCounter=890;
    advanceTalk();
  }
  if(location==="abydosRelic")
  {
  	advanceTalkCounter=890;
    advanceTalk();
  }
}

//if the player has accomplished the required goals it will allow them to activate the ships hyperdrive and travel to the next stage of the game.
function hyperdrive()
{
 if(powerCore===true && newhyperdrive===false && airFilter===false && hyperdriveCounter===0)
 {
  
  advanceTalkCounter=710;
  advanceTalk();
  hyperdriveCounter++;
 }
 else if(powerCore===true && newhyperdrive===true && airFilter===false && hyperdriveCounter===1)
 {
  hyperdriveCounter++;
  advanceTalkCounter=810;
  advanceTalk();
 }
 else if(powerCore===true && newhyperdrive===true && airFilter===true && hyperdriveCounter===2)
 {
  hyperdriveCounter++;
  advanceTalkCounter=906;
  advanceTalk();
 }
 else if(powerCore===true && newhyperdrive===true && airFilter===true && hyperdriveCounter===3 && battle===true)
 {
  hyperdriveCounter++;
  advanceTalkCounter=935;
  advanceTalk();
 }
 else
 {
  advanceTalkCounter=714;
  advanceTalk();
 }
 
}
//when the battle begins this will allow the player to control the weapon system and choose what to fire/use. 
//After the player goes, the wraith ship will react
//MUST IMPLEMENT RANDOM CHOICE OF WHAT WRAITH SHIP DOES. DON'T FORGET TO DO!!!!!!!!!!!!!!!!!!!!!!
function weaponSystem()
{
 if(battle===true)
 {
  buttonStart_ControlRoom.style.display='none'
  buttonWeaponSystem_ControlRoom.style.display='block'
  advanceTalkCounter=920;
  advanceTalk();
 }
 else
 {
  advanceTalkCounter=916;
  advanceTalk();
 }
}

function railgun()
{
 if(weaponFired===false)
 {
  wraithHealth-=20;
  picSwitcher('shipRailgun');
  weaponSelect="railgun";
  advanceTalkCounter=922;
  advanceTalk();
  weaponFired=true;
  gameOver();
 }
 else
 {
  advanceTalkCounter=925;
  advanceTalk();
 }
}
function missles()
{
 if(weaponFired===false)
 {
  wraithHealth-=20;
  picSwitcher('shipMissiles');
  weaponSelect="missiles";
  advanceTalkCounter=922;
  advanceTalk();
  weaponFired=true;
  gameOver();
 }
 else
 {
  advanceTalkCounter=925;
  advanceTalk();
 }
}
function asgardBeam() //Can only be used if player recieved the technology on Orilla. 
{
 if(weaponFired===false)
 {
 if(asgardWeapons===true)
 {
  wraithHealth-=80;
  picSwitcher('shipAsgardBeam');
  weaponSelect="asgard beam weapon";
  advanceTalkCounter=922;
  advanceTalk();
  weaponFired=true;
  gameOver();
 }
 else
 {
  advanceTalkCounter=980;
  advanceTalk();
 }
 }
 else
 {
  advanceTalkCounter=925;
  advanceTalk();
 }
}
function shields() //restores ship health
{
 shipHealth+=40;
 picSwitcher('shipShield');
 advanceTalkCounter=918;
 advanceTalk();
 weaponFired=true;
}

function gameOver() //determine if the game is over after each turn of the battle. Either the player loses and game ends, or player wins and concluding dialogue and pictures appear.
{
 if(shipHealth<=0)
 {
  picSwitcher('shipDestroyed');
  buttonWeaponSystem_ControlRoom.style.display='none'
  advanceTalkCounter=1000;
  advanceTalk();
 
 }
 else if(wraithHealth<=0)
 {
  picSwitcher('hiveDestroyed');
  advanceTalkCounter=930;
  advanceTalk();
  
 }
}

function getName()
{
 name=document.getElementById('nameBox').value;
}


