/*
 * JQGyrate - Alpha v0.9 - 04/08/2013
 * https://github.com/puneetkay/JQGyrate/
 *
 * Copyright (c) 2013 Puneet Kalra
 * under the MIT license.
 */

(function($,window,undefined){

	$.fn.gyrate = function(options){

		function initialise(e,o){
			// Double check options here, or return false.
			// Once all validated, start gyrator.
			gyrator(e,o);
		}

		
		var index = -1;
		var elem;
		function gyrator(e,o){
			index++;
			if(index == o.items.length){index=0;}

			elem.animate({opacity:0.0},function(){
				elem.html(o.items[index]);
				elem.animate({opacity:1},function(){ 

					// Recursive calling.
					setTimeout(function(){
						gyrator(e,o); // Currently disabled for development.
					},o.speed);
		
		 		});
			});

		}


		// Default values
		var defaults = {
			speed: 1000, // Speed of gyrator
			items: {}, // Items for gyrator
			dance: 'circle', // Dance type, circle, shuffle etc.
			style: 'fade', // Effects for gyrate, fade, rotateX, rotateY etc.
			target: 'html' // Target attribute of elements.
		};
		
		// Merge options with defaults.
		var data = $.extend(defaults, options);


		// Data object ready, Now head for logic
		return this.each(function(){
			elem = $(this);
			if(elem == null)
				return false;

			initialise(elem, data);

		});

	}

})(jQuery,this);
