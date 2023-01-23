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
console.log("output test");
class Deck {

    constructor(name, amount){
        this.name=name;
        this.amount=amount;
    }
 
}