//global variables here: word, word array(s), guesses, guessedLetters
let word = "supercalifragilisticexpialidocious";
let words1 = ["tree","cauliflower","ointment","tumble",
            "fungus","orbit","green","banana","crawl",
            "lucky","warden","face","incredulous","a",
            "continental","smorgasboard","mutual","velociraptor",
            "volcano","industry","fission","thermometer",
            "memory","repeater","transformer","library",
            "cowardice","metonomy","gauss","voltage","detonation",
            "resistance","temper","rhinoceros","hippopotamus",
            "conservation","amplification","logistics","monster",
            "freedom","democracy","senator","tyrannosaurus","scuttle",
            "fracking","quasar","chartreuse","birthday","shuttle",
            "illness","medicine","cardiovascular","tomato","airline",
            "thesaurus","wicker","zerg","warg","yellow","united",
            "wall","gall","apall","spall","yall","fall","goblin",
            "joke","pun","brain","cerebellum","pneumonoultramicroscopicsilicovolcanoconiosis",
            "well","bell","smell","yell","tell","knell","iritation",
            "annoyance","manifold","array","assembly","mass",
            "interupt","chemistry","biology","enceladus",
            "europa","ganymede","io","callisto","titan",
            "mimas","laser","maser","buffalo","hog","dog","log","nog",
            "nanotube","boron","hydrogen","oxygen","carbon","nitrogen",
            "argon","xenon","osmium","iron","copper","gold",
            "uranium","plutonium","aluminum","lead","helium",
            "sodium","chlorine","flourine","titanium","magnesium",
            "phosphorus","fabrication","construction","application",
            "silicon","computation","keyboard","monitor","account",
            "exchange","commerce","taxes","earnings","anatomy",
            "duplicitous","cunning","vocabulary","synonym",
            "apple","bannana","carrot","potato","sugar","entropy",
            "strawberry","blueberry","warhammer","orc","ork",
            "elf","gelf","hobbit","dwarf","ent","final","heat",
            "antidisestablishmentarianism","lies","scheme",
            "plot","conspire","organize","refine","distill",
            "cadmium","osmium","dalek","tardis","television",
            "movie","movies","star","space","jedi","force",
            "enterprise","discovery","challenger","oportunity",
            "perserverance","spirit","fortress","fortification",
            "flag","report","one","two","three","four","five",
            "six","seven","eight","nine","ten","eleven","twelve"];
let words2 = ["counterprotester","indomitable","unwaveringly","unincorporated",
            "thermonuclear","radioactive","incomprehensibilities","thyroparathyroidectomized",
            "honorificabilitudinitatibus","floccinaucinihilipilification","pseudopseudohypoparathyroidism",
            "hippopotomonstrosesquippedaliophobia","uncopyrightable","electroencephalographically",
            "sesquipedalianism","psychoneuroendocrinological","chargoggagoggmanchauggagoggchaubunagungamaugg",
            "dichlorodifluoromethane","abstentious","internationalization"]
let words3 = ["hydrogen","helium","lithium","beryllium","boron","carbon","nitrogen","oxygen","flourine","neon",
              "sodium","magnesium","aluminum","silicon","phosphorous","sulfur","chlorine","argon",
              "potassium","calcium","scandium","titanium","vanadium","chromium","manganese","iron","cobalt","nickel","copper","zinc","gallium","germanium","arsenic","selenium","bromine","krypton",
              "rubidium","strontium","yttrium","zirconium","niobium","molybdenum","technetium","ruthenium","rhodium","palladium","silver","cadmium","indium","tin","antimony","tellurium","iodine","xenon",
              "caesium","barium","lanthalum","cerium","praseodymium","neodymium","promethium","samarium","europium","gadolinium","terbium","dysprosium","holmium","erbium","thulium","ytterbium","lutetium","hafnium","tantalum","tungsten","rhenium","osmium","iridium","platinum","gold","mercury","thallium","lead","bismuth","polonium","astatine","radon",
              "francium","radium","actinium","thorium","proactinium","uranium","neptunium","plutonium","americium","curium","berkelium","californium","einsteinium","fermium","mendelevium","nobelium","lawrencium","rutherfordium","dubnium","seaborgium","bohrium","hassium","meitnerium","darmstadtium","roentgenium","copernicium","nihonium","flerovium","moscovium","livermorium","tennessine","oganesson"]
              let guesses = 8;
let guessedLetters = [];
const alphabet = "abcdefghijklmnopqrstuvwxyz"

//event listeners for startGame and guessLetter

document.getElementById("start").addEventListener("click", startGame)
document.getElementById("guessLetter").addEventListener("click", guessLetter)
//once at start of the game

startGame();

function startGame() {
//sets guessed letters display to be blank and ensures the page dosent jump when it itsnt
document.getElementById("guessedLetters").innerHTML = "<br>"
guesses = 8;
setImage();
//declare words list that a word will be selected from
let words;
//sets gueeses remaining display to number of guesses
document.getElementById("numGuesses").innerHTML = "Guesses Remaining..."+guesses;
    /*
    - Reset the board, empty guessedLetters 
    - Set a word from words array into word - this line will grab  a random element from your words array for you:
    word = words[Math.floor(Math.random() * words.length)];
    */
    guessedLetters = [];
    //resets the selector box to have the full alphabet
    generateselect();
    //sets words to the actual selected mode
    var data1 = document.getElementById("difficulty?").value
    if(data1 == "normal"){
        words = words1
    }else if(data1 == "long"){
        words = words2
    }else if(data1 == "elements"){
        words = words3
    }
    //sets a word an prints it
    word = words[Math.floor(Math.random() * words.length)];
    document.getElementById("candidate").innerHTML = printWord(); 
    }
    
    //at start and every time the user enters a guess
    function printWord() {
        //sets win/loss display to be blank
        document.getElementById("victory").innerHTML = "<br>"
        //returns the partially guessed word
        var answer = "";
        for(var i = 0; i < word.length; i++){
            if(guessedLetters.indexOf(word[i])!=-1){
                answer+=word[i];
            }else{
                answer+="_ ";
            }
        }
        //declares victory if the word matches the parts of it that are guessed
        if(answer==word){
            document.getElementById("victory").innerHTML = "you win"
            document.getElementById("guessedLetter").innerHTML = ""
        }
        return answer;
    /*
    Compare each letter in answer word to the letters in guessedLetters using guessedLetters.indexOf(letter).  Use this to build the â€œ_â€ word with the correctly guessed letters filled in.
    there is a help video for this in classroom 
    */
    
    
    }
    
    //every time the user enters a guess
    function guessLetter() {
    //gets the letter that has been guessed
    var data = document.getElementById("guessedLetter").value
    guessedLetters.push(data);
    document.getElementById("guessedLetters").innerHTML = guessedLetters.join(" ");
    //console.log(guessedLetters);
    generateselect();
    document.getElementById("candidate").innerHTML = printWord();  
    //decrements guesses remaining if the guessed letter is not contained in the word
    if(word.indexOf(data) == -1){
        guesses--;

    }
    if(guesses <=0){
        document.getElementById("victory").innerHTML = "you lose"
        document.getElementById("guessedLetter").innerHTML = ""
    }
    //update displayed value of guesses
    document.getElementById("numGuesses").innerHTML = "Guesses Remaining..."+guesses;
    setImage();
    /*
    Manage the game: Add letters to guessedLetters, call printWord, deduct from guesses, check for a win or loss.
    */
    
    }
    //manages updating the selector box to remove guessed letters if any exist
    function generateselect(){
        let thing = ''
        for(let i = 0; i<alphabet.length;i++){
            if(guessedLetters.includes(alphabet.charAt(i))){
            }else{
                thing+='<option value="'+alphabet.charAt(i)+'">'+alphabet.charAt(i)+'</option>'
            }
    }
        document.getElementById("guessedLetter").innerHTML = thing
    }
    function setImage(){
        if(guesses==8){
            document.getElementById("image").src = "img/image8.png"
        }if(guesses==7){
            document.getElementById("image").src = "img/image7.png"
        }if(guesses==6){
            document.getElementById("image").src = "img/image6.png"
        }if(guesses==5){
            document.getElementById("image").src = "img/image5.png"
        }if(guesses==4){
            document.getElementById("image").src = "img/image4.png"
        }if(guesses==3){
            document.getElementById("image").src = "img/image3.png"
        }if(guesses==2){
            document.getElementById("image").src = "img/image2.png"
        }if(guesses==1){
            document.getElementById("image").src = "img/image1.png"
        }if(guesses<=0){
            document.getElementById("image").src = "img/image0.png"
        }
    }