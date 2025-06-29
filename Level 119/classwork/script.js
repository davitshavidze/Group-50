
let seaPig = new Map([["name", "David"], ["surname", "Grdelishvili", ["home", "GOA"]]])

seaPig.set("age", "58")

console.log("<!-------------- Keys ---------------->")

for (let item of seaPig.keys()){
    console.log(item)
}

console.log("<!--------------- Values -------------->")

for (let value of seaPig.values()){
        console.log(value)
}