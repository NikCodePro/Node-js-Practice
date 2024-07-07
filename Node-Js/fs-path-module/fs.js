import fs from "fs"

console.log("Starting.....")

// fs.writeFileSync("nik.txt", "nikhil is a good Boy") // used to create foles synchronously


fs.writeFile("nik3.txt", "nikhil is a good Boy;;;;;", () => {  // used to create file Asynchronously
    console.log('done...')
    fs.readFile("nik3.txt", (error, data) => {  // used to resd file Asynchronously
        console.log(error, data.toString())
    })
})

fs.appendFile("nik3.txt", " \nappended data", (e, d) => {
    console.log(e, d)
})

console.log("end..")