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

			$active_content.slideUp(300, function() {
				$content.slideDown(300);
			})

			$team_tag_active = $(this);
		} else {
			console.log('activated');
		}

	});

	//zebra work images animation
	var $img = $('#tag2_content img:even');

	$img.click(function() {
		var $container = $(this).parent();
		var modal = $container.find('.movies_modal')[0];
		var img_modal = $container.find('img')[1];
		var img_desc = $container.find('.img_desc')[0];
		var caption = $container.find('.movies_modal_caption')[0];

		modal.style.display = 'block';
		img_modal.src = this.src;
		img_modal.alt = this.alt;
		caption.innerHTML = img_desc.innerHTML;

		//close
		var $close = $container.find('.close');
		$close.click(function() {
			modal.style.display = 'none';
		});
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
	var $range_content = $('#popmov');
	var $tech_content = $('#plan');
	var range_index = 0;
	var tech_index = 0;

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
		var tags_container = $tags_container.get(0);
		var $tags = $tags_container.find('li');
		var $contentToShow = undefined;

		//arrow button identifier
		var left = $(this).parent().hasClass('range_leftArrow');
		var right = $(this).parent().hasClass('range_rightArrow');
		var area = $icon_area.get(0);
		var inRange = area.id == 'range';
		var inTech = area.id == 'tech';

		//looking for corresponding range_content using rel attribute
		//range_content and icon animations for range right arrow
		if (right && inRange) {

			range_index++;
			if (range_index > 8) {
				range_index = 1;
				tags_container.style.marginLeft = 0;
			};

			$tags_container.animate({marginLeft: '-=100%'}, 300);

			$contentToShow = findContentToShow(range_index, 'range');

			$range_content.slideUp(300, function() {
				$contentToShow.slideDown();
				$range_content = $contentToShow;
			});

		}

		//range_content and icon animations for range left arrow
		if (left && inRange) {

			range_index--;
			if (range_index < 0) {
				range_index = 7;
				tags_container.style.marginLeft = '-800%';
			};

			$tags_container.animate({marginLeft: '+=100%'}, 300);

			$contentToShow = findContentToShow(range_index, 'range');

			$range_content.slideUp(300, function() {
				$contentToShow.slideDown();
				$range_content = $contentToShow;
			});
		}

		//animations for tech right arrow
		if (right && inTech) {
			tech_index++;
			if (tech_index > 5) {
				tech_index = 1;
				tags_container.style.marginLeft = 0;
			};

			$tags_container.animate({marginLeft: '-=100%'}, 300);

			$contentToShow = findContentToShow(tech_index, 'tech');

			$tech_content.slideUp(300, function() {
				$contentToShow.slideDown();
				$tech_content = $contentToShow;
			});

		}

		if (left && inTech) {
			tech_index--;
			if (tech_index < 0) {
				tech_index = 4;
				tags_container.style.marginLeft = '-500%';
			};

			$tags_container.animate({marginLeft: '+=100%'}, 300);

			$contentToShow = findContentToShow(tech_index, 'tech');

			$tech_content.slideUp(300, function() {
				$contentToShow.slideDown();
				$tech_content = $contentToShow;
			});
		}

	});

	$css_icon.on('mouseup', function() {
		$(this).css({
			'filter': 'invert(100%)'
		});
	});

	function findContentToShow (index, area) {

		var contentToShow = undefined;

		if (area == 'range') {
			if (index == 0 || index == 8) {
				contentToShow = 'popmov';
			}

			if (index == 1) {
				contentToShow = 'hotmov';
			}

			if (index == 2) {
				contentToShow = 'cwedding';
			}

			if (index == 3) {
				contentToShow = 'wwedding';
			}

			if (index == 4) {
				contentToShow = 'company';
			}

			if (index == 5) {
				contentToShow = 'product';
			}

			if (index == 6) {
				contentToShow = 'internet';
			}

			if (index == 7) {
				contentToShow = 'baby';
			}
			
			return $('#' + contentToShow);
		}

		if (area == 'tech') {
			if (index == 0 || index == 5) {
				contentToShow = 'plan';
			}

			if (index == 1) {
				contentToShow = 'shoot';
			}

			if (index == 2) {
				contentToShow = 'cut';
			}

			if (index == 3) {
				contentToShow = 'special';
			}

			if (index == 4) {
				contentToShow = 'adv';
			}

			return $('#' + contentToShow);
		}

		return false;
	}

	//large tags animation
	var $large_rtags = $('.range_tag li');
	var $active_rtag = $('.range_tag .active');
	var $large_ttags = $('.tech_tag li');
	var $active_ttag = $('.tech_tag .active');

	var $active_rcontent = $('#' + $active_rtag.attr('rel'));
	var $active_tcontent = $('#' + $active_ttag.attr('rel'));

	$large_rtags.click(function() {
		switchActiveTag($(this), 'range');
		//change contents after switching active tag
		var $contentToShow = $('#' + $(this).attr('rel'));

		$active_rcontent.slideUp(300, function() {
			$contentToShow.slideDown(300);
			$active_rcontent = $contentToShow;
		});
	});

	$large_ttags.click(function() {
		switchActiveTag($(this), 'tech');

		var $contentToShow = $('#' + $(this).attr('rel'));

		$active_tcontent.slideUp(300, function() {
			$contentToShow.slideDown(300);
			$active_tcontent = $contentToShow;
		});
	});

	function switchActiveTag ($tag, area) {
		 if (!$tag.hasClass('active')) {
		 	$tag.removeClass('inactive');
		 	$tag.addClass('active');
		 } 

		 if (area == 'range') {
		 	$active_rtag.removeClass('active');
		 	$active_rtag = $tag;
		 } else if (area == 'tech') {
		 	$active_ttag.removeClass('active');
		 	$active_ttag = $tag;
		 } else {
		 	console.log('no such an area');
		 }
	}
	



});

























