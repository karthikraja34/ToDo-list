//fuction to strike text

$("ul").on("click","li",function(){
 $(this).toggleClass("strike");
});



//function to remove text on clicking tras icon
$("ul").on("click", "span" ,function(){
   $(this).parent().fadeOut(500,function(){
       $(this).remove();
   });
  event.stopPropagation();
});


//function to add list when enter key is pressed on input
$("input[type='text']").on('keyup', function(e){
  if(e.which === 13){
     var ToDotxt= $(this).val();
    $(this).val("");
  $("ul").append("<li>"+ToDotxt+" <span><i class='fa fa-trash'></i></span></li>");    
  }
});


//function to toggle input box when plus icon is pressed
$(".fa-plus").on("click",function(){
    $("input").fadeToggle();
})
