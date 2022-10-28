
// //console.log (" hello world".toLocaleUpperCase());


// console.log(Math.floor(Math.random()*10)+1);


// console.log (" All Around The World".charAt(7).toUpperCase());

const pipe = ["|     |"]
const dash = ["-------"]

let pipcount = 0;
let dashcount = 0;

const print = () =>{

    for (pipcoount = 0; pipcount <=2; pipcount++)
    console.log(pipe)
    if (dashcount <=1){
        console.log(dash);
        dashcount++

    } else { 
        console.log("end here");

    }
}

print();