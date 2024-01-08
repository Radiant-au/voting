<?php
include 'config.php';
// Get the gender parameter from the request
$gender = $_GET['gender'];

// Use prepared statement to prevent SQL injection
$stmt = $conn->prepare("SELECT id, name, major, profile_image, facebook_link, instagram_link FROM candidates WHERE gender = ?");
$stmt->bind_param("s", $gender);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $buttonId = $row['id'];
        $buttonClass = "Vote $gender";
        $onClick = "submitVote(this, $buttonId, '$gender')";
        ?>
        <div class="row">
            <img class="profile" src="<?php echo $row['profile_image']; ?>" alt="" width="65" height="65">
            <div class="name">
                <h4><?php echo $row['name']; ?></h4>
                <span><?php echo $row['major']; ?></span>
            </div>
            <div class="action">
                <button class="<?php echo $buttonClass; ?>" id="<?php echo $buttonId; ?>" onclick="<?php echo $onClick; ?>" >Vote</button>
                <i class='bx bx-dots-horizontal-rounded' id="drop_down"></i>
            </div>
        </div>
        <?php
    }
} else {
    echo "0 results";
}

$stmt->close();
$conn->close();
?>
