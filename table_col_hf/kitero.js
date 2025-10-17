//void - undefined értéket vesz fel
const num = 7;
valami1();

/**
 * lokális változót fog tartalmazni
 * 
 * @returns {void}
 */
function valami1() {
    console.log("Helo");
}

/**
 * lokális változót fog tartalmazni
 * 
 * @returns {void}
 */
function valami2() {
    console.log(num)
}
valami2()

/**
 * lokális változót fog tartalmazni
 * 
 * @returns {void}
 */
function valami3() {
    const b = 9; //csak ezen a scope-on látszik, máshonnan nem érthető el
    console.log(b);
}
valami3()

/**
 * @param {number} param1
 * @returns {number}
 */
function valami4(param1) {
    const num1 = 6;
    const c = num1 + param1
    return c;
}
const valtozo = valami4(2)
console.log(valtozo)
