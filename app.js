/* 
2 - yu
3 - gi
5 - oh
*/
const randomFunction = (int) => {
    const data = [];
    //output for divisible by 2 3 & 5
    //output for divisible by 2 & 3
    //output for divisible by 2
    //output for divisible by 3
    //output for divisible by 5
    //output for divisible by 'nun'

    for(let x = 1; x <= int; x++) {

        //checks if x is divisible by 2, 3 and 5
        if(x % 2 == 0 && x % 3 == 0 & x % 5 == 0){
            data.push('yu-gi-oh');
        }

        //checks if x is divisible by 2 and 3
        else if(x % 2 == 0 && x % 3 == 0){
            data.push('yu-gi');
        }

        //checks if x is divisible by 2
        else if(x % 2 == 0){
            data.push('yu');
        }

        //checks if x is divisible by 3
        else if(x % 3 == 0){
            data.push('gi');
        }

        //checks if x is divisible by 5
        else if(x % 5 == 0){
            data.push('oh');
        }

        //x is not divisible
        else{
            data.push(x);
        }
    }

    return data;

}

console.log(randomFunction(100));
console.log(randomFunction(20));
