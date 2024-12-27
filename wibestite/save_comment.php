<?php
header('Content-Type: application/json');

// Получаем данные из POST запроса
$comments = json_decode(file_get_contents('php://input'), true);

// Сохраняем комментарии в файл
if (file_put_contents('comments.json', json_encode($comments, JSON_PRETTY_PRINT))) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Не удалось сохранить комментарии']);
}
?>
