describe('The Greet Function' , function(){
    it('should return Hello Dikgang ' , function(){

        const greeting  = Greeting();

        assert.equal('Hello, Dikgang',greeting.greet('Dikgang'));

       // assert.deepEqual([2,2],[2,2]);
    });

    it('if a number is entered , it should return an error message asking the user to enter a correct input ' , function(){

        const greeting  = Greeting();

        assert.equal('Error, Please enter a name NOT a number',greeting.greet(5));

       // assert.deepEqual([2,2],[2,2]);
    });

    it('if a name is not entered , it should display a message asking for the name ' , function(){

        const greeting  = Greeting();

        assert.equal("Please enter a name",greeting.greet(''));

       // assert.deepEqual([2,2],[2,2]);
    });

    it('should be able to display greetings in Sepedi, would return Dumela, Jay ' , function(){

        const greeting  = Greeting();

        assert.equal('Dumela, Jay',greeting.greetSepedi('Jay'));

       // assert.deepEqual([2,2],[2,2]);
    });

    it('should be able to display greetings in Sepedi, would return Dumela, Tebogo' , function(){

        const greeting  = Greeting();

        assert.equal('Dumela, Tebogo',greeting.greetSepedi('Tebogo'));

       // assert.deepEqual([2,2],[2,2]);
    });


    it('should be able to display greetings in Tsonga, would return Minjhani, Rikhotso' , function(){

        const greeting  = Greeting();

        assert.equal('Minjhani, Rikhotso',greeting.greetTsonga('Rikhotso'));

       // assert.deepEqual([2,2],[2,2]);
    });

    

});