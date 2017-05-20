$(document).ready(function(){
  //itest
  //find the text in the 1st p tag
  var str = $('.itest p:first').text();
  // console.log('o:',str);
  //then set it to the last p tag
  $('.itest p:last').html(str);

  ///////////////////////////////////////////
  // $('div.button').on('click', function() {
  //   $(this).fadeOut(1000);
  // });

  //start: title button functionality
  var title = $('#title-input').val();
  // console.log('title: ',title);
  var f = $('.list-title').text(title);
  console.log(f);

  //start: item button functionality
  var itemText = $('#item-input').val();
  //create a new li elem concatenating the itemText value
  var $item = $('<li><span>' + itemText + '</span><i class="glyphicon glyphicon-remove"></i></li>');

  //append the list item to the ul tag
  $('.list').append($item);
  console.log($item);

  //center h1 heading
  $('h1').css("text-align", "center");



  //check this out
  // $('.list').html('<li>Do laundry</li>');

})
