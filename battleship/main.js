//All variables

let rotate = document.querySelector('#rotate');
let ships = Array.from(document.querySelector('.ship-choices').children);
let battleboard = document.querySelector('#game-canvas');
let startButton = document.querySelector('#start');
let resetButton = document.querySelector('#reset');
let info = document.querySelector('#info');
let turn = document.querySelector('#turn');
let misses = document.querySelector('#misses');
let hits = document.querySelector('#hits');
const Backgroundmusic = new Audio();
Backgroundmusic.src="./Backgroundmusic.mp3";
const hit1 = new Audio();
hit1.src="./hit1.mp3";
const hit2 = new Audio();
hit2.src="./hit2.mp3";
const hit3 = new Audio();
hit3.src="./hit3.mp3";
const miss1 = new Audio();
miss1.src="./miss1.mp3";
const miss2 = new Audio();
miss2.src="./miss.mp3";

let shipchoices = document.querySelector('.ship-choices');
let playersunkships = [];
let computersunkships = [];
let currangle = 0;
let notdropped ;
let playerHits=[];
let Enemyhits=[];
let dragship;
let gameOver = false;
let playerTurn;
let shipsquares = [];
let hit=0;
let miss=0;

//button click events

rotate.addEventListener('click', rotating);
startButton.addEventListener('click', startgame);
resetButton.addEventListener('click', resetgame);

//initialising the board

createbattlefield('grey', 'player')           // make two boards for player and for computer
createbattlefield('grey', 'computer')

class Ship {                          //skeleton for all the ships
    constructor(name, length){
        this.name = name;
        this.length = length;
    }
}
//ship constants
const ship1 = new Ship('ship-1', 5);       
const ship2 = new Ship('ship-2', 4);
const ship3 = new Ship('ship-3', 3);
const ship4 = new Ship('ship-4', 3);
const ship5 = new Ship('ship-5', 2);
let allplayersquares = document.querySelectorAll('#player div');
const allships= [ship1, ship2, ship3, ship4, ship5];    //storing them in the constant allships

allships.forEach(shipx => addshipai('computer', shipx));                 //using the addshiai function to add all ships on the computers board
ships.forEach(ship => ship.addEventListener('dragstart', dragstart));    //event listener for adding ships for the player buy drag and drop

shipsquares = [];

function resetgame(){             //function for resetting the game, this includes reinitializing all the variables, deleteing
    playersunkships = [];         //all ships and boards and remaking them calling queries again as the dom has changed, and 
    computersunkships = [];       // some additional calling of functions to start the game again
    currangle = 0;
    gameOver = false;
    hit=0;
    miss=0;
    
    
    let myNode = document.getElementById("selector");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }
    myNode = document.getElementById("game-canvas");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }
    createbattlefield('grey', 'player')           // make two boards player and for computer
    createbattlefield('grey', 'computer')

    for(let i=0; i<5; i=i+1)     //remaking the ship-selection menu
    {
        let newDiv = document.createElement("div");
        newDiv.classList.add(`ship-${i+1}`);
        newDiv.classList.add(`ship-${i+1}-size`);
        newDiv.id = `${i}`;
        newDiv.draggable = true;
        const parentdiv = document.getElementsByClassName("ship-choices");
        parentdiv[0].appendChild(newDiv);
    }

    rotate = document.querySelector('#rotate');
    ships = Array.from(document.querySelector('.ship-choices').children);
    battleboard = document.querySelector('#game-canvas');
    startButton = document.querySelector('#start');
    resetButton = document.querySelector('#reset');
    info = document.querySelector('#info');
    turn = document.querySelector('#turn');
    music = document.getElementById('music');
    shipchoices = document.querySelector('.ship-choices');
    misses = document.querySelector('#misses');
    hits = document.querySelector('#hits');
    misses.textContent = 'Misses -';
    hits.textContent = 'Hits -';
    turn.textContent = 'Turn -';
    info.textContent = 'Log -';

    allplayersquares = document.querySelectorAll('#player div');

    allplayersquares.forEach(playersquare => {
        playersquare.addEventListener('dragover', dragOver);
        playersquare.addEventListener('drop', dropShip);
    });
    allships.forEach(shipx => addshipai('computer', shipx));
    ships.forEach(ship => ship.addEventListener('dragstart', dragstart));
    
}

// All the functions

function swap(a, b, c){               // swap a to b if its equal to c, and to c if its equal to b
    if (a === b) {return c;}
    else {return b;}
}

function rotating() {                       // rotating all the ships by 90 degrees
    currangle=swap(currangle, 0, 90);
    ships.forEach(ships => ships.style.transform = `rotate( ${currangle}deg)`);
}

function createbattlefield(color, user) {                 // make board given color and player id
    const board = document.createElement('div');
    board.classList.add('battlefield');           
    board.style.backgroundColor = color;
    board.id=user;

    for (let i=0; i< 100; i++) {                        //dividing the board into 100 squares with ids by their numbers
        const square = document.createElement('div');              
        square.classList.add('square');
        square.id= i;
        board.append(square);
    }

    battleboard.append(board);
}


function Validity(allsquares, ishorizontal, startingIndex, shipx){      //this function mainly check if the placement of ships is valid or not
    let starter =0;
    let shipsquaresx =[];
    if (ishorizontal)     //setting the starter value, to keep it in between 0 and 99 for the computer/enemy given if it is horizontal or not
    {
        if (startingIndex <= 100 - shipx.length){
             starter = startingIndex;
        }
        else{
             starter = 100-shipx.length;
        }
    }
    else{
        if (startingIndex <= 100 - shipx.length*10){
             starter = startingIndex;
        }
        else{
             starter = startingIndex - shipx.length*10 + 10;
        }
    }
 
    for(let i=0; i < shipx.length; i++){
        if(ishorizontal) {
            shipsquaresx.push(allsquares[Number(starter) + i]);
        }
        else{
            shipsquaresx.push(allsquares[Number(starter) + i * 10]);
        }
    }

    let valid;

    if(ishorizontal) {             //making sure all pieces are inside the bounds(0-99)
        shipsquaresx.every((temp, index) => 
        valid = shipsquaresx[0].id % 10 !== 10 - (shipsquaresx.length - (index+1)));
    }
    else{
        shipsquaresx.every((temp, index) => valid = shipsquaresx[0].id < 90 +(10 *index+1)); 
    }

    const notoccupied = shipsquaresx.every(shipsquare => 
        !shipsquare.classList.contains('occupied'));  //making sure the squares are not occupied by another ship already

    return {shipsquaresx, valid, notoccupied};
}

function addshipai(user, shipx, startId){              //adding ships for the enemy and player
    let allsquaresx = document.querySelectorAll(`#${user} div`); 
    let ishorizontal;
    if(user === 'player'){                 //for player checking if it is horizontal with the value of currangle
        ishorizontal = currangle === 0;
    }
    else{ ishorizontal = Math.random() < 0.5};  //random value of horizontal for the computer

    let startingIndex ;
    if(startId){ startingIndex = startId; }  //starting index for computer
    
    else{ startingIndex = Math.floor(Math.random() * 100);}   //randomised starting value for computer

    let {shipsquaresx, valid, notoccupied} = Validity(allsquaresx, ishorizontal, startingIndex, shipx);  //checking its validity
    
    if(valid && notoccupied){                  //if valid giving it class of occupied
        shipsquaresx.forEach(shipsquare => {
            shipsquare.classList.add(shipx.name);
            shipsquare.classList.add('occupied');
        });
    }
    else{                                        //otherwise looping or if it is a player making sure it is not dropped outside the board
        if(user ==='computer'){addshipai('computer',shipx);}
        if(user ==='player'){notdropped = true;}
    }
}


allplayersquares.forEach(playersquare => {                      //dragging and gropping for the player
    playersquare.addEventListener('dragover', dragOver);
    playersquare.addEventListener('drop', dropShip);
});

function dragstart(e){             //dragging start
    notdropped = false;
    dragship = e.target;
}

function dragOver(e){             // dragging stopped
    e.preventDefault();
}

function dropShip(e){              //if dropped out of bounds not placing it and if in bounds checking 
    const startId = e.target.id;   //for validity and placing it in bound sand removing it from choices
    const currship = allships[dragship.id];
    addshipai('player',currship, startId);
    if(!notdropped){
        dragship.remove();
    }
}

function startgame(){                             //startGame function when button is pressed it also initializes all squares on the board
    Backgroundmusic.play();
    Backgroundmusic.addEventListener('ended', function() {
        Backgroundmusic.currentTime = 0;
        Backgroundmusic.play();
    }, false);
    if(shipchoices.children.length != 0){
        info.textContent = "All pieces not in place; ";
    }else{
        let allsquaresz = document.querySelectorAll('#computer div');
        allsquaresz.forEach(square => square.addEventListener('click', handleclick));
    }
}

function remover(id) {                         //helper function to remove dom elements to reset the game
    let toremove = document.getElementById(id);
    toremove.parentNode.removeChild(toremove);
}


function handleclick(e){                      //this is the function to attack during the game, to make sure if it is a miss, hit
    if (!gameOver){                           //a repeated miss/hit and also checking whose turn it is this is mainly for the player
        if(e.target.classList.contains('hit') || e.target.classList.contains('empty')){      //if its repeated send message and do nothing
            info.textContent = 'Area already hit';
            let allsquaresy = document.querySelectorAll('#computer div');
            allsquaresy.forEach(square => square.addEventListener('click', handleclick));
        }
        else{                                                 // if not check if its a hit or a miss based on if its occupied
            if(e.target.classList.contains('occupied')){
                let rand = Math.random()*3;
                if(rand<1){hit1.play();}
                else if(rand<2){hit2.play();}
                else{hit3.play();}
                e.target.classList.add('hit');
                hit=hit+1;
                hits.textContent =  `Hits - ${hit}`;
                info.textContent = 'You hit a ship!';
                let classesx = Array.from(e.target.classList);
                classesx = classesx.filter(className => className !== 'square');
                classesx = classesx.filter(className => className !== 'hit');
                classesx = classesx.filter(className => className !== 'occupied');
                playerHits.push(...classesx);
                checkScore('player', playerHits, playersunkships);       //checking if all ships or any ship is destroyed
            }
            if(!e.target.classList.contains('occupied')){
                let rand = Math.random()*50;
                if(rand<47){miss1.play();}
                else{miss2.play();}
                miss=miss+1;
                misses.textContent =  `Misses - ${miss}`;
                info.textContents = 'No Hit'
                e.target.classList.add('empty'); 
            }
            playerTurn=false;                                              //after player turn is over giving the turn to enemy
            const allships=document.querySelectorAll('#computer div');
            allships.forEach(square => square.replaceWith(square.cloneNode(true)));
            Aiturn();                               //computer turn
        }
    }
}
function Aiturn(){                  //computer attack function
     if (!gameOver){               //if gameover stop
        turn.textContent = 'Computer playing'
        info.textContent = 'Thinking'

        let randomGo = Math.floor(Math.random()*100);               //a random square from 0-99 for the computer to attack
        let shipchoicesx = document.querySelectorAll('#player div');
        //checking if the selected square is already hit or missed, and looping to find another square if that is the case
        if (shipchoicesx[randomGo].classList.contains('hit') || shipchoicesx[randomGo].classList.contains('empty')){  
            Aiturn();
            return;
        }
        else{                 // otherwise checking if it is occupied and saving the square as hit, and saving the ship value to
            if (shipchoicesx[randomGo].classList.contains('occupied')){    //make sure if the ship is fully destroyed or not
                shipchoicesx[randomGo].classList.add('hit');
                info.textContent = 'our ship has been hit ';
                let classes = Array.from(shipchoicesx[randomGo].classList);
                classes = classes.filter(className => className !== 'square');
                classes = classes.filter(className => className !== 'hit');
                classes = classes.filter(className => className !== 'occupied');
                classes = classes.filter(className => className !== 'empty');
                Enemyhits.push(...classes);                       //after filtering all other classes saving the value class in enemy/compute hit
                checkScore('computer', Enemyhits, computersunkships);
            }
            else{                               //if no hit marking the square as a miss
                info.textContent='No hit';
                shipchoicesx[randomGo].classList.add('empty');
            }
        }

        if (!gameOver){                    //this is just so if computer wins, we can see the you lose message
            setTimeout(() => {             //player turn to check if we click on any ships
                playerTurn = true;
                turn.textContent = 'Your turn'
                info.textContent = 'planning';
                let shipchoicesz = document.querySelectorAll('#computer div');
                shipchoicesz.forEach(square => square.addEventListener('click', handleclick))
            }, 900)
        }
     }
}

function checkScore(user, userHits, userSunkShips){   // checking if a ship is destroyed and if all ships of any user are destroyed ending the game

    function checkShip(shipName, shipLength){     //the function to check each ship individually
        if(userHits.filter(storedShipName => storedShipName === shipName).length === shipLength)
        {
            info.textContent = `sunk ${user}'s ${shipName}`;
            let turnwhite = Array.from(document.getElementsByClassName(shipName));
            
            turnwhite.forEach(turnwhite => {if(!(turnwhite.parentElement.id == user)){turnwhite.style.backgroundColor = 'cyan';}});
            
            if(user === 'player'){            //checking for player
                playerHits = userHits.filter(storedShipName => storedShipName !== shipName);
            }
            if(user === 'computer'){         //checking for computer/enemy
                Enemyhits = userHits.filter(storedShipName => storedShipName !== shipName);
            }
            userSunkShips.push(shipName);
        }
    }
    checkShip('ship-1',5);   //checking each ship by using the above function
    checkShip('ship-2',4);
    checkShip('ship-3',3);
    checkShip('ship-4',3);
    checkShip('ship-5',2);

    if(playersunkships.length === 5){         //checking if player won
        info.textContent = 'all Enemy ships sunk VICTOY!!!';
        gameOver = true;
    }
    if(computersunkships.length === 5){        //checking if Enemy won
        info.textContent = 'all our ships sunk DEFEAT!!!';
        gameOver = true;
    }


}

