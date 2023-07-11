# web-led
A Javascript implementation of blinking leds for a webpage

This code creates a blinking led effect laid over an web element by element id.
Features include:
    - Create a fading span element and overlay it on a target element.
    - Control the speed of the fade animation.
    - Set the width and height of the fading span element.
    - Customize the background color of the fading span element.
    - Specify the border radius of the fading span element.
    - Apply CSS transform property to the fading span element.
    - Pause duration between fade animations.
    - Randomize pause duration for a dynamic effect.
    - Adjust the horizontal and vertical offsets of the fading span element.
    - Automatically adjust the position of the fading span element when the window is resized.
    
Developed on Firefox, and offset for Chrome in code (get the positions from Firefox using the coordClick function)

Demo of leds over a still image

![demo](https://github.com/jasonmhead/web-led/assets/6140151/3c61d121-f2c4-4a87-9ff3-15c6ae923bc5)

Utility functions included:

- generateGridCoordinates() -> generates coordinates for a grid based on the specified parameters, including rows, columns, skew angles, rotation, starting point, and point spacing.
- getRandomPastelColor() -> get random pastel color in hex format
- convertColorToRGBA() -> converts a CSS color value to its equivalent RGBA format.
- coordClick() -> (use to get the coord for the led placement) retrieves the relative coordinates of a click event within an element and logs the result to the console.
