/**
 * @type {{battle:string, opposingparties1:string, opposingparties2?:string, army1:string, army2?:string}}
 */

const arr = [
    {
        battle: 'Rákóczi szabadságharc',
        opposingparties1: 'Kuruc',
        army1: 'A 70.000',
        opposingparties2: 'Labanc',
        army2: '60.000',
    },
    {
        battle: '48-as szabadságharc',
        opposingparties1: 'Osztrák császárság (+ Orosz birodalom)',
        army1: '170.000 (+ 200.000)',
        opposingparties2: 'Magyar királyság',
        army2: '170.000',
    },
    {
        battle: 'I. világháború',
        opposingparties1: 'Antant',
        army1: '43 millió',
        opposingparties2: 'Központi hatalmak',
        army2: '25 millió',
    },
    {
        battle: 'Bosworthi csata',
        opposingparties1: 'Angolok (York + Lancester)',
        army1: '15.000',
    }
]

const table = document.createElement('table');
document.body.appendChild(table);

const thead = document.createElement('thead');
table.appendChild(thead);

const tr1 = document.createElement('tr');
thead.appendChild(tr1);

const a = ['Harc megnevezése', 'Szembenálló felek', 'Haderő'];
for(let i of a) {
    const th = document.createElement('th');
    tr1.appendChild(th);
    th.innerText = i;
}

const tbody = document.createElement('tbody');
table.appendChild(tbody);

for(let a of arr) {
    const tr2 = document.createElement('tr');
    tbody.appendChild(tr2);

    const tr2_td1 = document.createElement('td');
    tr2_td1.innerText = a.battle;
    tr2.appendChild(tr2_td1);

    const tr2_td2 = document.createElement('td');
    tr2_td2.innerText = a.opposingparties1;
    tr2.appendChild(tr2_td2);

    const tr2_td3 = document.createElement('td');
    tr2_td3.innerText = a.army1;
    tr2.appendChild(tr2_td3);

    if (a.opposingparties2 != undefined && a.army2 != undefined) {
        const tr3 = document.createElement('tr');
        tbody.appendChild(tr3);

        const tr3_td2 = document.createElement('td');
        tr3_td2.innerText = a.opposingparties2;
        tr3.appendChild(tr3_td2);

        const tr3_td3 = document.createElement('td');
        tr3_td3.innerText = a.army2;
        tr3.appendChild(tr3_td3);

        tr2_td1.rowSpan = 2;
    }
}