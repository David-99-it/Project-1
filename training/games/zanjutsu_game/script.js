document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-zanjutsu');
    const messageDisplay = document.getElementById('zanjutsu-message');
    const instructionDisplay = document.getElementById('target-instruction');
    const accuracyDisplay = document.getElementById('accuracy-display');
    const comboDisplay = document.getElementById('combo-display');
    const gameArea = document.getElementById('game-area');

    let targetsHit = 0;
    let targetsMissed = 0;
    let combo = 0;
    let interval;
    let targetTimeout;
    const gameDuration = 15000; // 15 секунд
    const targetSpawnInterval = 1000; // Появление мишени каждые 1 секунду
    const targetLifeTime = 1500; // Мишень исчезает через 1.5 секунды

    startButton.addEventListener('click', () => {
        // Сброс игры
        targetsHit = 0;
        targetsMissed = 0;
        combo = 0;
        updateDisplay();
        messageDisplay.textContent = "Порази цели!";
        instructionDisplay.style.display = 'block';
        startButton.disabled = true;

        // Очистка предыдущих мишеней и интервалов
        clearAllTargets();
        if (interval) clearInterval(interval);
        if (targetTimeout) clearTimeout(targetTimeout);

        // Запуск спавна мишеней
        interval = setInterval(spawnTarget, targetSpawnInterval);

        // Конец игры
        setTimeout(() => {
            clearInterval(interval);
            clearAllTargets();
            instructionDisplay.style.display = 'none';
            messageDisplay.textContent = `Тренировка завершена!`;
            updateDisplay();
            startButton.disabled = false;
        }, gameDuration);
    });

    function spawnTarget() {
        const target = document.createElement('div');
        target.classList.add('target');

        // Случайное положение внутри game-area
        const areaRect = gameArea.getBoundingClientRect();
        const targetSize = 50; // Размер мишени
        const x = Math.random() * (areaRect.width - targetSize);
        const y = Math.random() * (areaRect.height - targetSize);

        target.style.left = `${x}px`;
        target.style.top = `${y}px`;

        gameArea.appendChild(target);

        // Удаление мишени через некоторое время
        targetTimeout = setTimeout(() => {
            if (target.parentNode) { // Проверяем, что мишень еще на экране
                targetsMissed++;
                updateDisplay();
                target.remove();
            }
        }, targetLifeTime);

        // Обработка клика по мишени
        target.addEventListener('click', () => {
            targetsHit++;
            combo++;
            updateDisplay();
            clearTimeout(targetTimeout); // Отменяем таймер удаления, так как попали
            target.remove(); // Удаляем мишень при попадании
        });
    }

    function clearAllTargets() {
        document.querySelectorAll('.target').forEach(target => target.remove());
    }

    function updateDisplay() {
        const accuracy = targetsHit + targetsMissed === 0 ? 0 : Math.round((targetsHit / (targetsHit + targetsMissed)) * 100);
        accuracyDisplay.textContent = `Точность: ${accuracy}%`;
        comboDisplay.textContent = `Комбо: ${combo}x`;
    }
});