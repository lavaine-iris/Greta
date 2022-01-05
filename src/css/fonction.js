function monterLegende() {
    document.querySelector('.texte13').style.display = 'block';
    return anime ({
        targets: '.texte13',
        translateY: '-4em',
        autoplay: false,
        duration: 300, 
        easing: 'linear'
    }).play;
}

function descendreLegende() {
    return anime ({
        targets: '.texte13',
        translateY: 0,
        autoplay: false,
        duration: 300, 
        easing: 'linear'
    }).play;
}

function monterLegende1() {
    document.querySelector('.texte14').style.display = 'block';
    return anime ({
        targets: '.texte14',
        translateY: '-4em',
        autoplay: false,
        duration: 300, 
        easing: 'linear'
    }).play;
}

function descendreLegende1() {
    return anime ({
        targets: '.texte14',
        translateY: 0,
        autoplay: false,
        duration: 300, 
        easing: 'linear'
    }).play;
}

function monterLegende2() {
    document.querySelector('.texte15').style.display = 'block';
    return anime ({
        targets: '.texte15',
        translateY: '-4em',
        autoplay: false,
        duration: 300, 
        easing: 'linear'
    }).play;
}

function descendreLegende2() {
    return anime ({
        targets: '.texte15',
        translateY: 0,
        autoplay: false,
        duration: 300, 
        easing: 'linear'
    }).play;
}

function monterLegende3() {
    document.querySelector('.texte16').style.display = 'block';
    return anime ({
        targets: '.texte16',
        translateY: '-4em',
        autoplay: false,
        duration: 300, 
        easing: 'linear'
    }).play;
}

function descendreLegende3() {
    return anime ({
        targets: '.texte16',
        translateY: 0,
        autoplay: false,
        duration: 300, 
        easing: 'linear'
    }).play;
}

function monterLegende4() {
    document.querySelector('.texte17').style.display = 'block';
    return anime ({
        targets: '.texte17',
        translateY: '-4em',
        autoplay: false,
        duration: 300, 
        easing: 'linear'
    }).play;
}

function descendreLegende4() {
    return anime ({
        targets: '.texte17',
        translateY: 0,
        autoplay: false,
        duration: 300, 
        easing: 'linear'
    }).play;
}

function monterLegende5() {
    document.querySelector('.texte18').style.display = 'block';
    return anime ({
        targets: '.texte18',
        translateY: '-4em',
        autoplay: false,
        duration: 300, 
        easing: 'linear'
    }).play;
}

function descendreLegende5() {
    return anime ({
        targets: '.texte18',
        translateY: 0,
        autoplay: false,
        duration: 300, 
        easing: 'linear'
    }).play;
}




function carrousel() {

    let images = document.querySelectorAll('.image15');
    let d = 2000;
    let delta = 1000;

    images.forEach(function(img,ind) {
        img.style.zIndex = images.length - ind;
    });
    
    let anim15 = anime.timeline({
        loop: true,
        delay: 0
    });

    anim15.add({
        targets: images,
        translateX: [{value: 500, duration: d},
                     {value: '-500', duration: 0, delay: function(img,ind) {
                                        if (ind == 0) return 3*delta + 2*d;
                                        if (ind == 1) return 2*delta + d;
                                        if (ind == 2) return delta;
                                        return 0;
                                    }
                     },
                     {value: 0, duration: function(img,ind) {
                                    if (ind == 3) return 0;
                                    return d;
                                }
                     }],
        easing: 'easeInOutSine',
        delay: function(img,ind) {
            if (ind == 0) return delta;
            if (ind == 1) return 2*delta + d;
            if (ind == 2) return 3*delta + 2*d;
            return 4*delta + 3*d;
        }
    });
}

function carrouselAlternate(){

    let images = document.querySelectorAll('.image15');
    let d = 2000;
    let delta = 1000;

    images.forEach(function(img,ind) {
        img.style.zIndex = images.length - ind;
    });
    
    let anim15 = anime.timeline({
        targets: '.imgalt',
        loop: true,
        direction: 'alternate',
        easing: 'linear',
        delay: function(img,ind){
            if (ind == 0) return delta;
            if (ind == 1) return 2*delta + d;
            return 3*delta + 2*d;
        }
    });
    anim15.add({
        translateX: [{value: 500, duration: d, easing: 'easeInOutSine'},
                    {value: 500, duration: 0, delay: delta}]
    })
}