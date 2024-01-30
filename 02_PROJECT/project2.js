// // acessing the input field of the height.
// inputHeightObj=document.querySelector('.heightClass');
// // console.dir(heightObj);
// // accessing the input field of the weight.
// inputWeightObj=document.querySelector('.weightClass');
// // console.dir(weightObj)

// // accessing the button .
// butnObj=document.querySelector('.btnClass');

// NOTE-> -------------------------this same can be done with the event type of ----------SUBMIT----------------.
/*
butnObj.addEventListener("click",function(){
    console.log(`event for button i s working`);
    if((inputHeightObj.vlaue!=="") && (inputWeightObj.value!==""))
    {
        console.log(`the vlaue of the input data heigth is -> ${inputHeightObj.value}`);
        console.log(`the value of the input data weight is -> ${inputWeightObj.value}`);
        butnObj.innerText=calculateBmi(inputHeightObj.value,inputWeightObj.value);
        butnObj.style.width='40%'
        inputHeightObj.value="";
        inputWeightObj.value="";
        // to prevent the default submission behaviour of the form we can use the event.preventDefault(); method.
        event.preventDefault();
    }
})

function calculateBmi(hgt,wgt)
{
    let bmi=wgt/(hgt*hgt);
    console.log(`the calculated bmi by the function is -> ${bmi}`);
    return bmi;
}
*/


// USING THE EVENT TYPE SUBMIT.
const form=document.querySelector('form');
/**
 * this is the usecase when you need the input value as the empty value.
 */
// if we try to access the input value here then the empty value of input will store into our variables.thats we write it inside the event.
form.addEventListener('submit',function(event){
    console.log(`envent of form islistinign`);
    event.preventDefault();
    const hgtObject=document.querySelector('.heightClass');
    // console.dir(hgtObject);
    const height=hgtObject.value;
    // const weight=document.querySelector('.weigthtClass');
    const wgtObject=document.querySelector('.weightClass');
    const weight=wgtObject.value;
    // console.log(wgtObject);
    const result=document.querySelector('.resultClass')
    // now cheaking the height weather the user input the desired height or not .
    if((height==="") || (height<0)|| (isNaN(height)))
    {
        result.innerHTML=`please enter a valid height ${height}`;
    }else if((weight==="") || (weight<0)|| (isNaN(weight)))
    {
        result.innerHTML=`please enter a valid weigth ${weight}`;
    }else{
        const butnObject=document.querySelector('.btnClass');
        const bmi=butnObject.innerText=calculateBmi(weight,height);
        result.innerHTML=`your  BMI is ->  ${bmi}`
    }
    let newVariable=document.createElement('p');
    result.append(newVariable);
    newVariable.classList.add('paraClass');
    let paraObj=document.querySelector('.paraClass');
    const calculatedBmi=calculateBmi(weight,height);
    if(calculatedBmi< 18.6)
    {
        paraObj.innerText=`sorry you are under weight`;
    }else if((calculatedBmi >= 18.6) && (calculatedBmi < 24.9))
    {
        paraObj.innerText=`congrats your bmi is in normal range `
    }else if(calculatedBmi >= 24.9)
    {
        paraObj.innerText=`sorry you are over weight`;
    }
    hgtObject.value="";
    wgtObject.value="";
})

function calculateBmi(wgt,hgt)
{
    let bmi=wgt/(hgt*hgt).toFixed(3);
    return bmi.toFixed(4);
}

// DRY RUN CODE 
/**
 * the mistake we did is we are applying the event on the each input field but the event listener will be applied only on the button so that it can listen for the event which is click. means to show the bmi as a result when user click on the button.
 */
/**
 * NOTE -> adding the event listner for the both input field individually.
 */
// we will use the click event here on the input field.

// inputHeightObj.addEventListener("click",function(){
//     console.log(`the event of input height is listining`);
//     if(inputHeightObj.value!=="")
//     {
//         console.log(`the vlaue of the input height is -> ${inputHeightObj.value}`);
//     }else
//     {
//         console.log(`the input filed is empty`);
//     }
// })
// inputWeightObj.addEventListener("click",(event) => {
//     console.log(`the weight input event is listinging`);
// })

// let heigthValue=inputHeightObj.value;
// let weightValue=inputWeightObj.value;