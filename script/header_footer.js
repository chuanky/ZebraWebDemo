var header = document.getElementById('header');
var mainMenu = document.getElementById('main_menu');

header.innerHTML = 
	'<div class="container">' +
		'<div class="logo">' +
			'<a href="index.html">' +
			'<img src="assets/logo/zebra.png" id="header_logo"><div class="logo_text">' +
				'<h2>斑马电影工作室</h2>' +
				'<h2>ZEBRA FILM STUDIO</h2>' +
				'</div>' +
			'</a>' +
		'</div>' +
	'</div>';

mainMenu.innerHTML = 
	'<ul class="menu_tag">' +
		'<a href="team.html"><li id="pro_team">' +
			'<span>专业团队</span>' +
		'</li></a>' +
		'<li>·</li>' +
		'<a href="professions.html"><li id="high_tech">' +
			'<span>精湛技术</span>' +
		'</li></a>' +
		'<li>·</li>' +
		'<a href="movies.html"><li id="elite_movie">' +
			'<span>精品影视</span>' +
		'</li></a>' +
		'<li>·</li>' +
		'<li id="services">' +
			'<span>服务类别</span>' +
			'<div class="dropdown_content bg_black">' +
				'<a href="popmov.html"><p>热门电影</p></a>' +
				'<a href="hotmov.html"><p>热播剧集</p></a>' +
				'<a href="cwedding.html"><p>中式婚礼</p></a>' +
				'<a href="wwedding.html"><p>西式婚礼</p></a>' +
				'<a href="company.html"><p>企业宣传</p></a>' +
				'<a href="product.html"><p>产品宣传</p></a>' +
				'<a href="internet.html"><p>网络电影</p></a>' +
				'<a href="baby.html"><p>儿童记录</p></a>' +
			'</div>' +
		'</li>' +
	'</ul>';

var footer = document.getElementById('footer');

footer.innerHTML =
	'<div class="rhomb_footer">' +
		'<div class="logo_container">' +
			'<img src="assets/logo/zebra.png" id="footer_logo">' +
		'</div>' +
	'</div>' +

	'<div class="container" id="footer_container">' +
	'<div class="footer_title">' +
			'<div id="map_title">' +
				'<p>Zebra Address</p>' +
			'</div>' +
			'<div id="barcode_title">' +
				'<p>Follow Us</p>' +
			'</div>' +
		'</div>' +

	'<div class="container" id="footer_content">' +
		'<div class="map_container">' +
			'<div id="dituContent" class="baidu_map"></div>' +
		'</div>' +

		'<div class="contact_container">' +
			'<img src="assets/logo/二维码.png" id="bar_code">' +
			'<div class="contact_icon">' +
				'<p>www.leecg.com</p>' +
				'<img src="assets/logo/homepage.png" id="icon_homepage">' +
			'</div>' +
			'<div class="contact_icon">' +
				'<p>13841214406</p>' +
				'<img src="assets/logo/telephone.png" id="icon_telephone">' +
			'</div>' +
			'<div class="contact_icon">' +
				'<p>manager@leecg.com</p>' +
				'<img src="assets/logo/email.png" id="icon_email">' +
			'</div>' +
			'<div class="contact_icon">' +
				'<p>鞍山市立山区胜利北路85—S10</p>' +
				'<img src="assets/logo/location.png" id="icon_location">' +
			'</div>' +
		'</div>' +
	'</div>' +

	'<div class="container" style="height:30px;"></div>' +

	'<div class="container" id="footer_welcome">' +
		'<div id="line_bl"></div>' +
		'<div id="m_text">' +
			'<p>WELCOME</p>' +
			'<p>ZEBRA FILM STUDIO</p>' +
		'</div>' +
		'<div id="line_br"></div>' +
	'</div>' +

	'<div class="container">' +
		'<div id="bb_text">' +
			'<p>辽宁省鞍山市立山区胜利北路85—S10</p>' +
			'<p>ZEBRA CULTURE MEDIA CO.LTD</p>' +
		'</div>' +
	'</div>' +

	'<div class="container" id="footer_bottom">' +
		'<p>WELCOME TO ZEBRA FILM STUDIO</p>' +
	'</div>' +
	'</div>';


function playVideo (videoID, iconID) {
	var video = document.getElementById(videoID);
	var icon = document.getElementById(iconID);

	if (video.paused) {
		video.play();
		icon.style.display = 'none';
	} else {
		video.pause();
		icon.style.display = 'block';
	}

};