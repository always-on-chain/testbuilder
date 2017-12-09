// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)


var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console
  if (isDinersClub(cardNumber)) {
  	return 'Diner\'s Club';
  } else if (isAmericanExpress(cardNumber)) {
  	return 'American Express'
  } else if (isVisa(cardNumber)) {
  	return 'Visa';
  } else if (isMasterCard(cardNumber)) {
  	return 'MasterCard'
  } else if (isDiscover(cardNumber)) {
  	return 'Discover'
  } else if (isMaestro(cardNumber)) {
  	return 'Maestro'
  }

  function isDinersClub(cardNumber) {
  	var prefix = Number(cardNumber.slice(0, 2)) === 38 || Number(cardNumber.slice(0, 2)) === 39;
  	var length = cardNumber.length === 14;
  	return prefix && length;
  }
  function isAmericanExpress(cardNumber) {
  	var prefix = Number(cardNumber.slice(0, 2)) === 34 || Number(cardNumber.slice(0, 2)) === 37;
  	var length = cardNumber.length === 15;
  	return  prefix && length;		
  }
  //Visa always has a prefix of 4 and a length of 13, 16, or 19.
  function isVisa(cardNumber) {
  	var prefix = Number(cardNumber.slice(0, 1)) === 4;
  	var length = cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19;
  	return  prefix && length; 
  }
  //MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  function isMasterCard(cardNumber) {
  	var prefix = Number(cardNumber.slice(0, 2)) >= 51 && Number(cardNumber.slice(0, 2)) <= 55;
  	var length = cardNumber.length === 16;
  	return prefix && length;
  }
  //Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  function isDiscover(cardNumber) {
  	var prefix = (Number(cardNumber.slice(0, 3)) >= 644 && Number(cardNumber.slice(0, 3)) <= 649) || 
  				  Number(cardNumber.slice(0, 4)) === 6011 || Number(cardNumber.slice(0, 2)) === 65;
  	var length = cardNumber.length === 16 || cardNumber.length === 19;
  	return prefix && length;
  }
  //Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  function isMaestro(cardNumber) {
  	var prefix = Number(cardNumber.slice(0, 4)) === 5018 || Number(cardNumber.slice(0, 4)) === 5020 ||
  	             Number(cardNumber.slice(0, 4)) === 5038 || Number(cardNumber.slice(0, 4)) === 6304;
  	var length = cardNumber.length >= 12 && cardNumber.length <= 19;
  	return prefix && length;
  }
};


