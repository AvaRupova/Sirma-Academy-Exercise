

function removehighlight(){
    const selection = document.querySelectorAll('b')
    selection.forEach(function(word){
        word.classList.add('highlight')
    })
}

function removehighlight(){
    const selection = document.querySelectorAll('b')

    selection.forEach(function(word){
        word.classList.remove('highlight')
    })
}



