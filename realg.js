let username = 'Aishat';
let welcome = prompt('what is your name?');
if (welcome == 'Aishat') {
    alert('Hi ' + welcome + ',Now solve this equation:');
} else {
    alert('This question is not for you');
}
console.log(welcome)
//now we solve the equation
var a, b, c;
var outputText
function validate() {
    //get input from user through the form in our html
    a = document.forms['inputForm']['aterm'].value; //form name and the array of form
    b = document.forms['inputForm']['bterm'].value;
    c = document.forms['inputForm']['cterm'].value;
    //validate the input
    if (a == 0) {
        outputText = 'a cannot equal 0';
    } else if (isNaN(a)) {
        outputText = 'a must be a number';
    }
    if (b == 0) {
        outputText = 'b cannot equal 0';
    } else if (isNaN(b)) {
        outputText = 'b must be a number'
    }
    if (c == 0) {
        outputText = 'c cannot equal 0';
    } else if (isNaN(c)) {
        outputText = 'c must be a number'
    }
    //solve using the almighty formula x=-b+- sqrt bsqr -4ac
    let x1 = (-b + (Math.sqrt(Math.pow(b, 2)) - 4 * a * c)) / (2 * a);
    let x2 = (-b - (Math.sqrt(Math.pow(b, 2)) - 4 * a * c)) / (2 * a);
    outputText = 'For the equation ' + a + 'x\u00B2 +' + b + 'x +' + c + ' =0 ,x can equal' + x1 + ' or ' + x2 + '';
    //add+ before and after the variable tp call the array a==1?'';a i.e
    // if a =1 output nothing else output a
    //get our outputtext or error
    document.getElementById('outputText').innerHTML = outputText;







}