//https://www.rithmschool.com/courses/intermediate-javascript/javascript-dom-events-exercises
window.onload = function () {
    let toDoForm = document.querySelector("#toDoForm");
    let toDoList = document.querySelector("#toDoList");

    let savedTodos = JSON.parse(localStorage.getItem("savedTodos")) || []
    for (let i = 0; i < savedTodos.length; i++) {
        let newToDo = document.createElement("li");
        newToDo.innerText = savedTodos[i].task;
        newToDo.isCompleted = savedTodos[i].isCompleted ? true : false;

        if (newToDo.isCompleted)
            newToDo.style.textDecoration = "line-through";

        let removeButton = document.createElement("button");
        removeButton.innerText = "X";
        newToDo.appendChild(removeButton);
        toDoList.appendChild(newToDo);
    }



    toDoForm.addEventListener("submit", function createToDO(event) {
        event.preventDefault();

        let newToDo = document.createElement("li");
        newToDo.innerText = document.querySelector("#task").value;
        newToDo.isCompleted = false;

        let removeButton = document.createElement("button");
        removeButton.innerText = "X";
        newToDo.appendChild(removeButton);

        toDoList.appendChild(newToDo);
        toDoForm.reset();

        savedTodos.push({ task: newToDo.innerText.slice(0, -1), isCompleted: false });

        localStorage.setItem("savedTodos", JSON.stringify(savedTodos));
    })

    toDoList.addEventListener("click", (event) => {
        //Delete button clicked
        if (event.target.tagName.toLowerCase() == "button") {
            for (let i = 0; i < savedTodos.length; i++) {
                if (savedTodos[i].task === event.target.parentNode.innerText.slice(0, -1)) {
                    savedTodos.splice(i, 1);
                    localStorage.setItem("savedTodos", JSON.stringify(savedTodos));
                    break;
                }
            }
            event.target.parentNode.remove();
        }
        //task text clicked
        if (event.target.tagName.toLowerCase() == "li") {
            if (event.target.style.textDecoration == "") {
                event.target.style.textDecoration = "line-through";
                for (let i = 0; i < savedTodos.length; i++) {
                    if (savedTodos[i].task === event.target.parentNode.innerText.slice(0, -1)) {
                        savedTodos[i].isCompleted = true;
                        localStorage.setItem("savedTodos", JSON.stringify(savedTodos));
                    }
                }
            }
            else {
                event.target.style.textDecoration = "";
                for (let i = 0; i < savedTodos.length; i++) {
                    if (savedTodos[i].task === event.target.parentNode.innerText.slice(0, -1)) {
                        savedTodos[i].isCompleted = false;
                        localStorage.setItem("savedTodos", JSON.stringify(savedTodos));
                    }
                }
            }
        }
    })
};