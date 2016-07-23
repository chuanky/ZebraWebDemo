//responsive tags for range

var range_tag1 = document.getElementById('range_tag1');
var range_tag2 = document.getElementById('range_tag2');
var range_tag3 = document.getElementById('range_tag3');
var range_tag4 = document.getElementById('range_tag4');
var range_tag5 = document.getElementById('range_tag5');
var range_tag6 = document.getElementById('range_tag6');
var range_tag7 = document.getElementById('range_tag7');
var range_tag8 = document.getElementById('range_tag8');

var range_tags = [range_tag1, range_tag2, range_tag3, range_tag4, range_tag5, range_tag6, range_tag7, range_tag8];

var range_img = document.getElementById('range_img');

var rb_container = document.getElementById('rb_container');
var rb1 = document.getElementById('rb1');
var rb2 = document.getElementById('rb2');
var rb3 = document.getElementById('rb3');
var rb1_text1 = document.getElementById('rb1_text1');
var rb1_text2 = document.getElementById('rb1_text2');
var rb3_text1 = document.getElementById('rb3_text1');
var rb3_text2 = document.getElementById('rb3_text2');
var rb3_text3 = document.getElementById('rb3_text3');
var rb3_text4 = document.getElementById('rb3_text4');

var range_more = document.getElementById('range_more');


function switch_range_img(num) {
	var pic;
	reset_range();

	switch(num) {
		case 0:
			pic = "assets/images/range_pop.jpg";
			range_img.style.width = "80%";
			rb1_text1.innerHTML = "Know yourself";
			rb1_text2.innerHTML = "了解自己";
			rb3_text1.innerHTML = "视觉形象";
			rb3_text2.innerHTML = "The visual image";
			rb3_text3.innerHTML = "我们拍摄最真实最珍贵的瞬间";
			rb3_text4.innerHTML = "We shot the most real and precious moments";
			range_tag1.className = "active";
			range_more.href = "popmov.html";
			break;
		case 1:
			pic = "assets/images/range_hot.jpg";
			rb_container.style.left = "10%";
			rb1_text1.innerHTML = "About the secret";
			rb1_text2.innerHTML = "关于秘密";
			rb3_text1.innerHTML = "没有任何理由";
			rb3_text2.innerHTML = "There is no reason";
			rb3_text3.innerHTML = "才发现有你生命才完整";
			rb3_text4.innerHTML = "To find that life is comlplete only with you"; 
			range_tag2.className = "active";
			range_more.href = "hotmov.html";
			break;
		case 2:
			pic = "assets/images/range_wedding_c.jpg";
			rb1_text1.innerHTML = "栈桥约定";
			rb1_text2.innerHTML = "Convention";
			rb3_text1.innerHTML = "中式婚礼我们有独到的见解和独特的做法，自成体系<br><br>";
			rb3_text2.innerHTML = "We have original ideas and sui generis ways on Chinese Weddings design";
			rb3_text3.innerHTML = "";
			rb3_text4.innerHTML = "";
			range_tag3.className = "active";
			range_more.href = "cwedding.html";
			break;
		case 3:
			pic = "assets/images/range_wedding_w.jpg";
			rb_container.style.left = "10%";
			rb1_text1.innerHTML = "浪漫而神圣 人心向往";
			rb1_text2.innerHTML = "Romantic";
			rb3_text1.innerHTML = "王子和公主的背后，是普通人一样的共坚持、共患难";
			rb3_text2.innerHTML = "All of us are princes and princesses"
			rb3_text3.innerHTML = "总是让人心中充满暖意";
			rb3_text4.innerHTML = "Let warm fulfill your heart";
			range_tag4.className = "active";
			range_more.href = "wwedding.html";
			break;
		case 4:
			pic = "assets/images/range_company.png";
			rb_container.style.left = "";
			rb_container.style.right = "10%";
			rb1.style.margin = "30px";
			rb2.style.marginTop = "60px";
			rb2.style.left = "475px";
			rb1_text1.innerHTML = "纪实、表现 展播方式";
			rb1_text2.innerHTML = "Show way";
			rb3_text1.innerHTML = "通过故事的形式，对企业形象进行战略层面的宣传和创博，也是一种企业传播路径<br><br>";
			rb3_text2.innerHTML = "We help you express your companies' disciplines and spirits thourgh telling stories";
			rb3_text3.innerHTML = "";
			rb3_text4.innerHTML = "";
			range_tag5.className = "active";
			range_more.href = "company.html";
			break;
		case 5:
			pic = "assets/images/range_product.jpg";
			rb_container.style.left = "10%";
			rb2.style.marginTop = "240px";
			rb1_text1.innerHTML = "创业创意点子";
			rb1_text2.innerHTML = "Innovations";
			rb3_text1.innerHTML = "为企业宣传创作的中点在于情景的故事性，是佛找到与现实场景中的共鸣<br><br>";
			rb3_text2.innerHTML = "The best propaganda needs to resonate with customers";
			rb3_text3.innerHTML = "";
			rb3_text4.innerHTML = "";
			range_tag6.className = "active";
			range_more.href = "product.html";
			break;
		case 6:
			pic = "assets/images/range_internet.jpg";
			rb1.style.left = "375px";
			rb2.style.marginTop = "280px";
			rb1_text1.innerHTML = "表达创作者的思想";
			rb1_text2.innerHTML = "Concepts";
			rb3_text1.innerHTML = "“小体积”的电影";
			rb3_text2.innerHTML = "将成就品牌内容的“大理想”<br><br>";
			rb3_text3.innerHTML = "Tiny movies";
			rb3_text4.innerHTML = 'could include "big ideas"';
			range_tag7.className = "active";
			range_more.href = "internet.html";
			break;
		case 7:
			pic = "assets/images/range_baby.jpg";
			rb1.style.left = "60px";
			rb2.style.marginTop = "280px";
			rb1_text1.innerHTML = "Sweat Sisters";
			rb1_text2.innerHTML = "好姐妹";
			rb3_text1.innerHTML = "“为小宝贝们记录成长的每个快乐瞬间";
			rb3_text2.innerHTML = "Record every single precious moments for babies";
			rb3_text3.innerHTML = "永远手拉手，好姐妹一起走";
			rb3_text4.innerHTML = "Be friends forever";
			range_tag8.className = "active";
			range_more.href = "baby.html";
			break;
	}

	range_img.src = pic;
}

function reset_range() {
	//reset tags
	for (var i in range_tags) {
		if (range_tags[i].className == "active") {
			range_tags[i].className = "inactive";
		}
	}

	//reset images
	range_img.style.width = "100%";

	//reset block container
	rb_container.style.left = "50%";
	rb_container.style.right = "";
	rb1.style.margin = "";
	rb1.style.left = "";
	rb2.style.marginTop = "110px";
	rb2.style.left = "100px";
}

//creat short var names for tech
var tech_tag1 = document.getElementById('tech_tag1');
var tech_tag2 = document.getElementById('tech_tag2');
var tech_tag3 = document.getElementById('tech_tag3');
var tech_tag4 = document.getElementById('tech_tag4');
var tech_tag5 = document.getElementById('tech_tag5');

var tech_tags = [tech_tag1, tech_tag2, tech_tag3, tech_tag4, tech_tag5];

var tech_img = document.getElementById('tech_img');

var tb_container = document.getElementById('tb_container');
var tb1 = document.getElementById('tb1');
var tb2 = document.getElementById('tb2');
var tb3 = document.getElementById('tb3');

var tb1_text1 = document.getElementById('tb1_text1');
var tb3_text1 = document.getElementById('tb3_text1');

function switch_tech_img(num) {
	var pic;
	reset_tech();

	switch(num) {
		case 0:
			pic = "assets/images/tech_plan.jpg";
			tb1_text1.innerHTML = "镜头世界<br>The camera world";
			tb3_text1.innerHTML = "斑马团队拥有超强的文案能力，扎实的内容企划能力<br>Zebra team has strong copywriting ablity, solid content planning ablitiy<br><br>实时了解影视剧市场，及时把握新动态，新趋势<br>To understand the film and television play market, grasp the new dynamic trend";
			tech_tag1.className = "active";
			break;
		case 1:
			pic = "assets/images/tech_shoot.jpg";
			tb_container.style.left = "65%";
			tb1_text1.innerHTML = "生命 —— 意义<br>Life —— Meaning";
			tb3_text1.innerHTML = "独特的视觉角度，拍摄出不同人对生命的定义<br>Different visual angles reflect different understandings of life<br>我想，生命的意义，只能靠自己，在体验，观察，阅读，思考<br>In my opinion, the meanding of life could only discover by myself through experiencing, observations, reading and thinking";
			tech_img.style.width = "60%";
			tech_tag2.className = "active";
			break;
		case 2:
			pic = "assets/images/tech_cut.jpg";
			tb1.style.marginTop = "-50px";
			tb1.style.marginLeft = "-140px";
			tb1_text1.innerHTML = "精湛的技术源于<br>艺术的魅力";
			tb3_text1.innerHTML = "让前方的自由和弥漫都在你心上<br>Let the freedom and diffuse in front of the spectrum in your heart<br><br><br>让路程所有的光亮都围绕你绽放<br>To light all up around you"
			tech_img.style.width = "60%";
			tech_tag3.className = "active";
			break;
		case 3:
			pic = "assets/images/tech_special.jpg";
			tb_container.style.left = "10%";
			tb1.style.marginTop = "-50px";
			tb1.style.marginLeft = "-140px";
			tb2.style.marginTop = "230px";
			tb2.style.marginLeft = "500px";
			tb1_text1.innerHTML = "街头”随机“特效<br>Random";
			tb3_text1.innerHTML = "<br>一部好的艺术影片<br>往往需要过人的观察力、时机点和反应速度<br><br><br>Observations, chances, and the reaction speed"
			tech_tag4.className = "active";
			break;
		case 4:
			pic = "assets/images/tech_adv.jpg";
			tb_container.style.left = "10%";
			tb1.style.marginTop = "-80px";
			tb1.style.marginLeft = "-100px";
			tb2.style.marginTop = "230px";
			tb2.style.marginLeft = "-190px";
			tb1_text1.innerHTML = "商家与客户共赢<br>WIN-WIN";
			tb3_text1.innerHTML = "<br>斑马传媒将影视推广到更完善的运作模式，更形象化、具体化，最终为客户带来更多的有利的效益<br><br>We will try our best for your benefits"
			tech_img.style.width = "90%";
			tech_img.style.margin = "auto";
			tech_tag5.className = "active";
			break;
	}

	tech_img.src = pic;
}

function reset_tech() {
	//reset tags
	for (var i = tech_tags.length - 1; i >= 0; i--) {
		if (tech_tags[i].className == "active") {
			tech_tags[i].className = "inactive";
		}
	}

	//reset images
	tech_img.style.width = "100%";
	tech_img.style.margin = "0";

	//reset blocks
	tb_container.style.left = "60%";
	tb1.style.marginTop = "-80px";
	tb1.style.marginLeft = "-230px";
	tb2.style.marginTop = "-50px"
	tb2.style.marginLeft = "310px";
}

//team tags
var team_tag1 = document.getElementById('team_tag1');
var team_tag2 = document.getElementById('team_tag2');
var team_tag3 = document.getElementById('team_tag3');
var team_tag4 = document.getElementById('team_tag4');

var team_tags = [team_tag1, team_tag2, team_tag3, team_tag4];

var tag3_content = document.getElementById('tag3_content');

function switch_team(num) {
	var pic;
	reset_team();

	switch (num) {
		case 0:
			team_tag1.className = "active";
			break;
		case 1:
			team_tag2.className = "active";
			break;
		case 2:
			team_tag3.className = "active";
			tag3_content.style.display = "block";
			break;
		case 3:
			team_tag4.className = "active";
			break;
		default:
			console.log('no such an img')
			break;
	} 
}

function reset_team () {
	for (var i = team_tags.length - 1; i >= 0; i--) {
		if(team_tags[i].className == "active") {
			team_tags[i].className = "inactive";
		}
	}
}





















