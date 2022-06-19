// VANTA.GLOBE({
//   el: "#bg-effect",
//   mouseControls: true,
//   touchControls: true,
//   gyroControls: false,
//   minHeight: 200.00,
//   minWidth: 200.00,
//   scale: 1.00,
//   scaleMobile: 1.00,
//   color: 0x6e36d5,
//   color2: 0xe1f9ff,
//   size: 0.70,
//   backgroundColor: 0x29044a
// });

if($(window).load()){
   $("#loader").hide();
   $('.body-wrap').show();
}
else{
  $(".body-wrap").hide();
   $('#loader').show();
}



const effect = VANTA.NET({
  el: ".bg-effect",
 mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.7,
  points: 15.00,
  maxDistance: 20.00,
  spacing: 14.00
});

function myFunction(x) {
  if (x.matches) { // If media query matches
      effect.setOptions({
         points: 16.00,
        maxDistance:19.00

      })
  } 
}

var x = window.matchMedia("(max-width: 768px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
  
  // Gsap Scroll Section-1

  gsap.timeline({
  scrollTrigger: {
  trigger: ".bg-effect",
  start:'center center',
  scrub: 1.5,
  pin: true
  }
  })
  .fromTo('.hi-txt',5,{opacity:1},{y:-10 , opacity:0, ease:'power2.out'})
   .fromTo('.intro h2',5,{opacity:1},{y:-10 , opacity:0, ease:'power2.out'})
   .fromTo('.intro p',15,{opacity:1},{y:-10 , opacity:0, ease:'power2.out'})
   .to('.img-container',40,{ y:100,ease:"power2.out"})
   .to('#zoomText',{background:"#0D0C0C"})
   .fromTo('#zoomText',50,{display:'none'},{display:'flex',scale:1, ease:"power4.out"})
   .to('.mid-text',{ y:-40, position:"absolute", opacity:1, ease:"power4.out"})
   .to('.apply-txt',10,{ opacity:1}) 
   .to('.soon',10 ,{ opacity:1})    
   .to('#zoomText',{duration:10, mixBlendMode:'normal', ease:"power3.out"});

