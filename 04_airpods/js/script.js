const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');

const section = document.querySelector('section');
const end = section.querySelector('h1');

//scrollmagic
const controller = new ScrollMagic.Controller();

//Scenes
const scene = new ScrollMagic.Scene({
  duration: 4500,
  triggerElemnt: intro,
  triggerHook: 0.5
})
.setPin(intro)
.addTo(controller);

//VideoAnimation
let accelAmount = 0.1;
let scrollPos = 0;
let delay = 0;

scene.on("update", e=>{
  scrollPos = e.scrollPos/1000;
});
setInterval(()=>{
  delay += (scrollPos - delay)*accelAmount;
  video.currentTime = delay;
},25)