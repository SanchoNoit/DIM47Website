function init(){
    
    const loader = document.querySelector('.loader');

    // reset position of the loading screen
    gsap.set(loader, {
        scaleX: 0, 
        rotation: 10, 
        xPercent: -5,
        yPercent: -50, 
        transformOrigin: 'left center', 
        autoAlpha: 1
    });

    function loaderIn() {
        // GSAP tween to stretch the loading screen across the whole screen
        
        return gsap.fromTo(loader, 
            {
                rotation: 0,
                scaleX: 10,
                xPercent: 5
            },
            { 
                duration: 0.8,
                xPercent: 0,
                scaleX: 10, 
                rotation: 0,
                ease: 'Power4.inOut', 
                transformOrigin: 'left center',
                transition: opacity=500000000000000000,
                opacity: 1
            });
    }

    function loaderAway() {
        // GSAP tween to hide the loading screen
        
        return gsap.fromTo(loader,  {
                rotation: -10,
                scaleX: 0,
                xPercent: -5
            },
        { 
            duration: 0.8,
                xPercent: 0,
                scaleX: 1, 
                rotation: 0,
            transformOrigin: 'right center', 
            ease: 'Power4.inOut'
        });
    }

    // do something before the transition starts
    barba.hooks.before(() => {

        document.querySelector('html').classList.add('is-transitioning');
        barba.wrapper.classList.add('is-animating');

    });

    // do something after the transition finishes
    barba.hooks.after(() => {

        document.querySelector('html').classList.remove('is-transitioning');
        barba.wrapper.classList.remove('is-animating');

    });

    // scroll to the top of the page
    barba.hooks.enter(() => {

        window.scrollTo(0, 0);

    });

    barba.init({
        transitions: [{
             
            async leave() {
                await loaderIn();
        
            }, enter() {
                loaderAway();
          }
            
        }]
    })

}


//{
//    rotation: 10,
//    scaleX: 0,
//    xPercent: -5
//},
//{ 
//    duration: 0.8,
//    xPercent: 0,
//    scaleX: 1, 
//    rotation: 0,
//    ease: 'Power4.inOut', 
//    transformOrigin: 'left center',
//    transition: opacity=500000000000000000,
//    opacity: 1
//});


function loaderAway() {
    // GSAP tween to hide the loading screen
    var loader = document.querySelector('.loader');
    gsap.fromTo(loader,  
        {
            rotation: -10,
            scaleX: 10,
            xPercent: 10,
            transformOrigin: 'right',
            opacity:1
        },
    { 
        duration: 0.8,
                xPercent: 0,
                scaleX: 1, 
                rotation: 0,
                
        transform: 'left', 
        ease: 'none',
        
        opacity: 0
    });
    loader.opacity=1
    

}




window.addEventListener('load', function(){
    init();
    
});