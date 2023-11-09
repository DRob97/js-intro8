const users = [
    {   // user1
        firstName: 'Tech',
        lastName: 'Global',
        email: 'tech.global@techglobal.com',
        age: 3,
        address: {
            street_line_1: '2800 S River Rd',
            street_line_2: 'Suite 310',
            city: 'Des Plaines',
            state: 'IL',
            zip: '60018'
        }
    },
    {   // user 2
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        age: 47,
        address: {
            street_line_1: '123 Abc St',
            street_line_2: '',
            city: 'Chicago',
            state: 'IL',
            zip: '12345'
        }
    },
    {   // user 3
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'janedoe@gmail.com',
        age: 30,
        address: {
            street_line_1: '123 Abc St',
            street_line_2: '',
            city: 'Chicago',
            state: 'IL',
            zip: '12345'
        }
    },
    {   // user 4
        firstName: 'Alex',
        lastName: 'Smith',
        email: 'alexsmith@outlook.com',
        age: 32,
        address: {
            street_line_1: '456 Xyz St',
            street_line_2: '',
            city: 'Miami',
            state: 'Florida',
            zip: '67890'
        }
    }
];

console.log(users.length);                  // 4

// Count how many users are OLDER than 30
let olderThanThirty = 0;
for(const user of users){
    if(user.age > 30) olderThanThirty++;
}

console.log(olderThanThirty);               // 2

// Count how many users live in Chicago
let liveChicago = 0;
for(const user of users){
    if(user.address.city.toLowerCase() === 'chicago') liveChicago++;
}

console.log(liveChicago);

// Find and store the names of all users younger than 35
const names = [];
for(const user of users){
    if(user.age < 35) names.push(user.firstName);
}

console.log(names);

// Find the average of all ages
let sum = 0;
for(const user of users){
    sum += user.age;
}
let average = sum / users.length;

console.log(average);