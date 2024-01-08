<?php 
    include_once 'config.php';

    $response = array();

// Fetch vote counts for Kings
$sqlKings = "SELECT KID, COUNT(*) AS value_count FROM votes GROUP BY KID ORDER BY value_count DESC";
$resultKings = mysqli_query($conn, $sqlKings);

if ($resultKings) {
    while ($row = mysqli_fetch_assoc($resultKings)) {
        $kid = $row['KID'];
        $valueCount = $row['value_count'];

        $candidateQuery = "SELECT * FROM candidates WHERE ID = $kid";
        $candidateResult = mysqli_query($conn, $candidateQuery);

        if ($candidateResult) {
            $candidateDetails = mysqli_fetch_assoc($candidateResult);
            $response['kings'][] = array(
                'name' => $candidateDetails['name'],
                'votes' => $valueCount
            );
        }
    }

    mysqli_free_result($resultKings);
} else {
    $response['error'] = "Error fetching vote counts for Kings: " . mysqli_error($your_db_connection);
}

// Fetch vote counts for Queens
$sqlQueens = "SELECT QID, COUNT(*) AS value_count FROM votes GROUP BY QID ORDER BY value_count DESC";
$resultQueens = mysqli_query($conn, $sqlQueens);

if ($resultQueens) {
    while ($row = mysqli_fetch_assoc($resultQueens)) {
        $qid = $row['QID'];
        $valueCount = $row['value_count'];

        $candidateQuery = "SELECT * FROM candidates WHERE ID = $qid";
        $candidateResult = mysqli_query($conn, $candidateQuery);

        if ($candidateResult) {
            $candidateDetails = mysqli_fetch_assoc($candidateResult);
            $response['queens'][] = array(
                'name' => $candidateDetails['name'],
                'votes' => $valueCount
            );
        }
    }

    mysqli_free_result($resultQueens);
} else {
    $response['error'] = "Error fetching vote counts for Queens: " . mysqli_error($your_db_connection);
}

// Close the database connection
mysqli_close($conn);

header('Content-Type: application/json');
echo json_encode($response);
?>