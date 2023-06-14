const inputTarefa = document.getElementById("task-input");
const listAfazeres = document.getElementById("task-list");
const removeButtonTemplate = document.getElementById("remove-button-template");

function removerTarefa(event) {
    const tarefasItens = event.target.parentElement;
    listAfazeres.removeChild(tarefasItens);
}

function adicionarTarefa() {
    const tarefaText = inputTarefa.value;

    if (tarefaText.trim() !== "") {
        const tarefasItens = document.createElement("li");
        tarefasItens.textContent = tarefaText;

        const botaoRemover = removeButtonTemplate.content.cloneNode(true);
        botaoRemover.querySelector(".remove-button").addEventListener("click", removerTarefa);

        tarefasItens.appendChild(botaoRemover);
        listAfazeres.appendChild(tarefasItens);

        inputTarefa.value = "";
    }
}

document.getElementById("add-button").addEventListener("click", adicionarTarefa);

inputTarefa.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        adicionarTarefa();
    }
})
