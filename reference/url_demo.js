const url = require('url')

const myurl = new URL('http://mywebsite.com/hello.html?id=100&statues=active');

// Searialized URL
console.log(myurl.href);
// Hostname (rootdomain)
console.log(myurl.host);
// Hostname (does not get port)
console.log(myurl.hostname);
//pathname
console.log(myurl.pathname);
// Params object 
console.log(myurl.Params)
























