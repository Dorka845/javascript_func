/**
 * @typedef {{nationality:string, author1:string, author2?:string, literarypiece1:string, literarypiece2?:string}} CountryWriters
 */


/**
 * @type {CountryWriters[]}
 */

const arr = [
    {
        nationality: 'Orosz',
        author1: 'Gogol',
        literarypiece1: 'A köpönyeg',
        author2: 'Csehov',
        literarypiece2: 'A csinovnyik halála',
    },
    {
        nationality: 'Cseh',
        author1: 'Franz Kafka',
        literarypiece1: 'Az átváltozás',
    },
    {
        nationality: 'Magyar',
        author1: 'Örkény István',
        literarypiece1: 'gyperces Novellák',
        author2: 'József Attila',
        literarypiece2: 'Klárisok',
    },
    {
        nationality: 'Svácj',
        author1: 'Friedrich Dürrenmatt',
        literarypiece1: 'A fizikusok',
    }
]

const table = document.createElement('table');
document.body.appendChild(table);

const a = ['Nemzetiség', 'Szerző', 'Mű'];
generateHeader(table, a);

const tbody = document.createElement('tbody');
tbody.id = 'tablebody';
table.appendChild(tbody);

renderTableBody(arr);

const formHTML = document.getElementById("htmlform"); //form változóban tárolása
formHTML.addEventListener('submit', HTMLFormEventListener); //nameless function kicserélhető a lent definiált függvényre (erre változóként hivatkozunk)

//Form létrehozása JS-ben
const formJS = document.createElement('form');
document.body.appendChild(formJS);

//Form feltöltése
createFormElement(formJS, 'nemzetiseg', 'Nemzetiség:');
createFormElement(formJS, 'szerzo1', 'Szerző:');
createFormElement(formJS, 'mu1', 'Mű:');
createFormElement(formJS, 'szerzo2', 'Másik Szerző:');
createFormElement(formJS, 'mu2', 'Mű:');

formJS.addEventListener("submit", function(e){
    //alapértelmezett működés egy get-et küld
    e.preventDefault(); //alapértelmezett működést gátolja
    /**
     * @type {HTMLFormElement}
     */
    const event = e.target;

    /** @type {HTMLInputElement} */
    const nemzetiseg = event.querySelector("#nemzetiseg");
    /** @type {string} */
    const nemzetisegvalue = nemzetiseg.value;

    /** @type {HTMLInputElement} */
    const szerzo1 = event.querySelector("#szerzo1");
    /** @type {string} */
    const szerzo1value = szerzo1.value;

    /** @type {HTMLInputElement} */
    const szerzo2 = event.querySelector("#szerzo2");
    /** @type {string} */
    const szerzo2value = szerzo2.value;

    /** @type {HTMLInputElement}*/
    const mu1 = event.querySelector("#mu1");
    /** @type {string} */
    const mu1value = mu1.value;

    /** @type {HTMLInputElement} */
    const mu2 = event.querySelector("#mu2");
    /** @type {string} */
    const mu2value = mu2.value;

        
    /** 
     * @type {CountryWriters} 
     */
    const obj = {}; //object létrehozása

    if (validateFields(nemzetiseg, szerzo1, mu1)){

    }

    obj.nationality = nemzetisegvalue; //object tulajdonságait megfeleltetjük az input értékkel
    obj.author1 = szerzo1value;
    obj.literarypiece1 = mu1value;

    if (szerzo2value && mu2value) {
        obj.author2 = szerzo2value;
        obj.literarypiece2 = mu2value;
    }

    arr.push(obj); //hozzáadjuk az objektumot az arrayhez
    renderTableBody(arr); //meghívjuk rá a renderTableBody-t a tömbbel
})

//Gomb létrehozása és hozzáadása
const button = document.createElement('button');
button.innerText = 'Hozzáadás';
formJS.appendChild(button);

