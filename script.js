window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
let prom1 = new Promise(resolve => {
	setTimeout(()=>{
		resolve("promise 1");
	},5000)
})
let prom2 = new Promise(resolve => {
	setTimeout(()=>{
		resolve("promise 2");
	},2000)
})
let prom3 = new Promise(resolve => {
	setTimeout(()=>{
		resolve("promise 3");
	},3000)
})
let prom4 = new Promise(resolve => {
	setTimeout(()=>{
		resolve("promise 4");
	},1000)
})
let prom5 = new Promise(resolve => {
	setTimeout(()=>{
		resolve("promise 5");
	},4000)
})


Promise.any([prom1,prom2,prom3,prom4,prom5])
.then((res)=>{
	let div = document.getElementById('output');
	div.innerText = res;
})






