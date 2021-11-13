//console.log("Hello world")

 
var dolarDun = 9.20
//console.log(dolarBugun)
var dolarBugun = 10
//console.log(dolarBugun)

if (dolarDun == 12) {
   // console.log("naber")
    
}  

let krediler = ["konut kredisi","Haram kredi","Helal olmayan kredi"]
krediler.forEach(element => {
    //console.log(element)
});

for (let index = 0; index < krediler.length; index++) {
    const element = krediler[index];
    console.log(element)
}

//console.log(krediler)


function add2(number1 , number2) {
    console.log(number1+number2)
}

function add(...numbers) {
    console.log(numbers)
}

function addFor(...numbers) {
    let sum = 0;
    for (let index = 0; index < numbers.length; index++) {
        console.log(numbers[index])
        sum +=numbers[index]
    }
    console.log(sum)
}



//addFor(20,30,40);

let arrayOne = [5,6,90,4,78]
console.log(Math.max(...arrayOne))


