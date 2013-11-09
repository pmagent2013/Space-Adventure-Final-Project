//Character Creation Functions

var name="", gun=false, teleporter=false, comm=false, pic="", mainPic="shipOuter";

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