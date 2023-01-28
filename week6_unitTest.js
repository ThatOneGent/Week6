var expect = chai.expect;

describe('myFunctions', function(){
    describe('#shuffleDeck', function(){


        it('should shuffle array contents',function(){
            // Test array created to mimic deck
            testArray= {deckContents: [1,2,3,4,5,'a','b','c']};
            // deck created based off class
            let myClass = new Deck();
            //making them match
            myClass.deckContents=testArray.deckContents;
            //shuffling created deck
            let myMethod = myClass.shuffleDeck(testArray.deckContents);  
            //running expected unit test
            expect(testArray).to.not.equal(myMethod);


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