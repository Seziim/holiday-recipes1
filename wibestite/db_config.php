<?php
$host = 'localhost';
$dbname = 'holiday_recipes';
$username = 'root';     // Ваш пользователь MySQL
$password = '';         // Ваш пароль MySQL

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Создаем базу данных, если она не существует
    $pdo->exec("CREATE DATABASE IF NOT EXISTS $dbname");
    $pdo->exec("USE $dbname");
    
    // Создаем таблицу комментариев, если она не существует
    $pdo->exec("CREATE TABLE IF NOT EXISTS comments (
        id INT AUTO_INCREMENT PRIMARY KEY,
        recipe VARCHAR(255) NOT NULL,
        author VARCHAR(255) NOT NULL,
        text TEXT NOT NULL,
        date DATETIME NOT NULL,
        likes INT DEFAULT 0
    ) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");
    
} catch(PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>
