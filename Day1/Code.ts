
export {};

// funcations have length
const naming = function (params: () => void, sum?: number) {
    console.log(params.length); // length == 0

    return function (...args: Array<number>) { // We can also get arguments are array
        console.log(args.length); // length == 3
    }
}

const voidFun = function () {}
console.log(naming.length); // length == 2

naming(voidFun)(1,2,3)


// functions are Object(Function) in javascript
func