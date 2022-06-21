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
 

   $(window).load(function(){
    
      $('.loader-text').addClass('showMe');
       $('#loader').fadeOut(3700, function(){
          
         $('.body-wrap').addClass('show');
         
       });
     
   });


    const effect = VANTA.NET({
  el: "#net",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.08,
  points: 8.00,
  maxDistance: 28.00,
  spacing: 17.00
});

    // removed resize we trigger it manually
ScrollTrigger.config({
  autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
})
// window resize
const resize = e => {
  Xt.eventDelay({
    e,
    ns: 'xtScrolltriggerRerfreshFix',
    func: () => {
      ScrollTrigger.refresh()
    },
  })
}
removeEventListener('resize', resize)
addEventListener('resize', resize)

   gsap.timeline({
  scrollTrigger: {  
  trigger: ".main-wrapper",
  start:'top top',  
  scrub: 1,
  pin:true
  }
  })
   .fromTo('.hi-txt',{opacity:1},{y:-5 , opacity:0, ease:'power2.out'})
   .to(".intro h2",{y:-10, opacity:0})
   .to('.intro p' , {y:-10 , opacity:0})
   .to('.phone',2,{y:-220})
   .fromTo('.text',4,{display:'none', scale:20},{display:'flex',scale:1})
   
   .to('.text',{mixBlendMode:'normal'})
   .to('.apply-txt',{ opacity:1},"-=1") 
    .to('.mid-text',{opacity:1},"-=1")
    .to('.copyright',{opacity:1},"-=1");
    
  function myFunction(x) {
  if (x.matches) { // If media query matches
      effect.setOptions({
         points: 16.00,
        maxDistance:19.00,
        spacing: 19.00

      })
  } 
}

var x = window.matchMedia("(max-width: 768px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes