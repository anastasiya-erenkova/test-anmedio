$(document).ready(function() {
	var blue = $('#body-blue');
	var green = $('#body-green');
	var pink = $('#body-pink');
	var fbox1 = $('#face-box-1');
	var fbox2 = $('#face-box-2');
	var fbox3 = $('#face-box-3');
	var personBody = $("#person__body");
	var personFace = $("#person__face");
	var chooseBoxBody = $('.choose-box__body');
	var chooseBoxFace = $('.choose-box__face');

	chooseBoxBody.click(function(){
		let chooseBody = $(this);
		chooseBoxBody.removeClass('choose-box__square_active');
		chooseBody.addClass('choose-box__square_active');
	});

	chooseBoxFace.click(function(){
		let chooseFace = $(this);
		chooseBoxFace.removeClass('choose-box__square_active');
		chooseFace.addClass('choose-box__square_active');
		placeFace();
	});

	blue.click(function(){
		personBody.css('background-image','url("img/body_blue.png")');
      	fbox1.css('background-image','url("img/face-smile.png")');
		fbox2.css('background-image','url("img/face-bear.png")');
		fbox3.css('background-image','url("img/face-scream.png")');
		placeFace();	
	});
	green.click(function(){
		personBody.css('background-image','url("img/body_green.png")');
      	fbox1.css('background-image','url("img/face-shocked.png")');
		fbox2.css('background-image','url("img/face-angry.png")');
		fbox3.css('background-image','url("img/face-apathetic.png")');
		placeFace();
	});
	pink.click(function(){
		personBody.css('background-image','url("img/body_pink.png")');
      	fbox1.css('background-image','url("img/face-eye.png")');
		fbox2.css('background-image','url("img/face-mustache.png")');
		fbox3.css('background-image','url("img/face-cool.png")');
		placeFace();	
	});

	var placeFace = function(){
		let bg = fbox1.hasClass('choose-box__square_active') ?
		fbox1.css('background-image') : fbox2.hasClass('choose-box__square_active') ?
		fbox2.css('background-image') : fbox3.css('background-image');
		bg = bg.replace('url(','').replace(')','').replace(/\"/gi, "");
		personFace.attr("src", bg);
	};

	$('.range-box__range').on("input",function(ev){
 		if ($(ev.target).val() == 0) {
 			$('.skills').removeClass('middle');
 			$('.skills').removeClass('senior');
 		}
 		if ($(ev.target).val() == 1) {
 			$('.skills').addClass('middle');
 			$('.skills').removeClass('senior');
 		}
 		if ($(ev.target).val() == 2) {
 			$('.skills').addClass('middle');
 			$('.skills').addClass('senior');
 		}
	});
});