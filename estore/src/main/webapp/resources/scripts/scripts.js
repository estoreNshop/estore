$(document).ready(function() {

	// Sudo Slider
	var auto = true;
	var autostopped = false;
	   
	var productsSlider = $("#newProducts").sudoSlider({
		slideCount : 3,
		responsive : true,
//		continuous : true,
		slideMove : 1,
		prevNext : false,
		customLink : '.customLink',
//		auto:true,
		speed: 2500,
		pause: '2000',
		numeric : false,
		afterAnimation : function(slide) {
			$("ul li.slide").removeClass("active");
			$(this).addClass("active");
		}
	});
	
	productsSlider.mouseenter(function() {
	      auto = productsSlider.getValue('autoAnimation');
	      if (auto) {
	    	  productsSlider.stopAuto();
	      } else {
	         autostopped = true;
	      }
	   }).mouseleave(function() {
	      if (!autostopped) {
	    	  productsSlider.startAuto();
	      }
	   });
	
	var promoSlider = $("#slider").sudoSlider({
		effect : "boxRainGrowInRoundedDownRight",
		responsive : true,
		prevNext : false,
		auto:true,
		speed: 2500,
		pause: '2000',
		continuous : true,
		autoHeight : false,
		touch : true,
		customLink : '.customLink',
		updateBefore : true,
		slideMove : 1,
		slideCount : 1,
		afterAnimation : function(slide) {
			$("ul li.promoSlide").removeClass("active");
			$(this).addClass("active");
		}
	});
	
	promoSlider.mouseenter(function() {
	      auto = promoSlider.getValue('autoAnimation');
	      if (auto) {
	    	  promoSlider.stopAuto();
	      } else {
	         autostopped = true;
	      }
	   }).mouseleave(function() {
	      if (!autostopped) {
	    	  promoSlider.startAuto();
	      }
	   });
	
	$(window).on("resize focus", function() {
		var width = $("#slider").width();

		var orgSlideCount = promoSlider.getOption("slideCount");
		var slideCount;
		if (width >= 1200) {
			slideCount = 1;
		} else if (width > 900) {
			slideCount = 1;
		} else {
			slideCount = 1;
		}
		if (slideCount != orgSlideCount) {
			promoSlider.setOption("slideCount", slideCount);
		}
	}).resize();

});