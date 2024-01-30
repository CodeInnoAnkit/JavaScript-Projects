/**
 * WE CAN DO THIS SAME FOR BODY .
 * the only difference will be we need to get the body object just like the div object and replace it with the container div object that's it .
 */

// *******************************************************

//?  now i want that jis box par click hoga  us box ka color rest three box se alag hoag.

let containerObj=document.querySelector('.container');
// console.log(containerObj);
let boxObject=document.querySelectorAll('.box');
// console.dir(boxObject)
for (boxObjects of boxObject)
{
    // console.log(boxObjects);
    //* this is the normal function in the event listener.
    // boxObject.addEventListener("clikck",function (event){})

    // this is the call back function in the event listener.
    boxObjects.addEventListener("click", (event) => {
        console.log(`hii this is the event listener `);
        containerObj.style.backgroundColor=randomColor();   
        if(event.target.classList.contains('box1'))
        {
            console.log(`hii this is div 1`);
            /**
                * the reason why we set value of the flag is true because the loop is running in the if condition and if condition cheaks that is it box1 or not.
             */
            let flag=true;
            for(let i=0; i<boxObject.length; i++)
            {
                console.log(`hii loop running`)
                //* -----------------------------------------------VIMP CONDITION---------------------------------------
                //! AGAR EVENT 1ST BOX KE LYAE HAE TO REST 3 BOX PAR SAME COLOR HONA CHYAE. BOX1 KE LYAE TO THEEK HAE BECAUSE THE BOX1 IS AT INDEX 0 IN THE NODELIST. BUT AGAR EVENT 2ND BOX KE LYAE HAE TO 1ST BOX PAR WO COLOR NAHI AAYAGA JO 3 OR 4TH BOX PAR HAE  US KE LYAE HE HAR BARR LOOP MAE COMPARISION KAR RAHAE BOX OBJECT SE JO KII JS MAE OBJECT HAE DIV ELEMENT KA JIS KII CLASS BOX HAE.
                if((event.target === boxObject[i]) && (flag))
                {
                    console.log(`event mathches------------->`);
                    let currentElement=event.target;
                    currentElement.style.backgroundColor="black";
                    flag=false;
                    console.log(`the value of the i is ${i}`);
                }else 
                {
                    console.log(`hii this ${i} else`);
                    boxObject[i].style.backgroundColor="green";
                }
            }
        } else if(event.target.classList.contains('box2'))
        {
            console.log(`hii this is div2`);
            /**
             * the reason why we set the value of the flag true here is becuase we cheak wheather the current target is that element or not whose class is box2 if yes then we can set the background for this.
             */
            let flag=true;
            for(let i=0; i<boxObject.length; i++)
            {
                if((event.target === boxObject[i]) && (flag))
                {
                    console.log(`hii there event mathches --------------->`);
                    event.target.style.backgroundColor="black";
                    console.log(`the value of the i is = ${i}`);
                    //! -----------------do not forget to update the flag------------.
                    flag=false;
                }else 
                {
                    console.log(`this is the ${i} else`);
                    boxObject[i].style.backgroundColor="blue";
                }
            }
        }else if(event.target.classList.contains('box3'))
        {
            console.log(`hii this is the div3 `);
            /**
             * the reason of setting the flag == true because we alredy chek for the the box3 class element so .
             */
            let flag=true;
            for(let i=0; i<boxObject.length; i++)
            {
                console.log(`hii loop running`);
                /**
                 * the reason why we use this condtion -> event.target === boxobject[i] &&  flag  insted of this ->(event.target.classList.contains('box4') because we want that if box2 is clicked then box 1 has same color that is present on the box 3 and box 4.
                 */
                if((event.target === boxObject[i]) && (flag))
                {
                    console.log(`hii event mathches ------------------------>`);
                    event.target.style.backgroundColor='black';
                    flag=false;
                }else
                {
                    console.log(`this is the ${i} else`);
                    boxObject[i].style.backgroundColor="red";
                }
            }
        }else if(event.target.classList.contains('box4'))
        {
            console.log(`hii this is the div4`);
            let flag=true;
            for(let i=0; i<boxObject.length; i++)
            {
                console.log(`the loop is running`);
                if((event.target === boxObject[i]) && (flag))
                {
                    console.log(`hii the event is mathched ------------------->`);
                    let currentElement=event.target;
                    currentElement.style.backgroundColor="black";
                    flag=false;
                }else 
                {
                    console.log(`hii this is ${i} else`);
                    boxObject[i].style.backgroundColor="yellow";
                }
            }
        }
    })

}

function randomColor() {
    let red = Math.floor(Math.random() * 256);
     let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
  // this is the template literal.
    let rgb = `rgb(${red},${green},${blue})`;
    return rgb;
}





// THIS IS THE UNNEED CODE . 


// // Getting the element from the dom using the query selector.
// let divBoxObj = document.querySelectorAll(".box");
// // getting the container div so that we can change its style property.
// let divContObj = document.querySelector(".container");
// //* in case if we want to change the color of the body then we can select the body.
// let bodyObj=document.querySelector('body');

// divBoxObj[0].addEventListener("click",() => {
//     console.log(`hii the add event is knock.`);
// })

/**
 * with the nodeList we can apply the foreach loop and in forEach loop we can write the higher order function or the calback function.
 */
/*
for (divBoxObjs of divBoxObj) {
    let box1 = false;
    let box2 = false;
    let box3 = false;
    let box4 = false;
    divBoxObjs.addEventListener("click", () => {
        console.log(`the div is -> ${divBoxObjs.innerText}`);
    // console.log(`hii i am loop event knock`);
    /**
     * but now by this only a one color will generate but i need the random color so we need to create the random color function.
     */
    // divContObj.style.backgroundColor='green';
    // insted of assigning the color to it now we can directly call the random color .
    // divContObj.style.backgroundColor = randomColor();
    // divContObj.style.backgroundColor=randomColor();
    // bodyObj.style.backgroundColor=randomColor();

    /**
     * now i want that jis box par click hoga  us box ka color rest three box se alag hoag.
    /*for(let i=0; i<divBoxObj.length; i++)
    {
        console.log(`the div is -> ${divBoxObj[i].innerText}`);
        if(divBoxObj[i])
        {
            for(let j=0; j<divBoxObj.length; j++)
            {
                if(i==j)
                {
                    divBoxObj[i].style.backgroundColor="black";
                }else {
                    divBoxObj[j].style.backgroundColor="red";
                }
            }
        }
    }

    // divBoxObjs.style.backgroundColor=randomColor();
    // for(let otherObj of divBoxObj)
    // {
    //     if(otherObj!==divBoxObjs)
    //     {
    //         otherObj.style.backgroundColor="green";
    //     }
    // }
    });
}
*/