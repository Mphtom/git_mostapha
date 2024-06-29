var next =document.getElementsByClassName("next")[0];
var slideShow =document.getElementsByClassName("slideShow")[0];
var stope=document.getElementsByClassName("stop")[0];
var previos =document.getElementsByClassName("previos")[0];
var arrImg=document.querySelectorAll("img");
let i =0
var abc =function(){
    if(i<5){
        arrImg.forEach(function(e){
            e.classList.remove("block")
        })
        i++
   arrImg[i].classList.add("block")
    }
    else{
        i=-1
    }}
next.addEventListener("click",abc)
previos.addEventListener("click",function prev(){
    if(i>0){
        arrImg.forEach(function(e){
            e.classList.remove("block")
        })
        i--
        arrImg[i].classList.add("block")
    }else{
        i=6
    }
})

slideShow.addEventListener("click", function() {
    sir = setInterval(abc, 1000);
});
stope.addEventListener("click", function() {
    clearInterval(sir);
});