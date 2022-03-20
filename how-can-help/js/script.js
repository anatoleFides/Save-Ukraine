function include (url) {
  const script = document.createElement('script')

  script.src = url;

  document.getElementsByTagName('head')[0].appendChild(script);
}

include('../js/all-script.js')

//Tabs
// $(document).ready(function(){
// 	$('.nav-tabs__link').on('click', function(event){
// 		event.preventDefault();

// 	var
// 		itemNav = $(this).closest('.nav-tabs__item'),
// 		itemPage = $('.tabs-donation__page'),
// 		itemPosition = itemNav.index();

// 	itemPage.eq(itemPosition)
// 		.add(itemNav)
// 		.addClass('tabs-active')
// 		.siblings()
// 		.removeClass('tabs-active');
// 	});
// });



const showPage = (event, numberPage) => {

  const navTabLinks = document.querySelectorAll('.nav-tabs__item')

  for (let item of navTabLinks) {
    item.classList.remove('tabs-active')
  }
  const pages = document.querySelectorAll('.tabs-donation__page')

  console.log(pages)

  for (let page of pages) {
    page.classList.remove('tabs-active')
  }

  document.getElementById(numberPage).classList.add('tabs-active')
  event.target.classList.add('tabs-active')
}
