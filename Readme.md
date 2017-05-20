# jQuery and HTML

You can also create HTML elements using jQuery.

$('<h1></h1>');
The code in the example above creates a new <h1> element. Elements that are created using jQuery, however, aren't automatically added to the DOM — you must explicitly add them.

To use newly created elements, its useful to store them in a jQuery variable.

var $heading = $('<h1></h1>');
In the example above, the jQuery variable is $heading. The $ character at the start of the variable name does nothing special. It's simply best practice to differentiate jQuery objects from vanilla JavaScript objects by starting a variable name with the $ character.

Finally, it's very common to create an HTML element with jQuery, add information to the element, and then add it to the DOM.

var message = "Welcome to jQuery!"
var $heading = $('<h1>' + message + '</h1>');
$('div').append($heading);
The example above contains a JavaScript variable (message) that stores a string. The second line creates an <h1> element and concatenates the message variable, resulting in a heading element that says Welcome to jQuery. Finally, the heading ($heading) is added to a div.

This sequence of code is frequently used to create or update HTML elements in response to user actions or data.

## jQuery and CSS
Much like HTML, jQuery lets you access CSS properties and values with the .css() method.

$(document).ready(function() {
  $('div.alert').css('background-color');
});
In the example above, the .css() method is called on all divs with a class of alert. The method also has an argument called 'background-color'. What is happening in this example?

Once again, the documentation for this method is the best place to start: https://api.jquery.com/css/.

In the example above, the .css() method retrieves, or returns, the value of the background-color property, regardless of whether or not it has been set in a stylesheet.

According to the documentation, the .css() method can also accept a second argument: a CSS value. This can be used to set CSS properties.

$(document).ready(function() {
  $('div.alert').css('background-color', 'red');
});
In the example above, instead of returning the value of the background-color property, the .css() method sets the background color of all divs with the alert class to red.

When the .css() method is combined with callback functions, you can create more sophisticated interactivity.

##
