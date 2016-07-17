function display_img (tag_name) {
	 var tag = document.getElementById(tag_name);

	 if (tag.style.display == 'none') {
	 	tag.style.display = 'block';
	 } else {
	 	tag.style.display = 'none';
	 }
}