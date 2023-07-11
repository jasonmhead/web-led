/*
The getRandomPastelColor function generates a random pastel color in hexadecimal notation.
Features

    Generate random RGB values within the pastel color range.
    Convert RGB values to hexadecimal notation.
    Pad the hexadecimal value with zeros if needed.
    Return the random pastel color in hex notation.

Usage

const pastelColor = getRandomPastelColor();

The getRandomPastelColor function does not require any parameters. Simply call the function to generate a random pastel color in hexadecimal notation.

Please note that the generated pastel color will be in a lighter shade range due to the RGB values being limited to a specific range for pastel colors.
*/

function getRandomPastelColor() {
  // Generate random RGB values within the pastel color range (lighter shades)
  const r = Math.floor(Math.random() * 128 + 128);
  const g = Math.floor(Math.random() * 128 + 128);
  const b = Math.floor(Math.random() * 128 + 128);

  // Convert RGB to hexadecimal notation
  const hex = ((r << 16) | (g << 8) | b).toString(16);

  // Pad the hexadecimal value with zeros if needed
  const paddedHex = hex.padStart(6, '0');

  // Return the random pastel color in hex notation
  return `#${paddedHex}`;
}

////////////////////////////////////////////////////////////////

/*
The convertColorToRGBA function converts a CSS color value to its equivalent RGBA format.
Features

    Convert a CSS color value to RGBA format.
    Retrieve the RGBA values of the color.
    Return the RGBA color value.

Usage

const rgbaColor = convertColorToRGBA(color);

Replace the color parameter with your desired CSS color value to convert it to RGBA format.

Please note that this function relies on creating temporary elements and a canvas element for color conversion. Ensure that the function is executed within a document environment, such as a browser, where the required DOM APIs are available.
*/

function convertColorToRGBA(color) {
  // Create a temporary element for CSS color conversion
  const tempElement = document.createElement("div");
  tempElement.style.color = color;

  // Append the temporary element to the document body
  document.body.appendChild(tempElement);

  // Get the computed color value
  const computedColor = window.getComputedStyle(tempElement).color;

  // Remove the temporary element from the document body
  document.body.removeChild(tempElement);

  // Create a canvas element for color conversion
  const canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = 1;

  const ctx = canvas.getContext("2d");
  ctx.fillStyle = computedColor;
  ctx.fillRect(0, 0, 1, 1);

  // Get the RGBA values from the canvas
  const [r, g, b, a] = ctx.getImageData(0, 0, 1, 1).data;

  // Return the RGBA color value
  return `rgba(${r}, ${g}, ${b}, ${a / 255})`;
}

////////////////////////////////////////////////////////////////////////

/*
The coordClick function retrieves the relative coordinates of a click event within an element and logs the result to the console.
Features

    Retrieve the clicked element.
    Get the position of the clicked element.
    Calculate the relative coordinates as percentages.
    Log the result to the console.
*/

function coordClick(event) {
  // Get the clicked element
  var clickedElement = event.target;

  // Get the position of the clicked element
  var rect = clickedElement.getBoundingClientRect();

  // Calculate the relative coordinates as percentages
  var xPercent = ((event.clientX - rect.left) / rect.width) * 100;
  var yPercent = ((event.clientY - rect.top) / rect.height) * 100;

  // Log the result to the console
  console.log("Clicked Element:", clickedElement);
  console.log("Relative Coordinates (x%, y%):", xPercent.toFixed(2), yPercent.toFixed(2));
}

////////////////////////////////////////////////

/*

The generateGridCoordinates function generates coordinates for a grid based on the specified parameters, including rows, columns, skew angles, rotation, starting point, and point spacing.
Features

    Create a grid of coordinates based on the number of rows and columns.
    Apply skew transformations to the grid based on the specified skew angles.
    Apply rotation transformation to the grid based on the specified rotation angle.
    Control the starting point of the grid within the coordinate system.
    Adjust the spacing between points in the grid.
    Return an array of coordinates representing the grid.

Usage
const coordinates = generateGridCoordinates(
  rows,
  columns,
  skewAngleX,
  skewAngleY,
  rotation,
  startX,
  startY,
  pointSpacing
);

Replace the parameters with your desired values to generate the grid coordinates based on your specific requirements.

Please note that this function operates in the mathematical coordinate system, where the positive x-axis points to the right, and the positive y-axis points downward.

*/

function generateGridCoordinates(rows, columns, skewAngleX, skewAngleY, rotation, startX, startY, pointSpacing) {
  // Convert skew angles from degrees to radians
  const skewX = Math.tan((skewAngleX * Math.PI) / 180);
  const skewY = Math.tan((skewAngleY * Math.PI) / 180);

  const coordinates = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      // Calculate x, y coordinates for each grid point relative to the starting point
      let x = startX + col * pointSpacing;
      let y = startY + row * pointSpacing;

      // Apply skew transformations relative to the starting point
      x += (y - startY) * skewX;
      y += (x - startX) * skewY;

      // Apply rotation transformation relative to the starting point
      const angleRad = (rotation * Math.PI) / 180;
      const cosAngle = Math.cos(angleRad);
      const sinAngle = Math.sin(angleRad);
      const rotatedX = startX + (x - startX) * cosAngle - (y - startY) * sinAngle;
      const rotatedY = startY + (x - startX) * sinAngle + (y - startY) * cosAngle;
      x = rotatedX;
      y = rotatedY;

      coordinates.push([x, y]);
    }
  }

  return coordinates;
}

///////////////////////////////////////////////

/*
## createFadingSpanOverElement

Creates a fading span element and overlays it on a given element. The fading span fades in and out at specified intervals.

### Parameters

- `element` (HTMLElement): The target element to overlay the fading span on.
- `fadeSpeed` (number): The speed of the fade animation in percentage.
- `elem_width` (number): The width of the fading span element in pixels.
- `elem_height` (number): The height of the fading span element in pixels.
- `color` (string): The background color of the fading span element.
- `borderRadius` (number): The border radius of the fading span element in pixels.
- `transform_elem` (string): The CSS transform property value to apply to the fading span element.
- `pause` (number): The duration to pause between fade animations in seconds.
- `randomPause` (boolean): Specifies whether to use a random pause duration between fade animations.
- `offsetX` (number): The horizontal offset of the fading span element from the target element's position.
- `offsetY` (number): The vertical offset of the fading span element from the target element's position.

### Example

// Create a fading span overlay on an element with custom options
const element = document.getElementById("targetElement");
createFadingSpanOverElement(
  element,
  50, // fadeSpeed
  100, // elem_width
  50, // elem_height
  "#FFC0CB", // color
  10, // borderRadius
  "rotate(45deg)", // transform_elem
  1, // pause
  false, // randomPause
  20, // offsetX
  10 // offsetY
);
*/

function createFadingSpanOverElement(
  element,
  fadeSpeed,
  elem_width,
  elem_height,
  color,
  borderRadius,
  transform_elem,
  pause,
  randomPause,
  offsetX,
  offsetY
) {
  const isChrome = /Chrome/.test(navigator.userAgent);
  const adjustedOffsetY = isChrome ? offsetY - 32 : offsetY;

  const bodyElement = document.body;
  const span = document.createElement("span");
  span.style.position = "absolute";
  span.style.width = elem_width + "px";
  span.style.height = elem_height + "px";
  span.style.backgroundColor = color;
  span.style.borderRadius = borderRadius + "px";
  span.style.transform = transform_elem;

  // Calculate position relative to the body element
  const updatePosition = () => {
    const elementRect = element.getBoundingClientRect();
    const bodyRect = bodyElement.getBoundingClientRect();
    const posX = elementRect.left - bodyRect.left + offsetX;
    const posY = elementRect.top - bodyRect.top + adjustedOffsetY;
    span.style.left = posX + "px";
    span.style.top = posY + "px";
  };

  // Initial positioning
  updatePosition();

  // Listen for window resize event and update position accordingly
  window.addEventListener("resize", updatePosition);

  bodyElement.appendChild(span);

  let fadingOut = false;
  let opacity = 0;

  function fade() {
    const fadeAmount = fadeSpeed / 100;

    if (fadingOut) {
      opacity -= fadeAmount;
      if (opacity <= 0) {
        opacity = 0;
        fadingOut = false;
        setPause();
        return;
      }
    } else {
      opacity += fadeAmount;
      if (opacity >= 1) {
        opacity = 1;
        fadingOut = true;
        setPause();
        return;
      }
    }

    span.style.opacity = opacity.toFixed(2);
    requestAnimationFrame(fade);
  }

  function setPause() {
    if (randomPause) {
      const pauseTime = Math.random() * pause * 1000;
      setTimeout(fade, pauseTime);
    } else {
      setTimeout(fade, pause * 1000);
    }
  }

  setPause();
}
