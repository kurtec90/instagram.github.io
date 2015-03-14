define(['jquery'], function($){

	ScrollToButtom = function () {
				
		var elm = $(".all_comments");
		if (elm.length > 0) {
			elm.scrollTop(elm.get(0).scrollHeight);
		};
	};

return ScrollToButtom;
});