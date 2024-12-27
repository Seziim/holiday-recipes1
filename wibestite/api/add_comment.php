<?php
header('Content-Type: application/json');
require_once '../db_config.php';

try {
    $data = json_decode(file_get_contents('php://input'), true);
    
    $stmt = $pdo->prepare("INSERT INTO comments (recipe, author, text, date, likes) VALUES (?, ?, ?, NOW(), 0)");
    $stmt->execute([$data['recipe'], $data['author'], $data['text']]);
    
    echo json_encode(['success' => true, 'id' => $pdo->lastInsertId()]);
} catch(PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}
?>
