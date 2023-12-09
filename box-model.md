The CSS Box Model is a fundamental concept that describes the layout and spacing of elements on a webpage. It consists of four main components: content, padding, border, and margin. Understanding the box model is crucial for controlling the size and spacing of elements.

1. Content:
The innermost part of the box represents the actual content, such as text, images, or other media.
Defined by the width and height properties.

.box {
  width: 200px;
  height: 150px;
}

2. Padding:
Padding is the space between the content and the border.
You can set padding for each side individually (padding-top, padding-right, padding-bottom, padding-left) or shorthand using padding.

.box {
  padding: 20px; /* Sets padding for all sides */
}

3. Border:
The border surrounds the padding and content.
You can define the border width, style, and color.
Shorthand example:

.box {
  border: 2px solid black; /* Width, style, color */
}


4. Margin:
Margin is the space outside the border, creating distance between the element and its neighboring elements.
Similar to padding, you can set margin for each side individually or use the shorthand margin.

.box {
  margin: 10px; /* Sets margin for all sides */
}