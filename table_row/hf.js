/**
 * @typedef {{nationality:string, author1:string, author2?:string, literarypiece1:string, literarypiece2?:string}} CountryWriters
 */

/**
 * @typedef {{id:string, label:string}} FormField
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
        literarypiece1: 'Egyperces Novellák',
        author2: 'József Attila',
        literarypiece2: 'Klárisok',
    },
    {
        nationality: 'Svájc',
        author1: 'Friedrich Dürrenmatt',
        literarypiece1: 'A fizikusok',
    }
]

/**
 * @type {{header:string[], formFields:FormField[]}}
 */
const formElements = {
    header: ['Nemzetiség', 'Szerző', 'Mű'],
    formFields: [
        { 
            id: "nemzetiseg",
            label: "Nemzetiség: ",
        },
        { 
            id: "szerzo1",
            label: "Szerző: ",
        },
        { 
            id: "mu1",
            label: "Mű: ",
        },
        { 
            id: "szerzo2",
            label: "Másik Szerző: ",
        },
        { 
            id: "mu2",
            label: "Mű: ",
        }
    ]
}

generateTable(formElements.header, "tablebody");
renderTableBody(arr);

const formHTML = document.getElementById("htmlform"); //form változóban tárolása
formHTML.addEventListener('submit', HTMLFormEventListener); //nameless function kicserélhető a lent definiált függvényre (erre változóként hivatkozunk)

const formJS = generateForm("jsForm", formElements.formFields);
document.body.appendChild(formJS);

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

    if (!validateFields(nemzetiseg, szerzo1, mu1)){
        return;
    }

    obj.nationality = nemzetisegvalue; //object tulajdonságait megfeleltetjük az input értékkel
    obj.author1 = szerzo1value;
    obj.literarypiece1 = mu1value;

    obj.author2 = szerzo2value !== "" ? szerzo2value : undefined;
    obj.literarypiece2 = mu2value !== "" ? mu2value : undefined;

    arr.push(obj); //hozzáadjuk az objektumot az arrayhez
    renderTableBody(arr); //meghívjuk rá a renderTableBody-t a tömbbel
})
