<?php
session_start();
include_once 'config.php';

$vouchID = isset($_GET['vouchID']) ? $_GET['vouchID'] : '';

// Use a prepared statement to prevent SQL injection
$sql = "SELECT * FROM votes WHERE VouchID = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param('s', $vouchID);
$stmt->execute();

// Get the result
$result = $stmt->get_result();

// Fetch the results
$data = array();
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
    $_SESSION['KID'] = $row['KID'];
    $_SESSION['QID'] = $row['QID'];
}

// Return the results as JSON
echo json_encode($data);

// Close the database connection
$stmt->close();
$conn->close();
?>