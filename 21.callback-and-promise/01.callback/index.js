function fibonachi(x){
    let number = 1;
    let temporary = 0;
    for (let i = 0; i < x; i++) {
        let hasil = temporary + number;
        temporary = number;
        number = hasil
    }
    return number;
}
function fibonachiAsync(x, callback) {
    setTimeout(() => {
        const result = fibonachi(x)
        callback(result)
    },0)
}

function plus(a, b) {
    return a + b;
}
function plusAsync(a, b, callback) {
    setTimeout(() => {
        const result = plus(a,b)
        callback(result)
    }, 0)
}

fibonachiAsync(1000, function(result) {
    console.log('fibonachi 1k', result)
})
const hasilFibonachi10 = fibonachi(10)
console.log('fibonachi 10', hasilFibonachi10)
console.log('=====================')


fibonachiAsync(10, function(result) {
    plusAsync(result, 10, function(hasilTambah) {
        console.log('hasil pertambahan', hasilTambah)
        plusAsync(result, 10, function(hasilTambah) {
            console.log(`hasil pertambahan`, hasilTambah)
        })
    })
})