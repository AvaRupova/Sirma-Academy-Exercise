function getOptions(){
    
    const optionElements = document.querySelectorAll('#mySelect > option')

    const optionsArr = Array.from(optionElements)

    const result = optionsArr.map(option => option.textContent).join(', ')


    alert(`Options: ${result}`)
}