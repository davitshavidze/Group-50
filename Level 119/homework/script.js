
// Homework No.1

const animals = new Map([["Tiger", "Wroof"], ["Dog", "Woof"], ["Cat", "Meow"]])

for (let sound of animals.values()){
    console.log(sound)
}

// Homework No.2

const names = ["Davit", "Nino", "Davit", "Saba", "Nino", "Davit"]

const no_duplicate = new Set(names)

console.log(...no_duplicate)

// Homework No.3

setTimeout(() => {
    console.log("Start")
}, 0)

setTimeout(() => {
    console.log("Middle")
}, 1000)

setTimeout(() => {
    console.log("End")
}, 2000)

// Homework No.4

const new_map = new Map([["Davit", 15], ["Nikita", 14]])

new_map.delete("Nikita")

new_map.has("Nikita")

console.log(new_map)

// Homework No.5

const ticket_names = ["Davit", "Nia", "Tekla", "Gio", "Nika", "Gio", "Lika", "Vako", "Nika"]

const filtered = new Set(ticket_names)

console.log(filtered)