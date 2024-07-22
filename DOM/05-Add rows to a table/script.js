function insertRow(){
    
    const tableElement = document.getElementById('sampleTable')

    const rowCount = tableElement.querySelectorAll('tr').length

    const firstTdElement = document.createElement('td')
    firstTdElement.textContent = `Row${rowCount + 1} cell1`
    const secondTdElement = document.createElement('td')
    secondTdElement.textContent = `Row${rowCount + 1} cell2`

    const rowElement = document.createElement('tr')
    rowElement.appendChild(firstTdElement)
    rowElement.appendChild(secondTdElement)

    tableElement.appendChild(rowElement)
}