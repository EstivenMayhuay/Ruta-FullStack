var jf = require("johnny-five");

var circuito = new jf.Board();


circuito.on("ready", prender);


function prender()
{
	var led_1 = new jf.Led(8);
	var led_2 = new jf.Led(7);
	var led_3 = new jf.Led(6);

	led_1.blink(1200);
	led_2.blink(1200);
	led_3.blink(1200);
}
