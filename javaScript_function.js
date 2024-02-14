// ! Reference W3schools!;
// Function Invocation

/*  
    ? The code inside the function will execute when "something" invokes (calls) the function:
    * When it is invoked (called) from JavaScript code;
    * When an event occurs (when a user clicks a button);
    * Automatically (self invoked);
*/

// Invocked (called) function;

function aSimpleFunction(yourName, userName = '@Unknown'){
    console.log(userName + ' Hello ' + yourName);
    return
};
aSimpleFunction('Yeasin!', '@axisus :');
aSimpleFunction( ' ', '@axisus');

// Event occurs function;

function youAreHacked() {
    alert('Your Are Hacked')
}
document.getElementById('btn').addEventListener('click', youAreHacked)

// Self invoked function;