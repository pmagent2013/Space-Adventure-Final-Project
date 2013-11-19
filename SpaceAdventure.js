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
function picSwitcher(imgID)
{
  imgName='images/'+imgID+'.JPG';
  document.getElementById('imgMain').src=imgName;
}

function avatar(ava)
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

function characterPic(avatarIMG)
{
  
  document.getElementById('speakerPic').innerHTML = "<img src='images/"+avatarIMG+".jpg' height='115px' width='75px'>";
}

function textDisplay(text)
{
  ai='ai'
  document.getElementById('speakerPic').innerHTML = document.getElementById('speakerPic').innerHTML + text + '<input type="button" value="Next" onClick="advanceTalk();">';
}

function advanceTalk(pic, text)
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
	
}

function startGame()
{
  startScreen.style.display='none'
  characterCreate.style.display='block'
  
 
  
}
 //characterPic('ronan');
/*function Explore(location)
{
 if (location==="")
 {
  document.getElementById('outputDiv').innerHTML=
 } 
}
*/
