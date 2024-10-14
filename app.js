const form = document.querySelector("#todo");
const list = document.querySelector("#list");

// Initialize or retrieve the to-do list from localStorage
let todolist = JSON.parse(localStorage.getItem("mylist")) || [];

// Function to display the list items
function displayList() {
    list.innerHTML = "";
    todolist.forEach((value) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${value}`;
        list.appendChild(listItem);
    });
}

// Display the list initially from localStorage
displayList();

// Add new to-do item
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const todo = event.target.elements.todoInput.value;

    if (todo.trim() !== "") {
        todolist.push(todo);
        localStorage.setItem("mylist", JSON.stringify(todolist));
        displayList();
    }

    // Clear the input field
    event.target.elements.todoInput.value = "";
});

