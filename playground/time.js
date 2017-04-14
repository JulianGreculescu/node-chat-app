var moment = require('moment');
// var date = new Date();
// console.log(date.getMonth());

var date = moment(123456789);
console.log(date.format('h:mm A'));