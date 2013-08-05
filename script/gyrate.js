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

		function gyrator(e,o){
			

			// Recursive calling.
			setTimeout(function(){
				//gyrator(e,o); // Currently disabled for development.
			},o.speed);
		}


		// Default values
		var defaults = {
			speed: 10000, // Speed of gyrator
			items: {}, // Items for gyrator
			dance: 'circle', // Dance type, circle, shuffle etc.
			style: 'fade', // Effects for gyrate, fade, rotateX, rotateY etc.
			target: 'html' // Target attribute of elements.
		};
		
		// Merge options with defaults.
		var data = $.extend(defaults, options);


		// Data object ready, Now head for logic
		return this.each(function(){
			var elem = $(this);
			if(elem == null)
				return false;

			initialise(elem, data);

		});

	}

})(jQuery,this);