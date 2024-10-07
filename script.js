let totalSeconds = 0;
let historyList = [];

document.getElementById('addTime').addEventListener('click', () => {
    addTime(true);
});

document.getElementById('subtractTime').addEventListener('click', () => {
    addTime(false);
});

// Adiciona evento de tecla "Enter" para somar
document.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTime(true);
    }
});

document.getElementById('clearHistory').addEventListener('click', () => {
    clearAll();
});

function addTime(isAddition) {
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;

    const timeInSeconds = (hours * 3600) + (minutes * 60) + seconds;

    if (isAddition) {
        totalSeconds += timeInSeconds;
        addToHistory(hours, minutes, seconds, 'adicionado');
    } else {
        totalSeconds -= timeInSeconds;
        addToHistory(hours, minutes, seconds, 'subtraído');
    }

    updateDisplay();
}

function updateDisplay() {
    const totalHours = Math.floor(totalSeconds / 3600);
    const totalMinutes = Math.floor((totalSeconds % 3600) / 60);
    const totalSec = totalSeconds % 60;

    document.getElementById('totalTime').innerText = `${totalHours} horas, ${totalMinutes} minutos, ${totalSec} segundos`;
}

function addToHistory(hours, minutes, seconds, operation) {
    const historyEntry = `${hours} horas, ${minutes} minutos, ${seconds} segundos ${operation}.`;
    historyList.push(historyEntry);

    const historyElement = document.createElement('li');
    historyElement.textContent = historyEntry;
    document.getElementById('history').appendChild(historyElement);
}

function clearAll() {
    totalSeconds = 0;
    document.getElementById('totalTime').innerText = '0 horas, 0 minutos, 0 segundos';
    document.getElementById('history').innerHTML = ''; // Limpa o histórico
    document.getElementById('hours').value = ''; // Limpa o campo de horas
    document.getElementById('minutes').value = ''; // Limpa o campo de minutos
    document.getElementById('seconds').value = ''; // Limpa o campo de segundos
}
