//void - undefined értéket vesz fel, nincs visszatérési értéke, azaz a függvény lefut, de nem ad vissza semmit amit eltudnánk tárolni változóban
const a = 7; //globális const változó, minden függvény eléri, de nem módosíthatja
valami1();

/**
 * nem fog semmilyen értékkel visszatérni
 * lokális változót tartalmazhat csak (nincs ebben)
 * 
 * @returns {void}
 */
function valami1() {
    console.log("Helo"); //kiírja a "Helo" szöveget konzolra
} 
 
/**
 * void típus azaz nincs visszatérési értéke
 * eléri a globális scope-on lévő változókat
 * 
 * @returns {void}
 */
function valami2() {
    console.log(a); //eléri és kiírja a globális "a" változót (értéke: 7)
}
valami2() //meghívjuk a függvényt konzolon

/**
 * létrehoz egy lokális változót "b" néven
 * csak ebben a függvényben (scope-on) létezik, kívülről nem érhető el
 * 
 * @returns {void}
 */
function valami3() {
    const b = 9; //csak ezen a scope-on látszik, máshonnan nem érthető el
    console.log(b); //konzolon: 9
}
valami3() //lefut, kiírja: 9

/**
 * egy paramétert vár (param1)
 * létrehoz lokális számot (num)
 * visszaadja a kettő összegét
 * 
 * @param {number} param1
 * @returns {number}
 */
function valami4(param1) {
    const num = 6; //lokális változó
    const c = num + param1 //összeadja a két értéket
    return c; //visszatér az eredménnyel
}
//meghívja a függvényt és az eredményt eltárolja a "valtozo" nevű változóban
const valtozo = valami4(2) //num (6) + param1 (2) = 8
console.log(valtozo) //konzolon: 8