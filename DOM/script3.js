// Import elements
const parentEl = document.getElementById('parent');

console.log('parentEl', parentEl);
/**
 * Get all child nodes
 * childNodes
 */

console.log(parentEl.childNodes);   // All nodes

/**
 * Get all child elements
 */

console.log('children', parentEl.children); // All li elements

/**
 * Get the first node and last node
 *          firstChild and lastChild
 */
console.log('first child', parentEl.firstChild);    // Text
console.log('last child', parentEl.lastChild);      // Text

/**
 * Get the first element and last element
 *      firstElementChild and lastElementChild
 */
console.log('first element', parentEl.firstElementChild);    // li-USA
console.log('last element', parentEl.lastElementChild);      // li-Brazil

/**
 * Get previous and last sibling nodes
 *  previousSibling, nextSibling
 */
const firstChild = parentEl.firstChild;
const lastChild = parentEl.lastChild;

console.log('previous sibling', lastChild.previousSibling);    // #comment
console.log('next sibling', firstChild.nextSibling);           // li-USA

console.log('next sibling', lastChild.nextSibling);            // null
console.log('previous sibling', firstChild.previousSibling);   // null

/**
 * Get previous and last elements
 *  previousElementSibling, nextElementSibling
 */
const firstChildEl = parentEl.firstElementChild;
const lastChildEl = parentEl.lastElementChild;

console.log('previous sibling', lastChildEl.previousElementSibling);    // li-Mexico
console.log('next sibling', firstChildEl.nextElementSibling);           // li-Canada

console.log('next sibling', lastChildEl.nextElementSibling);            // null
console.log('previous sibling', firstChildEl.previousElementSibling);   // null

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @topic
 * className vs classList
 */

const boxEl = document.querySelector('.box');
console.log(boxEl.className);   // string -> box box2 box3
console.log(boxEl.classList);   // DOMTokenList['box', 'box2', 'box3', value: 'box box2 box3']

// Add 'box4' to the class
// boxEl.className = 'box4';   // incorrect
/*
console.log(boxEl.className);   // string -> box4
console.log(boxEl.classList);   // DOMTokenList['box4', value: 'box4']
*/
boxEl.className += ' box4';      // OR boxEl.classList.add('box4');
console.log(boxEl.className);   // string -> box box2 box3
console.log(boxEl.classList);   // DOMTokenList['box', 'box2', 'box3', value: 'box box2 box3']

// Remove classname
const classname = boxEl.className;
console.log('classname', classname);
const arrOfClassName = classname.split(' ');
let newClassName = arrOfClassName.filter((className) => className !== 'box2');
console.log(newClassName);
boxEl.className = newClassName.join(' ');
console.log(boxEl.className);


// Using classList
boxEl.classList.remove('box3');
console.log(boxEl.className);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @topic
 * Create an element in DOM
 */
const footerEl = document.createElement('footer');
// footerEl.className = 'f1';
// footerEl.id = 'f1';
console.log(footerEl);

// Add content to footeEl
// 1st option
// footerEl.innerHTML = 'Footer Content';

// 2nd option
const textContent = document.createTextNode('Footer Content');  // Creates a string node
// footerEl.appendChild(textContent);// Add string node to desired element
footerEl.append(textContent);// Add string node to desired element
console.log(footerEl);
// Can use appendChild() or append() to append element
// Difference between appendChild() and append()
const bodyEl = document.querySelector('body');
// Append footer element to body
    // appendChild()
// bodyEl.appendChild(footerEl);
    // append()
// bodyEl.append(footerEl);

// Append footer to box (element from above)
boxEl.append(footerEl);

const li = document.createElement('li');
li.innerHTML = 'Argentina';
parentEl.append(li);
// can only append a created element once, will work off the last 
    // attempted append line

/**
 * @topic
 * Events Introduction
 */
const nameInputEl = document.getElementById('name');
const btnEl = document.getElementById('btn-click');
const dblBtnEl = document.getElementById('dblbtn-click')

/**
 * 1. Mouse Events
 */
// click event
btnEl.addEventListener('click', (event) => {
    event.preventDefault(); // prevent default form submission
    console.log('click', event);
    console.log('target element', event.target);
});

// double click event
dblBtnEl.addEventListener('dblclick', (event) => {
    console.log('double click', event);
    console.log('event', event.target);
});

// Try: mousedown, mouseup, mouseout, mousemove

/**
 * 2. Keyword Events
 */

bodyEl.addEventListener('keydown', (event) => {
    if(event.code === 'Enter'){
        console.log(event);
    }
    else console.log('Wrong keyword pressed!')
});

/**
 * Form Events
 */                // These events aren't working for me, come back later
// Change event
// nameInputEl.addEventListener('change', (event) => {
//     console.log(event.target.value);
// });

// Input event
// nameInputEl.addEventListener('input', (event) => {
//     console.log(event.target.value);
// });