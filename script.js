let btn =document.querySelector('#submit');


let result=document.querySelector('.result')
btn.addEventListener('click',()=>{
    let height=parseInt(document.querySelector('#height').value);
    let weight=parseInt( document.querySelector('#weight').value);
    if(height===''|| height < 0|| isNaN(height)){
        console.log(`${height} ${weight}`)
        result.innerHTML=`<div>please enter valid height`;
        
    }
    else if(weight===''|| weight < 0||isNaN(weight)){
        result.innerHTML=`please enter valid weight`;
    }
    else{
        let bmi=(weight/((height*height)/10000)).toFixed(2)
        result.innerHTML=`${bmi}`;
    }
})