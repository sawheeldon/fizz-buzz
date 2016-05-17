/* for (var counter =1; counter <=100; counter++){
    if ((counter % 3 == 0) && (counter % 5==0)){
        console.log("Fizz-Buzz");
    }
    else if (counter % 5 == 0){
        console.log("Buzz");
    }
    else if (counter % 3 == 0 ){
        console.log("Fizz");
    }
    else{
        console.log(counter);
    }
} */


/*for (var counter =1; counter <=100; counter++){
    if ((counter % 3 == 0) && (counter % 5==0)){
        console.log("Fizz-Buzz");
    }
    if (counter % 5 == 0){
        console.log("Buzz");
    }
    if (counter % 3 == 0 ){
        console.log("Fizz");
    }
    (var counter)
} */

for (var counter = 1; counter <= 100; counter++) {
    //set the default value first
    var msg = counter;
    //over-write the default values as we go through the logic
    if (counter % 3 == 0) {
        msg = "Fizz";
    }
    if (counter % 5 == 0) {
        msg = "Buzz";
    }
    if ((counter % 3 == 0) && (counter % 5 == 0)) {
        msg = "FizzBuzz";
    }
    console.log(msg);
}
