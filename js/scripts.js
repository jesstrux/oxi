$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
        &&
        location.hostname === this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                } else {
                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                };
            });
        }
    }
});


var controller = new ScrollMagic.Controller();
// new ScrollMagic.Scene({triggerElement: '#sectionQuote', triggerHook: 1, duration: '1200'})
//     .setTween(TweenMax.to('#quoteImage', 1, {y: '-40%', ease: Power0.easeNone}))
//     //        .addIndicators()
//     .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '#sectionActivities',
    triggerHook: 0.5
})
    .setClassToggle("#titlePlaceHolder", "show")
    .addTo(controller);


// new ScrollMagic.Scene({
//     triggerElement: '#sectionActivities',
//     triggerHook: 0.5
// })
//     .setClassToggle("#mainNav", "thin")
//     .addTo(controller);


var navController = new ScrollMagic.Controller({globalSceneOptions: {duration: "102%"}});

new ScrollMagic.Scene({
    triggerElement: '#sectionBanner'
})
    .setClassToggle("#homeLink", "active")
    .addTo(navController);



/*EVENT ROLLER*/
var cur_idx = 0;
var max_idx = 3;
var OUTER_W = window.innerWidth - 590 - 65;

console.log(OUTER_W);

function nextEvent() {
    if(cur_idx < max_idx){
        cur_idx = cur_idx + 1;
        updateButtons();
    }
}


function prevEvent() {
    if(cur_idx > 0){
        cur_idx = cur_idx - 1;
        updateButtons();
    }
}

var activeComplete = function () {
    $("#eventsImagesList")
        .find(".active").removeClass("active");
};

var nextComplete = function () {
    $("#eventsImagesList")
        .find(".next")
        .removeClass("next")
        .addClass("active");
};

function updateButtons() {
    var scroll_per = (cur_idx * - OUTER_W);
    TweenMax.to('#eventsList', 0.35, {x: scroll_per + 'px', ease: Power0.easeNone});
    if(cur_idx > 0)
        $("#prevEventButton").addClass("active");
    else
        $("#prevEventButton").removeClass("active");

    if(cur_idx < max_idx){
        $("#nextEventButton").addClass("active");
    }else{
        $("#nextEventButton").removeClass("active");
    }

    $("#eventsImagesList").find("div").eq(cur_idx).addClass("next");

    TweenMax.to('#eventsImagesList .active', 0.15, {opacity: 0, ease: Power0.easeNone, onComplete: activeComplete});
    TweenMax.to('#eventsImagesList .next', 0.35, {opacity: 1, ease: Power0.easeNone, onComplete: nextComplete});
}


// var CLIENT_ID = "949057dfe8594cccb08bb0c8f00d7ab1";
// accessToken: '94764.1677ed0.c6256a27eddf41709ddf29af3469a4e5',
// userId: 94764,

var CLIENT_ID = "3fa87b3a894243cdb641147b2759913e";
var feed = new Instafeed({
    get: 'user',
    // userId: 2281507809,
    userId: 365389321,
    limit: '4',
    resolution: 'standard_resolution',
    // target: 'instagram',
    // links: 'false',
    accessToken: '365389321.3fa87b3.12e7697c6c37422e9c072d013a1bc0e7',
    sortby: 'random',
    template: '<a href="{{link}}" target="_blank" comments="{{comments}}" likes="{{likes}}" class="image layout center-center"><img src="{{image}}" /></a>',
    after: function() {
        console.log("Insta Loading complete!");
        // $("#instafeed .temp").each(function () {
        //     $(this).remove();
        // })
        $(".image.temp").remove();
    }
});

window.onload = function() {
    // feed.run();
};

// window._sharedData.entry_data.ProfilePage[0].user.id

function initMap() {
    var opt = { minZoom: 17, maxZoom: 17 };

    var map1 = new google.maps.Map(document.getElementById('siteMap'), {
        zoom: 17,
        center: {lat: -6.7561356, lng: 39.2468857}
    });


    map1.setOptions(opt);

    var image = 'images/marker.png';

    var marker = new google.maps.Marker({
        position: {lat: -6.7561356, lng: 39.2468857},
        map: map1,
        icon: image
    });

}