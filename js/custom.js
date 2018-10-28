/* start script nice scroll //
	$(function() {  
		$("body").niceScroll();
		$("#boxscroll").niceScroll({horizrailenabled:false});
	});
	
// end script nice scroll */
	
	    
$(function(){
	    "use strict";
		// start script slider 
		var winH    = $(window).height(),
		    upperH  = $(".upper-bar").innerHeight(),
			navH    = $(".navbar").innerHeight();
		$(".slider, .carousel-item").height(winH - (upperH + navH));
	    // end script slider //
		
		// start script feature work 
		$('.feature-work ul li').on('click', function(){
			 $(this).addClass('active').siblings().removeClass('active');
			 if($(this).data('class') === 'all'){
				 $('.shuffle-imgs .col-md-3').show();
			 } else {
				 $('.shuffle-imgs .col-md-3').hide();
				 $($(this).data('class')).parent().show();
			 }
		 });
		// end script feature work 
		
		// start scripts navbar links 
			$("#contact").click(function(){
				$("html,body").animate({scrollTop:$(".contact-us").offset().top},1000);
			});
	    // end scripts navbar links 
		
		// start script scroll to top 
		$(function(){
			var scrollButton = $("#scroll-top");
			$(window).scroll(function(){
				if ($(this).scrollTop() >= 400 ) {
					scrollButton.fadeIn();
				} else {
					scrollButton.fadeOut();
				}
			});
			scrollButton.click(function(){
				$("html,body").animate({scrollTop:0},1100);
			});
		});
		// end script scroll to top 
		
		// start script loading-screen 
		$(window).on('load',function(){
			$("#loading-screen .sk-cube-grid").fadeOut(300, function(){
				$(this).parent().fadeOut(300, function(){
					$("body").css("overflow","auto");
					$(this).remove();
				});
			});
		});
		// end script loading-screen 
	
		$('.form-control').on('focus', function(){
			$(this).next('span').animate({width:"100%"}, 500);
		}).blur(function(){
			$(this).next('span').animate({width:"0"}, 300);
		});
});