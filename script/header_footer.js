var header = document.getElementById('header');
var mainMenu = document.getElementById('main_menu');

header.innerHTML = 
	'<div class="container" style="height:130px;">' +
		'<div class="logo">' +
			'<a href="index.html">' +
			'<img src="assets/logo/zebra.png" id="header_logo">' +
			'<span class="logo_text"><span id="logo_text1">斑马电影工作室</span>ZEBRA FILM STUDIO</span>' +
			'</a>' +
		'</div>' +
		'<div class="top_icon">' +
			'<a href="#"><img src="assets/logo/wechat.png" id="wechat"></a>' +
			'<a href="#"><img src="assets/logo/weibo.png" id="weibo"></a>' +
			'<a href="#"><img src="assets/logo/youku.jpg" id="youku"></a>' +
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
			'<div class="dropdown_content bg_black" id="sss">' +
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
	'<div class="container" id="footer_area">' +
		'<div class="footer_title">' +
			'<div id="map_title">' +
				'<p>Zebra Address</p>' +
			'</div>' +
			'<div id="barcode_title">' +
				'<p>Follow Us</p>' +
			'</div>' +
		'</div>' +
	'</div>' +

	'<div class="container" id="footer_content">' +
		'<div class="map_container">' +
			'<div id="dituContent" class="baidu_map"></div>' +
		'</div>' +

		'<div class="contact_container">' +
			'<img src="assets/logo/二维码.png" id="bar_code">' +
			'<div class="contact_icon">' +
				'<p>www.zebraStudio.com</p>' +
				'<img src="assets/logo/homepage.png" id="icon_homepage">' +
			'</div>' +
			'<div class="contact_icon">' +
				'<p>电话</p>' +
				'<img src="assets/logo/telephone.png" id="icon_telephone">' +
			'</div>' +
			'<div class="contact_icon">' +
				'<p>chunguang@zebraStudio.com</p>' +
				'<img src="assets/logo/email.png" id="icon_email">' +
			'</div>' +
			'<div class="contact_icon">' +
				'<p>地址</p>' +
				'<img src="assets/logo/location.png" id="icon_location">' +
			'</div>' +
		'</div>' +
	'</div>' +

	'<div class="container" style="height:30px;"></div>' +

	'<div class="container">' +
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

	'<div class="container" style="height:50px;"></div>' +
	'</div>';