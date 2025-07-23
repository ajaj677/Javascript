// january 1, 1970 utc, date and time is calculated from this moment

/*
Temporal.Now.instant() - get the current system exact time
Temporal.Now.timeZoneId() - get the current system time zone
Temporal.Now.zonedDateTimeISO() - get the current date and wall-clock time in the system time zone and ISO-8601 calendar
Temporal.Now.plainDateISO() - get the current date in the system time zone and ISO-8601 calendar
Temporal.Now.plainTimeISO() - get the current wall-clock time in the system time zone and ISO-8601 calendar
Temporal.Now.plainDateTimeISO() - same as above, but return the DateTime in the ISO-8601 calendar

console.log('Initialization complete', Temporal.Now.instant());
example output:
Initialization complete 2021-01-13T20:57:01.500944804Z

*/

//__________old method: Dates__________//

let myDate= new Date()
console.log(myDate.toString()); //much better version
console.log(myDate.toDateString()); //day month day year
console.log(myDate.toDateString()); //mm/dd/yy
console.log(myDate.toLocaleDateString());
console.log(typeof myDate); //object

// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString()); //day month day year

let myCreatedDate = new Date("01-14-2025")
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDate()); 
console.log(newDate.getDay()); 

// `$1{newDate.getDate()}, ${newDate.getDay()}`
// newDate.toLocaleString("default", {
//     weekday: "long",
// })



v



