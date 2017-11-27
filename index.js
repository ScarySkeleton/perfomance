let dt = Date.now();

let stringArray = (function() {
    let arr = [];
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const possibleLen = possible.length;
    for (let index = 0; index < 1000000; index += 1) {
        const str = (function(len) {
            let str = '';
            let i = 0;
            while(i < len) {
                str += possible[Math.round(Math.random() * len)];
                i += 1;
            }
            return str;
        })(possibleLen);
        arr.push(str);
    }

    return arr;
})();

console.log("Creating 10 000 strings");
console.log(Date.now() - dt);

dt = Date.now();
stringArray
    .map((str) => {
        return str.toUpperCase();
    })
    .filter((str) => {
        return /^[A-Z]+$/.test(str)
    })
    .forEach((str) => {
        // do smth
        console.log(str);
    })

console.log("JS map + filter + foreach");
console.log(Date.now() - dt);


dt = Date.now();
let stringObservArray = Rx.Observable.from(stringArray);
stringObservArray
    .map((str) => {
        return str.toUpperCase();
    })
    .filter((str) => {
        return /^[A-Z]+$/.test(str)
    })
    .subscribe((str) => console.log(str));

console.log("RxJs map + filter + foreach");
console.log(Date.now() - dt);
