const datas = [
  {
    name: "ayush",
    age: 21,
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
      output += `<h3>${data.name}</h3>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function adddata(obj) {
  return new Promise((resolve, reject) => {

    let error = false;
    setTimeout(() => {
      datas.push(obj);
      if(!error)
      {
        resolve()
      }
      else{
        reject("error occured")
      }
    }, 2000);
  });
}

adddata({ name: "utam", age: 24 }).then(getdata).catch((res) => console.log(res))
