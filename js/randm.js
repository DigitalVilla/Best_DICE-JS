	
document.querySelector('.gen5').addEventListener('click', function (){
	var dx, d=[[],[],[],[],[]];
	for (var i=0; i<5; i++) {
		
		dx=([Math.floor(Math.random()*6)+1]);
		d[i].push(Math.floor(Math.random()*21)+1);
		d[i]>7? d[i]=dx: d[i]=d[i];
		
	};

	console.log(d[0],d[1],d[2],d[3],d[4]);

});
