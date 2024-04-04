const mongoose = require('mongoose');

const url="mongodb+srv://techmaddy786:Maddy786@mirza786.iaccnfc.mongodb.net/mynewdatabase?retryWrites=true&w=majority&appName=Mirza786";

// asynchronous functions - return Promise
mongoose.connect(url)
.then((result) => {
    console.log('database connected');
    
}).catch((err) => {
    console.log('err');
    
});

console.log('last line');
    