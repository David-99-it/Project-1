document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-kaido');
    const messageDisplay = document.getElementById('kaido-message');
    const healthDisplay = document.getElementById('health-display');
    const healedDisplay = document.getElementById('healed-display');
    const healingPointsDisplay = document.getElementById('healing-points-display');
    const gameArea = document.getElementById('game-area');

    let playerHealth = 100; // Изначальное здоровье
    let totalHealed = 0;
    let currentHealingPoints = 0;
    let interval;
    let spawnIntervalId;
    const gameDuration = 15000; // 15 секунд
    const damageRate = 2; // Скорость потери здоровья
    const healingZoneSize = 70; // Размер зоны исцеления
    const maxHealingZones = 3; // Максимум зон на экране одновременно

    startButton.addEventListener('click', () => {
        // Сброс игры
        playerHealth = 100;
        totalHealed = 0;
        currentHealingPoints = 0;
        updateDisplay();
        messageDisplay.textContent = "Исцеляйте зоны урона!";
        startButton.disabled = true;

        clearHealingZones(); // Очистка старых зон
        if (interval) clearInterval(interval);
        if (spawnIntervalId) clearInterval(spawnIntervalId);

        // Потеря здоровья со временем
        interval = setInterval(() => {
            playerHealth -= damageRate;
            if (playerHealth <= 0) {
                playerHealth = 0;
                finishGame();
            }
            updateDisplay();
        }, 300); // Теряем здоровье каждые 300 мс

        // Спавн зон исцеления
        spawnHealingZone(); // Спавним первую зону сразу
        spawnIntervalId = setInterval(spawnHealingZone, 2000); // Новая зона каждые 2 секунды

        // Конец игры
        setTimeout(finishGame, gameDuration);
    });

    function spawnHealingZone() {
        if (document.querySelectorAll('.healing-zone').length >= maxHealingZones) {
            return; // Не спавним, если уже есть максимум зон
        }

        const zone = document.createElement('div');
        zone.classList.add('healing-zone');

        const areaRect = gameArea.getBoundingClientRect();
        const x = Math.random() * (areaRect.width - healingZoneSize);
        const y = Math.random() * (areaRect.height - healingZoneSize);

        zone.style.left = `${x}px`;
        zone.style.top = `${y}px`;
        zone.style.width = `${healingZoneSize}px`;
        zone.style.height = `${healingZoneSize}px`;

        gameArea.appendChild(zone);

        // Обработка клика по зоне исцеления
        zone.addEventListener('click', () => {
            if (playerHealth >= 100) { // Нельзя исцелить больше 100%
                zone.remove(); // Убираем зону, если здоровье уже максимальное
                return;
            }

            const healingAmount = 15; // Сколько здоровья восстанавливает
            playerHealth += healingAmount;
            if (playerHealth > 100) playerHealth = 100; // Не превышаем 100%

            currentHealingPoints += 10; // За каждое исцеление даем очки
            totalHealed += healingAmount;

            updateDisplay();
            zone.remove(); // Убираем зону после исцеления
        });
    }

    function clearHealingZones() {
        document.querySelectorAll('.healing-zone').forEach(zone => zone.remove());
    }

    function finishGame() {
        clearInterval(interval);
        clearInterval(spawnIntervalId);
        clearHealingZones();
        startButton.disabled = false;

        messageDisplay.textContent = `Тренировка Кайдо завершена!`;
        healthDisplay.textContent = `Финальное Здоровье: ${playerHealth}%`;
        healedDisplay.textContent = `Всего Исцелено: ${totalHealed}`;
        healingPointsDisplay.textContent = `Ваши Очки: ${currentHealingPoints}`;
    }

    function updateDisplay() {
        healthDisplay.textContent = `Здоровье: ${playerHealth}%`;
        healedDisplay.textContent = `Всего Исцелено: ${totalHealed}`;
        healingPointsDisplay.textContent = `Очки: ${currentHealingPoints}`;
    }
});