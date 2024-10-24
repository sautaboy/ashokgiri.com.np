const tl = gsap.timeline()
tl.to("#loading-screen", {
    opacity: 1
}).from("#loading-screen img", {
    opacity: 0,
    duration: 1,
    scale: 0,
    rotate: 360,
    ease: "power2.out"
}).to("#loading-screen", {
    opacity: 0,
    scale: 20,
    duration: 2,
    backgroundColor: "transparent",
    ease: "power2.inOut"
}).to("header,main,footer", {
    opacity: 1,
    ease: "power2.out"
})
