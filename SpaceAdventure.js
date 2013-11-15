//Character Creation Functions

var name="", gun=false, teleporter=false, comm=false, pic="", mainPic="shipOuter", avatarPic="";

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
  else if(ava='mckay')
  {
	avatarPic==="mckay";
  }
}

function characterPic()
{
  document.getElementById('speakerPic').innerHTML = "<img src='images/"+avatarPic+".jpg' height='90px' width='45px'>";
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
