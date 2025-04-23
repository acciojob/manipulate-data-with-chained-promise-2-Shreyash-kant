//your JS code here. If required.
const div = document.getElementById("output");
const arr = [1,2,3,4];
function filterOut(){
	return new Promise(resolve=>{
		let evenArr = arr.filter(x=>x%2===0);
		setTimeout(()=>resolve(evenArr),1000);
	});
}
function doubleEven(array){
	return new Promise(resolve=>{
		let doubleArr = array.map(x=>x*2);
		setTimeout(()=>resolve(doubleArr),2000);
	})
}
filterOut().then((even)=>{
	div.textContent = even;
	return doubleEven(even);
}).then((doubleData)=>{
	div.textContent = doubleData;
})