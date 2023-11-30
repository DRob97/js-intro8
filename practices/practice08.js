const bookstore = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic",
        price: 9.99
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Classic",
        price: 7.99
    },
    {
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        genre: "Science Fiction",
        price: 12.49
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        genre: "Fantasy",
        price: 14.99
    },
    {
        title: "The Da Vinci Code",
        author: "Dan Brown",
        genre: "Mystery",
        price: 10.99
    }
];

// Find the cheapest book in the bookstore  -> To Kill a Mockingbird
// Find the most expensive book in the bookstore  -> Harry Potter and the Sorcerer's Stone
// Find all Classic books   -> [ 'The Great Gatsby', 'To Kill a Mockingbird' ]

// const cheapestBook = bookstore.reduce((cheapest, book) => book.price < cheapest.price ? book : cheapest, bookstore[0]);
// console.log(cheapestBook);

const cheapestBook1 = bookstore.reduce((cheapest, book) => {
    if(book.price < cheapest.price) return book;
    else return cheapest;
}, bookstore[0]);
console.log(cheapestBook1.title);

const mostExpensiveBook = bookstore.reduce((expensive, book) => {
    if(book.price > expensive.price) return book;
    else return expensive;
}, bookstore[0]);
console.log(mostExpensiveBook.title);

const classicBooks = bookstore.filter(books => books.genre === 'Classic').map(book => book.title);
console.log(classicBooks);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const shoppingCart = {
    userId: 12345,
    items: [
        {
            productId: 1,
            productName: 'Laptop',
            price: 999.00,
            quantity: 1,
            specifications: {
                brand: 'Dell',
                screen: '15.6 inches',
                processor: 'Intel Core i7'
            }
        },
        {
            productId: 2,
            productName: 'Smartphone',
            price: 499.00,
            quantity: 2,
            specifications: {
                brand: 'Apple',
                model: 'iPhone 12',
                color: 'Space Gray'
            }
        },
        {
            productId: 3,
            productName: 'Headphones',
            price: 149.00,
            quantity: 3,
            specifications: {
                brand: 'Sony',
                type: 'Over-ear',
                wireless: true
            }
        }
    ],
    shippingAddress: {
        street: '123 Main Street',
        city: 'Anytown',
        zipCode: '12345'
    },
    orderDate: '2023-08-29'
};

// Calculate the total price of products in the cart     -> 2444

const totalPrice = shoppingCart.items.reduce((price, item)  => price + item.price * item.quantity, 0);
console.log(totalPrice); 


// Find the brands of all the products in the cart  -> [ 'Dell', 'Apple', 'Sony' ]
const brands = shoppingCart.items.map(items => items.specifications.brand)
console.log(brands);


// Find all the items in the cart with their quantity -> [ 'Laptop, 1', 'Smartphone 2', 'Headphones, 3' ]
const itemQuantities = shoppingCart.items.map(item => [item.productName, item.quantity].join(', '));
console.log(itemQuantities);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// More practices ????????????? So confused
// 1. Create a class called shoppingCart that contains shopping data.
    // Data example: [{productID: 1, productName: 'Laptop', quantity: 1}]
// 2. Class should have a function that simulates the adding to the cart (make it asynchronus to 1000 milliseconds)
    // this function adds a new item 
// 3. Class should have a function that simulates the updating the product in the cart. You can use productID to find a product.
// 4. Class should have a function that simulates logging the cart details. It should console.log all the cart items
// 5. Keep adding above examples
class ShoppingCart {
    constructor(){
        this.cart = [];
        this.customerDetails = {name: 'John', address: '1111 Address st, LA, CA 11111'};    // Irrevlevant
    }
    addToCart(product){
        // Promise
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(product){
                    this.cart.push(product);
                    resolve();
                }
                else reject('Cannot add');
            }, 1000);
        });
    }
    updateProduct(productID, quantity, cart){
        for(const product of cart){
            if(product.productID === productID) product.quantity = quantity;
        }  
    }
}

const shopCart = new ShoppingCart();
/*
shopCart
    .addToCart({productID: 1, productName: 'Laptop', quantity: 1})
    .then(() => console.log('shopCart', shopCart))
    .catch((err) => console.log('err', err));

console.log('shopCart', shopCart);

shopCart.updateProduct(1, 2, shopCart);
console.log(shopCart);
//*/
/*
async function main(){
    try{
        await shopCart.addToCart({productID: 1, productName: 'Laptop', quantity: 1});
        console.log('shopCart', shopCart);
    } catch(err){
        console.log(err);
    }
}

main();
//*/