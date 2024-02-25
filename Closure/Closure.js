console.log("closure")

const data = function sum(a)
{
    document.getElementById("first").innerHTML  = `<h1> returned first ${a}</h1>`
    var c = 6;
    return function(b)
    {
        console.log(`the sum is  ${a+b+c}`)
    }
}
const retfunct = data(5);
retfunct(4)


const secondfunc = function(a,b,c)
{
    return{
        firstfunction:function()
        {
            return a+b
        },
        secondfunction:function()
        {
            return a+b+c
        }
    }
}

const secondrefunction = secondfunc(5,4,3)

console.log(secondrefunction.firstfunction());
console.log(secondrefunction.secondfunction())

document.getElementById("second").innerHTML = secondrefunction.firstfunction()
document.getElementById("second1").innerHTML = secondrefunction.secondfunction()