let hoje = new Date()
let dias = ["Domingo", "Segunda", "Terca", "Quarta", "Quinta", "Sexta", "Sabado"]
let diaHoje = dias[hoje.getUTCDay()]
document.querySelector('#diaSelected').value = hoje.getUTCDay() + 1
if (hoje.getDay() < 10) {

    let date = document.querySelector('#taskDate').min = hoje.getFullYear() + "-" + hoje.getMonth() + 1 + "-" + "0" + hoje.getDay()
    document.querySelector("#taskDate").value = hoje.getFullYear() + "-" + hoje.getMonth() + 1 + "-" + "0" + hoje.getUTCDate()
} else {
    let date = document.querySelector('#taskDate').min = hoje.getFullYear() + "-" + hoje.getMonth() + 1 + "-" + hoje.getDay()
    document.querySelector("#taskDate").value = hoje.getFullYear() + "-" + hoje.getMonth() + 1 + "-" + hoje.getUTCDate()

}
const addButton = () => {
    let name = document.querySelector('#taskName').value
    if (name == "" || name == " " || name.length < 3) {
        alert("A tarefa possui um nome inválido");
        return;
    }
    let date = document.querySelector('#taskDate').value
    let dia = document.querySelector('#diaSelected').value
    let toggle = document.querySelector('#repeat').checked
    let task = document.createElement("div")
    let line = document.createElement("p")
    task.classList.add('task')
    line.appendChild(document.createTextNode(name))
    task.appendChild(line);
    document.querySelector("#" + dias[dia - 1]).appendChild(task)

}
let file = document.getElementById('file')
const reader = () => {
    let mydata  = JSON.parse(domingo)
    console.log(mydata)
}
reader()
document.querySelector(".buttonAdd").addEventListener('click', addButton)
document.querySelector("#repeat").click()