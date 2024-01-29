var Name = prompt("Name:");

function greetUser(userName) {
    return "Assalamalikum, " + userName + " hope you are doing fine welcome to my website";
}
    var greetings = greetUser(Name);
    document.write(greetings);



    function isPrime(number) {
        if (number <= 1) return false; 
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false; 
        }
        return true; 
    }
    const userNumber = (prompt("Enter a positive integer:"));

        const resultMessage = isPrime(userNumber) ? "is true" : "is false";
        document.write(`<br>' ${userNumber} ${resultMessage} `);
 