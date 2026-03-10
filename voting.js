const age = 16;
const isRegistered = true;
if (age >=18 && isRegistered) {
    console.log("You may vote");
}else if(age >= 18 && !isRegistered) {
    console.log("You are old enough but not registered");
}else{
    console.log("You are not old enough to vote")
}