let fruit={ //object
    name:'apple',//property
    color:'pale red',//property
    healthy:function()
    {
        console.log(fruit.name)
    }
}
fruit.healthy();
let fruit1={
    name:'cherry',//property
    color:'red',//property
    healthy:function()
    {
        console.log(fruit.name)
    }
}
fruit.healthy();//if i call fruit object it is printing the first object 



console.log('----------------------------');
let fruit2={
    name:'apple',//property
    color:'pale red',//property
    healthy:function()
    {
        console.log(this.name)
    }
}
fruit2.healthy();
let fruit3={
    name:'cherry',//property
    color:'red',//property
    healthy:function()
    {
        console.log(this.name)
    }
}
fruit3.healthy();//if i call fruit object it is printing the first object 
//this will always refers tothe current object








