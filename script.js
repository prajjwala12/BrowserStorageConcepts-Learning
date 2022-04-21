// Local Storage - gets deleted when done manually 
// To add some data in key-value format 
localStorage.setItem('name', 'Bob')
//  To retrieve the data sored on local storage
localStorage.getItem('name', 'Bob')
// to check if it's working or not but console-logging it
console.log(localStorage.getItem('name', 'Bob'))
//  to remove/ delete the data stored
localStorage.removeItem('name', 'Bob')


// Session Storage - gets deleted when tab is closed 
// To add some data in key-value format 
sessionStorage.setItem('name', 'Kyle')
//  To retrieve the data sored on local storage
sessionStorage.getItem('name', 'Kyle')
// to check if it's working or not but console-logging it
console.log(sessionStorage.getItem('name', 'Kyle'))
//  to remove/ delete the data stored
sessionStorage.removeItem('name', 'Kyle')

// for both local and session storage, the data can be overwritten by -
//  1) Local
localStorage.setItem('name', 'Praveen')
localStorage.setItem('name', 'Kumar')

// 2) Session
sessionStorage.setItem('name', 'Neel')
sessionStorage.setItem('name', 'Mark')


// Cookies - expire when the expiration date is set manually. Cookies are smaller in size. Sent with request. Saved on server and browser, both.
document.cookie = 'name=Kyle'
document.cookie = 'lastName=Zuckerberg'
// name, value, domain, path, expiration date, size.
//  we can specify expiration date like shown below
document.cookie = 'name=Kyle; expires=' + new Date(2020, 0, 1).toUTCString()
// using 0 above because 0 index = January!
