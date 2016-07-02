var myImage = document.getElementById('myImage');
var myButton1 = document.getElementById('button1');
var myButton2 = document.getElementById('button2');
var myButton3 = document.getElementById('button3');

function pick_img(sw) {
    var pic;
    reset_button();
    switch (sw) {
    	case 0:
    		pic = "html5.gif";
            myButton1.className = "active";
    		break;
    	case 1:
    		pic = "labixiaoxin.jpg";
            myButton2.className = "active";
    		break;
    	case 2:
    		pic = "pic_mountain.jpg";
            myButton3.className = "active";
    		break;
    }
    myImage.src = pic;
}

function reset_button() {
    if (myButton1.className == "active") {
        myButton1.className = "inactive";
    }

    if (myButton2.className == "active") {
        myButton2.className = "inactive";
    }

    if (myButton3.className == "active") {
        myButton3.className = "inactive";
    }
}