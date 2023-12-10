## Enironments
1. Client environment   -> window is an object
2. Server environment   -> window is not available

You can check your environment using `typeof window`

## Useful window methods

'alert' - Alerts a message. Returns 'undefined'
'prompt' - Ask user for input/some info. Returns either value, null, or empty
'confirm' - Confrim something with user. Returns boolean
'innerHeight' - Returns inner height of the screen
'innerWidth' - Returns inner width of the screen
'scrollTo(x, y)' - scrolls to a particular set of coordinates in a document

**Shortcut** is to use just 'alert, prompt, etc without 'window'
    Ex: alert('Message'), prompt('question')


## Accessing DOM Elements

#### getElementById
Access elements by their ID property
If element not found, returns 'null'

#### getElementsByClassName
Access elements by their class property
If element(s) exist, return HTMLCollection with elements
Else, returns empty HTMLCollection
Think of HTMLCOllection as a regular array.

### getElementsByTagName
Access elements by their tag name
If element(s) exist, return HTMLCollection with elements
Else, returns empty HTMLCollection
Think of HTMLCOllection as a regular array.

### querySelector()
Universal way of accessing an element.
    Ex: id, class, tag, etc
Returns single element(node)
If it enconters multiple elements with the same property, it returns the first encountered

### querySelectorAll()
Universal way of accessing an element.
    Ex: id, class, tag, etc
Returns NodeList of elements
If not found, returns empty NodeList

## Styling Elements
Every node/element contians object called CSSStyleDeclarations which contains all CSS properties of that node/element.
You can change those values

## innerHTML
Every DOM node has the innerHTML property
innerHTML has all the HTML and content of its children
It can be used to view of change the HTML of a code
You can also use 'innerText' or 'textContent' similarly


## Traversing DOM
DOM tree contains all kinds of nodes:
    Elements, whitespaces, comments, etc.

#### childNodes
Returns NodeList of al nodes

#### children
Returns HTMLCollection of only elements
    (no whitespace, comments...)

#### Other useful node methods
firstChild, lastChild
previousSibling, nextSibling

#### Other useful element methods
firstElementChild, lastElementChild
previousElementSibling, nextElementSibling

## Create element in the DOM
'createElement'
To add a content to a newly created element use either 'innerHTML' or 'document.createTextNode()' with 'append()'

## appendChild vs append
both allow you to append nodes, but append also allows you to append strings as well as  multiple nodes at once