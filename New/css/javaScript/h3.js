//let arr = [1, 2, 3, 4, 5, 6, 6, 7, 'string', true]
//console.log(5);
//for(let i=0;i<5;i++)

//printing index 
//for (let i in arr) { console.log(i); }

//printing value
//for (let i of arr) {
//console.log(i);
//}
//**conditional operator */
//let a = 80;
//if (a > 90) 
//{
   // console.log('A');
//} 
//else if (a >= 85) 
//{
    //console.log('B');
//} else if (a > 70) 
//{
    //console.log('B');
//} 
//else(console.log('byee'))
//}

//* call backfunction imp(basic function)*


// function outer(a){
// console.log('heyyy!');
// a()
// }
// outer(function inner()
// {
// console.log('inner');
// })

//*Asynorouns programming* use for delay the code 

//console.log('two');
// setTimeout(()=>{
// console.log('one');
// },2000)
// setInterval(()=>{
// console.log('heheee');
// },200)
// console.log('three');
// let id= setInterval(()=>{
// console.log('heyyy!!!');
// },500)
//clearInterval(id)
   

// function step1(a){
// return new Promise((res,rej)=>{
// setTimeout(()=>{
// res("photo selected");
// a()
// },4000)
// })
// }
// function step2(b){
// return new Promise((res,rej)=>{
// setTimeout(()=>{
// res("filter");
// b()
// },4000)
// })
// }
// async function kalajadu(){
// let data=  await step1()
// console.log(data);
// let data1= await step2()
// console.log(data1);
// }
// kalajadu()

//*****DOM*****(DOCUMENT OBJECT MODEL)**************
// document.getElementById('one')
// console.log(btn,"btnnnn");
//let btn=document.getElementsByClassName('two')
// console.log(btn,"btnnnn");
//let btn= document.querySelector('button')
// let btn= document.querySelectorAll('button')
// console.log(btn,"btnnnn");
let btn=document.querySelectorAll('h1')
for(let i of btn){
i.style.color='red'
}
