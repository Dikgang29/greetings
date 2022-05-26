'use strict';

function Greeting(){



   var greetedArray = [];
  

   function greet(firstName){
      if(firstName === '') return "Please enter a name";
      else if(firstName >=0 || firstName<=0) return "Error, Please enter a name NOT a number"

       else  {
          greetedArray.push(firstName);
          return 'Hello, '+firstName;
         }

   }

   function greetSepedi(firstName){

      if(firstName === '') return "Please enter a name";
      else if(firstName >=0 || firstName<=0) return "Error, Please enter a name NOT a number"
     else { 
      greetedArray.push(firstName);
        return 'Dumela, '+firstName;
      }
   }

   function greetTsonga(firstName){

      if(firstName === '') return "Please enter a name";
      else if(firstName >=0 || firstName<=0) return "Error, Please enter a name NOT a number"
     else { 
      greetedArray.push(firstName);
        return 'Minjhani, '+firstName; }
   }
   
   function storedArray(){
      let newArry = [];

      greetedArray.forEach(elem => {
         if(!newArry.includes(elem)){
            newArry.push(elem);
         }
      })

      return newArry;
      
   }

   return {

      greet,
      greetSepedi,
      greetTsonga,
      storedArray
   }
}