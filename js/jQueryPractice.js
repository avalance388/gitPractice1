$(document).ready(function(){
	//$('#panel1').hide(200).show(1000).slideUp(1000).delay(1000).slideDown(1000); //.fadeIn (show/hide)
	//$('#panel2').fadeToggle(1000).delay(1000).fadeToggle(1000); //.fadeIn .fadeOut
	
	$('#panel1').css({
		color:'red', 
		fontWeight:'bold'
	});

	var back = $("#backHome");
	back.on("click", goBack);

	function goBack(){
		open("../../index.html", "_top");
	};

	/* #2 EVENT BINDING */ 
/*
	$('#button1').html('<strong>Willy</strong>'); //Re-write HTML content
	
	$('#button1').on('click', function(){
		//$('#panel1').fadeIn(200);
		$('#panel1 .panel-body').html('New Content');
	});
	$('#button2').on('click', function(){
		//$('#panel2').fadeIn(200);
	});
	$('#button3').on('click', function(){
		//$('#panel3').fadeIn(200);
	});


	$('#button1').on('mouseover', function(){
		$('#panel1').fadeOut(200);
	});
		$('#button2').on('mouseover', function(){
		$('#panel2').fadeOut(200);
	});
	$('#button3').on('mouseover', function(){
		$('#panel3').fadeOut(200);
	});
*/



	/* #3 DRY Coding */
	//Made on attribute data-'name'="whatever"   eg. <button data-panel = "panel1">

	var content = "My New Awesome Content";

	$('.panel-button').on('click', function(){
		//$('#panel1').fadeIn(200);
		var panelId = $(this).attr('data-panelid');
		$('#'+panelId).toggle();
		$('#'+panelId+' .panel-body').html(content);
	});



	/* #4 DOM Traversal with jQuery */

	//$('.sublist li').on('click', function(){
	//	$(this).hide();
	//});


	//$('li').on('click', function(){
	//	if(!$(this).is('.special')){
	//		alert('not special');
	//	}
	//	$(this).find('li').filter('.special').removeClass('special');
		//$(this).find('li').filter(':first').addClass('special');
		//$(this).closest('.list').addClass('special');
		//$(this).parent().addClass('special');
		//$(this).siblings().addClass("special");
		//$(this).removeClass('special');
		//$(this).hide();
		//$(this).next().remove();
		//$(this).siblings().remove();

		// .find('.className or id')    .closest('.className or id')
		//.filter(':first or .className')   .addClass('className') 
		//.remove()    .hide()    .show()  .siblings()    .parent()   .prev()
		//.next()   .eq(4)    .first()   .last()   $('ul:first')   .children()

	//});

	
	
	/* #5 jQuery Tab Panel Widget */
	$('.tab-panels .tabs li').on('click', function(){
		//Find which panel in
		var $panel = $(this).closest('.tab-panels');
		//change selected tab colour 
		$panel.find('.tabs li.active').removeClass('active');
		$(this).addClass('active');

		//figure out which panel to show
		var panelToShow = $(this).attr('rel');

		//hide current panel
		$panel.find('.panel.active').slideUp(300, showNextPanel);

		function showNextPanel(){
			$(this).removeClass('active');
			//show selected panel
			$('#' + panelToShow).slideDown(300, function(){
				$(this).addClass('active');
			});
		}
	});


	/* #6 jQuery Basic Slider */

	//animate slider
	//$(selector).animate(obj, time, callback);

	//configuration
	var width = 720;
	var animationSpeed = 1000;
	var pause = 1000;
	var currentSlide = 1;

	//cache DOM
	//look for object once and reference to it using var
	var $slider = $('#slider');
	var $slideContainer = $slider.find(".slides");
	var $slides = $slideContainer.find('.slide');
	var interval;

	//setInterval
	//animate margin-left
	//last slide goes to position one (0px);
	function startSlider(){
		interval = setInterval(function() {
			$slideContainer.animate({'margin-left': '-=' + width}, animationSpeed, function(){
				currentSlide++;
				if(currentSlide === $slides.length){
					currentSlide = 1;
					//UNDERSTAND WHY IT STILL GOES LEFT 
					$slideContainer.css('margin-left', 0);
				}
			});
		}, pause);
	}

	function stopSlider(){
		clearInterval(interval);
	}

	//Listen for mouseenter and Pause
	//Resume on mouseleave
	$slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);

	//startSlider();



		//Listen for mouseEnter and Pause
		//resume mouseleave
	



});

	//Console in browser couldn't find variables from within $ jQuery 
/*	var myInterval = setInterval(function(){
		console.log(new Date());
	}, 1000);
	console.log(myInterval); */
