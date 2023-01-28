var expect = chai.expect;

describe('myFunctions', function(){
    describe('#shuffleDeck', function(){


        it('should shuffle array contents',function(){
            // Test array created to mimic deck
            let testDeck1 = new Deck();
            // deck created based off class
            let testDeck2 = new Deck();

            testDeck1.createDeck();
            testDeck2.createDeck();

            testDeck2.deckContents = testDeck2.shuffleDeck(testDeck2.deckContents);
        


            //shuffling created deckContents
            //myClass.deckContents = myClass.shuffleDeck(myClass.deckContents);  


           // let myMethod = myClass.shuffleDeck(myClass.deckContents);  
            //running expected unit test

            expect(testDeck1.deckContents).to.not.equal(testDeck2.deckContents);
            console.log(testDeck1);
            console.log(testDeck2);
            //expect(testArray.deckContents).to.not.equal(myClass.deckContents);




        }); 

    });


    describe('#createDeck',function(){
            //Test deck based off deck class method
            // this will test both of the next two 'it' functions
            const deckTest = new Deck();

        it('should create a deck from deck class', function(){
            //create a deck of Cards within the Deck
            deckTest.createDeck();
            //did it actually create a deck of deck class??
            expect(deckTest).to.be.instanceOf(Deck);

        });
        it('should contain 52 cards', function(){
            //did the createDeck method create 52 cards?
            expect(deckTest.deckContents.length).to.equal(52);
        });

    });
});