const data = {
    name:"ayush",
    age:23,
    location:"pune",
    firstfunction : function()
    {
        console.log(this.age)
    }
}

const data1 = {
    name:"Akshaj",
    age:24,
    location:"hinjewadi",
    firstfunction : function()
    {
        console.log(this.name)
    }
}

data.firstfunction.call(data1);

/////////// if outsid the object

const d1  = {
    name:"ayush",
    age:24
}

const d2 = {
    name:"sagar",
    age:25
}

const newdata = function(...place)
{
    console.log(this.name + " from "+ place);
}

newdata.call(d1,"Pune");
newdata.call(d2,"Indore")

// /* Apply */ instead of passing one argument we can pass a array

newdata.apply(d1,["indore","India"])

///////////////////////////////////////////////////////////////////////////////////////////
// BIND

let bindcall = newdata.bind(d2);
bindcall();