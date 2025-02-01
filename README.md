# Цветочный магазин "Цветная точка"

Одностраничный сайт для цветочного магазина с динамической загрузкой товаров из базы данных.



## 🌟 Особенности

- Динамическая загрузка букетов из PostgreSQL
- Адаптивная верстка
- Плавные анимации и переходы
- Ленивая загрузка изображений
- Интерактивная карта (Leaflet.js)
- Стильное минималистичное оформление
- Бургер-меню для мобильных устройств

## 🛠 Технологии

![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat&logo=postgresql&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=flat)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![Leaflet](https://img.shields.io/badge/Leaflet-199900?style=flat&logo=leaflet&logoColor=white)

## 🚀 Запуск проекта

### Предварительные требования
- Установленный [Node.js](https://nodejs.org/) (версия 14+)
- Установленный [PostgreSQL](https://www.postgresql.org/download/) (версия 12+)
- [pgAdmin 4](https://www.pgadmin.org/) (рекомендуется)

### Установка

1. Клонировать репозиторий:
```bash
git clone https://github.com/ваш-логин/flower-shop.git
cd flower-shop
```

2. Установить зависимости для сервера:
```bash
cd server
npm install
```

3. Настроить базу данных:
```sql
CREATE DATABASE flower_shop;
\c flower_shop

CREATE TABLE bouquets (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    image_url VARCHAR(255)
);
```

4. Настроить подключение к БД:
В файле `server.js` в папке server:
```
const  pool  =  new  Pool({
user:  'ИМЯ_ПОЛЬЗОВАТЕЛЯ_БД',
host:  'localhost',
database:  'flower_shop',
password:  'ВАШ_ПАРОЛЬ',
port:  5432,
});
```

5. Добавить тестовые данные (опционально):
```sql
INSERT INTO bouquets (name, description, price, image_url) VALUES
('Нежность весны', 'Пионы и эустомы в пастельных тонах', 3490.00, '/images/bouquet1.jpg'),
('Страсть ночи', 'Красные розы и каллы', 4200.00, '/images/bouquet2.jpg');
```

### Запуск
```bash
cd server
node server.js
```

Приложение будет доступно по адресу: [http://localhost:3000](http://localhost:3000)
