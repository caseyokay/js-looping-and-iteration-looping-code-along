// Code your solutions in this file
// const gifts = ["teddy bear", "drone", "doll"];
// for (let i = 0; i < gifts.length; i++){
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);

//     return gifts;
// }
// wrapGifts(gifts);

function writeCards(array, message){
    let thankYouCards = []
    for (let i = 0; i < array.length; i++){
        thankYouCards.push(`Thank you, ${array[1]}, for the wonderful ${message} gift!`)
    }
    return thankYouCards
};
// const message = "birthday"
// const givers = ["Ada", "Brendan", "Ali"]
// writeCards(givers)

function countDown(number){
    while (number > 0) {
        console.log(number);
        number -=1;
    }
    console.log(number);
}






  
//   function countDown( startingNumber ) {
//     while ( startingNumber > 0 ) {
//       console.log( startingNumber );
//       startingNumber -= 1;
//     }
//     console.log( startingNumber );
//   }