let btn = document.querySelector(".btn")
let container = document.querySelector(".task-container")

function addItem(){
    if(document.querySelector(".item").value === '')
    {
        alert("Task cannot be empty")
    }
    else
    {
        var li = document.createElement("li")
        li.innerHTML = document.querySelector(".item").value;
        container.appendChild(li)
        document.querySelector(".item").value = "";
        var span = document.createElement("span")
        span.innerHTML = '\u00d7'
        li.appendChild(span)

        saveData();
    }
}

btn.addEventListener('click',addItem)

document.querySelector(".item").addEventListener('keyup',(e)=>{
    if(e.keyCode === 13)
    {
        addItem();
    }
})

container.addEventListener('click',(e)=>{
    if(e.target.tagName === 'LI')
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === 'SPAN')
    {
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem("data",container.innerHTML);
}

function showData(){
    container.innerHTML = localStorage.getItem("data");
}

showData();