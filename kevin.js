$(document).ready(function () {
	/*function used in several places to show slide info in photo1*/
	var showInfo = function () {
		$('.circle').addClass('hide_btn'); /*.circle so it closes all circles.*/
		$('#X1-close').addClass('btn_close_show');
		$('#slide').addClass('info_slides_show');
	}

	/*head info*/
	$('#circle_head').click(function () {
		showInfo();
		$('#popIn').text('He goes twice a week to the Rusk Rehab at NYU Langone Medical Center to take therapies. He also trains at Prosthetics in Motion, where he got his prostheses.').addClass('popIn-info');
	});

	/*heart info*/
	$('#circle_heart').click(function () {
		showInfo();
		$('#popIn').text('“You need a big support system, without family, friends and loved ones can be very hard to deal with an amputation. My biggest support has been my wife.”').addClass('popIn-info');
	});

	/*pocket info*/
	$('#circle_pocket').click(function () {
		showInfo();
		$('#popIn').text('“At the time Kevin suffered the accident, he was working as an MTA bus mechanic. Now one of his challenges is to go back to work. “I cannot rely on someone else to get me there on time.”').addClass('popIn-info');
	});



	/*left leg info*/
	$('#circle_left_leg').click(function () {
		showInfo();
		$('#popIn').text('Kevin still feels his legs, and constantly suffers "phantom pain", as if he had real legs hurting. It could last seconds, it could last minutes; he has not control over the pain. “It feels as if somebody is driving needles inside your limbs.”').addClass('popIn-info');
	});

	/*right leg info*/
	$('#circle_right_leg').click(function () {
		showInfo();
		$('#popIn').text('He created the Instagram account @bilateral_kev to inspire people with limb difference and to show the process of someone who is learning to use prosthetics.').addClass('popIn-info');
	});

	/*close info window*/

	$('#X1-close').click(function () {
		$('#X1-close').removeClass('btn_close_show'); /* hide close X*/
		$('#slide').removeClass('info_slides_show'); /*remove info window*/
		/*dont' seem to need to remove popIn-info*/
		$('.circle').removeClass('hide_btn'); /*show circles*/

	}); /*closes function for photo 1*/

	/*Start functions for photo2*/

	var showInfo2 = function () {
		$('.circle').addClass('hide_btn'); /*.circle so it closes all circles.*/
		$('#X2-close').addClass('btn_close_show');
		$('#slide2').addClass('info_slides_show');
	}

	/*chair info*/
	$('#circle_shoe').click(function () {
		showInfo2();
		$('#popIn2').text('Among those living with limb loss, the main causes are vascular disease (54%), trauma (45%) and cancer (less than 2%)').addClass('popIn-info');
	});


	/*broom info*/
	$('#circle_knee').click(function () {
		showInfo2();
		$('#popIn2').text('In 2009, hospital costs associated with amputation totaled more than $8.3 billion').addClass('popIn-info');
	});

	$('#circle_muslo').click(function () {
		showInfo2();
		$('#popIn2').text('Approximately 185,000 amputations occur in the United States each year').addClass('popIn-info');
	});

	$('#circle_wheel').click(function () {
		showInfo2();
		$('#popIn2').text('There are nearly 2 million people living with limb loss in the United States').addClass('popIn-info');
	});

	/*close info window*/

	$('#X2-close').click(function () {
		$('#X2-close').removeClass('btn_close_show'); /* hide close X*/
		$('#slide2').removeClass('info_slides_show'); /*remove info window*/
		/*dont' seem to need to remove popIn-info*/
		$('.circle').removeClass('hide_btn'); /*show circles*/

	});

	/*closes functions for photo2*/

});
