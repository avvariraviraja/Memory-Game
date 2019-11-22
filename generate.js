function generateRand() { 
    var digits = '0123456789'; 
	document.getElementById("msg").innerHTML="Redirecting in 5 seconds"
    let rand = ''; 
    for (let i = 0; i < 6; i++ ) { 
        rand += digits[Math.floor(Math.random() * 10)];
		localStorage.setItem('random',rand);
		setTimeout(function(){
		location.replace('input.html');
		},5000)
    } 
    return rand; 
} 