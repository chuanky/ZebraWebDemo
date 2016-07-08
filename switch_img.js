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

var rb1_text1 = document.getElementById('rb1_text1');
var rb1_text2 = document.getElementById('rb1_text2');

function switch_range_img(num) {
	var pic;
	reset_button_range();

	range_img.style.width = "100%";

	switch(num) {
		case 0:
			pic = "assets/images/range_pop.jpg";
			range_img.style.width = "80%";
			rb1_text1.innerHTML = "Know yourself";
			rb1_text2.innerHTML = "了解自己";
			range_tag1.className = "active";
			break;
		case 1:
			pic = "assets/images/range_hot.jpg";
			rb1_text1.innerHTML = "About the secret";
			rb1_text2.innerHTML = "关于秘密";
			range_tag2.className = "active";
			break;
		case 2:
			pic = "assets/images/range_wedding_c.jpg";
			range_tag3.className = "active";
			break;
		case 3:
			pic = "assets/images/range_wedding_w.jpg";
			range_tag4.className = "active";
			break;
		case 4:
			pic = "assets/images/range_company.png";
			range_tag5.className = "active";
			break;
		case 5:
			pic = "assets/images/range_product.jpg";
			range_tag6.className = "active";
			break;
		case 6:
			pic = "assets/images/range_internet.jpg";
			range_tag7.className = "active";
			break;
		case 7:
			pic = "assets/images/range_baby.jpg";
			range_tag8.className = "active";
			break;
	}

	range_img.src = pic;
}

function reset_button_range() {
	// for (var i = 0; i < 7; i++) {
	// 	if (range_tags[i].className == "active") {
	// 		range_tags[i].className == "inactive";
	// 	}
	// }

	if (range_tag1.className == "active") {
		range_tag1.className = "inactive";
	}

	if (range_tag2.className == "active") {
		range_tag2.className = "inactive";
	}

	if (range_tag3.className == "active") {
		range_tag3.className = "inactive";
	}

	if (range_tag4.className == "active") {
		range_tag4.className = "inactive";
	}

	if (range_tag5.className == "active") {
		range_tag5.className = "inactive";
	}

	if (range_tag6.className == "active") {
		range_tag6.className = "inactive";
	}

	if (range_tag7.className == "active") {
		range_tag7.className = "inactive";
	}

	if (range_tag8.className == "active") {
		range_tag8.className = "inactive";
	}
}

//creat short var names for tech
var tech_tag1 = document.getElementById('tech_tag1');
var tech_tag2 = document.getElementById('tech_tag2');
var tech_tag3 = document.getElementById('tech_tag3');
var tech_tag4 = document.getElementById('tech_tag4');
var tech_tag5 = document.getElementById('tech_tag5');

var tech_img = document.getElementById('tech_img');

function switch_tech_img(num) {
	var pic;
	reset_button_tech();
	tech_img.style.width = "100%";
	tech_img.style.margin = "0";

	switch(num) {
		case 0:
			pic = "assets/images/tech_plan.jpg";
			tech_tag1.className = "active";
			break;
		case 1:
			pic = "assets/images/tech_shoot.jpg";
			tech_img.style.width = "60%";
			tech_tag2.className = "active";
			break;
		case 2:
			pic = "assets/images/tech_cut.jpg";
			tech_img.style.width = "60%";
			tech_tag3.className = "active";
			break;
		case 3:
			pic = "assets/images/tech_special.jpg";
			tech_tag4.className = "active";
			break;
		case 4:
			pic = "assets/images/tech_adv.jpg";
			tech_img.style.width = "90%";
			tech_img.style.margin = "auto";
			tech_tag5.className = "active";
			break;
	}

	tech_img.src = pic;
}

function reset_button_tech() {
	if (tech_tag1.className == "active") {
		tech_tag1.className = "inactive";
	}
	if (tech_tag2.className == "active") {
		tech_tag2.className = "inactive";
	}
	if (tech_tag3.className == "active") {
		tech_tag3.className = "inactive";
	}
	if (tech_tag4.className == "active") {
		tech_tag4.className = "inactive";
	}
	if (tech_tag5.className == "active") {
		tech_tag5.className = "inactive";
	}
}






