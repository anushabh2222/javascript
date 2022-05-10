function sum(...args)
{
    console.log(args);
    let sum=0;
    for(const arg of args)
    {
        sum+=arg;
    }
    return sum;
}
console.log(sum(1,7,8,1)); 
// rest operator:converts the multiple values in to array and do addition