console.log('Welcome in the Spotify')
//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName:"Wariya  - mortals (feat. lura brelaen) [NCS Release]",filepath:"songs/1.mp3",coverpath: "covers/1.jpg"},
    {songName:"Clalo - Huma - Huma",filepath:"songs/2.mp3",coverpath: "covers/2.jpg"},
    {songName:"DEAF KEV Invinicible [NCS Realse]-320k",filepath:"songs/3.mp3",coverpath: "covers/3.jpg"},
    {songName:"Different Heavean-my heart [NCS Realese]-420k",filepath:"songs/4.mp3",coverpath: "covers/4.jpg"},
    {songName:"Janji-Heros-Tonight-feat-Joining-[NCS Release]",filepath:"songs/5.mp3",coverpath: "covers/5.jpg"},
    {songName:"Rabba ",filepath:"songs/6.mp3",coverpath: "covers/6.jpg"},
    {songName:"Bhula Dena- Arijit Singh",filepath:"songs/7.mp3",coverpath: "covers/7.jpg"},
    {songName:"sathiya Mahiya ",filepath:"songs/8.mp3",coverpath: "covers/8.jpg"},
    {songName:"Thumhari Kasam ",filepath:"songs/9.mp3",coverpath: "covers/9.jpg"},
    {songName:"Tere Liye ",filepath:"songs/10.mp3",coverpath: "covers/10.jpg"},
]
songItems.forEach((element, i)=> {
  element.getElementsByTagName("img")[0].src = songs[i].coverpath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
  
});
//audioElement.play():

//handle play/pause click
masterPlay.addEventListener('click',()=> {
      if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
      }
      else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
         // audioElement.pause();
          //masterPlay.classList.remove('fa-circle-pause')
          //masterPlay.classList.add('fa-circle-play')
          gif.style.opacity = 0;

      }
})
audioElement.addEventListener('timeUpdate',()=> {
    //Update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.ariaValueMax = progress;

});

myProgressBar.addEventListener('change',()=>{
  audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays = ()=>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
  })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=> {
   element.addEventListener('click',(e)=>{
      //console.log(e.target);
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove('fa-circle-play');
      e.target.classList.add('fa-circle-pause');
      audioElement.src = 'songs/${songIndex+1}.mp3';
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove('fa-circle-play');
      masterPlay.classList.add('fa-circle-pause');

    })
})

/*document.getElementsById('next').addEventListener('click',()=>{
  if(songIndex>=9){
    songIndex = 0;
  }
   else{
    songIndex += 1;
  }
  audioElement.src = 'songs/${songIndex+1}.mp3';
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-circle-play');
  masterPlay.classList.add('fa-circle-pause');

})

document.getElementsById('previous').addEventListener('click',()=>{
  if(songIndex<=0){
    songIndex = 0;
  } else{
    songIndex -= 1;
  }
  audioElement.src = 'songs/${songIndex+1}.mp3';
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-circle-play');
  masterPlay.classList.add('fa-circle-pause');

})*/