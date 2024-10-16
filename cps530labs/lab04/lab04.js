const name1 = document.getElementById('name');
const address1 = document.getElementById('address');
const out1 = document.getElementById('output1');
let nameout = document.getElementById('namenum');
const addressout = document.getElementById('addressnum');
const phnumout = document.getElementById('phnumbernum');
const button1 = document.getElementById('butn');
const form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);  
const phonenum = document.getElementById('phnumber');
const book= document.getElementById('bookmarks');
const booklist=["https://www.google.com/","Google","https://www.youtube.com/","Youtube","http://httpforever.com/", "HTTP FOREVER"];
//make characters larger and attractive and seperate function to display
// and do problem 2 and 3 after that
document.body.style.backgroundColor = "#f5f0e1";

form.style.fontSize = "18px";
form.style.display = "grid";
form.style.width = "70%" ;
form.style.marginLeft = "auto" ;
form.style.marginRight = "auto" ;
form.style.placeItems = "center" ;
form.style.backgroundColor = "#1e3d59";
form.style.color = "#ffc13b";

name1.style.backgroundColor = "#322514";
name1.style.color = "#fbcbc9 ";
address1.style.backgroundColor = "#322514";
address1.style.color = "#fbcbc9 ";
phonenum.style.backgroundColor = "#322514";
phonenum.style.color = "#fbcbc9 ";

button1.style.backgroundColor = "#ecc19c";


function counterf(stringtempr){
    return stringtempr.length;
}
function countern(stringtemp){
    let lengthx=0;
    console.log(typeof stringtemp.charAt(0));
    for( let i=0; i < stringtemp.length ; i++){
        if(isNaN(stringtemp.charAt(i))){}
        else{ lengthx+=1; }
    }
    return lengthx;
}


button1.addEventListener('click', () =>{
    checker();
})
name1.addEventListener('input', ev=>{
    nameout.innerHTML = counterf(name1.value);
    nameout.style.fontSize = "28px";
    nameout.style.color = "#ff6e40";
})
address1.addEventListener('input', ev=>{
    addressout.innerHTML = counterf(address1.value);
    addressout.style.fontSize = "28px";
    addressout.style.color = "#ff6e40";
})
phonenum.addEventListener('input', ev=>{
    phnumout.innerHTML = countern(phonenum.value);
    phnumout.style.fontSize = "28px";
    phnumout.style.color = "#ff6e40";
})


function listofbookmarks(){
    let bookmrk=document.createElement('b');
    let booktext=document.createTextNode("List of Bookmarks are as follows");
    bookmrk.style.fontSize = "24px";
    bookmrk.style.display = "grid";
    bookmrk.style.width = "100%" ;
    bookmrk.style.marginLeft = "auto" ;
    bookmrk.style.marginRight = "auto" ;
    bookmrk.style.placeItems = "center" ;
    bookmrk.style.color ="#1e3d59"
    bookmrk.appendChild(booktext);
    document.body.appendChild(bookmrk); 
    for(let x=0 ;x<(booklist.length-1/2);x+=2){
        let a=document.createElement('a');
        let i=document.createElement('img');
        let b=document.createElement('br');
        let link=document.createTextNode(booklist[x+1]);
        a.style.fontSize = "18px";
        a.style.display = "grid";
        a.style.width = "15%" ;
        a.style.placeItems = "center" ;
        a.style.marginLeft = "auto" ;
        a.style.marginRight = "auto" ;
        a.appendChild(b); 
        a.appendChild(i);
        a.appendChild(link); 
        a.href = booklist[x];  
        if(booklist[x].slice(0,5)=="https")
        {
            i.src = "1.png";
        }
        else if(booklist[x].slice(0,4)=="http"){
            i.src = "0.png";
        }
        i.height = "25";
        document.body.appendChild(a); 
    }
}
listofbookmarks();

function checker(){
    let regex=/^[a-zA-Z\s]*$/;
    if(regex.test(name1.value)){
        const tempnum = phonenum.value;
        if(tempnum.length<13){
            display("The Phone number you have typed is less than 13 numbers, please try again");
        }
        else if(tempnum.length>13){
            display("The Phone number you have typed is greater than 13 numbers, please try again");
        }
        else{
            if((tempnum.charAt(0)=='(') && (tempnum.charAt(4)==')') && (tempnum.charAt(8)=='-')){
                const phonenumber = converter(tempnum);
                display("Name - "+name1.value+"<br> Address - "+address1.value+"<br> Phone Number - "+phonenumber);
            }
            else{ display("The Phone number is in a wrong format, please try again");}
        }
    }
    else{
        display("The Name you have typed contains some unwanted characters, please try again");
    }
}
function converter(phn){
    return phn.slice(1,4)+"-"+phn.slice(5,8)+"-"+phn.slice(9,13);
}
function display(Str){
    out1.innerHTML = Str;
    out1.style.fontSize = "22px";
    out1.style.display = "grid";
    out1.style.width = "100%" ;
    out1.style.placeItems = "center" ;
    out1.style.color ="#ff6e40"
}


