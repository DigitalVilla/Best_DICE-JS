var l, dice,ice, turn, rollTimes, hands, activePlayer, scores;
// debugger;
init();

document.querySelector(".btn-roll").addEventListener('click', function() {
	
	if (rollTimes > 0)  {
		var n = hands[activePlayer].length; //0
		l=[['.btn-keep',1],['.dice1',1],['.dice2',1],
		['.dice3',1],['.dice4',1],['.dice5',1]];
		toggleDisabled (l);
		
		l=[['.dice1',1],['.dice2',1],
		['.dice3',1],['.dice4',1],['.dice5',1]];
		displayTag (l);
		
		if (n > 0) {
			d=[['.dice1',0],['.dice2',0],['.dice3',0],['.dice4',0],['.dice5',0]];
			dl=[];
			if (n===5) {
				dl=[d[0],d[1],d[2],d[3],d[4]];
			} else if (n===4) {
				dl=[d[0],d[1],d[2],d[3]];
			} else if (n===3) {
				dl=[d[0],d[1],d[2]];
			} else if (n===2) {
				dl=[d[0],d[1]];
			} else if (n===1){
				dl=[d[0]];
			};	
			displayTag(dl)
		};
		rollTimes--;
		var dx;
		dice=[[],[],[],[],[]];
	   
		if (n<5) {
			for (n; n<5; n++) {
				dx=([Math.floor(Math.random()*6)+1]);
				dice[n].push(Math.floor(Math.random()*21)+1);
				dice[n]>7? dice[n]=dx: dice[n]=dice[n];
				document.querySelector('.dice'+(n+1)).src = "img/dice-"+dice[n]+".png";
				console.log (dice[n]);
			};
		};
	} else {
		l=[['.btn-roll',0]];
		toggleDisabled (l); 
	};	
});		               
 
document.querySelector(".btn-keep").addEventListener('click', function() {
	var hnd = hands[activePlayer];
	
	for (var i = 1; i<6; i++) {
		document.querySelector('.dice'+i).src = "img/dice-7.png";
	};
	l=[['.dice1',1],['.dice2',1],
	['.dice3',1],['.dice4',1],['.dice5',1]];
	displayTag(l);
	l=[['.dice1',0],['.dice2',0],
	['.dice3',0],['.dice4',0],['.dice5',0]];
	toggleDisabled(l);
	pushHand ();
	rollTimes=3;
	
	for (var i=0; i<hnd.length; i++){
		if (hnd[i] === 7 ) {
			ice = i+1;
			l=[['.mainDicePad',0],['.secondDicePad',0], ['.myBtn-roll',1],
			['.myBtn-keep',1],['.myBtn-win',0],['.iceDicePad',1 ]];
			displayTag (l); 
			AlertIt("Select the Value of ICE");
			return ice;
		} 
	};
	l=[['.btn-roll',1],['.btn-keep',0]];
	toggleDisabled (l);
	l=[['.mainDicePad',1],['.secondDicePad',0], ['.myBtn-roll',1],
	['.myBtn-keep',1],['.myBtn-win',0],['.iceDicePad',0]];
	
	
	
	displayTag (l);
	changePlayer ();
	turn++; 
	if (turn === 5) {
		l=[['.player-pad-0',0]];
		addRemove(l);
		l=[['.mainDicePad',0],['.secondDicePad',1],
		['.myBtn-roll',0],['.myBtn-keep',0],['.myBtn-win',1]];
		displayTag(l);
	};
});	

document.querySelector('.dice1').addEventListener('click',function () { 
	selectDice ('.dice1');
});
document.querySelector('.dice2').addEventListener('click',function () { 
 	selectDice ('.dice2');
});
document.querySelector('.dice3').addEventListener('click',function () { 
 	selectDice ('.dice3');
});
document.querySelector('.dice4').addEventListener('click',function () { 
 	selectDice ('.dice4');
});
document.querySelector('.dice5').addEventListener('click',function () { 
 	selectDice ('.dice5');
});
function selectDice (clss) {
	var indx=parseInt(document.querySelector(clss).value); 
	var hnd=hands[activePlayer];
	
	if (hnd.length<5){
		hnd.push(parseInt(dice[indx]));
		var indxH=hnd.length;
		var img=document.querySelector('.dice'+indxH+'-'+activePlayer);
		img.src ="img/dice-"+dice[indx]+".png";
		dice[indx]=0;
	} else {
		l=[[clss,0]]
		toggleDisabled(l);
	}
		l=[[clss,0]]
		displayTag(l);
};	

document.querySelector('.ice1').addEventListener('click', function() {
	
	selectDice2 ('.ice1',1);
});
document.querySelector('.ice2').addEventListener('click', function() {
	selectDice2 ('.ice2',2);
});
document.querySelector('.ice3').addEventListener('click', function() {
	selectDice2 ('.ice3',3);
});
document.querySelector('.ice4').addEventListener('click', function() {
	selectDice2 ('.ice4',4);
});
document.querySelector('.ice5').addEventListener('click', function() {
	selectDice2 ('.ice5',5);
});
document.querySelector('.ice6').addEventListener('click', function() {
	selectDice2 ('.ice6',6);
});
function selectDice2 (clss,x) {
	var hnd=hands[activePlayer];
	hnd[ice-1] = x;
	document.querySelector('.dice'+ice+'-'+activePlayer).src ="img/dice-"+x+".png";
};

document.querySelector('.btn-win').addEventListener('click', function() {
	bestHand ();
});
 
document.querySelector('.btn-init').addEventListener('click', function() {
         init();
});

function init() {
	// debugger;
	l=[[]];
	ice7= 0;
	turn = 1;
	rollTimes = 3;
	activePlayer= 0;
	hands=[[],[],[],[]];
	scores= [[],[],[],[]];
	l=[['.btn-roll',1],['.btn-keep',0],['.dice1',0],
	['.dice2',0],['.dice3',0],['.dice4',0],['.dice5',0]];
	toggleDisabled (l);
	l=[['.player-pad-0',1,2],['.player-pad-1',0,2],['.player-pad-2',0,2],['.player-pad-3',0,2]];
	addRemove (l);
	showDice(7);
	l=[['.dice1',1],['.dice2',1],['.dice3',1],['.dice4',1],['.dice5',1]];
	displayTag(l);
	l=[['.myBtn-win',0],['.secondDicePad',0],['.iceDicePad',0], 
	['.myPrint-win',0],['.myBtn-init',0],['.mainDicePad',1],
	['.myBtn-roll',1],['.myBtn-keep', 1]];
	hideDice ();
	displayTag (l);
	for (var i = 0; i < 4; i++) {
		document.querySelector('.playerLabel-'+i).textContent = 'Player '+(i+1);		
		if (i>=1) {
			document.querySelector('.dice'+i).src = "img/dice-7.png";
		}
	};
};
 
function bestHand () {
    var lvl, win=0, data = [[],[],[],[]], values = [[],[],[],[]], scores=[];
         
    for (var i = 0; i < 4; i++) {
        hands[i].sort(function(a, b) {return a - b;});
         
        getDup(i);
        function getDup(x) {                          
            var i, j, n;
                n = hands[x].length;
                    for (i = 0; i < n; i++) {                  
                        for (j = i + 1; j < n; j++) {          
                            if (hands[x][i] === hands[x][j]) {
                                values[x].push(hands[x][i])}}}};
                 
 
        var lng = values[i].length;
        var hand =  hands[i].reduce(function(a, b) { return a + b; }, 0);   
        var sumHand = values[i].reduce(function(a, b) { return a + b; }, 0);        
        sumHand === 0 ? values[i].push(sumHand): sumHand = sumHand; 
        level = Math.round(100*lng*8/2);
         
        if (level === 0) {
            level === 0 && sumHand === 0? sumHand = hand:  sumHand =  sumHand;
            hand === 15 || hand === 20?  level += 3000 : hand = hand;
        };
         
        scores.push((level+sumHand+((values[i][values[i].length-1])*4)));
        handName(level,hand);
        data[i].push(scores[i],lvl);
    };
     
	function handName (x,y) {
		x ===    0? lvl = "Ice Cubes": lvl = lvl;
		x ===  400? lvl = "Ice Cubes": lvl = lvl;
		x ===  800? lvl = "Two Pairs": lvl = lvl;
		x === 1200? lvl = "Three of a Kind": lvl = lvl;
		x === 1600? lvl = "Full House": lvl = lvl;
		x === 2400? lvl = "Four of a Kind": lvl = lvl;

		x === 3000? x+=y : x = x;
		x === 3015? lvl = "Low Straight": lvl = lvl;
		x === 3020? lvl = "High Straight": lvl = lvl;

		x === 4000? lvl = "Five of a Kind": lvl = lvl;
		  
		  return lvl;
	};
         
    winner ();
    function winner () {
        scores.sort(function(a,b){
            return a-b;});
        var w,i,n,d;
        n = scores.length;
        w = scores[n-1];
 
        for (i= 0; i< n; i++) {
            d = data[i][0];
            w ===d ? win=i: win=win;
        }
        return win;
    };
      
    l=win; showDice(l);
     
    l=[['.player-pad-'+win,1]];addRemove (l);
    l=[['.myBtn-win',0],['.myPrint-win',1],['.myBtn-init',1]]; displayTag(l);
    // document.querySelector('.myPrint-win').innerHTML('<h1> Full House2</h1>'); //creates a new h1
    document.querySelector('.player-pad-'+win).classList.add('winner');
    // document.getElementById('.Print-win').innerHTML('"'+data[win][1]+'"'); //changes the title
    l = data[win][1];
    document.getElementById('print-win').innerHTML =l;
    document.querySelector('.playerLabel-'+win).textContent = 'Winner!';
     
    console.log(' P1: -'+hands[0]+'-    P2: '+hands[1]+'-    P3: '+hands[2]+'-    P4: '+hands[3] ); 
    console.log('Player '+(win+1)+' wins with:'+l);
}; 
  
function changePlayer () {
    if (activePlayer === 0) {
        l=[['.player-pad-0',0],['.player-pad-1',1]];addRemove (l);
    } else if (activePlayer === 1) {
        l=[['.player-pad-1',0],['.player-pad-2',1]];addRemove (l);
    } else if (activePlayer === 2) {
        l=[['.player-pad-2',0],['.player-pad-3',1]];addRemove (l);
    } else if (activePlayer === 3) {
        l=[['.player-pad-3',0],['.player-pad-0',1]];addRemove (l);
    };
    activePlayer++;
    activePlayer === 4 ? activePlayer = 0 : activePlayer = activePlayer;
};

function displayTag (l) {
    // debugger;
    var t=l, t0,t1; 
    for (var i = 0;i<t.length;i++) {
        t0=t[i][0];
            t1=t[i][1]; 
         
        t1===1?t1="block":t1=t1;
        t1===0?t1="none":t1=t1;
 
        document.querySelector(t0).style.display=t1;
    };
};
 
function addRemove (l) {
    var t=l, t0,t1,t2; 
    for (var i = 0;i<t.length;i++) {
        t0 = t[i][0];
            t1 = t[i][1];
                t2 = t[i][2];
        if (t1 === 1) {
            document.querySelector(t0).classList.add('active');
        } else if (t1 === 0) {
            document.querySelector(t0).classList.remove('active')};
        if (t2===2){document.querySelector(t0).classList.remove('winner')};
    };
};

function pushHand () {

	var hnd = hands[activePlayer];
	var n = hnd.length;

	if (n <5) {
		for (var i=0; i<5; i++){
			if (dice[i]!=0 ) {
					hnd.push(dice[i][0]); 
			}; 
		};
	};
	console.log(dice[0],dice[1],dice[2],dice[3],dice[4])
	hnd = hands[activePlayer];
	
	for (var i=1; i<6; i++) {
		
		document.querySelector('.dice'+i+'-'+activePlayer).src ="img/dice-"+hnd[i-1]+".png"; 
	}
};

function confirm_alert() {
return confirm("Please click on OK to continue.");
}
 
function hideDice (){
    for (var i = 1; i<6; i++) {
        document.querySelector('.dice'+i+'-0').src = 'img/block.png';
        document.querySelector('.dice'+i+'-1').src = 'img/block.png';
        document.querySelector('.dice'+i+'-2').src = 'img/block.png';
        document.querySelector('.dice'+i+'-3').src = 'img/block.png';
    } 
};
 
function newValue (x) {
                ice7 = x;
                return ice7;
            };
             
function AlertIt(x) {
var answer = confirm (x)
if (answer){console.log('got it!');}
 
}; 

function toggleDisabled (l) {
	var dis, t=l.length, t0,t1,t2; 
	// debugger;
	for (var i=0; i<t; i++) {
		t0 = l[i][0];
		t1 = l[i][1];
		t1 === 0? dis = true: t1=t1;
		t1 === 1? dis = false: t1=t1;
		document.querySelector(t0).disabled = dis; 
	}			
};
 
function showDice(l) {
    for (var i = 1; i<6; i++) {
        document.querySelector('.dice'+i+'-0').src = "img/dice-"+hands[0][i-1]+".png";
        document.querySelector('.dice'+i+'-1').src = "img/dice-"+hands[1][i-1]+".png";
        document.querySelector('.dice'+i+'-2').src = "img/dice-"+hands[2][i-1]+".png";
        document.querySelector('.dice'+i+'-3').src = "img/dice-"+hands[3][i-1]+".png";
        if (l < 6) {
            document.querySelector('.winHnd'+i+'7').src = "img/dice-"+hands[l][i-1]+".png";
        };
        if (l === 7){
            document.querySelector('.winHnd'+i+'7').src = "img/dice-7.png";
            document.querySelector('.dice'+i).src = "img/dice-7.png";
				
        };
    };
};