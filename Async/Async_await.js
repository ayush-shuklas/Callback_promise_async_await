const datas = [
  {
    name: "ayush",
    age: 20,
  },
  {
    name: "sagar",
    age: 24,
  },
];

function getdata() {
  setTimeout(() => {
    let output = "";

    datas.forEach((data, index) => {
      output += `<h1>${data.name}</h1>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function adddata(obj) {
  return new Promise((resolve, reject) => {
    let error = false;
    setTimeout(() => {
      datas.push(obj);
    });
    if (!error) resolve();
    else reject();
  });
}

async function start() {
  await adddata({ name: "akshaj", age: 10 });
  getdata();
}

start();
