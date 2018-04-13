let frequency = [0, 0, 0, 0, 0, 0];
var rolls = 0;
 

function random() {
	var num = Math.floor(Math.random() * 6) + 1;
	frequency[num - 1]++;
	console.log(num);
	rolls++;
}


function printTable() {
	for (let i = 0; i < frequency.length; i++) {
		console.log(frequency[i]);
	}
}


// document.querySelector('.gen5').addEventListener('click', function () {
// 	var dx, d = [
// 		[],
// 		[],
// 		[],
// 		[],
// 		[]
// 	];
// 	for (var i = 0; i < 5; i++) {

// 		dx = ([Math.floor(Math.random() * 6) + 1]);
// 		d[i].push(Math.floor(Math.random() * 21) + 1);
// 		d[i] > 7 ? d[i] = dx : d[i] = d[i];

// 	};

// 	console.log(d[0], d[1], d[2], d[3], d[4]);

// });