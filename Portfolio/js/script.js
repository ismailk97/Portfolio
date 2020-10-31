$(window).on("load", function(){
	$(".loader").fadeOut(500);
});


$(document).ready(function(){
	$('#slides').superslides({

		animation:'fade',
		play: 5000,
		pagination: false

	});

	//den første param er hvilken element
	var typed = new Typed(".typed", {
		strings: ["Software Engineer.","Web developer.", "Student.","Guitarist."],
		typeSpeed: 80,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

});


