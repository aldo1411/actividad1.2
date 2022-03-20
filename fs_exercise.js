// Exercise
// WRITE THE FOLLOWING USERS NAME IN A FILE AND THEN DISPLAY THEM

const fs = require('fs')

const users = [
  { name: "Kaddy" },
  { name: "Marc" },
  { name: "Prince" },
  { name: "Kally" }
]

const jsonContent = JSON.stringify(users)
fs.writeFileSync('./data/users.json', jsonContent, 'utf8', (err) => {
if (err) {
    return console.log(err)
}
})

let rawdata = fs.readFileSync('./data/users.json')
let dataUsers = JSON.parse(rawdata);
console.log(dataUsers);




