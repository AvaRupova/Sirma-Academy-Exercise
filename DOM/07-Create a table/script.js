function createTable() {

    const tableElement = document.getElementById('myTable')

    const count = document.querySelectorAll('tr').length

    const tableRow = document.createElement('tr')

    const tableD = document.createElement('td')
    tableD.textContent = `Row${count + 1} cell${count + 1}`



    tableElement.appendChild(tableRow)
    tableRow.appendChild(tableD)

}