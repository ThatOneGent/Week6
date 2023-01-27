var expect = chai.expect;

describe('myFunctions', function(){
    describe('#shuffleDeck', function(){

/*         it('should concatenate the two parameters', function(){
            var x = doSomething('hello',5);
            expect(x).to.equal('hello5');
        }); */

        it('should shuffle array contents',function(){

            testArray= {deckContents: [1,2,3,4,5,'a','b','c']};
            let myClass = new Deck();
            let myMethod = myClass.shuffleDeck(testArray.deckContents);  
            
            //let shufArray = 0;
            expect(testArray).to.not.equal(myMethod);

              //  .then(function () {
              //   console.log("Assertion Passed");
                    //});

            //console.log(myMethod);
        }); 

/* 
        it('should throw an error if first param is not a string',function(){
            expect(function(){
                doSomething(5,5);
            }).to.throw(Error);
        }) */
    });


    describe('#createDeck',function(){
            const deckTest = new Deck();

        it('should create a deck from deck class', function(){
            //const deckTest = new Deck();
            deckTest.createDeck();
            expect(deckTest).to.be.instanceOf(Deck);
            //expect(deckTest.deckContents.length).to.equal(52);

        });
        it('should contain 52 cards', function(){

            expect(deckTest.deckContents.length).to.equal(52);

        });

    });
});