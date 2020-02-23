(function($){
	"use-strict";
	//meanmenu
$('#mobile-menu').meanmenu({
	meanScreenWidth: '767',
	meanMenuContainer: '.mobile-menu-active'
});

$('.click-icon').on('click',function() {
	$('.header-form').slideToggle(300)
});
})(jQuery);
/*function initGallery()
{
	var dots=[];
	var sliderDots=document.getElementById('sliderDots');
	for(var i=0;i<slides.length;i++)
	{
		var dot=document.createElement('span');
		dot.classList.add('dots');
		sliderDots.append(dot);
		dots.push(dot);
	}
dots[i].classList.add('active');
}
initGallery();*/
function changeSlide(buttonClicked)
{
	var slide=0;
	var slides=document.getElementsByClassName('slide');
	for(var i=0;i<slides.length;i++)
	{
		slides[i].style.display='none';
		//dots[i].classList.remove('active');

	}
	if(buttonClicked=='RightBtn')
	{
		slide++;
		if(slide>slides.length-1)
		{
			slide=0;
		}
	}
	if(buttonClicked=='LeftBtn')
	{
		slide--;
		if(slide<0)
		{
			slide=slides.length-1;
		}
	}
	slides[slide].style.display='block';
	//dots[slide].classList.add('active');

}