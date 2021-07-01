
(function ($, root, undefined) {
	
	$(function () {
		
		'use strict';
		
		//SIDE NAV
		$(document).on('click','#menu-icon a', function(e){
			$('#side-nav').addClass('show');
		});
		$(document).on('click','#side-nav a.close', function(e){
			event.preventDefault();
			$('#side-nav').removeClass('show');
		});

		//Home header background color change.
    var scroll_pos = 0;
    $(document).scroll(function() {
			scroll_pos = $(this).scrollTop(); 
//			var header_threshhold = $('#hero').height();
			var header_threshhold = 150;
			if(scroll_pos >= header_threshhold ) {
				//when scrolled
				$('body#home header').css({
					'background-color':'rgba(0,0,0,0.5)'
				});

			} else{
				//when back to top
				$('body#home header').css({
					'background-color':'rgba(0,0,0,0.0)'
				});

			}
		});

/*
		//Header shrinking
    var scroll_pos = 0;
    $(document).scroll(function() {
			scroll_pos = $(this).scrollTop(); 
//			var header_threshhold = $('#hero').height();
			var header_threshhold = 60;
			if(scroll_pos >= header_threshhold ) {
				$('header').css({'padding':'5px 20px', '':''});
				$('header h1').css({
					'font-size':'2.8em'
				});
				$('header h2').css({
					'font-size':'0.64em'
				});
				$('nav ul').css({
					'top':'8px'
				});
				$('#menu-icon a').css({
					'top':'11px'
				});
			} else{
				$('header').css({'padding':'17px 20px 16px 20px', '':''});
				$('header h1').css({
					'font-size':'3.64em'
				});
				$('header h2').css({
					'font-size':'0.84em'
				});
				$('nav ul').css({
					'top':'40px'
				});
				$('#menu-icon a').css({
					'top':'26px'
				});

			}
		});
*/


$(document).ready(function() {
  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 700,
    outDuration: 200,
    linkElement: 'nav ul a, #side-nav ul a, .logo a, #aside-nav a',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
});





/* ====================== Side Nav hover ==================================================== */

	if($('#side-nav').is(':hidden')){
    } else if ($('#side-nav').is(':visible')) {
    }; 






/* ====================== Smooth Scroll ==================================================== */

	$( "a.scroll-link" ).on( "click", function(e) {
		e.preventDefault();
		var tagetObj = $(this).attr('href');
		console.log(tagetObj);
		var scrollY = $(tagetObj).offset().top - 68;
		$('html,body').animate({scrollTop: scrollY},'slow');
	});



// Video wrapper to make it responsive
	var videoSelectors = [
		'iframe[src*="player.vimeo.com"]',
		'iframe[src*="youtube.com"]',
		'iframe[src*="youtube-nocookie.com"]',
		'iframe[src*="kickstarter.com"][src*="video.html"]',
		'iframe[src*="screenr.com"]',
		'iframe[src*="blip.tv"]',
		'iframe[src*="dailymotion.com"]',
		'iframe[src*="viddler.com"]',
		'iframe[src*="qik.com"]',
		'iframe[src*="revision3.com"]',
		'iframe[src*="hulu.com"]',
		'iframe[src*="funnyordie.com"]',
		'iframe[src*="flickr.com"]',
		'embed[src*="v.wordpress.com"]'
		// add more selectors here
	];
 	var allVideos = videoSelectors.join( ',' );
 	$( allVideos ).wrap( '<span class="fluid-video" />' ); // wrap them all!










	});
	
})(jQuery, this);
