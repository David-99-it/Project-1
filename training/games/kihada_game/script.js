document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-kihada');
    const messageDisplay = document.getElementById('kihada-message');
    const energyDisplay = document.getElementById('energy-display');
    const progressBar = document.getElementById('progress');

    let energy = 0;
    let interval;
    const maxEnergy = 100;
    const energyIncreaseRate = 5; // Скорость увеличения энергии
    const gameDuration = 10000; // Длительность тренировки в миллисекундах (10 секунд)

    startButton.addEventListener('click', () => {
        // Сбрасываем состояние игры
        energy = 0;
        updateEnergyDisplay();
        progressBar.style.width = '0%';
        messageDisplay.textContent = "Концентрируй свою духовную энергию...";
        startButton.disabled = true; // Блокируем кнопку, пока идет тренировка

        // Имитация накопления энергии
        interval = setInterval(() => {
            energy += energyIncreaseRate;
            if (energy >= maxEnergy) {
                energy = maxEnergy;
                clearInterval(interval);
                finishTraining();
            }
            updateEnergyDisplay();
            updateProgressBar();
        }, 200); // Обновляем каждые 200 мс

        // Таймер окончания тренировки
        setTimeout(finishTraining, gameDuration);
    });

    function updateEnergyDisplay() {
        energyDisplay.textContent = `Энергия: ${energy}`;
    }

    function updateProgressBar() {
        const percentage = (energy / maxEnergy) * 100;
        progressBar.style.width = `${percentage}%`;
    }

    function finishTraining() {
        clearInterval(interval); // Останавливаем накопление энергии
        startButton.disabled = false; // Разблокируем кнопку

        if (energy >= maxEnergy) {
            messageDisplay.textContent = `Отличная работа! Ваша духовная энергия достигла пика!`;
            messageDisplay.style.color = '#7a7aff'; // Яркий фиолетовый
        } else {
            messageDisplay.textContent = `Тренировка завершена. Продолжайте совершенствоваться!`;
            messageDisplay.style.color = '#ccc';
        }
        energyDisplay.textContent = `Энергия: ${energy}`; // Показываем финальное значение
    }
});