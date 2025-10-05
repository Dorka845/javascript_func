/**
 * @type {{theme:string, time:string, scientist1:string, scientist2?:string}[]}
 */
const arr = [
    {
        theme: 'Optika',
        time: 'XI. szazad',
        scientist1: 'Alhazen'
    },
    {
        theme: 'Asztronómia',
        time: 'reneszánsz',
        scientist1: 'Kepler',
        scientist2: 'Galilei'
    },
    {
        theme: 'Kvantumfizika',
        time: 'XIX-XX. század',
        scientist1: 'Max Planck',
        scientist2: 'Albert Einstein'
    },
    {
        theme: 'Modern fizika',
        time: 'XX-XXI. század',
        scientist1: 'Richard Feynman',
        scientist2: 'Stephen Hawking'
    }
]

const table = document.createElement('table'); //létrehoz html elemet a memóriában (csak memóriában)
document.body.appendChild(table); //hozzáfűz egy html elemet valamihez
//table.appendChild() <- berakja hozzá


const thead = document.createElement('thead');
table.appendChild(thead);

const tr = document.createElement('tr');
thead.appendChild(tr);

const th1 = document.createElement('th');
th1.innerText = "Fizika területe";
tr.appendChild(th1);

const th2 = document.createElement('th');
th2.innerText = "Időszak";
tr.appendChild(th2);

const th3 = document.createElement('th');
th3.innerText = "Képviselők";
th3.colSpan = 2
tr.appendChild(th3);


const tbody = document.createElement('tbody');
table.appendChild(tbody);

for (const a of arr) {
    const tr = document.createElement('tr');
    tbody.appendChild(tr);

    const tr_td1 = document.createElement('td');
    tr_td1.innerText = a.theme;
    tr.appendChild(tr_td1);

    const tr_td2 = document.createElement('td');
    tr_td2.innerText = a.time;
    tr.appendChild(tr_td2);

    const tr_td3 = document.createElement('td');
    tr_td3.innerText = a.scientist1;
    tr.appendChild(tr_td3);

    if(a.scientist2 == undefined) {
        tr_td3.colSpan = 2
    }
    else {
        const tr_td4 = document.createElement('td')
        tr_td4.innerText = a.scientist2;
        tr.appendChild(tr_td4)
    }
}

