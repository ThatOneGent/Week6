var expect = chai.expect;

describe('myFunctions', function(){
    describe('#shuffleDeck', function(){


        it('should shuffle array contents',function(){

            // Create two test decks
            let testDeck1 = new Deck();
            let testDeck2 = new Deck();

            //populate both decks with cards
            testDeck1.createDeck();
            testDeck2.createDeck();

            //Shuffle only the second deck
            testDeck2.deckContents = testDeck2.shuffleDeck(testDeck2.deckContents);

            //contents should no longer match.
            expect(testDeck1.deckContents).to.not.equal(testDeck2.deckContents);
            console.log(testDeck1);
            console.log(testDeck2);

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