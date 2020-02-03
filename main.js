import customers from './customers.js';

// extract just the customers' contact email addresses 
// and store them in a new array. 

let emailList = [];

let emailArys = customers.map(customer => customer.contacts.email)
emailArys.forEach(ary => {
    ary.forEach(email => {
        emailList.push(email);
    })
})

console.log("Email List Final: ", emailList)


// You will need a nested array method - 
// meaning one iteration inside another one - 
// since you need to iterate the entire array of customers, 
// and then iterate the array of emails for each one.