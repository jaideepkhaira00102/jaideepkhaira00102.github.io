let canv=document.getElementsByClassName("canvas");
const canvdownload=document.getElementById("canvasdownload");
const prev=document.getElementsByClassName("preview");
const parts=document.getElementById("part");
const cross=document.getElementsByClassName("xclass");
function buttonpressed(num)
{
    let partsection = document.createElement("section")
    let partx = document.createElement("img");
    partsection.className = "part col-sm-12 col-md-6 col-lg-6";
    partsection.style.position="absolute";
    switch(num){
        case 1:
            partx.src = "body.png";
            partsection.style.zIndex="2";
            partsection.style.top="25%";
            break;
        case 2:
            partx.src = "eye1.png";
            partsection.style.zIndex="4";
            partsection.style.top="45%";
            break;
        case 3:
            partx.src = "eye2.png";
            partsection.style.zIndex="4";
            partsection.style.top="45%";
            break;
        case 4:
            partx.src = "hat.png";
            partsection.style.zIndex="3";
            partsection.style.top="52%";
            break;
        case 5:
            partx.src = "mouth.png";
            partsection.style.zIndex="6";
            partsection.style.top="60%";
            break;
        case 6:
            partx.src = "nose.png";
            partsection.style.zIndex="5";
            partsection.style.top="67%";
            break;
        case 7:
            partx.src = "eye3.png";
            partsection.style.zIndex="7";
            partsection.style.top="45%";
            break;
        case 8:
                partx.src = "eye4.png";
                partsection.style.zIndex="7";
                partsection.style.top="45%";
                break;
        default:
            partx.src = "body.png";
            partsection.style.zIndex="2";
            partsection.style.top="20%";
    }
    partsection.appendChild(partx);
    canv[0].appendChild(partsection);
    jQuery(".part").draggable({containment: ".canvas"});
}
function takescreenshot(){
    html2canvas(document.querySelector(".canvas")).then(canvas => {
        prev[0].removeChild(previewholder);
        canvas.id="previewholder";
        prev[0].appendChild(canvas);
        let pngDataurl = canvas.toDataURL();
        canvdownload.href=pngDataurl;
    });
   
}

function fullscreen(){
    let pholder = document.getElementById("previewholder");
    pholder.style.position= "fixed";
    pholder.style.zIndex="100";
    pholder.style.background="rgba(0,0,0,0.5)";
    pholder.style.animationName= "animate";
    pholder.style.animationDuration= "6s";
    pholder.style.width= "100%";
    pholder.style.zIndex ="98";
    pholder.style.height="100%";
    pholder.style.left="0%";
    pholder.style.top="0%";
    cross[0].style.zIndex ="100";
}
function notfullscreen(){
    let pholder = document.getElementById("previewholder");
    pholder.style.position= "relative";
    pholder.style.animationName= "danimate";
    pholder.style.animationDuration= "6s";
    pholder.style.left="0%";
    pholder.style.top="0%";
    pholder.style.width= "100%";
    pholder.style.zIndex ="1";
    pholder.style.height="100%";
}
