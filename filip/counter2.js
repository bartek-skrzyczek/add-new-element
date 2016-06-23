 //-------------------------------------------------------------------------------------------------------
 //
 //-------------------------------------------------------------------------------------------------------

(function (){
 //set variable, which will contain the max amount of characters === 100;
 var MAX_LENGTH = 100;
 var charactersAmount;
 var remaining;
 var $counter = $('#counter'); 
 

 
 //bind keyup event with textarea;
 $('.js-textarea').keyup(function () {

 //count the actual characters typed to textarea and store it to the variable;
  charactersAmount = $(this).val().length;

 //count the remaining characters to type;
  remaining = MAX_LENGTH - charactersAmount;
 console.log(charactersAmount)
 console.log(remaining)
 //place the result to the id = counter;
  $counter.text(remaining);     

 //if the amount of characters is === 0, change the class;
  if (remaining === 0) {
   $counter.addClass('warning');
  } else {
   $counter.removeClass('warning');
  }
 });

 // add comment from textarea to div;
 //---------------------------------------------------------------------------------------------
  $('#addComment').click(function () {
   if ($('.js-textarea').val().trim().length > 0){ 
       
      var $newElement = $('<div/>', {
      class: 'container comment',
      text: $('.js-textarea').val()
     });

     $newElement.appendTo('.comments-container');
     $('.js-textarea').val('');
     $counter.text(MAX_LENGTH);
     
      //create HTML span
    //-------------------------------------------------------------------------------------------
     var $newSpan = $('<span/>', {
      class: 'click-me-span',
      //text: 'X'
     });
     
     $counter.removeClass('warning');
     
     
     // 1. $newSpan remove from the DOM!
    


     // 2. $newSpan.appendTo('.comments-container'); 
     // $('.click-me-span').remove();
     
    //   $newSpan.remove();
      $newSpan.appendTo($newElement); // why '.container comment' won't work?? 
      
   
   $newSpan.click(function () {
       $newElement.remove();   
   })
     
     
     
     
   }
   
   
    });
/*
----------------------------------------------------------------------------------------------------------
*/


})()


 //-------------------------------------------------------------------------------------------------------
 //
 //-------------------------------------------------------------------------------------------------------