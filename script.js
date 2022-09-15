let computerNember = 0;
let userInput = document.getElementById("user-Input");
let playButton = document.querySelector("#play-Button");
let resultText = document.querySelector(".result-Text");
let resultImg = document.querySelector(".main-Img");
let chanceArea = document.querySelector(".chance-Area");
let resetBtn = document.querySelector(".reset-Btn");
let userValuelist = [];
let gameOver = false;
let chance = 5;

chanceArea.innerHTML = `남은 기회:${chance}`;
playButton.addEventListener("click",play);
resetBtn.addEventListener("click",reset);
userInput.addEventListener("focus",focusInput);

function pickRandomNumber(){
    computerNember =Math.floor(Math.random()*100) + 1;
    console.log(computerNember);
};

function play() {
    let userValue = userInput.value;
    
    if(userValue < 1 || userValue > 100){
        resultText.textContent = "1부터 100 사이의 숫자를 입력 해주세요";
        
        return 
    };
    
    if(userValuelist.includes(userValue)){
        resultText.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해주세요";
        
        return 
    };
    
    chance--;
    chanceArea.innerHTML = `남은 기회:${chance}`;
    userValuelist.push(userValue);
    
    if(userValue < computerNember){
        resultImg.src = "https://media0.giphy.com/media/3ov9jExd1Qbwecoqsg/200.gif";
        resultText.textContent = "Up!!!";
    } else if(userValue > computerNember){
        resultImg.src = "https://media.giphy.com/media/r2puuhrnjG7vy/giphy.gif";
        resultText.textContent = "Down!!!";      
    } else if(userValue == computerNember){
        resultImg.src = "https://media.tenor.com/images/0a81b89954678ebe228e15e35044f7a5/tenor.gif";
        resultText.textContent = "정답!!";
        gameOver = true;
    };
    
    if(chance == 0){
       gameOver = true;
    };
    
    if(gameOver == true){
        playButton.disabled = true;
    };
};
  
function focusInput(){
    userInput.value = "";
};

function reset(){
    pickRandomNumber();
    userInput.value = "";
    resultImg.src = "https://media1.giphy.com/media/9DinPR8bzFsmf74j9W/giphy.gif";
    gameOver = false;
    playButton.disabled = false;
    resultText.textContent = "기회는 단 다섯번!";
    chance = 5;
    chanceArea.innerHTML = `남은 기회:${chance}`;
    userValuelist = [];
};
    
pickRandomNumber()