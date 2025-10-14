const objvaltozo = {}
let num = 2

if(num > 5) {
    objvaltozo.tulajdonsagnev = "szam"
} else{
    objvaltozo["tulajdonsagnev"] = "number"
}
console.log(objvaltozo)
console.log(objvaltozo["tulajdonsagnev"])


let num2 = 6
if(num2 == "6") {
    console.log("igaz")
}
if(num2 === "6") {
    console.log("igaz")
}


if (objvaltozo.valtozonev == undefined) {
    console.log("igaz")
}
if (objvaltozo.valtozonev == null) {
    console.log("igaz")
}
if (objvaltozo.valtozonev === null) {
    console.log("a")
}

if (objvaltozo.valtozonev) {
    console.log("igaz")
}
if (!objvaltozo.valtozonev) {
    console.log("igaz")
}