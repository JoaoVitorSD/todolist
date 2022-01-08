let hoje = new Date()
let dias = ["Domingo", "Segunda", "Terca", "Quarta", "Quinta", "Sexta", "Sabado"]
let week = Array(7).fill(0)
let diaHoje = dias[hoje.getUTCDay()]
document.querySelector('#diaSelected').value = hoje.getUTCDay() + 1
if (hoje.getDay() < 10) {

    let date = document.querySelector('#taskDate').min = hoje.getFullYear() + "-" + hoje.getMonth() + 1 + "-" + "0" + hoje.getDay()
    document.querySelector("#taskDate").value = hoje.getFullYear() + "-" + hoje.getMonth() + 1 + "-" + "0" + hoje.getUTCDate()
} else {
    let date = document.querySelector('#taskDate').min = hoje.getFullYear() + "-" + hoje.getMonth() + 1 + "-" + hoje.getDay()
    document.querySelector("#taskDate").value = hoje.getFullYear() + "-" + hoje.getMonth() + 1 + "-" + hoje.getUTCDate()

}
const eraseTask=(e)=>{
    document.querySelector("#"+e.path[2].id).removeChild(e.path[1])
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
    let input = document.createElement("input")
    input.type = "checkbox";
    input.className="task-checkbox "
    input.value = week[dia-1];
    input.addEventListener('click',eraseTask)
    week[dia-1]+=1
    task.classList.add('task')
    line.appendChild(document.createTextNode(name))
    line.style.display="inline";
    task.appendChild(input)
    task.appendChild(line);
    document.querySelector("#" + dias[dia - 1]).appendChild(task)
    

}
let file = document.getElementById('file')
const reader = () => {
    let mydata  = JSON.parse(domingo)
    console.log(mydata)
}
// reader()
const toggleRepeat =()=>{
    document.querySelectorAll(".toggleVis").forEach((e)=>{
        e.classList.toggle('vis')
    }
    )
}
document.addEventListener('keydown', (event) => {
    if(event.key=="Enter"){
        addButton()
    }
  },false);
document.querySelector(".buttonAdd").addEventListener('click', addButton)
document.querySelector("#repeat").click()
document.querySelector("#repeat").addEventListener('click',toggleRepeat)