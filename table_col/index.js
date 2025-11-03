
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
//form létrehozása
const form = document.createElement('form'); //<form> elem létrehozása
form.id = 'form_js'; //id beállítása
document.body.appendChild(form); //hozzáfűzés a dokumentum törzséhez

//h2 elem létrehozása
const h2 = document.createElement('h2'); //<h2> elem létrehozása
h2.innerText = 'Javascript form'; //innerText beállítása
form.appendChild(h2); //hozzáfűzés a form-hoz

//segédfüggvény
/**
 * @param {string} labelText - label szövege
 * @param {string} inputType - input típusa (pl. text)
 * @param {string} inputId - input id-ja
 * @param {HTMLElement} forms - amihez hozzáadjuk
 */
function createInputField(labelText, inputType, inputId, forms) {
    const label = document.createElement('label'); //<label> elem létrehozása
    label.htmlFor = inputId; //label for attribútuma az input id-járe mutat
    label.innerText = labelText; //label szövegének beállítása
    forms.appendChild(label); //label hozzáadása a form-hoz

    const br1 = document.createElement('br'); //<br> elem létrehozása
    forms.appendChild(br1); //1. sortörés beszúrása

    const input = document.createElement('input'); //<input> mező létrehozása
    input.type = inputType; //input típusának beállítása (text)
    input.id = inputId; //input id-jának beállítása (id)
    input.name = inputId; //input id-jának beállírása (name)
    forms.appendChild(input); //input hozzáadása form-hoz

    const br2 = document.createElement('br');
    forms.appendChild(br2); //2. sortörés beszúrása

    const br3 = document.createElement('br');
    forms.appendChild(br3); //3. sortörés beszúrása
}

//input mezők létrehozása segédfüggvénnyel
createInputField('Költő neve:', 'text', 'kolto_nev', form); //elso input
createInputField('Korszak:', 'text', 'korszak', form); //második input
createInputField('Szerelme:', 'text', 'szerelem1', form); //harmadik input
createInputField('Szerelme:', 'text', 'szerelem2', form); //negyedik input

//gomb létrehozása
const button = document.createElement('button'); //<button> elem létrehozása
button.innerText = 'Hozzáadás'; //gomb felirata
form.appendChild(button); //gomb hozzáadása a form-hoz