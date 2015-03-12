define(['jquery'], function($){

	getTime = function (time) {
		var time_now = Math.round(new Date().getTime()/1000.0);
		var time_ago = time_now - time;
		var result = "";

		var kol_second = [
			{
				second: 31556926,
				cap: " y."
			}, {
				second: 2629743,
				cap: " m."
			}, {
				second: 604800,
				cap: " w."
			}, {
				second: 86400,
				cap: " d."
			}, {
				second: 3600,
				cap: " h."
			}, {
				second: 60,
				cap: " min."
			},
		];

		if (time_ago<60) {
			return result = time_ago+" sec. ago";
		} else {
			
			for (var i = 0; i < kol_second.length; i++) {
			
				var a = parseInt(time_ago/kol_second[i].second)
				if ( a>0 ) {
					result = a+kol_second[i].cap+" ago";
					break;
				};
			};
			return result;
		};
	};

return getTime;
});