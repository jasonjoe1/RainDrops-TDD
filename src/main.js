'use strict'

module.exports ={
    RainDrops: (number) =>{
        let result ="" ;
        if (number % 3 === 0) {
            result += 'Pling';
        }
        if (number % 5 === 0) {
            result += 'Plang';
              }
              if (number % 7 === 0) {
                  result += 'Plong';
              }
              if (number%3!==0 && number%5!==0 && number%7!==0){
                return number;
              }
              if (result === '') {
                return number.toString();
              }else {
                  return result;
              }
        return result;
    }
};