
// assign the songs and ,trackName, MovieName

const music = [
    // {
    //     id: 1,
    //     Audio: "Dole-Dole-Than.mp3",
    //     img: "pokkiri.jpg",
    //     text:"Dole-Dole-Than.pokiri"
    // },
    // {
    //     id: 2,
    //     Audio: "Ae-Le-Le-Etti-Parthale.mp3",
    //     img: "naiyandi.jpg",
    //     text:"Ae-Le-Le-Etti-Parthale.naiyandi"
    // },
    // {
    //     id: 3,
    //     Audio: "Aagaya-Suriyanai.mp3",
    //     img: "samurai.jpg",
    //     text:"Aagaya-Suriyanai.samurai"
    // },
    // {
    //     id: 4,
    //     Audio: "Ellu-Vaya-Pookalaye-MassTamilan.org.mp3",
    //     img: "asuran.jpg",
    //     text:"Ellu-Vaya-Pookalaye.asuran"
    // },
    // {
    //     id: 5,
    //     Audio: "Hey-Amigo-MassTamilan.org.mp3",
    //     img: "kappan.jpg",
    //     text:"Hey-Amigo.kappan"
    // },
    // {
    //     id: 6,
    //     Audio: "Padichu-Pathen.mp3",
    //     img: "polladhavan.jpg",
    //     text:"Padichu-Pathen.poladhavan"
    // },
    // {
    //     id: 7,
    //     Audio: "Pala-Palakura.mp3",
    //     img: "ayan.jpg",
    //     text:"Pala-Palakura.ayan"
    // },
    // {
    //     id: 8,
    //     Audio: "Polladha-Boomi-MassTamilan.org.mp3",
    //     img: "asuran.jpg",
    //     text:"Polladha-Boomi.asuran"
    // },
    // {
    //     id: 9,
    //     Audio: "Rahatulla.mp3",
    //     img: "gajini.jpg",
    //     text:"Rahatulla.gajini"
    // },
    // {
    //     id: 11,
    //     Audio: "The-Blood-Bath-MassTamilan.org.mp3",
    //     img: "asuran.jpg",
    //     text:"The-Blood-Bath.asuran"
    // },
    // {
    //     id: 12,
    //     Audio: "Venmathiye.mp3",
    //     img: "minnale.jpg",
    //     text:"Venmathiye.minnale"
    // },
    // {
    //     id: 13,
    //     Audio: "Veyyon-Silli-MassTamilan.io.mp3",
    //     img: "SP.jpg",
    //     text:"Veyyon-Silli.surarai potru"
    // },
    // {
    //     id: 14,
    //     Audio: "VIKRAM - OST Jukebox _ Kamal Haasan _ ANIRUDH RAVICHANDER _ Vijay Sethupathi _ Lokesh Kanagaraj(MP3_320K).mp3",
    //     img: "vikram.jpg",
    //     text:"Vikram-Title. Vikram"
    // },
    // {
    //     id: 15,
    //     Audio: "Vizhigalil-Oru-Vaanavil.mp3",
    //     img: "Tm.jpg",
    //     text:"Vizhigalil-Oru-Vaanavil.thevathiru magan"
    // },
    // {
    //     id: 16,
    //     Audio: "Yen-Minukki-MassTamilan.org.mp3",
    //     img: "asuran.jpg",
    //     text:"Yen-Minukki.asuran"
    // },
    {
        id: 1,
        Audio: "Dheera.mp3",
        img: "KGF-1_.jpg",
        text:"Dheera.KGF-1"
    },
    {
        id: 2,
        Audio: "Karuvinil-Enai.mp3",
        img: "KGF-1_.jpg",
        text:"Karuvinil-Enai.KGF-1"
    },
    {
        id: 3,
        Audio: "Koodi-Kanavil.mp3",
        img: "KGF-1_.jpg",
        text:"Koodi-Kanavil.KGF-1"
    },
    {
        id: 4,
        Audio: "Veesum-Soorai-Katre.mp3",
        img: "KGF-1_.jpg",
        text:"Veesum-Soorai-Katre.KGF-1"
    },
    {
        id: 5,
        Audio: "Sulthana.mp3",
        img: "KGF-2.jpg",
        text:"Sulthana.KGF-2"
    },
    {
        id: 6,
        Audio: "Toofan.mp3",
        img: "KGF-2.jpg",
        text:"Toofan.KGF-2"
    },
    {
        id: 7,
        Audio: "Mehabooba.mp3",
        img: "KGF-2.jpg",
        text:"Mehabooba.KGF-2"
    }
]

// Targeting HTML elements

const audio = document.querySelector("audio")
const play = document.querySelector(".fa-play")
const progress = document.querySelector("#progress")
const  forward = document.querySelector(".fa-forward-step")
const backward = document.querySelector(".fa-backward-step")
const shuffle = document.querySelector(".fa-arrows-rotate")
const start = document.querySelector(".start")
const finish = document.querySelector(".finish")
const vol = document.querySelector(".fa-volume-up")
const volume = document.querySelector("#volume")
const display = document.querySelector(".display")
const img = document.querySelector(".images")

// in case press space button play and pause songs

window.addEventListener("keyup",(e)=>{
    if(e.code == "Space"){
        if (play.className == "fa-solid fa-play") {
            play.className = "fa-solid fa-pause"
            audio.play()
            timeOut()
        }
        else {
            play.className = "fa-solid fa-play"
            audio.pause()
            timeOut()
        }
    } 
})


// Showing source in image, track name, music

window.addEventListener("DOMContentLoaded", () => {
    img.src = "KGF-1_.jpg"
    display.innerText = "Dheera.KGF-1"
    audio.src = "Dheera.mp3"

})
audio.onloadeddata=function() {
    progress.max = audio.duration
}

// play button functcion play or pause

play.addEventListener("click", () => {
    if (play.className == "fa-solid fa-play") {
        play.className = "fa-solid fa-pause"
        audio.play()
        timeOut()
    }
    else {
        play.className = "fa-solid fa-play"
        audio.pause()
        timeOut()
    }


})
setInterval(function () {
    progress.value = audio.currentTime

    
},500)

// input range function

progress.addEventListener("input",()=>{
    audio.currentTime = progress.value
    play.className = "fa-solid fa-pause"

    audio.play()
    timeOut()
})

// forward button function click the forward button then move on next track

let res = 0;
forward.addEventListener("click",autoplay)
function autoplay(){
    

    res++
    console.log(res);
if(res == music.length){
    res = 0;
}

// shuffle button function click the shuffle button comeing next song in random

if(shuffle.classList.contains("fa-shuffle")){
    let random = Math.floor(Math.random()*music.length)
    img.src=music[random].img
    display.innerText = music[random].text
    audio.src  = music[random].Audio
    play.className = "fa-solid fa-pause"
    audio.play()

}

// else songs move on one by one

else{
    img.src=music[res].img
    display.innerText = music[res].text
    audio.src = music[res].Audio
    play.className = "fa-solid fa-pause"
    audio.play()

}
timeOut()

}

// backward button function click the backward button then move on previous track

backward.addEventListener("click",()=>{
    res--
    console.log(res);
    if(res == -1){
        res = music.length -1;
    }

    // shuffle button function click the shuffle button comeing previous song in random

    if(shuffle.classList.contains("fa-shuffle")){
        let random = Math.floor(Math.random()*music.length)
        img.src=music[random].img
        display.innerText = music[random].text
        audio.src  = music[random].Audio
        play.className = "fa-solid fa-pause"
    
        audio.play()
    }

    // else songs move on back by back

    else{
        audio.src = music[res].Audio
        play.className = "fa-solid fa-pause"

        img.src=music[res].img
        display.innerText = music[res].text

        audio.play()
        timeOut()
    }
       

})

// shuffle button incase click shuffle button change the normal button

shuffle.addEventListener("click",()=>{


    if(shuffle.classList.contains("fa-arrows-rotate")){
        shuffle.className = "fa-solid fa-shuffle"

    }
    else{
        shuffle.className = "fa-solid fa-arrows-rotate"

    }

})



let intervalId = null
function timeOut() {
    if(!intervalId) intervalId = setInterval(update,1000)
}

// it's Track timeing function in show song length time

function update() {
    if(!isNaN(audio.duration)){
    let currentMin = Math.floor(audio.currentTime / 60)

    let currentSec = Math.floor(audio.currentTime - currentMin * 60)

    let durationMin = Math.floor(audio.duration / 60)

    let durationsec = Math.floor(audio.duration - durationMin * 60)

    if(currentMin < 10){
        currentMin = "0"+currentMin;
    }
    if(currentSec < 10){
        currentSec = "0"+currentSec;
    }
    if(durationMin < 10){
        durationMin = "0"+durationMin;
    }
    if(durationsec < 10){
        durationsec = "0"+durationsec;
    }
    if(progress.max == audio.currentTime){
        autoplay()
    }
    start.innerText = currentMin+":"+currentSec;
    finish.innerText = durationMin+":"+durationsec
}
}

// volume button function audioble or mute button in show

vol.addEventListener("click", () => {
    if (vol.classList.contains("fa-volume-up")) {
        vol.className = "fa-solid fa-volume-xmark"
        audio.volume = 0.0
        volume.value = 0
    }
    else {
        audio.volume = 1.0
        volume.value = 100
        vol.className = "fa-solid fa-volume-up"
    }
})

// valume range function this function in sound increse or dicrese 

volume.addEventListener("input", () => {
    if (volume.value >50 && volume.value <=75) {
        audio.volume = 0.7
        vol.className = "fa-solid fa-volume-up"
    }
    if (volume.value >25 && volume.value <=50) {
        audio.volume = 0.5
        vol.className = "fa-solid fa-volume-up"
    }
    if (volume.value >15 && volume.value <= 25) {
        audio.volume = 0.3
        vol.className = "fa-solid fa-volume-up"
    }
    if (volume.value >=5 && volume.value <=15) {
        audio.volume = 0.1
        vol.className = "fa-solid fa-volume-up"
    }
    if (volume.value >75 && volume.value <=90) {
        audio.volume = 0.8
        vol.className = "fa-solid fa-volume-up"
    }
    if (volume.value >90) {
        audio.volume = 1.0
        vol.className = "fa-solid fa-volume-up"
    }
    if (volume.value == 0) {
        audio.volume = 0.0
        vol.className = "fa-solid fa-volume-xmark"
    }

})
