var cursor=document.querySelector("#cursor");
var drag=document.querySelector("#drag");

drag.addEventListener("mousemove",function(details){
    cursor.style.left=details.clientX+"px";
    cursor.style.top=details.clientY+"px";
});