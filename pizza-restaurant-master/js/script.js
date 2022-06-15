$(document).ready(() => {
	$('a[data-menu]').click(function() {
		const key = $(this).data("menu");

		changeActiveContent(key);

		$(this).parent().addClass('active');
	});

	function changeActiveContent(key) {
		switch(key) {
			case "pizza":
				$('#pizza').addClass('d-block').removeClass('d-none');
				$('#salads').addClass('d-none').removeClass('d-block');
				$('#starter').addClass('d-none').removeClass('d-block');
				break;
			case "salads":
				$('#salads').addClass('d-block').removeClass('d-none');
				$('#pizza').addClass('d-none').removeClass('d-block');
				$('#starter').addClass('d-none').removeClass('d-block');
				break;
			case "starter":
				$('#starter').addClass('d-block').removeClass('d-none');
				$('#salads').addClass('d-none').removeClass('d-block');
				$('#pizza').addClass('d-none').removeClass('d-block');
				break;
		}

		$('.nav-menu-select').removeClass('active');
	}

	$('.nav-menu').show()
});