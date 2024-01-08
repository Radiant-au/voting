

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Voting</title>
    <link rel="stylesheet" href="css/style.css">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"/>
</head>
<body onload="fInitialization();">
    <section>
        <div class="glass"> 
            <div class="logo_con">
                <img src="css/asset_img/logo.png" alt="" width="60" height="60">
                <h2 class="fancy">UTYCC</h2>
            </div>
            <span class="pink_line"></span>
            <h2 class="select">Make a selection</h2>
            <h5><span>!!</span> Must vote <span>BOTH</span> to confirm <span>!!</span></h5>
            <div class="TabContainter">
                <button class="tabBtn" id="mtab" onclick="showCandidates('male')">KING</button>
                <button class="tabBtn" id="ftab" onclick="showCandidates('female')">QUEEN</button>
            </div>
            <div class="ppl" id="candidatesContainer">

            </div>
        </div>
        <div class="modal-box">
            
        </div>
    </section>
    <script src="js/main.js"></script>
    <script src="js/general.js"></script>
</body>
</html>
