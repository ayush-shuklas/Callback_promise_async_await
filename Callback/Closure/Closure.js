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