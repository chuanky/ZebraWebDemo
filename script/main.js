$(document).ready(function() {

	//team_clan_tag animation
	var $team_tags = $('#team_tag ul li');
	var $team_tag_active = $team_tags.closest('.active');

	$team_tags.click(function() {
		if (!$(this).hasClass('active')) {
			$(this).addClass('active');
			$team_tag_active.removeClass('active').addClass('inactive');
			
			var i_active = $team_tag_active.index() + 1;
			var i = $(this).index() + 1;
			var $active_content = $('#tag' + i_active + '_content');
			var $content = $('#tag' + i + '_content');

			$active_content.slideUp(500, function() {
				$content.slideDown(500);
			})

			$team_tag_active = $(this);
		} else {
			console.log('activated');
		}

	});
	
	var $clan_tags = $('#clan_tag ul li');
	var $clan_tag_active = $clan_tags.closest('.active');

	$clan_tags.click(function() {
		if (!$(this).hasClass('active')) {
			$(this).addClass('active');
			$clan_tag_active.removeClass('active').addClass('inactive');

			var textToShow = $(this).attr('rel');
			var textToFade = $clan_tag_active.attr('rel');

			$('#' + textToFade).fadeOut(300, function() {
				$('#' + textToShow).fadeIn(300);
			});


			$clan_tag_active = $(this);
		}

	});


});