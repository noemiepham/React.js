console.log('hello');
const factorial = (num) => {
     let newNum = 1;
     if(num === 1)  {
          return 1
     }
     newNum = num * factorial(num- 1)
     return newNum;
}

const factorial2 = (num) => {
     let i;
     let f = 1;
     for (i = 1; i <= num ; i++) {
          i
         // num = num * i
         f = f * i;
         f
     }
     return f
}

console.log(factorial2(6))