(function() {
    var triggerBttn = document.getElementById( 'trigger-overlay' ),
        triggerBttnTwo = document.getElementById( 'trigger-overlay-two' ),
        triggerBttnThree = document.getElementById( 'trigger-overlay-three' ),
        triggerBttnFour = document.getElementById( 'trigger-overlay-four' ),
        triggerBttnFive = document.getElementById( 'trigger-overlay-five' ),
        triggerBttnSix = document.getElementById( 'trigger-overlay-six' ),
        triggerBttnSeven = document.getElementById( 'trigger-overlay-seven' ),
triggerBttnEight = document.getElementById( 'trigger-overlay-eight' ),
        triggerBttnNine = document.getElementById( 'trigger-overlay-nine' ),
        triggerBttnTen = document.getElementById( 'trigger-overlay-ten' ),
        triggerBttnEleven = document.getElementById( 'trigger-overlay-eleven' ),
        overlay = document.querySelector( 'div.overlay' ),
        closeBttn = overlay.querySelector( 'a.overlay-close' ),
        closeBttn2 = document.querySelector( 'a.overlay-close2' ),
    closeBttn3 = document.querySelector( 'a.overlay-close3' ),
        closeBttn4 = document.querySelector( 'a.overlay-close4' );
    transEndEventNames = {
        'WebkitTransition': 'webkitTransitionEnd',
        'MozTransition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'msTransition': 'MSTransitionEnd',
        'transition': 'transitionend'
    },
        transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
        support = { transitions : Modernizr.csstransitions };

    function toggleOverlay() {
        if( classie.has( overlay, 'open' ) ) {
            classie.remove( overlay, 'open' );
            classie.add( overlay, 'close' );
            var onEndTransitionFn = function( ev ) {
                if( support.transitions ) {
                    if( ev.propertyName !== 'visibility' ) return;
                    this.removeEventListener( transEndEventName, onEndTransitionFn );
                }
                classie.remove( overlay, 'close' );
            };
            if( support.transitions ) {
                overlay.addEventListener( transEndEventName, onEndTransitionFn );
            }
            else {
                onEndTransitionFn();
            }
        }
        else if( !classie.has( overlay, 'close' ) ) {
            classie.add( overlay, 'open' );
        }

        $("div.overlay").animate({ scrollTop: 0 }, "slow");
    }

    triggerBttn.addEventListener( 'click', toggleOverlay );
    triggerBttnTwo.addEventListener( 'click', toggleOverlay );
    triggerBttnThree.addEventListener( 'click', toggleOverlay );
    triggerBttnFour.addEventListener( 'click', toggleOverlay );
    triggerBttnFive.addEventListener( 'click', toggleOverlay );
    triggerBttnSix.addEventListener( 'click', toggleOverlay );
    triggerBttnSeven.addEventListener( 'click', toggleOverlay );
    triggerBttnEight.addEventListener( 'click', toggleOverlay );
    triggerBttnNine.addEventListener( 'click', toggleOverlay );
    triggerBttnTen.addEventListener( 'click', toggleOverlay );

    triggerBttnEleven.addEventListener( 'click', toggleOverlay );


    closeBttn.addEventListener( 'click', toggleOverlay );
    closeBttn2.addEventListener( 'click', toggleOverlay);
    closeBttn3.addEventListener( 'click', toggleOverlay);
    closeBttn4.addEventListener( 'click', toggleOverlay);
    return false;
})();
