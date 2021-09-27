function calculateRectangleArea(length, width) {
  if (length >= 0 && width >= 0) {

    return (length * width);

  } else {
    return undefined;
  }
}

function calculateTriangleArea(base, height) {
  if (base >= 0 && height >= 0) {
    return ((base * height) / (2));
  } else {
    return undefined;
  }
}

function calculateCircleArea(radius) {
  if (radius >= 0) {
    return (Math.pi) * (radius ** 2);
  } else {
    return undefined;
  }
}


calculateRectangleArea(length, width);
calculateTriangleArea(base, height);
calculateCircleArea(radius);

/*rectangle: length × width
triangle: base × height / 2
circle: π × radius2
If any of the parameters are negative, the function should return undefined.

*/