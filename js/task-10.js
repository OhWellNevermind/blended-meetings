const arrNumer = [2, 0, 5, -4, 9, -12, 13, 8, -9];
function calcPozNeg(arrey) {
    return arrey.reduce((acc, item) => {
        if (item > 0) {
         return {...acc, poz: acc.poz + item} 
        } else {
return {poz: acc.poz , neg: acc.neg + item}
        };
    }, { poz: 0, neg: 0 });
    
}
console.log(calcPozNeg(arrNumer));


