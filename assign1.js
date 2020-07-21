console.log("fetch");
async function fetchrandom(){
const response= await fetch('https://jsonplaceholder.typicode.com/todos');
const data= await response;
console.log(data);
}
fetchrandom();