

for(var i = 1; i <=50; ++i) {
    if(i % 15 === 0) {
        console.log("Fizz Buzz");
    } else if(i % 3 === 0) {
        console.log("Fizz");
    } else if(i % 5 === 0) {
        console.log("Buzz");
    }
}
const display = (idx) => {
    let nbr = `${idx}`;
    if(idx % 3 == 0 && idx % 5 == 0) {
        nbr = `FizzBuzz`;
    } else if(idx % 3 == 0) {
        nbr = `Fizz`;
    } else if(idx % 3 == 0) {
        nbr = `Buzz`;
    }
    const fb = () => {
        for(let idx = 1; idx <= 50; idx++) {
            display(idx);
        }
    }
}