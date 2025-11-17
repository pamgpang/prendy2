var beranda=document.getElementById("beranda");
var ttgsaya=document.getElementById("ttgsaya");
var vdsaya=document.getElementById("vdsaya");
var brd=document.getElementById("brd");
var ttsy=document.getElementById("ttsy");
var vsy=document.getElementById("vsy");
var benar =new Audio("password benar.mp3");
var salah=new Audio("password salah.mp3");

var user=document.getElementById("user");
var pass=document.getElementById("password");
var sbn=document.getElementById("sbn");
var vd=document.getElementById("video");
var lgn=document.getElementById("login");
var vd1=document.getElementById("video1");

ttgsaya.addEventListener("click", function(){
    brd.style.display="none";
    ttsy.style.display="block";

})
beranda.addEventListener("click", function(){
    brd.style.display="block";
    ttsy.style.display="none";
})
vdsaya.addEventListener("click", function(){
    vsy.style.display="block";
    brd.style.display="none";
    ttsy.style.display="none";
})


sbn.addEventListener("click", function(){
    if(pass.value=="PRENDY"){
        alert("Password Success");
        vd.style.display="block";
        lgn.style.display="none";
        vd1.style.display="block";
        benar.play();

    }else{
        alert("Password Failed");
        salah.play();
    }
})
