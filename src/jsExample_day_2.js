/* 1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz 
bir fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı 
olarak asal olup olmadığını yazınız. 
Örnek kullanım : findPrime(2,5,8,21, 13) findPrime(3,5)*/

function numbers(...numbers) {
    numbers.forEach(element => {
      let prime = findPrime(element)
      if (!prime) {
        console.log("yes find Prime: " + element)
    }else{
        console.log("not find prime: " + element)
    }
    });
    
}

function findPrime(element) {
    var prime = false;
    for (let index = 2; index < element; index++) {
        if (element % index == 0 ) {
         return prime = true       
        }else{
            prime = false
        }
    }
}

//numbers(2,3,5,11,9,62,84,91)


//2-Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.



function numberFactor(number) {
        let total = 0;
        for(let index = 0; index <= number; index++) {
            if (number % index == 0){
                total +=index;
            }
        }
        return total;        
    }

function friendNumber(numberOne,numberTwo) {
    let numberFactorOne = numberFactor(numberOne);
    let numberFactorTwo = numberFactor(numberTwo);
    if (numberFactorOne == numberFactorTwo) {
        console.log("Yes friend numbers");
    }else{
        console.log("No friend number");
    }
}

//friendNumber(284,220); //Yes friend numbers
//friendNumber(285,220); //No friend numbers



//3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.

function perfectNumber() {
    
    for (let index = 1; index < 1000; index++) {
        if (index * 2 == numberFactor(index)) {
            console.log("Perfect number : " + index);
        }
        
    }
}

//perfectNumber(); // 6 , 28 , 496




//4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.

function primeNumberAll() {
    for (let index = 2; index < 1000; index++) {
        let prime = findPrime(index)

      if (!prime) {
        console.log("yes find Prime: " + index)
    }else{
        console.log("not find prime: " + index)
    }        
    }
}

//primeNumberAll();