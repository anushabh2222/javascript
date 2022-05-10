console.log("---------------------------------------1st example only passing object call(obj)");
let names={
    firstname:'priya',
    lastname:'mohan'
}
let printname=function()
{
    console.log(this.firstname+""+this.lastname);
}
printname.call(names);

console.log("---------------------------------------2nd example passing objects and argument  call(obj,arg,arg)");
let names1={
    firstname:'priya',
    lastname:'mohan'
}
let printnames=function(state)
{
    console.log(this.firstname+""+this.lastname+""+state);
}
printnames.call(names1,'karnataka');   //function borrowing



