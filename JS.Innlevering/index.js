function konvertering() {
    const gallon = 3.78541178;
    const ounces = 0.035274;
    const cups = 0.236588;
    const spiseskjeer = 0.0147868;
    // her skrev jeg listen for alle type måleenheter som en funksjon.

    const input = document.getElementById("input").value;
    const from = parseFloat(document.getElementById("from").value);
    
    let output;

    // Palindrom check.
    const isPalindrom = checkIfPalindrom(input);
   
    if (from === gallon) {
        output = input * gallon;
    } else if (from === ounces) {
        output = input * ounces;
    } else if (from === cups) {
        output = input * cups;
    } else if (from === spiseskjeer) {
        output = input * spiseskjeer;
    }

    const resultElement = document.getElementById("result");
    resultElement.innerHTML = output + " Liter";

     // denne her bestemer om tallet som blir skrevet ut er en palindrom tall eller ikke
    const palindromElement = document.getElementById("palindrom-message");
    palindromElement.textContent = isPalindrom ? "Dette er et palindrom tall!" : "Dette er ikke et palindrom tall";
}

//paldinrom check string
function checkIfPalindrom(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
