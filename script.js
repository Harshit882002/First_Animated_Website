var tl = gsap.timeline()

tl.from(".nav",{
    y : -100,
    duration : 1,
    delay : 0.5,
    opacity : 0,
    stageer : 0.3
})
tl.from(".content",{
    y : 100,
    duration : 1,
    stageer : 0.3,
    opacity : 0
})
