/**
 * @typedef {{nationality:string, author1:string, author2?:string, literarypiece1:string, literarypiece2?:string}} CountryWriters
 */


/**
 * Táblázat létrehozás
 * 
 * @param {string[]} headerList - fejléc feliratai
 * @param {string} tbodyId - tbody id-ja
 * @returns {HTMLTableElement} - a létrehozott táblázat
 */
function generateTable(headerList, tbodyId) {
    const table = document.createElement("table");

    generateHeader(table, headerList); //fejléc létrehozása meglévő függvénnyel

    //tbody létrehozása
    const tbody = document.createElement('tbody');
    tbody.id = tbodyId;
    table.appendChild(tbody);

    document.body.appendChild(table);

    return table;
}

/**
 * Fejléc létrehozása
 * 
 * @param {HTMLTableElement} table 
 * @param {string[]} headerList - a content amik a táblázat soraiba mennek annak a változója
 */
function generateHeader(table, headerList){
    const thead = document.createElement('thead');
    table.appendChild(thead);

    const tr = document.createElement('tr');
    thead.appendChild(tr);

    for (let i of headerList){
        createCell('th', i, tr)
    }
    return thead;
}

/**
 * tbody létrehozás
 * 
 * @param {CountryWriters[]} array
 */
function renderTableBody(array) {
    const tablebody = document.getElementById('tablebody');
    tablebody.innerHTML = "";

    for(let a of array) {
        renderTableRow(tablebody, a);
    }
}

/**
 * Táblázatsorok létrehozása
 * 
 * @param {HTMLTableSectionElement} tablebody 
 * @param {CountryWriters} CountryWriters 
 */
function renderTableRow(tablebody, CountryWriters) {
    const tr2 = document.createElement('tr');
    tablebody.appendChild(tr2);

    const td1 = createCell('td', CountryWriters.nationality, tr2)
    td1.addEventListener("click",function(e){
        /**
         * @type {HTMLTableCellElement}
         */
        const valtozo = e.target;

        const tr = valtozo.parentElement;
        const tbody = tr.parentElement;
        const alrmarked = tbody.querySelector('.marked');

        if (alrmarked !== null) {
            alrmarked.classList.remove('marked');
        }

        valtozo.classList.add("marked");
    });

    const td2 = createCell('td', CountryWriters.author1, tr2);
    const td3 = createCell('td', CountryWriters.literarypiece1, tr2);

    if (CountryWriters.author2 != undefined && CountryWriters.literarypiece2 != undefined) {
        const tr3 = document.createElement('tr');
        tablebody.appendChild(tr3);

        const td4 = createCell('td', CountryWriters.author2, tr3);
        const td5 = createCell('td', CountryWriters.literarypiece2, tr3);

        td1.rowSpan = 2;
    }
}

/**
 * Cellák létrehozása
 * 
 * @param {'td'|'th'} cellType - milyen a typeja a cellnek th vagy td
 * @param {string} cellContent - a cell contentje azaz a változó
 * @param {HTMLTableRowElement} parentRow - a sor amihez hozzáadjuk
 * @returns 
 */
function createCell(cellType, cellContent, parentRow) {
    const cell = document.createElement(cellType); 
    cell.innerText = cellContent;
    parentRow.appendChild(cell);
    return cell;
}

/**
 * Form elementek létrehozása
 * 
 * @param {HTMLElement} forms - amihez hozzáadjuk
 * @param {string} id - input id-ja
 * @param {string} labelContent - label szövege
 */
function createFormElement(forms, id, labelContent) {
    const div = document.createElement('div');
    forms.appendChild(div);

    const label = document.createElement('label');
    label.htmlFor = id;
    label.innerText = labelContent;
    div.appendChild(label);
    
    const br1 = document.createElement('br');
    div.appendChild(br1);
    
    const input = document.createElement('input');
    input.id = id;
    div.appendChild(input);

    const br2 = document.createElement('br');
    div.appendChild(br2);

    const br3 = document.createElement('br');
    div.appendChild(br3);
    
    const span = document.createElement('span');
    span.classList.add("error");
    div.appendChild(span);
}

/**
 * Form létrehozása
 * 
 * @param {string} id - a form id-ja
 * @param {FormField[]} elements - label-input párok adatai
 * @returns {HTMLFormElement}
 */
function generateForm(id, elements) {
    const form = document.createElement('form');
    form.id = id

    for (let elem of elements) {
        createFormElement(form, elem.id, elem.label)
    }

    const button = document.createElement('button');
    button.innerText = 'Hozzáadás';
    form.appendChild(button);

    return form;
}

/**
 * htmlform FormEventListener-jét kiszervezzük
 * @param {Event} e
 */
function HTMLFormEventListener(e) {
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

    if(!validateFields(nemzetiseg, szerzo1, mu1)) {
        return;
    }

    /** 
     * @type {CountryWriters} 
     */
    const tomb = {};

    tomb.nationality = nemzetisegvalue;
    tomb.author1 = szerzo1value;
    tomb.literarypiece1 = mu1value;

    if (szerzo2value && mu2value) {
        tomb.author2 = szerzo2value;
        tomb.literarypiece2 = mu2value;
    }

    const tbody = document.getElementById("tablebody1");
    renderTableRow(tbody, tomb);
}

/**
 * Validálás
 * 
 * @param {HTMLInputElement} inputField 
 * @param {string} errorMsg 
 * @returns {boolean}
 */
function validateField(inputField, errorMsg) {
    let valid = true;

    if (inputField.value === "") {
        const parentDiv = inputField.parentElement;
        const error = parentDiv.querySelector(".error");
        error.innerText = errorMsg;
        valid = false;
    }
    return valid;
}

/**
 * Validálás
 * 
 * @param {HTMLInputElement} inputField1 
 * @param {HTMLInputElement} inputField2 
 * @param {HTMLInputElement} inputField3 
 */
function validateFields(inputField1, inputField2, inputField3) {
    const form = inputField1.form;
    const error = form.querySelectorAll('.error');
    for (const i of error) {
        i.innerText = "";
    } //hibaüzenetek törlése

    let valid = true;
    if (!validateField(inputField1, "Mező kitöltése kötelező!")) {
        valid = false;
    }

    if (!validateField(inputField2, "Mező kitöltése kötelező!")) {
        valid = false;
    }

    if (!validateField(inputField3, "Mező kitöltése kötelező!")) {
        valid = false;
    }

    return valid;
}
