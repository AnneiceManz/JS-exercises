

// Create a function that calculates how many minutes have elapsed from midnight until right now.
// The function should still return an accurate answer,
// even if you ran it a few minutes or hours later.



//create variable for new date instance for current time
let now = new Date() 

//creates and gets information about date at midnight
let then = new Date( 
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        0,0,0
        );

// gets difference of two times in milliseconds and stores in sinceMidnight variable
let sinceMidnight = now.getTime() - then.getTime(); 

//function takes in milliseconds
function millToMins (mill) { 
    //convert milliseconds to minutes and stores in in min variable
    let mins= Math.floor(mill /60000);
    return mins
}

//call function millToMins using variable diff witch stores the current milliseconds since midnight
    console.log(millToMins(sinceMidnight));