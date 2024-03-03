const accountId = 123
let accountName = "Emp"
var accountEmail = "xyz@gmail.com"
accountCity = "haridware"

// Note: prefer not to use var
//      because  of issue in block scope and functional scope

console.table([accountName,accountEmail,accountId, accountCity])