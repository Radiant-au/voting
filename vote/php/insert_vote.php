<?php
include 'config.php';

// Get data from the POST request
$kid = isset($_POST['kid']) ? $_POST['kid'] : '';
$qid = isset($_POST['qid']) ? $_POST['qid'] : '';
$code = isset($_POST['code']) ? $_POST['code'] : '';

// Perform database insertion
// NOTE: This is a simplified example. You should use prepared statements to prevent SQL injection.
$sql = "INSERT INTO votes (KID , QID , VouchID) VALUES ('$kid', '$qid', '$code')";
if ($conn->query($sql) === TRUE) {
    // Insertion successful
    $response = array('success' => true, 'message' => 'Votes inserted successfully.');
} else {
    // Insertion failed
    $response = array('success' => false, 'message' => 'Error inserting votes: ' . $conn->error);
}

// Send JSON response
header('Content-Type: application/json');
echo json_encode($response);

$conn->close();
?>
