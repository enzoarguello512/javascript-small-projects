window.onload = () => {
  const userInput = document.getElementById("userInput");
  const listOfTodos = [];
  const clearList = document.getElementById("clearList")
  clearList.disabled = true
  userInput.onsubmit = (e) => {
    e.preventDefault();
    const todoItem = document.getElementById("todoItem");
    const todoItemText = todoItem.value;
    if (todoItemText == '') {
      alert("Please fill a valid name")
    } else {
      const todos = document.getElementById("todos");
      listOfTodos.push('<li><div class="itemContainer"><div class="leftContainer">' + todoItemText + '</div><div class="rightContainer"><button>Edit</button><button>Delete</button></div></div></li>');
      // clears the input for a new todo
      todoItem.value = '';
      // display the hidden list
      todos.style.display = "block";
      todos.innerHTML = listOfTodos.join('');
      // re-activate the clearlist button
      clearList.disabled = false
    }
    const newItems = document.querySelectorAll("todos li")
    newItems.forEach((element, index) => {
      element.addEventListener("click", () => {
        asd
      })
    })
    clearList.addEventListener("click", () => {
      // returns everything to the default state
      todos.innerHTML = '';
      listOfTodos.length = 0;
      clearList.disabled = true
    })
  }
}
