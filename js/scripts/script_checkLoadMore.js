define(['jquery'], function($){

	checkLoadMore = function (argument) {
		if (argument != undefined) {
		    setTimeout(function() {
				$('#load_more').css('display','block');
			}, 1500);
		};

		if (this.next_url == undefined) {
			$('#load_more').css('display','none');
		};
	}				

return checkLoadMore;
});