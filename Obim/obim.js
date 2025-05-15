const letterText =`❤️My Dearest,
From The Moment you entered my life, Everything became brighter. Your smile is my favorite sight and your laugh my favorite sound. 
I find myself in a land of breathtaking vista and unfamiliar tongues, yet my hearth aches for one familiar thing
it craves the most-your presence. This foreign streets echo with the laughter of strangers, but it's your Laughter that i long for, the one that brings light to even the grayest days.
you are my strength. I LOVE YOU SO MUCH i neeed you to know how important you are in my life. 
You're my Happiness and Pride, My Peace and My Joy.
I am Forever Yours, 💒💍👰🏼‍♀️❤️`;


let index = 0;


function typeLetter() {
    if (index < letterText.length) {
         document.getElementById("text").innerHTML += letterText[index];
         index++;
         setTimeout(typeLetter, 80);
    }
}


function createHeart(){
    const heart =
    document.createElement("div");
    heart.classList.List.add("heart");
    heart.style.Left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart); 
}

setInterval(createHeart, 300);


setTimeout(typeLetter, 1000);

// function to create floating heart
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = ('❤️');
    document.body.appendChild(heart);



    const x = Math.random() * window.innerWidth; //random horizontal position
    const size = Math.random() * 20 + 15; //random size (15px, 35px)
    const duration = Math.random() * 3 + 2; //random speed (2s - 5s)
    
    heart.style.left = `$(x)px`;
    heart.style.fontSize = `$(size)px`;
    heart.style.animationDuration = `$(duration)s`;


    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
} 

const playButton = document.getElementById('playButton');
const myAudio = document.getElementById('myAudio');

playButton.addEventListener('click', () => {
  myAudio.play();
});


