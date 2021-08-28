var controller = new ScrollMagic.Controller();

var ourScene = new ScrollMagic.Scene({
        triggerElement: '.section-1-img',
        duration: 500
    })
    .setClassToggle('.section-1-img', 'fade-in')
    .addTo(controller)

var ourScene2 = new ScrollMagic.Scene({
        triggerElement: '.section-1-img-2',
        duration: 500
    })
    .setClassToggle('.section-1-img-2', 'fade-in')
    .addTo(controller)

var ourScene3 = new ScrollMagic.Scene({
        triggerElement: '.section-1-img-3',
        duration: 800
    })
    .setClassToggle('.section-1-img-3', 'fade-in')
    .addTo(controller)

var ourScene4 = new ScrollMagic.Scene({
        triggerElement: '.contact',
        duration: 500
    })
    .setClassToggle('.contact', 'fade-in')
    .addTo(controller)





//pin cualquier cosa
var pinIntoScene = new ScrollMagic.Scene({
    triggerElement: '#container1',
    triggerHook: 0,
    duration: '1000 %'
})

.setPin('#container1')
    .setTween(TweenMax.to("#container1 ", 1, { backgroundColor: "#F3F3F3" }))
    .addTo(controller);



var pinIntoScene2 = new ScrollMagic.Scene({
    triggerElement: '#work',
    triggerHook: 0,
    duration: '1000 %'
})

.setPin('#work')
    .setTween(TweenMax.to("#work ", 1, {}))
    .addTo(controller);







const canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d')

canvas.width = canvas.height = 128

resize();
window.onresize = resize;

function resize() {
    canvas.width = window.innerWidth * window.devicePixelRatio / 1
    canvas.height = window.innerHeight * window.devicePixelRatio / 1
    canvas.style.width = window.innerWidth + 'px'
    canvas.style.height = window.innerHeight + 'px'
}


function noise(ctx) {

    const w = ctx.canvas.width,
        h = ctx.canvas.height,
        iData = ctx.createImageData(w, h),
        buffer32 = new Uint32Array(iData.data.buffer),
        len = buffer32.length
    let i = 1

    for (; i < len; i++)

        if (Math.random() < 0.5) buffer32[i] = 0xffffffff;

    ctx.putImageData(iData, 0, 0);
}



(function loop() {
    noise(ctx);
    requestAnimationFrame(loop);
})();
