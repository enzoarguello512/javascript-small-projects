import { Todo } from "/lib/Todo.js";

window.addEventListener("load", () => {
  let container = document.querySelector("#root ul");

  document.querySelector("#mainForm").addEventListener("submit", (ev) => {
    ev.preventDefault();
    const form = ev.target;

    const textarea = form.querySelector("textarea");

    const button = form.querySelector("[type='submit']");
    button.disabled = true;

    let todo = new Todo({ title: textarea.value });

    todo.save().then(() => {
      textarea.value = "";
      button.disabled = false;

      let li = buildDOMElement(todo);
      container.prepend(li);
    });

    return false;
  });

  Todo.all().then((todos) => {
    todos.forEach((todo) => {
      let node = buildDOMElement(todo);

      container.prepend(node);
    });
  });

  let buildDOMElement = (todo) => {
    let li = document.createElement("li");
    li.innerHTML = `
      <h1>${todo.title}</h1>
      <button class="close">X</button>
    `;

    li.querySelector(".close").addEventListener("click", () => {
      todo.destroy();
      li.remove();
    });

    editInPlace(li.querySelector("h1"), todo);

    return li;
  };

  let editInPlace = (node, todo) => {
    node.addEventListener("click", () => {
      let inputText = document.createElement("textarea");
      inputText.value = node.innerHTML;
      inputText.autofocus = true;

      node.replaceWith(inputText);

      inputText.addEventListener("change", () => {
        inputText.replaceWith(node);
        todo.title = inputText.value;

        node.innerHTML = todo.title;

        todo.save().then((r) => console.log(r));
      });
    });
  };
});

