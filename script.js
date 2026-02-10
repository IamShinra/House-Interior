gsap.registerPlugin(ScrollTrigger);



gsap.fromTo("#title", {
    scale: 9.2,
    y: -200
}, {
    scale: 1,
    y: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#title",
        end: "bottom top",
        invalidateOnRefresh: true,
        scrub: 2,
        ease: "expoScale(0.5,7,none)",
    }
})

// Discover section animation

const discover_tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".slide",
        start: "-25%",
        end: "150%",
        // markers: true,
        scrub: 2,
        ease: "ease"
    }
})

discover_tl.to(".slide1", {
    y: 220,
})

discover_tl.to(".slide2", {
    y: 220,
})

discover_tl.to(".slide3", {
    y: 220,
})

discover_tl.to(".slide4", {
    y: 220,
})


//image section animation

gsap.to("#img_section2", {
    clipPath: "circle(100% at 50% 50%)",
    scrollTrigger: {
        trigger: ".image-section > .container",
        start: "15%",
        end: "80%",
        scrub: 4,
        pin: true,
        onEnter: () => {
            document.body.classList.add("dark-theme");
        },
        onLeaveBack: () => {
            document.body.classList.remove("dark-theme")
        }
    }
})


//Furniture section Animation
//select all .grid-items

const gridWrapper = gsap.utils.toArray(".grid-items");

gridWrapper.forEach(wrapper => {
    //select all box elements within the current wrapper

    const boxes = wrapper.querySelectorAll('.box');

    //create GSAP animation with box element

    boxes.forEach(box => {
        //create gsap animation
        gsap.from(box, {
            y: 500,
            duration: 0.5,
            scrollTrigger: {
                trigger: boxes,
                // markers: true,
                trigger: box,
                start: "top bottom",
                end: "bottom top",
                scrub: 4
            }
        })
    })
})


//Change text of furniture section


const heading = document.querySelector(".furniture-title h2");
const sections = gsap.utils.toArray(".grid-wrapper");

if (!heading || !sections.length) {
    console.error("Heading or sections not found");
}

// Footer Animation
const footer_tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".site-footer",
        start: "top 80%",
        end: "bottom bottom",
        toggleActions: "play none none reverse"
    }
});

footer_tl.from(".footer-top > *", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
})
    .from(".footer-middle > *", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
    }, "-=0.5")
    .from(".footer-bottom", {
        opacity: 0,
        duration: 1
    }, "-=0.5");

// ✅ Pin the heading properly
ScrollTrigger.create({
    trigger: "#furniture-section .container",
    start: "top center",
    end: "bottom top",
    pin: ".furniture-title",
    pinSpacing: false,
    // markers: true
});

// ✅ Change text on scroll
sections.forEach((section, i) => {
    ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",

        onEnter: () => {
            updateHeading(i);

            if (i === 0) {
                document.body.classList.remove("dark-theme");
            }
        },

        onEnterBack: () => {
            updateHeading(i);

            if (i === 0) {
                document.body.classList.remove("dark-theme");
            }
        }
    });
});

// ✅ Update heading text
function updateHeading(index) {
    const headingTexts = ["Furniture", "Decor", "Office", "Tech"];
    heading.textContent = headingTexts[index] ?? headingTexts[0];
}

// Initial text
updateHeading(0);