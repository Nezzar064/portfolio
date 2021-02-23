$(document).ready(function() {
	$('.main-menu ul li a').click(function(event) {
		$('.main-menu ul li a').removeClass('active');
		$(this).addClass('active');
		thisAttrHref = $(this).attr('href');
		thisAttrHrefOffset = $(thisAttrHref).offset().top + 10;
		$('html,body').animate({scrollTop:thisAttrHrefOffset});
		event.preventDefault();
	});
});

$(window).scroll(function() {
	$('.container-row').each(function() {
		containerRowTop = $(this).offset().top;
		if($(document).scrollTop() > containerRowTop){
			thisOfs = $(this).attr('id');
			$('.container-row').removeClass('active');
			ActiveId = $(this).addClass('active').attr('id');;
		}
	});
	$('.main-menu ul li').each(function(index, el) {
		thisChildren = $(this).children('a');
		thisChildrenHref = $(this).children('a').attr('href');
		if(thisChildrenHref === '#'+ActiveId){
			$('.main-menu ul li a').removeClass('active');
			$(thisChildren).addClass('active');
		}
	});
});

