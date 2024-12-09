document.getElementById("addTask").addEventListener("click", addTask);

function addTask() {
    const taskInput = document.getElementById("newTask");
    const taskList = document.getElementById("taskList");

    const taskText = taskInput.value.trim();
    if (!taskText) return;

    // Create task item
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText}</span>
        <div>
            <span class="star">&#9733;</span>
            <button class="complete">Complete</button>
        </div>
    `;

    // Mark as completed
    li.querySelector(".complete").addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    // Mark as important
    li.querySelector(".star").addEventListener("click", (e) => {
        e.target.classList.toggle("active");
    });

    // Add to list
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
}
