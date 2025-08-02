const accountId = 144553;
let accountEmail = "Kartikumale@gmail.com";
var accountPassword = "1234";
accountCity = "Jaipur";
let accountState;

// accountId = 2 // not allowed (const can't be reassigned)

accountEmail = "lokeshbhaje@gmail.com";
accountPassword = "212121";
accountCity = "Bengaluru";

console.log(accountId); // Fixed: was incorrectly written as accountID

/*
Prefer not to use var
because of issues with block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity]);
