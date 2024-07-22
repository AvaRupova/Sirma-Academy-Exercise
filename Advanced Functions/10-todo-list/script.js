//script.js
document.getElementById('add-button').addEventListener('click', function () {
    const input = document.getElementById('todo-input');
    const task = input.value.trim();


    if (task) {


        let ulElement = document.getElementById('todo-list')

        const liElement = document.createElement('li')
        liElement.textContent = task

        const btnRemove = document.createElement('button')
        btnRemove.textContent = 'Remove'
        btnRemove.className = 'remove-btn'

        btnRemove.addEventListener('click', function () {
            ulElement.removeChild(liElement)
        })

        liElement.appendChild(btnRemove)
        ulElement.appendChild(liElement)

        input=''

    }
    // … your code … /
}
);
