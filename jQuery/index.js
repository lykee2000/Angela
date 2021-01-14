//https://www.w3schools.com/jquery/jquery_ref_effects.asp
// https://api.jquery.com/category/effects/
//4. Selecting Elements with jQuery
// document.querySelector("h1");
// $("h1");
// document.querySelectorAll("button")
// $("button");

//5. Manipulating Styles with jQuery
//.removeClass .hasClass
// $("h1").css("color","green");
// $("h1").css("font-size","5rem");
// $("h1").addClass("big-title"); //style.css 안에 있는 big-title과 연동
// $("h1").addClass("big-title margin-50");
// $("button");

//6. Manipulating Text with jQuery
//.text
// $("h1").text("Bye");
// $("button").text("Dont' click me");
// $("button").html("<em>HEY</em>");

// 7. Manipulating Attributes with jQuery
// $("img").attr("src");
// $("a").attr("href","https://www.yahoo.com");
// $("h1").attr("class");

//8. Adding Event Listeners with jQuery
// $("h1").click(function(){
//   $("h1").css("color","purple");
// })

// for (var i = 0;i<5;i++){
//   document.querySelectorAll("button")[i].addEventListener("click",function(){
//     document.querySelector("h1").style.color = "purple";
//   });
// }
//==
// $("button").click(function(){
//   $("h1").css("color","purple");
// });
// $("input").keypress(function(event){
//     console.log(event.key);
// });
// $(document).keypress(function(event){
//     $("h1").text(event.key); //키보드로 치는 내용 그대로 h1내용 바꿔서 출력
// });
// $(document).on("mouseover",function(){
//   $("h1").css("color","purple");
// })
// $(document).click("mouseover",function(){
//   $("h1").css("color","purple");
// })

// 9. Adding and Removing Elements with jQuery
// before() after() prepend() append() remove()

// 10. Website Animations with jQuery
//hide() show() toggle() fadeToggle() fadeOut() fadeIn() slideUp() slideDown() slideToggle()
$("button").on("click",function(){
  // $("h1").animate({opacity:0.5});
  // $("h1").animate({color:red}); -> error
  // $("h1").animate({margin:20});
  $("h1").slideUp().slideDown().animate({opacity:0.5});
});
