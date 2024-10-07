let totalHours = 0;
let totalMinutes = 0;
let totalSeconds = 0;

document.getElementById("add").addEventListener("click", function() {
    addTime();
});

document.getElementById("subtract").addEventListener("click", function() {
    subtractTime();
});

document.getElementById("clear").addEventListener("click", function() {
    clearAll();
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTime();
    }
});

function addTime() {
    const hours = parseInt(document.getElementById("hours").value) || 0;
    const minutes = parseInt(document.getElementById("minutes").value) || 0;
    const seconds = parseInt(document.getElementById("seconds").value) || 0;

    totalSeconds += seconds;
    totalMinutes += minutes + Math.floor(totalSeconds / 60);
    totalHours += hours + Math.floor(totalMinutes / 60);

    totalSeconds %= 60;
    totalMinutes %= 60;

    updateTotal();
    updateHistory(`Adicionado: ${hours}h ${minutes}m ${seconds}s`);
    clearInputs();

    // Retorna o foco para o campo de horas
    document.getElementById("hours").focus();
}

function subtractTime() {
    const hours = parseInt(document.getElementById("hours").value) || 0;
    const minutes = parseInt(document.getElementById("minutes").value) || 0;
    const seconds = parseInt(document.getElementById("seconds").value) || 0;

    totalSeconds -= seconds;
    totalMinutes -= minutes + Math.floor(totalSeconds / 60);
    totalHours -= hours + Math.floor(totalMinutes / 60);

    totalSeconds = Math.max(totalSeconds, 0);
    totalMinutes = Math.max(totalMinutes, 0);
    totalHours = Math.max(totalHours, 0);

    updateTotal();
    updateHistory(`Subtraído: ${hours}h ${minutes}m ${seconds}s`);
    clearInputs();

    // Retorna o foco para o campo de horas
    document.getElementById("hours").focus();
}

function clearAll() {
    totalHours = 0;
    totalMinutes = 0;
    totalSeconds = 0;
    updateTotal();
    document.getElementById("history").innerHTML = '';
}

function updateTotal() {
    document.getElementById("total").textContent = `${totalHours}h ${totalMinutes}m ${totalSeconds}s`;
}

function updateHistory(entry) {
    const historyDiv = document.getElementById("history");
    const newEntry = document.createElement("div");
    newEntry.textContent = entry;
    historyDiv.prepend(newEntry); // Adiciona no topo do histórico
}

function clearInputs() {
    document.getElementById("hours").value = '';
    document.getElementById("minutes").value = '';
    document.getElementById("seconds").value = '';
}
