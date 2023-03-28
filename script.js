const numbers= document.querySelectorAll('.item_numbers');
const result=document.querySelector('.result span')
const sign= document.querySelectorAll('.item_sign');
const equal= document.querySelector('.item_equals');
const reset= document.querySelector('.item_AC');
const amduong=document.querySelector('.item_amduong')
const pt= document.querySelector('.item_pt')
console.log(sign)


let FirstValue="";
let isFirstValue= false;
let isSecondValue= false;
let SecondValue="";
let signValue ="";
let resultValue="";
for (let i=0; i< numbers.length; i++) {
    numbers[i].addEventListener('click',(e)=>{

        let alt= e.target.getAttribute('value');
        if(isFirstValue===false) {
            getFisrtValue(alt);
        }
        console.log(FirstValue)
        if(isSecondValue == false) {
            getSecondValue(alt);
        }
        
    })
    }

function getFisrtValue(el) {
    result.innerHTML = "";
    FirstValue+=el;
    result.innerHTML = FirstValue;
    FirstValue= +FirstValue;
}
function getSecondValue(el) {
    if(FirstValue != "" && signValue != "") {
      
        SecondValue += el;
        result.innerHTML = SecondValue;
        SecondValue = +SecondValue;
    }
}
function getSign(){
    for(let i=0;i < sign.length;i++) {
        sign[i].addEventListener('click',(e)=>{
         signValue= e.target.getAttribute('value');
        isFirstValue=true;
        })
        
}
}
    getSign();



equal.addEventListener('click', () => {
    result.innerHTML = "";
    if(signValue==="+"){
        resultValue =FirstValue + SecondValue;
    }else
    if(signValue==="-"){
        resultValue =FirstValue - SecondValue;
    }else
    if(signValue==="X"){
        resultValue =FirstValue * SecondValue;
    }else
    if(signValue==="/"){
        resultValue =FirstValue / SecondValue;
    }
    result.innerHTML=resultValue;
    FirstValue=resultValue;
    SecondValue="";
})
reset.addEventListener('click', ()=>{
    result.innerHTML = "0";
    FirstValue="";
    SecondValue="";
    isFirstValue= false;
    isSecondValue= false;
    signValue ="";
    resultValue="";
})
amduong.addEventListener('click', ()=>{
    if(FirstValue!=""){
        FirstValue=0-FirstValue;
        result.innerHTML=FirstValue;
    }
})
pt.addEventListener('click', ()=>{
    if(FirstValue!=""){
        FirstValue=FirstValue/100;
        result.innerHTML=FirstValue;
    }
})