const start = document.getElementById('start')
const popup = document.getElementById('container')
const form = document.querySelector('form');
const tableContainer = document.getElementById('table-container')
let data2
let value

function handleSubmit(event){
    event.preventDefault();
    const data = new FormData(event.target);
    value = Object.fromEntries(data.entries())
    console.log(value[`${Object.keys(value)[0]}`])
    openPopup()
    insertTable()
}

function openPopup(){
    if(popup.className.includes('active')) popup.className = 'container'
    else popup.className = 'container active'
}

function insertTable(){
    let table = document.createElement('table')
    let size = Object.keys(value).length

    for(let i = 0; i < size; i++){
        let tr = document.createElement('tr')
        for(let j = 0; j < 2; j ++){
            let td = document.createElement('td')
            if(j == 0) td.innerHTML += Object.keys(value)[i]
            if(j == 1) td.innerHTML += value[`${Object.keys(value)[i]}`]
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }

    tableContainer.appendChild(table)
}


form.addEventListener('submit', handleSubmit);