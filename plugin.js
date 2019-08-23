$(document).ready(function(){
  var tri="triangle-down";
  $(".drop").click(function(){
    if(tri=="triangle-down")
    tri="triangle-up";
    else{
      tri="triangle-down";
    }
    $(".sub").slideToggle();
    $("span").attr("uk-icon",tri);
    });
});
