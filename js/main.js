$(document).ready(function(){
  //itest
  //find the text in the 1st p tag
  // var str = $('.itest p:first').text();
  // console.log('o:',str);
  //then set it to the last p tag
  // $('.itest p:last').html(str);

  ///////////////////////////////////////////////////////////////////
  // $('div.button').on('click', function() {
  //   $(this).fadeOut(1000);
  // });

  //start: title button functionality

  //target the divs with class of button, set event handler and call the callback
  $('#title-form .button').on('click', function(){
    var title = $('#title-input').val();
    $('.list-title').text(title);
    //grab the title and clear it off by setting an empty string
    $('#title-input').val('');
  });

//end
//////////////////////////////////////////////////////////////////////
  //start: item button functionality

  $('#item-form .button').on('click', function(){
    var itemText = $('#item-input').val();
    //create a new li elem concatenating the itemText value
    var $item = $('<li><span>' + itemText + '</span><i class="glyphicon glyphicon-remove"></i></li>');

    //append the list item to the ul tag
    $('.list').append($item);

    ////grab the input text from the item-input elem and clear it for the user
    $('#item-input').val('');

    //call .find() on the $item var, pass glyphicon-remove class as an argument
    $item.find('.glyphicon-remove').click(function(){
      // var $parent = $('.glyphicon-remove').parent(); //this targets all parents which is not what i want, i just need to remove only the item that is clicked!
      // var $parent = $(this).parent();
      // $parent.remove();

      // chain methods in prev lines to simplify
      $(this).parent().remove();
    });

  });

  //styling with jquery
  $('.button').hover(function(){
    // console.log('hover hover');
    //OJO! don't add the period to the css class added!!!! so tricky!!!
    $(this).toggleClass('button-hover');
  });


  //center h1 heading
  // $('h1').css("text-align", "center");





  //check this out
  // $('.list').html('<li>Do laundry</li>');

})
