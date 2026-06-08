<?php
// Разрешаем запросы с любого домена (важно для работы Vercel -> ваш хостинг)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Обрабатываем предварительные запросы браузера (CORS preflight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    // МЕХАНИЗМ ДЛЯ NEXT.JS: Получаем сырой JSON из тела запроса и переводим в массив
    $contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
    
    if (strpos($contentType, 'application/json') !== false) {
        $rawData = file_get_contents('php://input');
        $jsonData = json_decode($rawData, true);
        
        // Заполняем переменные из JSON
        $name = !empty($jsonData['name']) ? strip_tags(trim($jsonData['name'])) : '';
        $tel = !empty($jsonData['tel']) ? strip_tags(trim($jsonData['tel'])) : '';
        $msg = !empty($jsonData['msg']) ? strip_tags(trim($jsonData['msg'])) : '';
    } else {
        // Старый вариант (на случай, если данные придут классической формой)
        $name = !empty($_POST['name']) ? strip_tags(trim($_POST['name'])) : '';
        $tel = !empty($_POST['tel']) ? strip_tags(trim($_POST['tel'])) : '';
        $msg = !empty($_POST['msg']) ? strip_tags(trim($_POST['msg'])) : '';
    }

    // Проверка на минимальное заполнение полей
    if (empty($name) || empty($tel)) {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'Имя и телефон обязательны для заполнения']);
        exit;
    }

    // Настройки Telegram
    $tg_bot_token = '7860969702:AAH6tNq9iFqkJa_OZBRcr4eosKLveRaQB2g';
    $chat_id = '73466138';

    // Форматируем сообщение красивым HTML
    $text = "<b>⚡️ Получена обратная связь (GrandClean):</b>\n\n";
    $text .= "<b>Имя:</b> $name\n";
    $text .= "<b>Телефон:</b> $tel\n";
    if (!empty($msg)) {
        $text .= "<b>Сообщение/Услуга:</b> $msg";
    }

    $url = "https://api.telegram.org/bot$tg_bot_token/sendMessage?chat_id=$chat_id&parse_mode=HTML&text=" . urlencode($text);

    // Инициализация cURL
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // Защита от сбоев SSL на некоторых хостингах
    $response = curl_exec($ch);
    curl_close($ch);

    $response_data = json_decode($response, true);

    if (isset($response_data['ok']) && $response_data['ok']) {
        echo json_encode(['status' => 'success', 'message' => 'Сообщение отправлено в Telegram']);
    } else {
        $error_message = isset($response_data['description']) ? $response_data['description'] : 'Неизвестная ошибка';
        http_response_code(500);
        echo json_encode(['status' => 'error', 'message' => 'Ошибка Telegram: ' . $error_message]);
    }
} else {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Некорректный метод запроса']);
}
?>