const datas = [
  {
    name: "ayush",
    age: 20,
  },
  {
    name: "sagar",
    age: 21,
  },
];

function getdata() {
  setTimeout(() => {
    let output = "";
    datas.forEach((data, index) => {  
       output += `<li>${data.name}</li>`;
    })
    document.body.innerHTML = output
  }, 1000);
}

function adddata(obj,callback){
    setTimeout(() => {
        datas.push(obj);
        callback(); 
    }, 2001);
    

}

adddata({name:"saurabh",age:24},getdata)


