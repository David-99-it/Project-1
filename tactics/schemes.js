// ================ ДАННЫЕ ИГРОКОВ =================

const players = {
    isagi: {
        name: "Исаги Йоичи",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QCFW9U6BD29_cjt-unVOiLWgmrg6F4JDiA&s",
        info: "Шахматная фигура: Король"
    },
    kaiser: {
        name: "Михаэль Кайзер",
        img: "https://ih1.redbubble.net/image.5802476114.3805/tst,small,507x507-pad,600x600,f8f8f8.webp",
        info: "Шахматная фигура: Ферзь"
    },
    rin: {
        name: "Итоши Рин",
        img: "https://i.pinimg.com/originals/b7/34/3f/b7343feeaffb9be522089f9ab572f9e3.jpg",
        info: "Шахматная фигура: Ферзь"
    },
    shido: {
        name: "Рюсэй Шидо",
        img: "pictures/0acdf6c4fa7a97c06019418e7f8ee831.png",
        info: "Шахматная фигура: Ферзь"
    },
    nagi: {
        name: "Наги Сейширо",
        img: "https://i.pinimg.com/originals/57/fc/8a/57fc8ab00f8c2404ed1077461dd317f6.jpg",
        info: "Шахматная фигура: Ферзь"
    },
    sae: {
        name: "Итоши Саэ",
        img: "https://yt3.googleusercontent.com/PE4gMdn1lRAaKvrmDCUUZ0OsrWmSn-ljqe-u-VLBOXlOYmLme8Rx2lRZmWLwtIEFfYqxOptOsnM=s900-c-k-c0x00ffffff-no-rj",
        info: "Шахматная фигура: Ферзь"
    },
    baro: {
        name: "Шоэй Баро",
        img: "https://ih1.redbubble.net/image.5163721025.3958/st,small,507x507-pad,600x600,f8f8f8.jpg",
        info: "Шахматная фигура: Ферзь"
    },
    bachira: {
        name: "Бачира Мэгуру",
        img: "https://i.pinimg.com/originals/05/2c/45/052c4522e1634b207c7e9612ef8390f9.jpg",
        info: "Шахматная фигура: Епискрб"
    },
    kunigami: {
        name: "Кунигами Рёнске",
        img: "https://avatars.mds.yandex.net/i?id=05e12f4b9e65ad0ac366a7414503b24ee42954ff-7544273-images-thumbs&n=13",
        info: "Шахматная фигура: Ладья"
    },
    chigiri: {
        name: "Чигири Хёма",
        img: "https://avatars.mds.yandex.net/i?id=acec1c80702e77f8eee3ca8bba1d03d1cc8714b7-4026845-images-thumbs&n=13",
        info: "Шахматная фигура: Ладья"
    },
    gagamaru: {
        name: "Гагамару Гин",
        img: "https://ih1.redbubble.net/image.5163671963.2736/st,small,507x507-pad,600x600,f8f8f8.u2.jpg",
        info: "Шахматная фигура: Епискрб"
    },
    reo: {
        name: "Рео Микэгами",
        img: "/Project-1/pictures/a044139cbda5410ec80cba7ddb110e01.png",
        info: "Шахматная фигура: Ферзь"
    },
    aiku: {
        name: "Оливер Айку",
        img: "https://i.pinimg.com/736x/d6/93/a3/d693a38708345c7bd1e09441a94ac2c0.jpg",
        info: "Шахматная фигура: Ладья"
    },
    ness: {
        name: "Алексис Несс",
        img: "https://avatars.mds.yandex.net/i?id=2979b83d411aff234b6ca84efc4ce5610619903b-5878042-images-thumbs&n=13",
        info: "Шахматная фигура: Епискрб"
    },
    charles: {
        name: "Шарль Шевалье",
        img: "https://avatars.mds.yandex.net/i?id=586b769f4a4dd1b1c10c5a38860b03f6ae116ea1-15163096-images-thumbs&n=13",
        info: "Шахматная фигура: Епискрб"
    },
    karasu: {
        name: "Карасу Табито",
        img: "https://i.pinimg.com/originals/1e/64/83/1e64833e20046777390dd122cb34fe95.jpg",
        info: "Шахматная фигура: Рыцарь"
    },
    lorenzo: {
        name: "Дон Лоренцо",
        img: "https://pm1.aminoapps.com/9421/fc8ece0be98b27e8e28258e8a4edc06f2477b8fbr1-736-736_00.jpg",
        info: "Шахматная фигура: Рыцарь"
    },
    igarashi: {
        name: "Игараши Гин",
        img: "https://ih1.redbubble.net/image.5163683121.3003/st,small,507x507-pad,600x600,f8f8f8.u2.jpg",
        info: "Шахматная фигура: Пешка"
    },
    asahi_naruhaya: {
        name: "Асахи Наруная",
        img: "https://pbs.twimg.com/media/GYumO1oXQAAfJt5.jpg",
        info: "Шахматная фигура: Пешка"
    },
        kuon: {
        name: "Куон",
        img: "https://ih1.redbubble.net/image.5163726744.4105/st,small,507x507-pad,600x600,f8f8f8.u2.jpg",
        info: "Шахматная фигура: Рыцарь"
    },

};

// ==========================================================
// ВСТАВКА ИКОНКИ-ВЫБОРА ВНИЗУ
// ==========================================================

const playerList = document.getElementById("playerList");

Object.entries(players).forEach(([id, data]) => {
    const div = document.createElement("div");
    div.className = "player-select";
    div.innerHTML = `<img src="${data.img}">`;
    div.onclick = () => addPlayerToField(id);
    playerList.appendChild(div);
});

// ==========================================================
// ДОБАВЛЕНИЕ ИГРОКА НА ПОЛЕ
// ==========================================================

const field = document.getElementById("field");
let activePlayers = {};  // чтобы один игрок не добавлялся 2 раза

function addPlayerToField(id) {
    if (activePlayers[id]) return;

    const data = players[id];

    const icon = document.createElement("img");
    icon.src = data.img;
    icon.className = "player-icon";
    icon.style.left = "400px";
    icon.style.top = "250px";

    field.appendChild(icon);
    activePlayers[id] = icon;

    enableDrag(icon);
    enableHover(icon, id);
}

// ==========================================================
// ПЕРЕТАСКИВАНИЕ ИГРОКА (ограничено полем)
// ==========================================================

function enableDrag(icon) {
    let shiftX, shiftY;

    icon.onmousedown = function (e) {
        icon.style.zIndex = 1000;
        shiftX = e.clientX - icon.getBoundingClientRect().left;
        shiftY = e.clientY - icon.getBoundingClientRect().top;

        document.onmousemove = function (e) {
            let newLeft = e.clientX - shiftX - field.getBoundingClientRect().left;
            let newTop = e.clientY - shiftY - field.getBoundingClientRect().top;

            // Ограничение движений
            newLeft = Math.max(0, Math.min(newLeft, field.clientWidth - icon.clientWidth));
            newTop = Math.max(0, Math.min(newTop, field.clientHeight - icon.clientHeight));

            icon.style.left = newLeft + "px";
            icon.style.top = newTop + "px";
        };

        document.onmouseup = function () {
            document.onmousemove = null;
        };
    };
}

// ==========================================================
// ПАНЕЛЬ ИНФОРМАЦИИ ПРИ НАВЕДЕНИИ
// ==========================================================

const infoPanel = document.getElementById("infoPanel");
const infoName = document.getElementById("infoName");
const infoText = document.getElementById("infoText");
const removeBtn = document.getElementById("removeBtn");

function enableHover(icon, id) {
    icon.onmouseenter = () => {
        infoName.textContent = players[id].name;
        infoText.textContent = players[id].info;
        removeBtn.style.display = "block";

        removeBtn.onclick = () => {
            icon.classList.add("removing");

setTimeout(() => {
    icon.remove();
}, 250);

            delete activePlayers[id];

            infoName.textContent = "Выбери игрока";
            infoText.textContent = "Наведите курсор на игрока на поле.";
            removeBtn.style.display = "none";
        };
    };
}
