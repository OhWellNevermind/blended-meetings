//  порахуйте всі позитивні або негативні значення

const nums = [-90, 45, 0, 16, -18, 24, -67, 43];

function calcPozNeg(arr) {
    return arr.reduce((acc, item) => {
        if (item < 0) {
        return {...acc, neg:acc.neg + item}
        }
        else {
            return {pos: acc.pos + item, neg: acc.neg}
        }
    }, {pos:0, neg:0})
}
console.log(calcPozNeg(nums))
