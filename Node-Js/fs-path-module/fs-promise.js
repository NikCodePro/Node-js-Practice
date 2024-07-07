import fs from "fs/promises"


let b = await fs.writeFile("nik3.txt", "\n\n\n\n\n\n\n\n\ This is String")
console.log(b)
let c = await fs.appendFile("nik3.txt", "\n\n\n\n\n\n\n\n\ This is String")
console.log(c)
let a = await fs.readFile("nik3.txt")
console.log(a.toString())