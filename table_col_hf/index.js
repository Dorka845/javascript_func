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
th3.colSpan=2
tr.appendChild(th3);

const tbody = document.createElement('tbody');
table.appendChild(tbody);

const tr1 = document.createElement('tr');
tbody.appendChild(tr1);

const tr1_td1 = document.createElement('td');
tr1_td1.innerText = a.theme, a.time, a.scientist1;
tr1.appendChild(tr1_td1);
const tr1_td2 = document.createElement('td');
tr1_td2.innerText = a.theme, a.time, a.scientist1;
tr1.appendChild(tr1_td2);
const tr1_td3 = document.createElement('td');
tr1_td3.innerText = a.theme, a.time, a.scientist1;
tr1.appendChild(tr1_td3);



