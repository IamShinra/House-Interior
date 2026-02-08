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
        start: "25%",
        end: "150%",
        markers: true,
        scrub: 2,
        ease: "ease"
    }
})

discover_tl.to(".slide1",{
    y:220,
})

discover_tl.to(".slide2",{
    y:220,
})

discover_tl.to(".slide3",{
    y:220,
})

discover_tl.to(".slide4",{
    y:220,
})


//image section animation

gsap.to("#img_section2",{
    clipPath: "circle(100% at 50% 50%)",
    scrollTrigger: {
        trigger: "image-section > .container",
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
        pin: true,
        onEnter: () => {
            document.body.classList.add("dark-theme");
        },
        onLeaveBack : () => {
            document.body.classList.remove("dark-theme")
        }
    }
})
