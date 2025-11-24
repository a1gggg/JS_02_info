/*let arr1v = ["1111", '2222', `3333`]
let arr2v = arr1v[Math.floor(Math.random()*arr1v.length)]
let p1 = document.querySelector(".p1");
p1.innerHTML = arr2v;

  
function name1111() {
  let aa = +prompt("","")
  let bb = +prompt("","")
  let ccc =(Math.random() * (bb - aa) + aa)
  alert (ccc)
}

name1111 ()
*/

/*
function sumInput() {
let arr = [];
for (let index = 1; index > 0; index++) {
  let value = prompt('2','')
  if (value === null || value.trim() === "" || !isFinite(value)) {
  let sum = 0;
  for (let value of arr) {
  sum += value;}
  alert(sum)
  break
  }
  else {arr.push(+value)}
}}

sumInput()*/
/*
let arr1 = [-1, 2, 3, -9] //5 

function getMaxSubSum(arr) {
  let sum = 0;
  let rez = 0;
  for (let key of arr) {
    rez += key;
    sum = Math.max(sum, rez);
    if(rez < 0) rez = 0;
    }
    console.log(sum)
}

getMaxSubSum(arr1) 


function getMaxSubSum(arr) {
  let maxSum = 0; // якщо елементи відсутні - повертаємо 0

  for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;
    for (let j = i; j < arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }

  console.log (maxSum);
}
let arr1 = [-1, 2, 3, -9] //5 
getMaxSubSum (arr1) 


let userName = ['Ruslan', 'Galina', 'Julia',]
let fdsfds = userName.join('; ');
console.log(fdsfds  )*/

let asdr = 'list-style-image';

function camelize(str) {
  let str1 = str.split('-');
  let str2 = str1.map(item => item.charAt(0).toUpperCase() + item.slice(1));
  let str3 = str2.join('');
  return str3;
}
let dfg = camelize(asdr);
console.log(dfg);
