console.log("Welcome to Rythm");
//Initilize the variable
let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay= document.getElementById('masterPlay');
console.log("masterplaycall");
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));
console.log("second");

let songs=[
    
        {songNames:"Let me love you", filePath:"1.mp3", coverPath:"1.jpg"},
        {songNames:"Let me love you", filePath:"2.mp3", coverPath:"2.jpg"},
        {songNames:"Let me love you", filePath:"3.mp3", coverPath:"3.jpg"},
        {songNames:"Let me love you", filePath:"4.mp3", coverPath:"4.jpg"},
        {songNames:"Let me love you", filePath:"5.mp3", coverPath:"5.jpg"},
        {songNames:"Let me love you", filePath:"6.mp3", coverPath:"6.jpg"}
    
]

songItems.forEach((element, i) =>{

    // console.log(element, i);
    element.getElementsByTagName("img")[0].src= songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songNames;
})
console.log("third")

// 
console.log("fourth")


// let audioElement=new audio('1.mp3');
//audioElement.play();
//console.log("third")
// handle play/pause
masterPlay.addEventListener('click',()=>{

    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
console.log("fourth1")
//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    console.log("timeupdate");
    //update seek bar
    let progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value= progress;

})

console.log("fifth")
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime= myProgressBar.value*audioElement.duration/100 ;
})

console.log("sixth")
const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.target.classList.remove("fa-circle-pause");
element.classList.add("fa-circle-play");
    }
    )}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
console.log(e.target);
makeAllPlays();
index = parseInt(e.target.id)
e.target.classList.remove("fa-circle-play");
e.target.classList.add("fa-circle-pause");
audioElement.src=`${index+1}.mp3`;
audioElement.currentTime=0;
audioElement.play();
masterPlay.target.classList.remove("fa-circle-play");
masterPlay.target.classList.add("fa-circle-pause");
    })

    
})
console.log("sixth1") 