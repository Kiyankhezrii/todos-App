// get element from DOM
const form = document.querySelector(".form");
const input = document.querySelector(".input");
const plusIcon = document.querySelector(".fa-circle-plus");
const todosContainer = document.querySelector(".todos");

// add todos function
const addTodo = function () {
  const html = `
      <div class="todo">
           <li class="todo-item">${input.value}</li>
           <div class="icons">
             <i class="fa-solid fa-square-check"></i>
             <i class="fa-solid fa-trash-can"></i>
           </div>
       </div>
      `;
  todosContainer.insertAdjacentHTML("afterbegin", html);
  input.value = "";
};

todosContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-trash-can")) {
    e.target.parentElement.parentElement.remove();
  } else if (e.target.classList.contains("fa-square-check")) {
    e.target.parentElement.parentElement.style.opacity = ".5";
    e.target.parentElement.previousElementSibling.style.textDecoration =
      "line-through";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});
plusIcon.addEventListener("click", () => {
  addTodo();
});
