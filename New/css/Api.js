 let inp=document.querySelector('input')
let btn=document.querySelector('button')
btn.addEventListener('click',()=>{
let city=inp.value
let ApiKey='41c8b43e17c3038d116b23133ec7117a'
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}`)
.then((res)=>{
return res.json()
}).then((data)=>{
console.log(data,"datta");
})
})