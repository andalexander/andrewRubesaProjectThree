// Pseudo-code for project 3.

// Caesar Cipher.

//1. This app will allow users to encode a message of their choice using the Caesar Cipher.
//2. Site will have an introduction explaining what the Caesar Cipher is.
//3. Users can fill a textfield with a custom message, and press a submit button to encode the message 
//   using a predetermined letter shift.
//4. The limit of character is set to 280 to mimic twitter character limit.

//MVP:
// 1. Take the input from user from the textarea and take the last letter of the message and put it at the beginning.
//2. Achieving this, try to accomplish changing every letter 'a' (0 index) and to it into the letter 'b' (1 index).
//3. Achieving this, take every letter in users message and shift it by 3 indices and output that to my emty div.

//Stretch goals:
// 2. Allow the users to choose their own letter shift to customize how their message is encrypted.
// 3. Give the users the ability to send the encrypted message to friends to have their friends try and
//    decode the message.
// 4. Have another section of the site that will decrypt the message for users when they enter a shift
//    value.
// 5.  Have functionality that allows users to interact this with Twitter.
// 6. Animate title of site from encrypted text do decrypted.

//1. On click of submit button.
//2. Grab the input from the first textarea and save it as a variable.
//3. Create code function.
//3a. This code funcion would take the last letter in the user's message, and place it at the beginning.
//3b. Change this function to change user's message using the intended methodology.
//    Find the index of the letter then add 1, take that sum and find out what letter in array is at that       index.
//4. Run the variable through our code function, and create a variable for the result.
//5 Take result from function and put it in a div with a class of box.


const cipherApp = {};

// cipherApp.alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


cipherApp.cipherFunction = $('input').on('click', function(e){
    e.preventDefault();
    const userMessage = $('textarea').val();
    $('.msgDisplay').append(userMessage);
    console.log(cipherApp.cipherFunction);
}); //END OF cipherFunction




$(document).ready(function(){
    // cipherApp.cipherFunction();
}); //END OF DOCUMENT READY







const magicApp = {};

magicApp.apiKey = '$2a$10$UwzSuQ6684FmIGSXgEkPBufXMp7fz8zpw.dOF0wEt5YIeFzY8WjUO';
magicApp.url = 'https://www.potterapi.com/v1/spells';


magicApp.getSpells = () => {

}

$(document).ready(function(){
    magicApp.getSpells();
}); //END OF DOCUMENT READY