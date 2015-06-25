$('.parag').on('mouseover',function(){
	$(this).css({'color':'pink'});	
});

$('.parag').on('mouseout',function(){
	$(this).css({'color':'black'});	
});

$('.header').on('click',function(){
	$(this).append('!')
});

$('.link').on('click',function(){
	var choice = confirm("Are you sure you want to navigate to Google?")
	if (!choice){
		$('.link').css('display','none')
	}
	return choice
});