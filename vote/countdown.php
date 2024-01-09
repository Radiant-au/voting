<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Countdown</title>
    <link rel="stylesheet" href="css/countdown.css">
</head>
<body>
    
    <div class="until" id="myCountdown">
        <h1 class="heading">King & Queen</h1>
        <h2 class="heading">Voting event</h2>
        <h4 class="heading">Starts in</h4>
        <div class="frow">
            <div class="until_component">
                <div class="until_numeric until_numeric_days">00</div>
                <div class="until_unit">Days</div>
            </div>
            <div class="until_component">
                <div class="until_numeric until_numeric_hours">00</div>
                <div class="until_unit">Hours</div>
            </div>
        </div>
        <div class="secrow">
            <div class="until_component">
                <div class="until_numeric until_numeric_minutes">00</div>
                <div class="until_unit">Minutes</div>
            </div>
            <div class="until_component">
                <div class="until_numeric until_numeric_seconds">00</div>
                <div class="until_unit">Seconds</div>
            </div>
        </div>
        
        
        <div class="until_event">Until 12 January 2024</div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.11.10/dayjs.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.11.10/plugin/duration.min.js"></script>
    <script src="js/countdown.js"></script>
</body>
</html>