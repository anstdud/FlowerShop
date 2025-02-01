const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// Настройка подключения к PostgreSQL
const pool = new Pool({
    user: 'ИМЯ_ПОЛЬЗОВАТЕЛЯ_БД',
    host: 'localhost',
    database: 'flower_shop',
    password: 'ВАШ_ПАРОЛЬ',
    port: 5432,
});

// Middleware
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));

// Маршрут для получения букетов
app.get('/api/bouquets', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM bouquets');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

// Все остальные запросы перенаправляем на HTML
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/Flower.html'));
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});