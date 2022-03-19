//Burger
document.getElementById("burger-menu").onclick = (event) => {
  document.getElementById("burger-menu").classList.toggle('open')
  document.getElementById("main-menu").classList.toggle('active')
  document.getElementsByTagName('header')[0].classList.toggle('transperent')
  document.getElementsByTagName('body')[0].classList.toggle('hidden')
}

//Tabs
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