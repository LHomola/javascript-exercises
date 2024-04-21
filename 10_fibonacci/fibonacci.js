const fibonacci = function(input) {
    const num = parseInt(input);
    if (num === 0) return 0;
    if (num) {
        if (num < 0) {
            return "OOPS";
        } else {
            let fib1 = 0;
            let fib2 = 1;

            for (let i = 1; i < num; i++) {
                let tmp = fib1;
                fib1 = fib2;
                fib2 = tmp + fib2;
            }

            return fib2;
        }
    }
};

// Do not edit below this line
module.exports = fibonacci;
