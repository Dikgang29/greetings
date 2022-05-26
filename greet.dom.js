'use strict';
const nameTypeElem = document.querySelector('.nameType');
// const radioCheck = document.querySelector('.radioLanguage');
const greetBtnElem = document.querySelector('.greetBtn');
const printElemet = document.querySelector('.printResults');
const spanCountElem = document.querySelector('.spanCount');

const greet1 = Greeting(); 
const count = greet1.storedArray();


const localNames = localStorage['greetedNames'] ? JSON.parse(localStorage['greetedNames']) : [];

spanCountElem.innerHTML = localNames.length;



function greetElements (){

    let radioCheck = document.querySelector("input[name='language']:checked");

    if(!radioCheck){
        printElemet.innerHTML = 'ENTER A NAME AND SELECT A LANGUAGE';
    }

    

    
    if(radioCheck){ 
   
    if(radioCheck.value === 'english'){
        
        printElemet.innerHTML = greet1.greet(nameTypeElem.value);
        spanCountElem.innerHTML = greet1.storedArray().length;
        //spanCountElem.innerHTML = localNames.length;

        
        
    }else if(radioCheck.value === 'sepedi'){
      
        printElemet.innerHTML = greet1.greetSepedi(nameTypeElem.value);
        spanCountElem.innerHTML = greet1.storedArray().length;
        // spanCountElem.innerHTML = localNames.length;

      //  console.log(greet1.storedArray());

    } else if(radioCheck.value === 'tsonga'){
        
        printElemet.innerHTML = greet1.greetTsonga(nameTypeElem.value);
        spanCountElem.innerHTML = greet1.storedArray().length;
        // spanCountElem.innerHTML = localNames.length;
        //console.log(greet1.storedArray());
        
    }

}

localStorage['greetedNames'] = JSON.stringify(greet1.storedArray());

}




greetBtnElem.addEventListener('click',greetElements);

//     let radioCheck = document.querySelector("input[name='language']:checked");

//     var counterArr = [];

    
//     if(radioCheck){ 
   
//     if(radioCheck.value === 'english'){
//         //alert('englishBtn');
//         //console.log(greet1.greet(nameTypeElem.value));
//         count++;
//         spanCountElem.innerHTML = count;
        
//         printElemet.innerHTML = greet1.greet(nameTypeElem.value);
        
//     }else if(radioCheck.value === 'sepedi'){
//         //console.log(greet1.greetSepedi(nameTypeElem.value));
//         count++;
//         spanCountElem.innerHTML = count;
//         printElemet.innerHTML = greet1.greetSepedi(nameTypeElem.value);

//     } else if(radioCheck.value === 'tsonga'){
//         //console.log(greet1.greetTsonga(nameTypeElem.value));
//         count++;
//         spanCountElem.innerHTML = count;
//         printElemet.innerHTML = greet1.greetTsonga(nameTypeElem.value);
        
//     }

// }

// if(!radioCheck) {
//     return 'Please select a language';
// }

    // else(!radioCheck.value) {
    //     return 'Please select a lanuage';
    // }
    

//});