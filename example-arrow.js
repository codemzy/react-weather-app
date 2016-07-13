
var names = ["Emma", "Andrew", "Julie"];

//normal function
names.forEach(function(name) {
    console.log('normal ' + name);
});

// arrow function - can be used in place of an anonomous function
names.forEach((name) => {
    console.log('arrow ' + name);
});

// arrow function short hand for one line
names.forEach((name) => console.log(name));

// simple arrow function expression returned
var returnMe = (name) => name + '!';
console.log(returnMe("Emma"));

// aroow functions take on the parents this binding

var person = {
    name: 'Andrew',
    greet: function() {
        names.forEach(function(name) {
            console.log(this.name + ' says hi to ' + name);
        });
    }
};

// undefined says hi to Emma
// undefined says hi to Andrew
// undefined says hi to Julie
person.greet();
// inside the forEach function that is inside the greet function 
// we dont have access to this.name from the parent object (we could use bind(this))

// or we can use arrow function

var personArrow = {
    name: 'Andrew',
    greet: function() {
        names.forEach((name) => {
            console.log(this.name + ' says hi to ' + name);
        });
    }
};

// Andrew says hi to Emma
// Andrew says hi to Andrew
// Andrew says hi to Julie
personArrow.greet();

// CHALLENGE

function add (a, b) {
    return a+b;
}

console.log(add(1, 3));

// addCurly Arrow function
var addCurly = (a, b) => {
    return a+b;
};
console.log(addCurly(1, 3));

// addExpression Arrow function
var addExpression = (a, b) => a + b;
console.log(addExpression(1, 3));

// all the above functions do the same thing and the result is 4 each time