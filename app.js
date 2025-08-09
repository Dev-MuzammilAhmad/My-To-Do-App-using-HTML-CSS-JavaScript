let inputValue = document.getElementById("input-value");
let list = document.getElementById("list");
let btn = document.getElementById("add-btn");

window.addEventListener("DOMContentLoaded", () => {
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.forEach(todo => {
        createListItem(todo);
    });
});

btn.addEventListener("click", () => {
    let value = inputValue.value.trim();

    if (value === "") {
        alert("Input box is empty.");
        return;
    }

    createListItem(value);

    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(value);
    localStorage.setItem("todos", JSON.stringify(todos));

    inputValue.value = "";
});

function createListItem(text) {
    let li = document.createElement("li");

    let para = document.createElement("p");
    para.textContent = text;

    let btn2 = document.createElement("button");
    btn2.textContent = "Delete";

    li.appendChild(para);
    li.appendChild(btn2);
    list.appendChild(li);

    btn2.addEventListener("click", () => {
        list.removeChild(li);

        let todos = JSON.parse(localStorage.getItem("todos")) || [];
        todos = todos.filter(todo => todo !== text);
        localStorage.setItem("todos", JSON.stringify(todos));
    });
}
