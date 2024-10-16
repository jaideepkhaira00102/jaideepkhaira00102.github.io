const popvid = document.getElementsByClassName("popupvid");
const popclose = document.getElementsByClassName("popupclose");
var currpop=document.getElementById("popupvid");
function playvideo(temp) {
    const elem = document.getElementById(temp.id);
    elem.play();
  }
  
function stopvideo(temp) {
    const elem = document.getElementById(temp.id);   //need work
    elem.pause();
  }
  
function openpopup(temp){
  const elem = document.getElementById(temp.id);   //need work
  console.log("got in")
  popvid[0].style.display = "block";
  popclose[0].style.display = "block";
  console.log(temp.src)
  popvid[0].src = temp.src;
}

function closepopup(temp){
  popvid[0].pause();
  popvid[0].style.display = "none";
  popclose[0].style.display = "none";
}

function popupcontactopen(){
  const elem = document.getElementById("contact");   //need work
  elem.classList.remove("contactpopdown")
}

function popupcontactclose(){
  const elem = document.getElementById("contact");   //need work
  elem.classList.add("contactpopdown")
}