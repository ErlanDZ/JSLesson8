let baseTodo = [
    // {
    //     id: 1,
    //     text: 'купить прод',
    //      isDan: false,
    //     isImportand: false,
    //     isChange: false,
    //     btn: 'DELETE'
    // },

    // {
    //     id: 2,
    //     text: 'купить Apple',
    //      isDan: false,
    //     isImportand: false,
    //     isChange: false,
    //     btn: 'DELETE'
    // },

    // {
    //     id: 3,
    //     text: 'купить Samsung',
    //      isDan: false,
    //     isImportand: false,
    //     isChange: false,
    //     btn: 'DELETE'
    // }
]

let list = document.querySelector('.content_list');

let addInput = document.querySelector('.form_input');

let addTask = document.querySelector('.form_btn');

let form = document.querySelector('.form');


const addDataForList = () =>{
    list.innerHTML = '';
    baseTodo.forEach((item) =>{
        list.innerHTML += `
        <li class="content_list-item">${item.text}
        <button type = 'button' class = 'btn'>${item.btn}</button>
        </li>
        `
    })

    const removeButtons = document.querySelectorAll('.btn');

for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', () =>{
        removeButtons[i].parentElement.remove();
    })
    
    
}
}



form.addEventListener('submit', (e) =>{
    e.preventDefault();
    baseTodo = [...baseTodo, {
        id: baseTodo.length ? baseTodo.at(-1).id +1 : 1,
        text: addInput.value,
        isDan: false,
        isImportand: false,
        isChange: false,
        btn: 'DELETE'
    }]
    addInput.value = '';
    addDataForList();
})

