// Card class? - Suit- card # - card overall value
// Deck class? - collection of cards? - one for each player, one for main deck? - Methods -- Split deck(player 1, player 2)... create deck?... Shuffle deck??
// player class? - player name - cards delt - current score?


/*
Pre build main deck with 53 Cards based off card class.
    - build it so that it could be modified if the deck parameters change??
    - four suits - loop through making 1-9, add j, q, k, A at the end of loop?

 name two players? - no 
 split the deck? 
    - Randomize split with a pop from main deck
    - random number of 0-length of deck, pop that number, push into P1 or P2...Alternate betwen them with flag? or if length even p1, if larger p2?
    OR!
    - Shuffle cards in deck?? - how do you randomize an array order?

 Make a discard pile? or just iterate through the two arrays comparing?
    -pop first one, compare, push to discard deck
    OR
    -iterate through array comparing
 Tally score as you go and add it to player current score value.

 Output each comparison and result along with current score
 Output who won the game.


*/



class Card{
    constructor(suit, cValue, tValue){
        this.suit = suit; // card suit = Diamond,Club,Spade,Heart
        this.cValue = cValue; // card value = 2-10, Jack, Queen, King, Ace
        this.tValue = tValue; // cards back end value = 1-13 --- used for comparison scoreing.
    }

} // End Card Class

class Player{
    constructor(name){

        this.name = this.whatsMyName(); //Player name

        this.handDeck= []; // Array to hold the deck/hand
        this.currScore = 0; // current score that will go up as game is played
      //  this.disDeck =[]; //discard deck to keep track of cards as compared/played -- not needed

    }

        // I wanted to generate a random name for the player each time it's created, so nothing needs to be passed in.
    whatsMyName(){

        let nameArray=['Al', 'Lin', 'Mark', 'Tim', 'Landon', 'Mendy', 'Kenzie', 'Charlie', 'Chip', 'Corre', 'Appy', 'Twix'];
        let randomNameSelect = nameArray[Math.floor(Math.random() * nameArray.length)];

        return randomNameSelect;

    }

} // End Player Class

class Deck {

    constructor(){
        this.deckContents = []; // array to hold variouds cards
    }

    //create a deck
    createDeck(){

        //create 52 cards based off suit, cValue, and tValue?
        //static? (Easy) or programmatic for future adjustments to suit/value adjustments?(Less Easy)

        let deckSize = 0; // variable to store size of deck
        let cardSuits = ['Diamond','Club','Spade','Heart'];
        let cardValue = [2,3,4,5,6,7,8,9,10,'Jack','Queen','King','Ace'];
       // for(let sizeIndex =1; sizeIndex <= deckSize; sizeIndex++){  // loop through deck size
            for(let suitIndex =0; suitIndex < cardSuits.length;suitIndex++){   //loop through the card suits
                    for(let valueIndex =0; valueIndex < cardValue.length;valueIndex++){
                        this.deckContents.push(new Card(cardSuits[suitIndex],cardValue[valueIndex],valueIndex+1));
                        

                    }// end value loop
            } //end suit loop
            
        
      //  } // end size loop

      //output to test results

      console.log(this.deckContents);
      console.log(this.deckContents.length);
      deckSize = this.deckContents.length;

    }  // end createDeck Method
 
    // split deck into two equal parts and push into player1, player2 handDeck
    splitDeck(player1,player2){   

        let splicePoint=Math.round(this.deckContents.length/2); // find the middle index and round if odd

        player1.handDeck = this.deckContents.splice(0,splicePoint); // splice at mid
        player2.handDeck = this.deckContents.splice(-splicePoint); // splice second half

        //output test of split decks

        console.log("player 1");
        console.log(player1.handDeck.length);
        console.log(player1.handDeck);
        console.log("player 2");
        console.log(player2.handDeck.length);
        console.log(player2.handDeck);

        // return // deck 1 and deck 2? or push into player deck?


    } // End splitDeck Method


    //Shuffle cards in the deck that is passed. 

    shuffleDeck(array){

        //random number based on length of deck, pop/push into new array,return new array into old deck? 
        //  deckName=deckName.shuffleDeck(deckName) ???? is that possible??

         /*      Random shuffle of array based off   Fisher-Yates Shuffle         */
        let curId = array.length;
             // There remain elements to shuffle
        while (0 !== curId) {
             // Pick a remaining element
            let randId = Math.floor(Math.random() * curId);
            curId--;
             // Swap it with the current element.
            let tmp = array[curId];
            array[curId] = array[randId];
            array[randId] = tmp;
        }
    return array;

    } // End shuffleDeck Method


} // End Deck Class


class thisMeansWar{

    constructor(){
        //make new player 1
        this.player1 = new Player('Player1');
        //make new player 2
        this.player2 = new Player('Player2');
        // create deck?
        this.mainDeck = new Deck();
     }

    

    fight(){
        this.mainDeck.createDeck();
        console.log("Main deck made");
        console.log(this.mainDeck.deckContents);
        this.mainDeck.deckContents = this.mainDeck.shuffleDeck(this.mainDeck.deckContents); 
        console.log("Deck Shuffled");
        console.log(this.mainDeck.deckContents);
        this.mainDeck.splitDeck(this.player1,this.player2);

        console.log(` Let the games begin!!
    
It's ${this.player1.name} Versus ${this.player2.name}!
        `);
                
        //iterate through two player's information
        
        //if both players have equal cards?
        //cycle through hand length calling card compare passing index      
        if(this.player1.handDeck.length == this.player2.handDeck.length){
                for(let i = 0; i < this.player1.handDeck.length; i++){
                    this.cardCompare(i);
                }
        }else{
            console.log("Players have different number of cards, check deck and start over");
        }

        console.log(" -----  Final score!! ---- ");
        console.log(`     
        Player 1 = ${this.player1.currScore}
        Player 2 = ${this.player2.currScore}      
        `);
        if(this.player1.currScore>this.player2.currScore){
            console.log("********** Player 1 Wins!!!!! ***********")
        } else if(this.player1.currScore<this.player2.currScore){
            console.log("********** Player 2 Wins!!!!! ***********")
        }else{
            console.log("********** Both Players Tie!!!!! ***********")
        }
    } // End of main Fight method

    cardCompare(index){

        //use index to compare player 1 and 2
        //compare tValue of both players, higher player hand is awarded points and added to their currScore
        //output Suit,cValue, currScore for each player
        //Astrisk to mark who won the round? 
        console.log(this.player1.name + " draws: " + this.player1.handDeck[index].cValue +" of "+ this.player1.handDeck[index].suit+"s \n" +
            this.player2.name + " draws: " + this.player2.handDeck[index].cValue +" of "+ this.player2.handDeck[index].suit+"s\n");

        if(this.player1.handDeck[index].tValue > this.player2.handDeck[index].tValue){
            this.player1.currScore += 1;
            /* console.log(this.player1.name + " draws: " + this.player1.handDeck[index].cValue +" of "+ this.player1.handDeck[index].suit+"s \n" +
            this.player2.name + " draws: " + this.player2.handDeck[index].cValue +" of "+ this.player2.handDeck[index].suit+"s" + "\n ---- Player 1 wins (Current Score: "
            + this.player1.currScore+")"); */

            console.log(` ---- ${this.player1.name} wins ----\n`);

        }else if(this.player1.handDeck[index].tValue < this.player2.handDeck[index].tValue){  
            this.player2.currScore += 1;

            /* console.log(this.player1.name + " draws: " + this.player1.handDeck[index].cValue +" of "+ this.player1.handDeck[index].suit+"s \n"+
            this.player2.name + " draws: " + this.player2.handDeck[index].cValue +" of "+ this.player2.handDeck[index].suit+"s" + "\n ---- Player 2 wins (Current Score: "
            + this.player2.currScore+")"); */

            console.log(` ---- ${this.player2.name} wins ----\n`);
        } else{
            /* console.log(this.player1.name + " draws: " + this.player1.handDeck[index].cValue +" of "+ this.player1.handDeck[index].suit+"s\n"+
            this.player2.name + " draws: " + this.player2.handDeck[index].cValue +" of "+ this.player2.handDeck[index].suit+"'s" + "\n TIE!"); */
            console.log("---- TIE!! ----\n");
        }
        
        console.log("Current Score -- " + this.player1.name + ": "+ this.player1.currScore+"    "+this.player2.name + ": "+ this.player2.currScore);

    } // end of Card Compare Method

} // End of thisMeansWar Class

/*
// This probably should be a class that then runs the whole gravy boat... similar to the "menu app"

function thisMeansWar(player1,player2){
    
    //iterate through two player's information
    // iterate through player hand deck... pass in index value cardCompare
    //based off handDeckLength
    //maybe confirm both Hands are same length as a check... should always be true, but if deck isnt even...

}
*/

let Start = new thisMeansWar();
Start.fight();



////let test= new Deck();
/*
test.createDeck();
test.deckContents=test.shuffleDeck(test.deckContents);
console.log("SHUFFLED DECK");
console.log(test.deckContents);
*/
//initialize player 1
//initialize player 2
//initialize mainDeck
    //create mainDeckContents
//shuffle mainDeckContents
//Split deck between two players
//Start the game of war


//iterate through the two deck arrays comparing the tValues.
//this can be a large function
//with smaller functions called within for hte actual comparison? or just embedded in the War function itself?

//Call thisMeansWar for player1,player2


//each iteration will output player 1 card, player 2 card, current score.
// maybe format it to output in a column?
//winner fanfare.

