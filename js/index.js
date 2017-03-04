$(function() {
	$('ad-carousel').carousel();
	$('#navList a').click(function(e) {
		var href = $(this).attr('href');
		var tabId = $(this).attr('data-tab');
		if (href === '#') {
			e.preventDefault();
		}
		else if (href === '#main-content') {
			// 要阻止默认行为
			e.preventDefault();
			$(document).scrollTop($(href).offset().top - 70);
		}
		else if (tabId) {
			$('#feature-tab a[href="#' + tabId + '"]').tab('show');
		}
	});
})