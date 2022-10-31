//  console.log(" hello day 3");

let age = 169;

if (age < 18){

    console.log("child ticket price is : £8");

}
else if (age >= 18 && age < 60){

    console.log(" adult ticket price is: £10.99");
}
else 
console.log("senor ticket price is: £7.50");

const pressGrindBeans = () => {

    console.log("grinding for 20 seconds");
}

pressGrindBeans(); 

const favColor = () => {

    console.log("my favvourite color is red");

    
}
favColor(); 

let cofeeIsGrinding = false;

const pressGrindBeans = () => {

    if (cofeeIsGrinding){

console.log("stop the grind");
cofeeIsGrinding = false
    }
    else {
        console.log("grinding is about to to begin");
        cofeeIsGrinding = true
    }
}

pressGrindBeans();
pressGrindBeans();
pressGrindBeans();
pressGrindBeans();

let accnumber = 50449921;

const cashWithdrawal = (amount, accnum) => {

    console.log(`withdraw ${amount} from ${accnum}`);

}
cashWithdrawal(20, accnumber);
cashWithdrawal(100, 50449921);

const addUp = (num1, num2) => {

return num1 + num2;


}

addUp(79,31);
console.log(addUp(79, 31));



const reverseStringDemo = (str) => {

    const strArry = str.split("");
    console.log(strArry);

    const revArray = strArry.reverse();
    console.log(revArray);

    const revString = revArray.join("");
    console.log (revString);

    return revString;
}

console.log(reverseStringDemo("hello world"));





              // activity 1

function factorial (n){

    if ((n === 0) || (n===1)){
        return 1;
    } else {
        return(n * factorial(n-1));

    }
}              
console.log(factorial(33));
