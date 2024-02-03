const list = document.getElementById('to-do-list');
const newTask = () => {
    const input = document.getElementById("input-new-task");
    const inputvalor = input.value;

    if (inputvalor == "") {
        return alert("Sua tarefa não tem nenhum valor")
    } 

    const item = document.createElement('li');
    const button = document.createElement("button");
    button.classList.add('list-button')    
    button.classList.add('ph')
    button.classList.add('ph-check')
    item.append(inputvalor[0].toUpperCase() + inputvalor.substring(1))
    
    item.appendChild(button)
    
    list.appendChild(item)
    
    input.value = '';

    const removeTask = () => {
        list.removeChild(item);
    };
    
    button.addEventListener('click', removeTask);
}
    const buttonremoveall = document.getElementById('button-remove-all')

    const removeAll = () => {
        list.innerText = '';
    }

   buttonremoveall.addEventListener('click', removeAll);

const buttonAdd = document.getElementById('btn-new-task');
buttonAdd.addEventListener('click', newTask);