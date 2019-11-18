const cipherApp = {};

//ALPHABET USERS INPUT WILL BE EVALUATED AGAINST AFTER ARRAY CONVERSION:
cipherApp.alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

//DEFAULT VALUE FOR DROPDOWN MENU IF USER DOES NOT "CHANGE" THE DROPDOWN VALUE:
cipherApp.shiftKey = 1;

//PULL USERS INPUT FROM DROPDOWN MENU:
cipherApp.shiftSelect = function() {
  cipherApp.shiftKey = parseInt($(this).val());
};

//CIPHER FUNCTION:
cipherApp.convertMessage = (messageToRun, shiftKey) => {
  const usersArray = Array.from(messageToRun);
  const encriptedUserArray = usersArray.map(character => {
    const index = cipherApp.alphabet.indexOf(character);
    if (index === -1) return character;
    let newIndex = index + shiftKey;
    if (newIndex < 0) newIndex += cipherApp.alphabet.length;
    newIndex = newIndex % cipherApp.alphabet.length;
    return cipherApp.alphabet[newIndex];
  });
  return encriptedUserArray.join("");
};

//EVENT HANDLER FOR "ENCRYPT" BUTTON:
cipherApp.encryptClick = function(e) {
  e.preventDefault();
  const messageToRun = $("#toRun").val();
  if (messageToRun.length == 0) {
    $(".messageDisplay").html("Please enter a message.");
  } else {
    const convertedMessage = cipherApp.convertMessage(
      messageToRun,
      cipherApp.shiftKey
    );
    $(".messageDisplay").html(convertedMessage);
  }
};

//EVENT HANDER FOR "DECRYPT" BUTTON:
cipherApp.decryptClick = function(e) {
  e.preventDefault();
  const messageToRun = $("#toRun").val();
  if (messageToRun.length == 0) {
    $(".messageDisplay").html("Please enter a message.");
  } else {
    const convertedMessage = cipherApp.convertMessage(
      messageToRun,
      -cipherApp.shiftKey
    );
    $(".messageDisplay").html(convertedMessage);
  }
  $(".messageDisplay").html(convertedMessage);
};

//INITIALIZE:
cipherApp.init = function() {
  $("#decryptMessage").on("click", cipherApp.decryptClick);
  $("#encryptMessage").on("click", cipherApp.encryptClick);
  $("#shiftKey")
    .find("option")
    .on("click", cipherApp.shiftSelect);
};

$(document).ready(cipherApp.init); //DOCUMENT READY
