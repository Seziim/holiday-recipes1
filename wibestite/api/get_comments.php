<?php
header('Content-Type: application/json');
require_once '../db_config.php';

try {
    $stmt = $pdo->query("SELECT * FROM comments ORDER BY date DESC");
    $comments = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($comments);
} catch(PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}
?>
