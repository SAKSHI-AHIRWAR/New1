 let button=document.querySelectorAll('button')
let inp=document.querySelector('input')
for(let btn of button)
{
btn.addEventListener('click',(e)=>{
let text=e.target.innerText
console.log(text);
if(text==='C'){
inp.value=''
}
else if(text==='='){
inp.value=eval(inp.value)
}
else{
inp.value=inp.value+text
}
})
}