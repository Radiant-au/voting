<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Live score</title>
    <link rel="stylesheet" href="css/livescore.css">
</head>
<body  onload="onLoad();">
    <button class="refresh" onclick="location.reload();">Refresh</button>
    <div class="container">
        <div class="right_column">
            <h1>Kings</h1>
            <div class="title">
                <h3>Name</h3>
                <h3>Vote</h3>
            </div>
            <div class="people" id="kingsContainer">
                
            </div>
        </div>
        <div class="left_column">
            <h1>Queens</h1>
            <div class="title">
                <h3>Name</h3>
                <h3>Vote</h3>
            </div>
            <div class="people" id="queensContainer">
                
            </div>
        </div>
    </div>
    <script src="js/general.js"></script>
    <script src="js/livescore.js"></script>
</body>
</html>