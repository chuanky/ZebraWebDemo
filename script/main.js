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


	//css icons response
	var $css_icon = $('.icon');
	var $range_tag = $('#range .small_tag_container');

	$css_icon.on('mouseenter', function() {
		$(this).css({
			'filter': 'invert(100%)'
		});
	});

	$css_icon.on('mouseleave', function() {
		$(this).css({
			'filter': 'invert(0)'
		})
	});

	$css_icon.on('mousedown', function() {
		$(this).css({
			'filter': 'invert(0)'
		});

		var $icon_area = $(this).parent().parent().parent();
		var $tags_container = $icon_area.find('.small_tag_container'); 
		var $content = $icon_area.find('.range_bottom');
		var $left = $(this).parent().hasClass('range_leftArrow');
		var $right = $(this).parent().hasClass('range_rightArrow');

		var $tags = $tags_container.find('li');

		//looking for the active tag
		//looking for corresponding content using rel attribute

		if ($right) {
			$tags_container.animate({marginLeft: '-=100%'}, 500, function() {
				var contentToShow = findContentToShow(this);

				console.log(contentToShow);
				console.log(this.style.marginLeft);

				if (this.style.marginLeft >= '-800%') {
					this.style.marginLeft = 0;
				}
			});

			$content.slideToggle(500);
			$content.slideToggle(500);
		}

		if ($left) {
			$tags_container.animate({marginLeft: '+=100%'}, 500, function() {
				console.log(this.style.marginLeft);

				if (this.style.marginLeft >= '100%') {
					this.style.marginLeft = '-700%';
				}
			});
		}


	});

	$css_icon.on('mouseup', function() {
		$(this).css({
			'filter': 'invert(100%)'
		});
	});

	function findContentToShow (tags_container) {

		var contentToShow = 'popmov';

		if (tags_container.style.marginLeft >= '-100%') {
			contentToShow = 'hotmov';
		}

		if (tags_container.style.marginLeft >= '-200%') {
			contentToShow = 'cwedding';
		}

		if (tags_container.style.marginLeft >= '-300%') {
			contentToShow = 'wwedding';
		}

		if (tags_container.style.marginLeft >= '-400%') {
			contentToShow = 'company';
		}

		if (tags_container.style.marginLeft >= '-500%') {
			contentToShow = 'product';
		}

		if (tags_container.style.marginLeft >= '-600%') {
			contentToShow = 'internet';
		}

		if (tags_container.style.marginLeft >= '-700%') {
			contentToShow = 'baby';
		}

		if (tags_container.style.marginLeft >= '-800%') {
			contentToShow = 'popmov';
		}


		
		return contentToShow;
	}



});

























