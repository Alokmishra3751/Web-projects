  
  ScrollTrigger.matchMedia({
    //desktop
    "(min-width:991px)": function(){

    gsap.timeline({
    scrollTrigger: {
    trigger: "#main-section",
    scroller:'body',
    start: "top top",
    pin: true,
    end:"+=5000",
    scrub:1,


    }
  })
   .to('.rotateLeft',1,{rotation:20},{rotation:10})
  .to('.rotateRight',1,{rotation:-20},{rotation:-10},'-=1') 
  .to('.pr-img',1.5,{x:'-49.9%',y:'-50%',width:'292px' , height:'225px' },'-=1')  
   
  .to('.rotateLeft, .rotateRight',.5,{rotation: 0},'-=.5') 
   
  .to('.phone',1,{scale:1 , y:'0%'},'-=1.3')
  .to('.hulk-left',1,{x:'100%',opacity:.2},'-=.5')
  .to('.hulk-right',1,{x:'-100%',opacity:.2},'-=.7')
  .to('.pr-img, .magic-bg',{display:'none'},'-=.7')
  .to('.ui-images img',.1,{opacity:1 , delay:.2})
  .to('.circle',.5,{scale:1})
  .fromTo('.inner.left .option',.3,{scale:0,x:'50%' , y:'50%'},{x:0 ,y:0, scale:1},'-=.5')
  .fromTo('.inner.right .option',.3,{scale:0,x:'-50%' , y:'-50%'},{x:0 ,y:0, scale:1},'-=.5');

  gsap.timeline({
  scrollTrigger: {
    trigger: "#saScreens .container",
    start: "top top",
    end:"+=1000",
    scrub:1,
    pin: true

  }
  })
  .to('.mobile-phone-wrapper',.5,{x:'0%'})
  .to('.mobile-phone-wrapper',.5,{rotation:0})
  .to('#saScreens',.3,{background:'#99a8fd'},'-=.5')
  .to('.right-wrap',.1,{opacity:1},'-=.15')
  .to('.scrollText ul',5,{y:'-355px',delay:.5})
  .set('.props-screen',{backgroundImage:'url(https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png)'},'-=4.8')
   .set('.props-screen',{backgroundImage:'url(https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png.png)'},'-=4.5');
  
   gsap.to('.user',{
  scrollTrigger: {
    trigger: ".sa-users",
    start: "top +=50%",
    end:"bottom top",
    scrub:2

  },
    y:'-70%'
  });

   gsap.timeline({
    scrollTrigger: {
    trigger: ".sa-darkUi",
    start: "top +=90%",
    bottom:"+=1000",
    scrub:1

  }
  })
   .to('.tk-blob',2,{scale:3})
   .to('.tk-blob svg path',2,{fill:'rgba(0,0,0,0)'},'-=1');
    },




    // Mobile 

    "(max-width:991px)": function(){

       gsap.timeline({
    scrollTrigger: {
    trigger: "#main-section",
    scroller:'body',
    start: "top top",
    pin: true,
    end:"bottom top",
    scrub:1.5


    }
  })
 
   .to('.rotateLeft',1,{rotation:20},{rotation:10})
  .to('.rotateRight',1,{rotation:-20},{rotation:-10},'-=1') 
   .to('.pr-img',2,{x:'-49.9%',y:'-50%',width:'390px' , height:'290px' })  
   
  .to('.rotateLeft, .rotateRight',.5,{rotation: 0},'-=.5') 
   
  .to('.phone',1,{scale:1 , y:'0%'},'-=1.3')
  .to('.hulk-left',1,{x:'100%',opacity:.2},'-=.5')
  .to('.hulk-right',1,{x:'-100%',opacity:.2},'-=.7')
  .to('.pr-img, .magic-bg',{display:'none'},'-=.7')
  .to('.ui-images img',.1,{opacity:1 , delay:.2})
  .to('.circle',.5,{scale:1})
  .fromTo('.inner.left .option',.3,{scale:0,x:'50%' , y:'50%'},{x:0 ,y:0, scale:1},'-=.5')
  .fromTo('.inner.right .option',.3,{scale:0,x:'-50%' , y:'-50%'},{x:0 ,y:0, scale:1},'-=.5');

  gsap.timeline({
  scrollTrigger: {
    trigger: "#saScreens .container",
    start: "top +=200px",
    end:'+=1000',
    scrub:1,
    pin: true

  }
  })
  .to('.mobile-phone-wrapper',.5,{x:'0%'})
  .to('.mobile-phone-wrapper',.5,{rotation:0})
  .to('#saScreens',.3,{background:'#99a8fd'},'-=.5')
  .to('.right-wrap',.1,{opacity:1},'-=.15')
  .to('.scrollText ul',5,{y:'-355px',delay:.5})
  .set('.props-screen',{backgroundImage:'url(https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png)'},'-=4.8')
   .set('.props-screen',{backgroundImage:'url(https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png.png)'},'-=4.5');
  
   gsap.to('.user',{
  scrollTrigger: {
    trigger: ".sa-users",
    start: "top +=50%",
    end:"bottom top",
    scrub:2

  },
    y:'-70%'
  });

   gsap.timeline({
    scrollTrigger: {
    trigger: ".sa-darkUi",
    start: "top +=90%",
    bottom:"+=1000",
    scrub:1

  }
  })
   .to('.tk-blob',2,{scale:3})
   .to('.tk-blob svg path',2,{fill:'rgba(0,0,0,0)'},'-=1');
    },




      "(max-width:768px)": function(){

       gsap.timeline({
    scrollTrigger: {
    trigger: "#main-section",
    scroller:'body',
    start: "top top",
    pin: true,
    end:"bottom top",
    scrub:1.5


    }
  })
  
  .to('.rotateLeft',1,{rotation:20},{rotation:10})
  .to('.rotateRight',1,{rotation:-20},{rotation:-10},'-=1') 
  .to('.pr-img',2,{x:'-49.9%',y:'-50%',width:'273px' , height:'213px' })  
   
  .to('.rotateLeft, .rotateRight',.5,{rotation: 0},'-=.5') 
   
  .to('.phone',1,{scale:1 , y:'0%'},'-=1.3')
  .to('.hulk-left',1,{x:'100%',opacity:.2},'-=.5')
  .to('.hulk-right',1,{x:'-100%',opacity:.2},'-=.7')
  .to('.pr-img, .magic-bg',{display:'none'},'-=.7')
  .to('.ui-images img',.1,{opacity:1 , delay:.2})
  .to('.circle',.5,{scale:1})
  .fromTo('.inner.left .option',.3,{scale:0,x:'50%' , y:'50%'},{x:0 ,y:0, scale:1},'-=.5')
  .fromTo('.inner.right .option',.3,{scale:0,x:'-50%' , y:'-50%'},{x:0 ,y:0, scale:1},'-=.5');

   
  
   gsap.to('.user',{
  scrollTrigger: {
    trigger: ".sa-users",
    start: "top +=50%",
    end:"bottom top",
    scrub:2

  },
    y:'-70%'
  });

   gsap.timeline({
    scrollTrigger: {
    trigger: ".sa-darkUi",
    start: "top +=90%",
    bottom:"+=1000",
    scrub:1

  }
  })
   .to('.tk-blob',2,{scale:3})
   .to('.tk-blob svg path',2,{fill:'rgba(0,0,0,0)'},'-=1');
    }
  });




