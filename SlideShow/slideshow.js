var current=0;

var slides=document.getElementsByClassName("slide");
var total=slides.length;
console.log(total);

var next=document.getElementById("next");
var previous=document.getElementById("previous");

next.addEventListener("click",function(){
    current++;
    console.log(current);
    if(current>=total){
        current=0;
    }

    for(i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }

    slides[current].style.display="block";
    console.log(current);
});

previous.addEventListener("click",function(){
    current--;
    console.log(current);
    if(current< 0){
        current=slides.length-1;
    }

    for(i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }

    slides[current].style.display="block";
    console.log(current);
});


