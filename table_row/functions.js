/**
 * @typedef {{nationality:string, author1:string, author2?:string, literarypiece1:string, literarypiece2?:string}} CountryWriters
 */


/**
 * tbody létrehozás
 * 
 * @param {HTMLTableSection} tablebody 
 * @param {CountryWriters[]} CountryWriters 
 */
function renderTableRow(tablebody, CountryWriters) {
    const tr2 = document.createElement('tr');
    tablebody.appendChild(tr2);

    const tr2_td1 = createCell('td', CountryWriters.nationality, tr2)
    tr2_td1.addEventListener("click",function(e){
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

    createCell('td', CountryWriters.author1, tr2);
    createCell('td', CountryWriters.literarypiece1, tr2);

    if (CountryWriters.author2 != undefined && CountryWriters.literarypiece2 != undefined) {
        const tr3 = document.createElement('tr');
        tablebody.appendChild(tr3);

        createCell('td', CountryWriters.author2, tr3);
        createCell('td', CountryWriters.literarypiece2, tr3);

        tr2_td1.rowSpan = 2;
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
 * Header létrehozása
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
 * @param {CountryWriters[]}
 */
function renderTableBody(array) {
    const tablebody = document.getElementById('tablebody');
    tablebody.innerHTML = "";

    for(let a of array) {
        renderTableRow(tablebody, a);
    }
}
renderTableBody(arr);


/**
 * Form elementek létrehozás
 * 
 * @param {string} labelText - label szövege
 * @param {string} inputId - input id-ja
 * @param {HTMLElement} forms - amihez hozzáadjuk
 */
function createFormElement(forms, id, labelContent) {
    const div = document.createElement('div');
    forms.appendChild(div);

    const label = document.createElement('label');
    label.htmlFor = id;
    label.innerText = labelContent;
    div.appendChild(label);

    const br1 = document.createElement('br');
    forms.appendChild(br1);

    const input = document.createElement('input');
    input.id = id;
    div.appendChild(input);

    const br2 = document.createElement('br');
    forms.appendChild(br2);

    const br3 = document.createElement('br');
    forms.appendChild(br3);

    const span = document.createElement('span');
    classList.add
    div.appendChild(span);
}

/**
 * 
 * @param {HTMLInputElement} inputField1 
 * @param {HTMLInputElement} inputField2 
 * @param {HTMLInputElement} inputField3 
 */
function validateFields(inputField1, inputField2, inputField3) {
    const valid = true;
    if (inputField1.value == "") {
        valid = false;
    }

    return valid;
}