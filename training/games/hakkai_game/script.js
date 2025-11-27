document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-hakkai');
    const messageDisplay = document.getElementById('hakkai-message');
    const scoreDisplay = document.getElementById('score-display');
    const targetsLeftDisplay = document.getElementById('targets-left-display');
    const gameArea = document.getElementById('game-area');

    let score = 0;
    let targetsRemaining = 0;
    let interval;
    const gameDuration = 12000; // 12 секунд
    const targetSpawnInterval = 800; // Появление объекта каждые 0.8 секунды
    const targetTypes = [
        { type: 'rock', size: { width: 60, height: 60 } },
        { type: 'crystal', size: { width: 40, height: 40 } }
    ]; // Разные типы объектов
    const minTargets = 10; // Минимум объектов, которые должны появиться
    const maxTargets = 20; // Максимум объектов

    startButton.addEventListener('click', () => {
        // Сброс игры
        score = 0;
        targetsRemaining = 0;
        updateDisplay();
        messageDisplay.textContent = "Уничтожь все!";
        startButton.disabled = true;

        clearAllTargets(); // Очищаем старые объекты

        // Определяем общее количество объектов для этой игры
        targetsRemaining = Math.floor(Math.random() * (maxTargets - minTargets + 1)) + minTargets;
        updateDisplay();

        // Запуск спавна объектов
        interval = setInterval(spawnTarget, targetSpawnInterval);

        // Конец игры
        setTimeout(() => {
            clearInterval(interval); // Останавливаем спавн
            clearAllTargets(); // Убираем оставшиеся объекты
            messageDisplay.textContent = `Тренировка Хакай завершена!`;
            updateDisplay();
            startButton.disabled = false;
        }, gameDuration);
    });

    function spawnTarget() {
        if (targetsRemaining <= 0) return; // Если объектов больше не нужно спавнить

        const objectData = targetTypes[Math.floor(Math.random() * targetTypes.length)];
        const target = document.createElement('div');
        target.classList.add('destroyable-object');
        target.classList.add(`type-${objectData.type}`); // Добавляем класс типа

        target.style.width = `${objectData.size.width}px`;
        target.style.height = `${objectData.size.height}px`;

        // Случайное положение внутри game-area
        const areaRect = gameArea.getBoundingClientRect();
        const objectWidth = objectData.size.width;
        const objectHeight = objectData.size.height;
        const x = Math.random() * (areaRect.width - objectWidth);
        const y = Math.random() * (areaRect.height - objectHeight);

        target.style.left = `${x}px`;
        target.style.top = `${y}px`;

        gameArea.appendChild(target);
        targetsRemaining--; // Уменьшаем счетчик оставшихся объектов
        updateDisplay();

        // Обработка клика по объекту
        target.addEventListener('click', () => {
            score++;
            targetsRemaining--; // Уменьшаем счетчик при уничтожении
            updateDisplay();
            target.remove(); // Удаляем объект
        });
    }

    function clearAllTargets() {
        document.querySelectorAll('.destroyable-object').forEach(obj => obj.remove());
    }

    function updateDisplay() {
        scoreDisplay.textContent = `Разрушено: ${score}`;
        targetsLeftDisplay.textContent = `Осталось: ${targetsRemaining}`;
    }
});