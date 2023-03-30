var randomNumber1=Math.floor(Math.random()*6+1);
var randomNumber2=Math.floor(Math.random()*6+1);

var path1="images/dice"+randomNumber1+".png";
var path2="images/dice"+randomNumber2+".png";
//alert(path);
document.getElementsByClassName("img1")[0].setAttribute("src",path1);
document.getElementsByClassName("img2")[0].setAttribute("src",path2);

if(randomNumber1>randomNumber2){
    document.getElementsByTagName("h1")[0].innerHTML="🚩 Player 1 win";
}
else if(randomNumber2>randomNumber1){
    document.getElementsByTagName("h1")[0].innerHTML="Player 2 win 🚩";
}
else{
    document.getElementsByTagName("h1")[0].innerHTML="Match Draw 📍";
}

