'use strict';
window.onload = function() {

	var exampleRes = [{"_id":"57b10328228a0e0e7bf4e4a7","moto":2,"series":"LUCAS OIL AMA PRO MOTOCROSS","track":"WASHOUGAL-MX-PARK","location":"WASHOUGAL, WA","round":9,"date":"JULY 23, 2016","class":250,"race":"WASHOUGAL NATIONAL","racedata6":"B","riderData":[{"1":"--.---","2":"2.28.990","3":"2.22.761","4":"2.22.162","5":"2.19.592","6":"2.19.153","7":"2.19.158","8":"2.19.899","9":"2.19.666","10":"2.19.783","11":"2.19.528","12":"2.19.066","13":"2.19.999","14":"2.19.558","15":"2.18.670","16":"2.19.199","number":"#1","name":"J. Martin","bike":"YAM"}, {" A lot more rider data" : "..."}]}];

	document.getElementById('format-ex').innerHTML = JSON.stringify(exampleRes, null, 4) + '...';

};