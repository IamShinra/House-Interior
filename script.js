 gsap.registerPlugin(ScrollTrigger);
 
 gsap.fromTo("#title",{
        scale: 5.2,
        y : -180
    },{
        scale:1,
        y:0,
        duration:1,
        scrollTrigger : {
            trigger: "#title",
            end: "bottom top",
            invalidateOnRefresh: true,
            scrub: 2,
            ease: "expoScale(0.5,7,none)",
        }
    })
