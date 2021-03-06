'use strict';

function Greeting(){



   var greetedArray = [];
   let newArry = [];
   let errorStatus = false;
   let printResultsUI = document.querySelector(".printResults");
  
   function capitilizeFirstLetter(firstname){
      return firstname.charAt(0).toUpperCase() + firstname.slice(1).toLowerCase();
  }

  function displayErrorMessages (){
     errorStatus = true;
     printResultsUI.style.backgroundColor = "red";
     printResultsUI.style.color = "white";

  }

  function removeErrorMessages (){
   errorStatus = false;
   printResultsUI.style.backgroundColor = "aqua";
   printResultsUI.style.color = "black";

}


   function greetEnglish(firstName){
      if(firstName === '') {
         displayErrorMessages();
         // printResultsUI.classList.add('erroMessage')
         return "Please enter a name";
      }
      else if(firstName >=0 || firstName<=0) {
         displayErrorMessages();
         // printResultsUI.classList.add('erroMessage')

         return "Error, Please enter a name NOT a number"
      }

       else  {
          greetedArray.push(firstName);
          if(errorStatus){
            removeErrorMessages();

          }
         // printResultsUI.classList.add('correctInput')
          return 'Hello, '+capitilizeFirstLetter(firstName);
         }

   }

   function greetSepedi(firstName){

      if(firstName === '') { 
         displayErrorMessages();
         // printResultsUI.classList.add('erroMessage')

      return "Kgopela o tsenye leina";
   }
      else if(firstName >=0 || firstName<=0) {
         displayErrorMessages();
         // printResultsUI.classList.add('erroMessage')

      return "Phosho, kgopela o tsenye leina e sego nomoro"
   }
     else { 
      greetedArray.push(firstName);
      if(errorStatus){
         removeErrorMessages();
       }
      //  printResultsUI.classList.add('correctInput')
       
        return 'Dumela, '+capitilizeFirstLetter(firstName);
      }
   }

   function greetTsonga(firstName){

      if(firstName === '') {
         displayErrorMessages();
         // printResultsUI.classList.add('erroMessage')

         return "Ndza kombela mumanghenelo vito";
      }
      else if(firstName >=0 || firstName<=0) { 
         displayErrorMessages();
         // printResultsUI.classList.add('erroMessage')

         return "Xihoxo, Mumanghenelo vito a u nomboro"
      }
     else { 

      greetedArray.push(firstName);
      if(errorStatus){
         removeErrorMessages();
       }
      // printResultsUI.classList.add('correctInput')

        return 'Minjhani, '+capitilizeFirstLetter(firstName); }
   }

   function check(){
      return greetedArray;
   }
   
   function storedArray(){
      //  let newArry = [];

      greetedArray.forEach(elem => {
         if(!newArry.includes(elem)){
            newArry.push(elem);
         }
      })

      return newArry;
      
   }

   function resetStoredNames () {
      greetedArray = [];
      newArry = []
   }

   // function assign(parameter){
   //    greetedArray = parameter;
   // }

   return {

      greetEnglish,
      greetSepedi,
      greetTsonga,
      storedArray,
      check,
      resetStoredNames,
      // assign
   }
}