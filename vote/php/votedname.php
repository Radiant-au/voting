<?php
session_start();
include_once 'config.php';

// Use a prepared statement to prevent SQL injection
$sql = "SELECT * FROM candidates WHERE id = {$_SESSION['KID']} OR id = {$_SESSION['QID']}";
$query = mysqli_query($conn, $sql);

// Fetch the results
$data = array();
while ($row = mysqli_fetch_assoc($query)) {
    $data[] = $row;
}

// Return the results as JSON
header('Content-Type: application/json; charset=utf-8');
echo json_encode($data);

// Close the database connection
$conn->close();
?>