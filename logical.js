let hasTicket = true;
let age = 15;
let isViIp = false;
let isChaperoned = true;

if (isViIp){
    console.log(" VIP access granted");
}
else if(age >= 18 && hasTicket){
    console.log("You may enter the concert")
}else if(age < 18 && hasTicket && isChaperoned){
    console.log("You may enter with a chaperone");
}else {
    console.log("Entry denied")
}