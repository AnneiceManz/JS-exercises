//Hello, Object
let user = {};
user.name= "John";
user.surname="Smith";
user.name ="Pete";
delete user.name;

//Check for emptiness
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
        return true;
}

let schedule ={};
alert (isEmpty(schedule));
schedule["8:30"] = "get up";
alert (isEmpty(schedule));

//Sum object properties
let salaries= {
    John: 100,
    Ann: 160,
    Pete: 130
}

function salarySum (obj) {
    let sum=0;
    for (let key in obj) {
        sum+= obj[key];
    }
    return sum;
}

console.log(salarySum(salaries));

//Multiply numeric property values by 2
let menu={
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key]== 'number') {
            obj[key] *= 2;
        }
    }
    return obj
}

console.log(multiplyNumeric(menu))