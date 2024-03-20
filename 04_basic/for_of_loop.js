// for of

const arr = [1, 2, 3, 4, 5, 6, 7]
for (const num of arr) {
    // console.log(num)
}

// Maps
// In maps its key value pairs

const map = new Map()
map.set("IN", "India")
map.set("USA", "United state of america")

// console.log(map)

for (const [key, value] of map) {
    // console.log(key, "::", value)
}

// forin loop mainly used for object
const myObject = {
    js : "javascript",
    cpp : 'c++',
    rb : "ruby"
}
for (const key in myObject) {
    // console.log(`${key} shorcut for ${myObject[key]}`)
}

// for each loop

const coding = ["tannu" ,"anurag","smile"]
coding.forEach(function(val) {
    // console.log(val)
})

function printValues(item)
{
    // console.log(item)
}

// coding.forEach(printValues)
//  [{},{},{}] objects in arrya
// now we can access object bby using for each loop

const myCourse = [
 {
    languageName:"javascript",
    languagefileName:"js"
 },
 {
    languageName:"java",
    languagefileName:"jav"
 },
 {
    languageName:"python",
    languagefileName:"py"
 }
]

myCourse.forEach(function(item) {
    // console.log(item.languageName)
})

// const newItem = coding.forEach((item) => {
//     console.log(item)
//     return item
// })

// console.log(newItem) // it value is undefine bec they not return any value..


const myNums = [1,2,3,4,5,6]
// const value = myNums.filter( (item) => 
// {
//   return  item > 4) // its mandatory to write return  bec they are in local scope
// }
// console.log(value)

const value = myNums.map( (num) => num + 10)
console.log(value)
