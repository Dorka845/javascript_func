/**
 * @type {{writer:string, time:string, lover:string, otherlover?:string}[]}
 */
const arr = [
    {
        writer: 'Balassi Bálint',
        time: 'reformáció',
        lover: 'Losonczy Anna',
        otherlover: 'Dobó Krisztina',
    },
    {
        writer: 'Csokonai Vitéz Mihály',
        time: 'felvilágosodás',
        lover: 'Vajda Juliána',
    },
    {
        writer: 'Petőfi Sándor',
        time: 'magyar romantika',
        lover: 'Mednyánszky Berta',
        otherlover: 'Szendrey Júlia',
    },
    {
        writer: 'Ady Endre',
        time: '20. század',
        lover: 'Léda',
        otherlover: 'Csinszka',
    }
]

const table = document.createElement('table');
document.body.appendChild(table);

//thead, th-k
const thead = document.createElement('thead');
table.appendChild(thead);

const tr = document.createElement('tr');
thead.appendChild(tr);

const th1 = document.createElement('th');
th1.innerText = 'Szerző neve';
tr.appendChild(th1);

const th2 = document.createElement('th');
th2.innerText = 'Korszak';
tr.appendChild(th2);

const th3 = document.createElement('th');
th3.innerText = 'Szerelmek';
th3.colSpan = 2
tr.appendChild(th3);

//tbody, td-k
const tbody = document.createElement('tbody');
table.appendChild(tbody);

for (const a of arr) {
    const tr = document.createElement('tr');
    tbody.appendChild(tr);

    const tr_td1 = document.createElement('td');
    tr_td1.innerText = a.writer;
    tr.appendChild(tr_td1);

    const tr_td2 = document.createElement('td');
    tr_td2.innerText = a.time;
    tr.appendChild(tr_td2);

    const tr_td3 = document.createElement('td');
    tr_td3.innerText = a.lover;
    tr.appendChild(tr_td3);

    if(a.otherlover == undefined) {
        tr_td3.colSpan = 2
    }
    else {
        const tr_td4 = document.createElement('td')
        tr_td4.innerText = a.otherlover;
        tr.appendChild(tr_td4)
    }
}

/**
 * 
 * @param {string} celltype 
 * @param {string} cellcontent 
 * @param {HTMLTableRowElement} cellrow  //HTMLElement is jó
 */
function createElement(celltype, cellcontent, cellrow) {
    const cell = document.createElement(celltype);
    cell.innertext = cellcontent;
    cellrow.appendChild(cell);

}
createElement();