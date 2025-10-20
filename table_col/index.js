
/**
* @type {{name:string, time:string, love1:string, love2?:string}[]}
*/

const arr = [
    {
        name: `Balassi Bálint`,
        time: `reformáció`,
        love1: `Losonczy Anna`,
        love2: `Dobó Krisztina`
    },
    {
        name: `Csokonai Vitéz Mihály`,
        time: `felvilágosodás`,
        love1: `Vajda Juliána`
    },
    {
        name: `Petőfi Sándor`,
        time: `magyar romantika`,
        love1: `Mednyanszky Berta`,
        love2: `Szendrey Júlia`
    },
    {
        name: `Ady Endre`,
        time: `20. század`,
        love1: `Léda`,
        love2: `Csinszka`
    }
]

//táblázat létrehozása
const table = document.createElement('table'); //<table> elem létrehozása
document.body.appendChild(table); //hozzáfűzzük a dokumentum tőrzséhez

//táblázat fejlécének létrehozása
const thead = document.createElement('thead'); //<thead> elem létrehozása
table.appendChild(thead); //hozzáfűzzük a table-höz

//thead-en belül egy sor létrehozása
const tr1 = document.createElement('tr'); //<tr> elem létrehozása
thead.appendChild(tr1); //hozzáfűzzük a thead-hez

//fejléc celláinak (th) létrehozása függvény segítségével
createCellElement("th", "Szerző neve", tr1); //első oszlop
createCellElement("th", "Korszak", tr1); //második oszlop
const th3 = createCellElement("th", "Szerelmek", tr1); //harmadik oszlop (összevont fejléchez)
th3.colSpan = 2; //"Szerelmek" oszlop két oszlopnyi helyet foglal, ezeket összevonja

//táblázat törzsének (tbody) létrehozása
const tbody = document.createElement('tbody'); //<tbody> elem létrehozása
table.appendChild(tbody); //hozzáfűzzük a table-höz

//tömb elemeinek (arr) feldolgozása
for (const a of arr) {
    //minden szerzőhöz létrehozunk egy új sort (tr)
    const tr2 = document.createElement('tr');
    tbody.appendChild(tr2);

    //szerző neve és korszaka mindig megjelenik
    createCellElement("td", a.name, tr2); //első cella: név
    createCellElement("td", a.time, tr2); //második cella: korszak

    //első szerelmének cellája
    const td3 = createCellElement("td", a.love1, tr2);
    
    //ha van második szerelme (love2), létrehozunk egy új cellát
    if(a.love2) {
        createCellElement("td", a.love2, tr2);
    }else {
        //ha nincs második szerelme, az első cella két oszlopot foglaljon el
        td3.colSpan = 2;
    }
}

/**
* létrehoz egy táblázatcella elemet és hozzáfűzi egy sorhoz

* @param {string} cellType - cella típusa: th/td
* @param {string} cellContent - a cella szövege
* @param {HTMLTableRowElement} cellRow - ehhez a sorhoz fogja hozzáadni
* @returns {HTMLTableCellElement} - td, abban az esetben, ha olyan cellát hozunk létre a függvényünkkel, amelynek később állítjuk a colSpan értékét
*/
function createCellElement(cellType, cellContent, cellRow) {
    const cell = document.createElement(cellType); //cella létrehozása, td-t vagy th-t akarunk, string
    cell.innerText = cellContent; //cella szövegét tartalmazza, amit beállítunk az innerText-nek, string
    cellRow.appendChild(cell); //hozzáadjuk a megadott sorhoz, táblázat sor értékét tartalmazó változó lesz, típusai: HTMLTableRowElement vagy HTMLElement
    return cell; //visszaadjuk a cellát, hogy később hivatkozhassunk rá
}
//A függvény törzsében létrehozunk egy html elemet az első paraméter alapján, majd beállítjuk a html elem "a" szövegének a második paraméter értékét, végül a 3. paraméter-hez hozzáfűzzük az itt létrehozott elemet.

//Házi feladat