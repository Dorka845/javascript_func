//használható változók: let, const

//változó deklarálás
/**
 * @type {string}
 */
const word = "bamboozle"
console.log(word)

//tömb deklarálás
/**
 * @type {string[]}
 */
const tomb = ["a", "b"]
console.log(tomb[0])

for(let i = 0; i < tomb.length; i++){
    console.log(tomb[i])
}
for(const a of tomb){
    console.log(a)
}
for(const key in tomb){
    console.log(`${key}:${tomb[key]}`)
}

/**
 * @type {{nev:string, age:number}}
 */
const a = {
    nev : 'Dorka',
    age : 17
}
console.log(a)
