var clock = document.getElementById('clock');
var hexcolor = document.getElementById('hexcolor');

function updateTime(){
	var dTime = new Date();
	var h = dTime.getHours().toString();
	var m = dTime.getMinutes().toString();
	var s = dTime.getSeconds().toString();


	if(h.length < 2){
		h = '0' + h;
	}
	if(m.length < 2){
		m = '0' + m;
	}
	if(s.length < 2){
		s = '0' + s;
	}
	clock.innerText = h + ':' + m + ':' + s;

	hexcolor.innerText = '#' + h + m + s;

	document.body.style.background = hexcolor.innerText;
}

updateTime();
setInterval(updateTime, 1000);