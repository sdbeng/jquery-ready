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

## Event Handlers I
For an element to be truly interactive, the element must detect user interactions. This is accomplished with jQuery event handler functions.

$('div.button').on('click', function() {
  // Some behavior goes here
});
In the example above, a div with the class of button has the .on() event handler function attached to it. The event handler accepts two arguments:

An event listener that "listens" for an event ('click' in the example above)
A callback function that is executed when the event is triggered (in this example, when the user clicks)

## Event Handlers II
In the last exercise, you followed three steps to attach an event handler function:

Attach .on()
Specify a valid event as the first argument
Specify a callback function as the second argument
A slightly shorter syntax combines steps 1 and 2.

$('div.button').click(function() {
// Some behavior goes here
});
Functionally, the .click() function in the example above is no different from .on('click', ...) in the last exercise. Both forms are valid, and neither is more acceptable than the other.

It's important to understand both versions of the syntax because both are used by developers. The jQuery documentation uses the shortened syntax demonstrated in the example above, whereas developers may use either version of the syntax. Knowing both forms improves your ability to read other developers' code.

Look at the documentation for a list of valid jQuery events.

## Traversing the DOM
Let's take a look at .find(), a DOM traversal method in jQuery.

$(document).ready(function() {
  $('.button').click(function() {
    var $listItems = $('.button').find('li');
  });
});
Let's break down the example above:

An element with a class of button has a click event handler.
When the click event occurs, the callback function is executed. In the callback function, the .find() method is called on elements with the button class.
The .find() method returns all list items ('li') that are descendants of .button elements.
The descendant list items are then stored in a jQuery variable called $listItems.
The .find() method returns only the descendant elements that match the selector passed to it. In the example above, only list items ('li') will be returned if they are found.

It's common to traverse the DOM and then modify behavior of elements. Be sure to familiarize yourself with some of the methods that jQuery provides to traverse the DOM. Some of the most important methods allow you to traverse parents, siblings, or children.

https://api.jquery.com/category/traversing/

## $(this)
Take a look at the code below. What do you think this code does?

$(document).ready(function() {
  $('div.alert').click(function() {
    $('div.alert').remove();
  });
});
The code in the example above says: when a div with a class of alert is clicked, remove divs with a class of alert from the DOM.

What if there are multiple divs that share this class? If that is the case, then all divs with the alert class would be removed simultaneously when only one div with a class of alert is clicked.

You can use the this keyword to remove only the div that was clicked.

$(document).ready(function() {
  $('div.alert').click(function() {
    $(this).remove();
  });
});
In the example above, only the div that is clicked will be removed.

The div.alert selector targets all divs with the alert class, while the this keyword targets only the specific div.alert element that is clicked, or interacted with.
1.
Take a look at the following lines of code in main.js:

var $parent = $('.glyphicon-remove').parent();
$parent.remove();
When the x symbol is clicked, all list items are removed from the list. This is because we are currently instructing jQuery to remove all parents of elements with a class of glyphicon-remove. That is, all list items are removed when any x symbol is clicked.

Let's fix this bug. Use the this keyword to return the parents of only the x symbol that is clicked.
Stuck? Get a hint
2.
Once again, add multiple list items in List Maker. After they are added, click on their corresponding x symbol to remove them. What do you notice now?

You did it! List Maker now works as intended!

## 
