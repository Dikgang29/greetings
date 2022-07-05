'use strict';
const nameTypeElem = document.querySelector('.nameType');
// const radioCheck = document.querySelector('.radioLanguage');
const greetBtnElem = document.querySelector('.greetBtn');
const printElemet = document.querySelector('.printResults');
const spanCountElem = document.querySelector('.spanCount');

const greet1 = Greeting(); 
// const count = greet1.storedArray();
const count = greet1.check();

var listNames = localStorage.getItem("names") ? JSON.parse(localStorage.getItem("names")) : [];

// spanCountElem.innerHTML = listNames.length;





// greet1.assign(listNames);

function getItemsFromLocalStorgae() {
    // var listNames = localStorage.getItem("names") ? JSON.parse(localStorage.getItem("names")) : [];

    
    return listNames;

}

function setItemsToLocalStorage(names){
    var listNames = getItemsFromLocalStorgae();
        listNames = [...listNames, ...names];
        listNames = [...new Set(listNames)]
    localStorage.setItem("names", JSON.stringify(listNames))
}



function greetElements (){
    

    let radioCheck = document.querySelector("input[name='language']:checked");
    
    
    if(radioCheck){ 
   
    if(radioCheck.value === 'english'){
        
        printElemet.innerHTML = greet1.greet(nameTypeElem.value);
        spanCountElem.innerHTML = listNames.length;
        // spanCountElem.innerHTML = greet1.storedArray().length;
    

        
        
        
    }else if(radioCheck.value === 'sepedi'){
      
        printElemet.innerHTML = greet1.greetSepedi(nameTypeElem.value);
        spanCountElem.innerHTML = listNames.length;
        // spanCountElem.innerHTML = greet1.storedArray().length;
      //  console.log(greet1.storedArray());

    } else if(radioCheck.value === 'tsonga'){
        
        printElemet.innerHTML = greet1.greetTsonga(nameTypeElem.value);
        spanCountElem.innerHTML = listNames.length;
        // spanCountElem.innerHTML = greet1.storedArray().length;
        //console.log(greet1.storedArray());
        
    }

}
if(!radioCheck){
    printElemet.innerHTML = 'ENTER A NAME AND SELECT A LANGUAGE';
    spanCountElem.innerHTML = listNames.length;
    
}


// spanCountElem.innerHTML = listNames.length;

// localStorage['names'] = JSON.stringify(greet1.storedArray());
// console.log(greet1.storedArray());
// console.log(greet1.check());

// console.log(JSON.parse(localStorage.getItem("names")))
// localStorage['names'] = JSON.stringify(greet1.storedArray());
// console.log(greet1.storedArray())
    setItemsToLocalStorage(greet1.storedArray());
    console.log(JSON.parse(localStorage.getItem("names")).length);


}
spanCountElem.innerHTML = listNames.length;



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