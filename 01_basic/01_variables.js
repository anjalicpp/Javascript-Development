const accountId=144663
let accountEmail="anjali.google.com"
var accountPassword="1243"
accountCity="Jaipur"//we can also declare this method
let accountState;//js keeps it s undefined

/*
NOTE:Prefer not to use var
because of issue in block issue and functional issue

*/

// accountId=3 not allowed
console.log(accountId);
//console.table([accountId,accountEmail,accountPassword,accountCity])//used to uotput multiple variables at once in tabular form
accountCity="Benguluru"
accountEmail="anjali@hdc"
accountPassword="087"
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
