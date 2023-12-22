Pseudo-classes:

A pseudo-class is a keyword added to a selector that specifies a special state of the selected element(s). Pseudo-classes are used to style elements based on various criteria, such as user interaction, structural position, or other conditions. Here are some commonly used pseudo-classes:

**:hover:**

Description: Applies styles when the mouse is over the element.
Example: a:hover { color: red; } would change the text color of a hyperlink when the mouse hovers over it.

**:active:**

Description: Applies styles to an element being activated (clicked) by the user.
Example: button:active { background-color: #ccc; } would change the background color of a button while it is being clicked.

**:focus:**

Description: Applies styles when an element has keyboard focus.
Example: input:focus { border: 2px solid blue; } would add a blue border to an input field when it is in focus.

**:first-child:**

Description: Selects the first child of a parent element.
Example: li:first-child { font-weight: bold; } would make the first list item in an unordered list bold.

**:nth-child(n):**

Description: Selects the nth child of a parent element.
Example: p:nth-child(2) { color: green; } would make the second paragraph in a container have a green text color.

**:nth-of-type(n):**

Description: Selects the nth child of a particular type of element.
Example: div:nth-of-type(odd) { background-color: #f0f0f0; } would give a light background color to odd-numbered divs.

**:not(selector):**

Description: Selects all elements that do not match the given selector.
Example: input:not([type="submit"]) { border: 1px solid #ccc; } would add a border to all input elements except submit buttons.
