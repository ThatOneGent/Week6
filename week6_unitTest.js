var expect = chai.expect;

describe('myFunctions', function(){
    describe('#shuffleDeck', function(){

/*         it('should concatenate the two parameters', function(){
            var x = doSomething('hello',5);
            expect(x).to.equal('hello5');
        }); */

        it('should shuffle array contents',function(){

            testArray= {deckContents: [1,2,3,4,5,'a','b','c']};
            var myClass = new Deck();
            var myMethod = myClass.shuffleDeck(testArray.deckContents);  
            
            var shufArray = 0;
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
});