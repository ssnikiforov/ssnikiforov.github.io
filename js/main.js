var $ifr1 = $('<iframe class="embframe" src="https:\/\/open.ivideon.com/embed/v2/?server=100-e9bbe8d43447648a9f679f0b724824e6&camera=327680&width=&height=&lang=ru&ap=&noibw="></iframe>');
var $ifr2 = $('<iframe class="embframe" src="https:\/\/open.ivideon.com/embed/v2/?server=100-e9bbe8d43447648a9f679f0b724824e6&camera=393216&width=&height=&lang=ru&ap=&noibw="></iframe>');
var $ifr3 = $('<iframe class="embframe" src="https:\/\/open.ivideon.com/embed/v2/?server=100-e9bbe8d43447648a9f679f0b724824e6&camera=458752&width=&height=&lang=ru&ap=&noibw="></iframe>');
var $ifr4 = $('<iframe class="embframe" src="https:\/\/open.ivideon.com/embed/v2/?server=100-e9bbe8d43447648a9f679f0b724824e6&camera=524288&width=&height=&lang=ru&ap=&noibw="></iframe>');
var $ifrReplaced;
var dummyImage = '<img src="img/pereryv.png" alt="Страница временно недоступна">';

// var $temp = $("img").on("error", function(){
// 		$(this).parents("a").replaceWith(function() {
// 			return dummyImage;
// 		});
// });

$(".emba").click(function(event){
	event.preventDefault();
			
	$(this).replaceWith(function() {
		if ($(this).parent().hasClass("col1")) {
			$ifrReplaced = $ifr1;
			return $ifrReplaced;	
		}
		else if ($(this).parent().hasClass("col2")) {
			$ifrReplaced = $ifr2;
			return $ifrReplaced;	n
		}
		else if ($(this).parent().hasClass("col3")) {
			$ifrReplaced = $ifr3;
			return $ifrReplaced;	
		}
		else {
			$ifrReplaced = $ifr4;
			return $ifrReplaced;	
		}
	});
});