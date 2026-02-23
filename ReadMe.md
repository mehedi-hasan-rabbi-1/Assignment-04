## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans-
getElementById() → Selects one element by ID.

getElementsByClassName() → Selects multiple elements by class (live HTMLCollection).

querySelector() → Selects first matching element using CSS selector.

querySelectorAll() → Selects all matching elements (static NodeList).

### 2. How do you create and insert a new element into the DOM?

Ans-Create element using document.createElement.

Set attributes, classes, or text.

Insert into DOM using methods like appendChild, prepend, insertBefore.

### 3. What is Event Bubbling? And how does it work?

Ans -Event Bubbling is a type of event propagation in the DOM:

1.When an event occurs on an element, it first triggers on that element.

2.Then it bubbles up through its parent elements, all the way to the document.

### 4. What is Event Delegation in JavaScript? Why is it useful?

Ans-Event Delegation is a technique where you attach a single event listener to a parent element instead of many child elements.
The parent handles events from its children using event bubbling.

Why useful?

Reduces memory usage (fewer listeners)

Handles dynamically added elements

### 5. What is the difference between preventDefault() and stopPropagation() methods?

Ans--Difference between preventDefault() and stopPropagation() 

preventDefault() → Stops the default browser behavior (like form submit, link open).

stopPropagation() → Stops the event from bubbling to parent elements.