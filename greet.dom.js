'use strict';
//refferencing 
const nameTypeElem = document.querySelector('.nameType');
const greetBtnElem = document.querySelector('.greetBtn');
const printElemet = document.querySelector('.printResults');
const spanCountElem = document.querySelector('.spanCount');
const clearBtnElem = document.querySelector('.clearBtn')


// connecting the DOM to Factory Function 
const greet1 = Greeting(); 


// getting items from the Local storage => made the variable global so that i call access it from other functions
var listNames = localStorage.getItem("names") ? JSON.parse(localStorage.getItem("names")) : [];
spanCountElem.innerHTML = listNames.length;



function getItemsFromLocalStorgae() {
    // var listNames = localStorage.getItem("names") ? JSON.parse(localStorage.getItem("names")) : [];

    
    return listNames;

}
// a function that will set the list in the local storage
function setItemsToLocalStorage(names){

    var listNamesStored = getItemsFromLocalStorgae();
        listNamesStored = [...listNamesStored, ...names];
        // built in method that will ensure there are NO dulicates in list on the local storage #interesting
        listNamesStored = [...new Set(listNamesStored)]
        spanCountElem.innerHTML = listNamesStored.length;
    localStorage.setItem("names", JSON.stringify(listNamesStored))
}


// function that would print out a hello message in certain language and display the count on the screen
function printMessage(greet1, key){
    
    printElemet.innerHTML = greet1[key](nameTypeElem.value);
    // spanCountElem.innerHTML = listNames.length;
}



function greetElements (){
    

    let radioCheck = document.querySelector("input[name='language']:checked");
    
    
    if(radioCheck){ 
   
    if(radioCheck.value === 'english'){
        printMessage(greet1, "greetEnglish");

        
       
    
    }else if(radioCheck.value === 'sepedi'){
      
       printMessage(greet1, 'greetSepedi');
        
    } else if(radioCheck.value === 'tsonga'){

        printMessage(greet1, 'greetTsonga');
       
    }

}
if(!radioCheck){
    printElemet.classList.add('erroMessage');
    printElemet.innerHTML = 'ENTER A NAME AND SELECT A LANGUAGE';
    // spanCountElem.innerHTML = listNames.length;
    
}

// removeItemsFromLocalStorage;
    setItemsToLocalStorage(greet1.storedArray());
    



}


function removeItemsFromLocalStorage (){
   
    localStorage.removeItem('names');
    greet1.resetStoredNames();
    listNames = [];

    spanCountElem.innerHTML = listNames.length;
    


}




greetBtnElem.addEventListener('click',greetElements);

clearBtnElem.addEventListener('click', removeItemsFromLocalStorage)
