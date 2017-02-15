# The Switch

## You Assignment

Given the HTML and CSS as provided, use jQuery to hear the click of the switch and meet the following criteria:

- When someone hits the `<button>` inside of the `.switch`, remove the current state class (.on/.off), and apply the opposite class (.on/.off)
- Swap the color of the body's background and text by adding or removing the dark/light class. For advanced learning, try to store the values as variables and swap them directly without the use of classes
- Lastly, change the text in box to say "It's so bright in here!" when the switch is in the on position, and "Hey, who turned off the lights?" when it's off

## Hints

Start with small steps:

1. Start by changing the `background-color` and text `color`
  - See if you can store the values as variables for swapping (later)
2. Change the status ``.text()`` from one message to the other
3. Change the class of the `.switch>button` from `.on` to `.off`
4. Check if the `button` `click()` will trigger a function (try a simple `alert()` to test this)
5. Combine the above steps to solve the problem:
  - use an `if` statement to change the text
  - try the jquery `toggleClass` function to change the light and dark backgrounds
  - you should be able to click the switch many times and it should switch back and forth between light and dark modes

##### Website Instructions

  Start with small steps:

  1) Change the status text when the document is ready
  2) Add a click listener to the switch and incorporate the changes listed above in 'Your Assignment'
  3) Confirm the switch works
  4) How do we switch the classes back now?
    a) use an if statement to change the text
    b) use the jquery toggleClass function to change the light and dark backgrounds
    c) you should be able to click the switch many times and it should switch back and forth between light and dark modes
