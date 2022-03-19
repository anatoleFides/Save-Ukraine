$(document).ready(function(){
	$('.nav-tabs__link').on('click', function(event){
		event.preventDefault();

	var
		itemNav = $(this).closest('.nav-tabs__item'),
		itemPage = $('.tabs-donation__page'),
		itemPosition = itemNav.index();

	itemPage.eq(itemPosition)
		.add(itemNav)
		.addClass('tabs-active')
		.siblings()
		.removeClass('tabs-active');
	});
});