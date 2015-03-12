define(['jquery'], function($){

	ScrollToButtom = function () {
				
		var elm = $(".all_comments");
		elm.scrollTop(elm.get(0).scrollHeight);
		
	};

return ScrollToButtom;
});