$(".emba").click(function(event){
	event.preventDefault();
			
	$(this).replaceWith(function() {
		if ($(this).parent().hasClass("col1")) {
			return '<iframe class="embframe" src="https:\/\/open.ivideon.com/embed/v2/?server=100-e9bbe8d43447648a9f679f0b724824e6&camera=327680&width=&height=&lang=ru"></iframe>';	
		}
		else if ($(this).parent().hasClass("col2")) {
			return '<iframe class="embframe" src="https:\/\/open.ivideon.com/embed/v2/?server=100-e9bbe8d43447648a9f679f0b724824e6&camera=393216&width=&height=&lang=ru"></iframe>';	
		}
		else if ($(this).parent().hasClass("col3")) {
			return '<iframe class="embframe" src="https:\/\/open.ivideon.com/embed/v2/?server=100-e9bbe8d43447648a9f679f0b724824e6&camera=458752&width=&height=&lang=ru"></iframe>';	
		}
		else {
			return '<iframe class="embframe" src="https:\/\/open.ivideon.com/embed/v2/?server=100-e9bbe8d43447648a9f679f0b724824e6&camera=524288&width=&height=&lang=ru"></iframe>';	
		}
	})
})