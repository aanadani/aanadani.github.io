(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

})(jQuery);

function hideFunction (divstring) {
	var x = document.getElementById(divstring);
	if (x.style.display == "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}
