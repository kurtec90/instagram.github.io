define(['jquery'], function($){

	newHeight = function (element) {
				
		var top_div = $(element).find("div.description");
			
		if (top_div.height()>250) {
			top_div.css('height','250');
			top_div.css('overflow','auto');
		};

		var button_div = $(element).find("div.all_comments");

		button_div.css('height', $(element).height() - top_div.height() - 55);
		button_div.css('overflow-y', 'auto');
	};

return newHeight;
});