# HTML Class Notes
Current version of HTML is 5, and CSS is 3

## What is HTML?

HTML is the web stucture/skeleton of a web page
It is used to display the content of a web page

## How to Create an HTML file?
You can create an HTML file using .html extention.
    Example: 'index.html, users.html'

## Content of HTML file
First line of the page is '<DOCTYPE html>'
This is telling Web Browser what is the type of the file is being rendered

After doctype goes 'html' element. Everything in the page goes inside this element.
    Example: '<html> ALL CONTENT... </html>'
'html' is a TAG. You create web elements using tags.
    Example: '<html> All content...</html>'

## '<head>' element
Invisible part of the web page goes here.
It is needed to show important information like page title, metadata, scripts, critical css, etc.

### '<title>' element
You can update your page title using this element.
Make sure it's inside 'head' element.
    Example: '<title>HTML CSS Tutorial</title>'
This is called **nesting elements**.
    Example: '<head> <title>HTML CSS Tutorial</title> </head>'

### '<meta>' element
Metadata of the web page.
    Examples: charset, title, author, keywords, favicon, etc.

## '<body>' element
Everything in the body is visible to users

### Heading elements
From 6 to 1. 6 being the smallest, 1 being the biggest
    Example: '<h1>Heading 1</h1>', '<h6>Heading 6</h6>'

### Paragraph element '<p>'
Used to create a simple paragraph
    Example: '<p>Content</p>'

### Some other example element
'<strong>' or '<b>' makes bold text
'<i>' or '<em>' makes italic text
'<hr/>' creates a horizontal line
'<br/>' breaks/pushes elements to new line

### Self-closing elements
If element doesn't have any content, you can self-close it.
    Example: '<hr/>', '<br/>', '<img/>

### Link element '<a>'
Used to navigate between or out of the web page.
When 'target="_blank"' attr added website

## Attributes

### ID
Used for unique elements

### Class
Used for common/multiple elements

## Syling
1. Inline styling: You apply styles right to the element
2. Internal styling: You apply styles in the head element
3. External styling: Apply styles by creating '.css' files

**padding**: give space between content and border
**margin**: give space between border and other elements
To style ID use '#'
To style Class use '.'
To styles normal element without attribute, use tag name. Ex: 'footer {styles...}'

## Lists
1. Ordered list 'ol'
2. Unordered list 'ul'
3. Both of them have 'li' children elements

## Tables
'table' - required parent element
'thead', 'tbody', or 'tfoot' - optional elements that help make code more readable?
'tr' - table row
'th' - table heading
'td' - table data