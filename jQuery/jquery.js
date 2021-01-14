// for (var i = 0;i<numberOfDrumButtons;i++){
//   document.querySelectorAll("button")[i].addEventListener("click",function(){
//     document.querySelector("hi").style.color = "red";
//   });
// }
//jQuery로 간단히 만들기
//document.querySelector("hi") -> jQuery("hi") -> $("hi")
$("button").click(function(){
  $("hi").css("color","red");
})
