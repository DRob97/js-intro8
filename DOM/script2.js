/**
 * ACCESSING ELEMENTS IN THE DOM
 */

/**
 * 1. getElementById()
 */

const headingEl = document.getElementById('heading');
const subHeadingEl = document.getElementById('subheading');
console.log('subHeadingEl', subHeadingEl);
console.log('headingEl', headingEl);

/**
 * 2. getElementsByClassName()
 */
const containerEls = document.getElementsByClassName('container');
console.log(containerEls);

// HTMLCollection methods
console.log(containerEls.length);
console.log(containerEls.item(0));
console.log(containerEls[0]);


// loop HTMLCollection
for(let i = 0; i < containerEls.length; i++){
    // console.log(containerEls[i]);
    // console.log('El at index ' + i + ':' + containerEls[i]);
}

/**
 * 3. getElementsByTagName
 */

const images = document.getElementsByTagName('img');
console.log('images', images);

// Access individual nodes
// console.log(images[0]);
// console.log(images[1]);
// console.log(images[2]);

// Dynamically access
for(let i = 0; i < images.length; i++){
    console.log(images[i]);
    // console.log(containerEls[i]);
    // console.log('El at index ' + i + ':' + containerEls[i]);
}

/**
 * querySelector()
 */

// Get by id
const footerEl = document.querySelector('#main-footerID');
console.log('By ID', footerEl);

// Get by class
const footerEl2 = document.querySelector('.main-footerClass');
console.log('By Class', footerEl2);

// Get by tag
const footerEl3 = document.querySelector('footer');
console.log('By TagName', footerEl3);

/**
 * querySelectorAll()
 */

// Get by tag
const sections = document.querySelectorAll('sections');
console.log('By Section', sections);

// Manuall access nodes(elements)
console.log(sections.item(0));
console.log(sections.item(1));
console.log(sections.item(2));

// Dynamically access
// Regular for-loop
sections.forEach((section) => console.log(section));

// entries()
const sectionEntries = sections.entries();
console.log('sectionEntries', sectionEntries);

for(let entry of sectionEntries);
console.log('sectionEntries', sectionEntries);

/**
 * Styling DOM Elements
 */

// Make heading-text red
console.log(headingEl.style); // CSSStyleDeclaration{}
headingEl.style.color = 'red';
// Give border to images
for(const image of images){
    image.style.border = '1px solid darkblue';
}

/**
 * innerHTML
 */

const articleEl = document.getElementById('article');
console.log(articleEl);    // Whole element
console.log(articleEl.innerHTML);  // returns content
console.log(articleEl.innerText);  // returns content
console.log(articleEl.textContent);  // returns content

// Update the node content
articleEl.innerHTML = 'Hello World';
console.log(articleEl.innerHTML);  // returns content

// Add html content
articleEl.innerHTML = `
    <h2>Article Heading</h2>
    <p>Aricle body</p>
`;
console.log(articleEl);