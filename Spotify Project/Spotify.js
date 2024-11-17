console.log("Welcome to Spotify")

//Intitialise the variable
let songIndex = 0;
let audioElement = new Audio('kaise.mp3');
let masterPlay = document.getElementById('masterPlay')
let gif = document.getElementById('gif')
let songItem = Array.from(document.getElementsByClassName('songItem'))

let songs = [
    {songName: "Kaise bhula dun", filePath:"kaise.mp3", coverPath: "songpic.jpg"},
    {songName: "Bechain hu (Acoustic version)", filePath:"bechain.mp3", coverPath: "song2.jpg"},
]

songItem.forEach((element, i)=>{
element.getElementsByTagName("img")[0].src = songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})




//audioElement.play();
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
    audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity = 0;
    }
}
)
//handle playpause click
//Listen to events
audioElement.addEventListener('timeupdate', ()=>{
//update seekbar
progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
audioElement.currentTime = myProgressBar.value * audioElement.duration/100;

})

const makeallplays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-pause-circle');

}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.addEventListener('click', (e)=>{
console.log(e.target);
makeallplays();
e.target.classList.remove('fa-play-circle');
e.target.classList.add('fa-pause-circle');
}
)
}
)