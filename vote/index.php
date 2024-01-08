<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Voting</title>
    <link rel="stylesheet" href="css/login.css">
</head>
<body>
         <div class="box">
            <div class="square" style="--i:0"></div>
            <div class="square" style="--i:1"></div>
            <div class="square" style="--i:2"></div>
            <div class="square" style="--i:3"></div>
            <div class="square" style="--i:4"></div>
            <div class="square" style="--i:5"></div>
            <div class="container">
                <div class="Heading">
                    <div></div>
                    <img class="Logo" src="css/asset_img/logo.png">
                    <div class="Year">2023-24</div>
                </div>
                <h1>King &amp; Queen</h1>
                <h3>Crowning Glory <br> Competition</h3>
                <h5>For All Majors</h5>
                <div class="Instructions">Insert the <span class="TSCode1">CODE</span> provided on the welcome festival card.</div>
                <div class="auth-code-input">
                    <input type="text" maxlength="1" oninput="moveToNextInput(event,0)" class="UniqueCode"
                        autocapitalize="characters" />
                    <input type="text" maxlength="1" oninput="moveToNextInput(event,1)" class="UniqueCode"
                        autocapitalize="characters" disabled="true" />
                    <input type="text" maxlength="1" oninput="moveToNextInput(event,2)" class="UniqueCode"
                        autocapitalize="characters" disabled="true" />
                    <input type="text" maxlength="1" oninput="moveToNextInput(event,3)" class="UniqueCode"
                        autocapitalize="characters" disabled="true" />
                    <input type="text" maxlength="1" oninput="moveToNextInput(event,4)" class="UniqueCode"
                        autocapitalize="characters" disabled="true" />
                    <!-- Add more input fields as needed -->
                </div>
                <div id="WarningMessageBox">
                    <p id="WarningMessageText"></p>
                    <div id="dBtn"></div>
                </div>
            </div>
         </div>
         <script src="js/login.js"></script>
         <script src="js/general.js"></script>
</body>
</html>