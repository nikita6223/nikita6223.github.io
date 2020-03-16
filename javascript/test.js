autoSlider ();
var left = 0;
var timer;


function autoSlider () {
    timer = setTimeout (function () {
    	var polosa = document.getElementById('polosa');
	    left = left - 1200;
	    if (left < -2402) {
		    left = 0;
		    clearTimeout (timer);
	    }
	    polosa.style.left = left +'px';
	    autoSlider ();
    }, 4000);
}
