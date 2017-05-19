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

## lol
