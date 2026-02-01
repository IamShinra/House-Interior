 gsap.registerPlugin(ScrollTrigger);
 
 gsap.fromTo("#title",{
        scale: 9.2,
        y : -200
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

// Discover section animation

const discover_tl = gsap.timeline({
    scrollTrigger:{
        trigger: ".slide",
        start: "20%",
        markers: true,
        scrub: 2,
        ease: "ease"
    }
})

discover_tl.to(".slide1",{
    y:220,
})