
function sum(a, b){
    if( a && b) {
        return a + b;
    } else return null;
    
}


function convertToArray(...args){  


    return args.map( element => element + 1)
}


async function getFoo() {
    return 'foo'
  }



async function getFooThrowException(res) {
    // if(res.err){
        throw new Error("There is a exception")
    // } else {
    //     return "No exceptions"
    // }
}



// console.log(sum(10, 20));

module.exports = {
    sum: sum,
    convertToArray: convertToArray,
    getFoo: getFoo,
    getFooThrowException: getFooThrowException
}


// Invocation of the code     -   Setup
// Performaformt eh action    - perform Action
// Verified the output was as we expected - Assertions