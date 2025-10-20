//használható változók: let, const
//const: értéke nem változtatható (állandó)
//let: értéke később megváltoztatható

//változó deklarálás JSDoc-kal
/**
 * @type {string}
 */
const word = "bamboozle" //nem változtatható érték
console.log(word) //konzolra: bamboozle

//tömb deklarálás
/**
 * @type {string[]} - stringeket tartalmazó tömb
 */
const tomb = ["a", "b"] //két elemű tömb létrehozása
console.log(tomb[0]) //első elemet kiírja "a"

//tömb bejárása for ciklussal (index alapján)
for(let i = 0; i < tomb.length; i++){
    console.log(tomb[i]) //kiírja: "a", majd "b"
}

//tömb bejárása for...of ciklussal (értékek alapján)
for(const a of tomb){
    console.log(a) //kiírja: "a", majd "b"
}

//tömb bejárása for...in ciklussal (indexek alapján)
//"for...in" a kulcsokat (indexeket) adja vissza, ezért a tömb elemeit a kulcs segítségével kell lekérni
for(const key in tomb){
    console.log(`${key}:${tomb[key]}`) //kiírja: "0:a" és "1:b"
}

//objektum deklarálása (kulcs-érték párokkal)
/**
 * @type {{nev:string, age:number}} - ez egy objektum, aminek két tulajdonsága van: név: string, age: number
 */
const a = {
    nev : 'Dorka', //szöveges tulajdonság
    age : 17 //numerikus tulajdonság
}
//objektum kiiratása konzolra
console.log(a) // {név: "Dorka", age: 17}