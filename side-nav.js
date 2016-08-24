var x;
var y;
var sideBarSel=false;
var length=30;



document.addEventListener('mousemove', onMouseUpdate, false);
document.addEventListener('mouseenter', onMouseUpdate, false);
if (detectmob()){
document.getElementById("nav-bar").addEventListener("click", mobNav);
}

function mobNav(){
  
  if(!sideBarSel){
  navOut();
  sideBarSel = !sideBarSel;
  }else{
  navIn();
  sideBarSel = !sideBarSel;
  }
  
}

function onMouseUpdate(e) {
  x = e.pageX;
  y = e.pageY;
  checkNavBar();
 
}

function getMouseX() {
  return x;
}

function getMouseY() {
  return y;
}

function checkNavBar(){
  
  if(!sideBarSel&&getMouseX() < 50){
    
    sideBarSel=!sideBarSel;
    navOut();
    
  }else{
    
    if(sideBarSel&& getMouseX() > 150){
      
      sideBarSel=!sideBarSel;
      navIn();
      
    }
  
  }
  
}

function navOut(){
  
  document.getElementById("nav-bar").style.width="150px";
  
  document.getElementById("nav-bar").style.height="50px";
  
  document.getElementById("nav-bar").innerHTML="<h2>Navigation</h2>";
  
  length=50;
  
  outLp();

}
function outLp(){
  
  length=length+2.5;
  setTimeout(function(){ doneChc(); }, 10);
  
}
function doneChc(){
  
  document.getElementById("nav-bar").style.height=length+"%";
  
  if(length<100&&sideBarSel){
    
   outLp(); 
    
  }else{
   if(sideBarSel){
    document.getElementById("nav-bar").innerHTML="<h2>Navigation</h2><a href='http://bkfighter.github.io/' class='nav-btn'>Home</a><h2>Games</h2><a href='http://bkfighter.github.io/tilight.html' class='nav-btn'>Tilight</a><br /><a href='http://bkfighter.github.io/penaltyshootout.html' class='nav-btn'>Penalty Shootout</a><br /><a href='http://bkfighter.github.io/scratch.html' class='nav-btn'>Scratch</a><h2>License</h2><a href='http://bkfighter.github.io/BKFighterLicense' class='nav-btn'>BKFighter Template 1.0</a><h2>Projects</h2><a href='http://bkfighter.github.io/CSS-Color-Variable-Preprocessor.html' class='nav-btn'>CSS Color Variable Preprocessor (CCV)</a>";
   }
    
    
  }
  
}



function navIn(){
  
  length=50;
  
  document.getElementById("nav-bar").style.width="0px";
  document.getElementById("nav-bar").innerHTML="<h2 style='color:#37474F;position:fixed;left:20px;'>Nav</h2>";
  
}
function detectmob() { 
  if( navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)
    ){
      return true;
    }else {
      return false;
    }
  }
