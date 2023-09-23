var tl = gsap.timeline();

gsap.registerPlugin(ScrollTrigger);


tl.to(".moon", {
    opacity: 0,
});

tl.to(".moon", {
    delay: .3,
    duration: 4,

    opacity: 1,
});
tl.to(".moon", {
    opacity: 1,
    rotation: -360,
    duration: 100,
    ease: 'power',
    repeat: -1,
    yoyo: true,
});

