// #1 - What will the console display and why?

for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    })
};

// #1 - Answer: 

//The console will display the number 10 ten times because the setTimeout function captures the variable i by reference, and when the functions execute, i will have the final value of 10.


// #2 - Write a JavaScript program to display the current day and time in the following format.

/*   
    Sample Output : 
    Today is: Friday. 
    Current time is: 4PM:50:22
*/

// #2 - Answer:

{
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date();

    const today = days[date.getDay()];
    let hours = date.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    console.log(`Today is: ${today}.`);
    console.log(`Current time is: ${hours}${ampm}:${minutes}:${seconds}.`);
}


// #3 - Write a JavaScript function that reverse a number. 

/*   
    Example x = 32243;	
    Expected Output : 34223
*/

// #3 - Answer:

{
    function reverseNumber(num) {
        const reversedString = String(num).split('').reverse().join('');
        return parseInt(reversedString, 10);
    }

    const x = 32243;
    const reversedNumber = reverseNumber(x);

    console.log("Original number:", x);
    console.log("Reversed number:", reversedNumber);

}


// #4 - Write a JavaScript program to calculate the factorial of a number. In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n.

/*   
    For example, 5! = 5 x 4 x 3 x 2 x 1 = 120 
*/

// #4 - Answer:

{
    function factorial(num) {
        if (num === 0 || num === 1) {
            return 1;
        }

        let result = num;
        for (let i = num - 1; i >= 2; i--) {
            result *= i;
        }

        return result;
    }

    const num = 5;
    const factorialOfNum = factorial(num);
    console.log(`${num}! = ${factorialOfNum}`);

}


// #5 -  Write a JavaScript program that accepts two integers in prompt() and alert the larger one.

// #5 - Answer:

{
    const num1 = parseInt(prompt("Enter the first integer:"));
    const num2 = parseInt(prompt("Enter the second integer:"));

    const largerNumber = (num1 > num2) ? num1 : num2;

    alert(`${largerNumber} is larger.`);

}


// #6 - Write a simple JavaScript program to join all elements of the following array into a string. 

/*   
    Sample array: myColor = ["Red", "Green", "White", "Black"];
    Expected Output : 
    "Red,Green,White,Black"
    "Red+Green+White+Black"
*/

// #6 - Answer:

{
    const myColor = ["Red", "Green", "White", "Black"];

    const withComma = myColor.join(",");
    const withPlus = myColor.join("+");

    console.log(`"${withComma}"`);
    console.log(`"${withPlus}"`);

}


// #7 - Write a JavaScript function to get the month name from a particular date. 

/*   
    Test Data :
    console.log(month_name(new Date("10/11/2009"))); 
    console.log(month_name(new Date("11/13/2014")));
    Output :
    "October" 
    "November"
*/

// #7 - Answer:

{
    function month_name(date) {
        return date.toLocaleString('en-US', { month: 'long' });
    }

    console.log(month_name(new Date("10/11/2009")));
    console.log(month_name(new Date("11/13/2014")));

}


// #8 - Write a JavaScript program to test the first character of a string is uppercase or not.

// #8 - Answer:

{
    function isFirstUppercase(str) {
        const firstCh = str.charAt(0);
        return firstCh === firstCh.toUpperCase();
    }
}

// #9 - Write a JavaScript program to draw a smile

/*   
    console.log(“: )”)
*/

// #9 - Answer:
{
    console.log(": )");
}

