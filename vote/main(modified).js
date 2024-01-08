const urlParams = new URLSearchParams(window.location.search);
const encodedData = urlParams.get('code');
const CODE = decodeURIComponent(encodedData);
let encodedValue = encodeURIComponent(CODE);
let selectedGender = null;
let KID = 0;
let QID = 0;
let isVisiting = 0;
let visited = 0;
let maleVoteSubmitted = false;
let femaleVoteSubmitted = false;
let k_vote = 0;
let q_vote = 0;
let maleName = '';
let femaleName ='';
let hasdata = 0;



async function fInitialization() {
    let isValid = One(CODE);
    let data = await fetchDataFromServer(One(CODE));
    console.log(data);
    if(isValid){
        if(data.length > 0){
            KID = data[0].KID;
            QID = data[0].QID;
            hasdata = 1;
        }
    }else{
        window.location.href = `index.php`;
    }
    
    sessionStorage.clear();

    // Only execute the following lines if the conditions in the if statement allow
    attachRowEventListeners();
    showCandidates('male');
}


function attachRowEventListeners() {
    // Attach event listeners for expanding rows
    var rows = document.querySelectorAll('.row');

    rows.forEach(function (row) {
        row.querySelector('.bx-dots-horizontal-rounded').addEventListener('click', function () {
            this.closest('.row').classList.toggle('expanded');
        });
    });

    // Attach event listeners for voting buttons
    var voteButtons = document.querySelectorAll('.Vote');

    voteButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const candidateGender = button.classList.contains('male') ? 'male' : 'female';
            const candidateId = parseInt(button.id);
            console.log('Vote button clicked:', candidateId, candidateGender);
            submitVote(button, candidateId, candidateGender);
        });
    });
}

async function showCandidates(gender) {

        try {
            const response = await fetch('php/fetch_candidates.php?gender=' + gender);
            const data = await response.text();
    
            // Update the content of the candidatesContainer
            document.getElementById('candidatesContainer').innerHTML = data;
            if(hasdata === 1){
                if(gender === 'male'){
                    disableClickedButton(document.getElementById(KID));
                    removeOtherButtons(document.getElementById(KID) , 'male');
                }else if(gender === 'female'){
                    disableClickedButton(document.getElementById(QID));
                    removeOtherButtons(document.getElementById(QID) , 'female');
                }

            }
            else{
                if(gender === 'male'){
                    let btnid = sessionStorage.getItem('mVoted');
                    c_button = document.getElementById(btnid);
                    if(btnid != null){
                        disableClickedButton(c_button);
                        removeOtherButtons(c_button , 'male');
                    }
                }else if(gender === 'female'){
                    let btnid = sessionStorage.getItem('fVoted');
                    c_button = document.getElementById(btnid);
                    if(btnid != null){
                        disableClickedButton(c_button);
                        removeOtherButtons(c_button , "female");
                    }
                }
    
                
            }
            attachRowEventListeners();
            
        } catch (error) {
            console.error('Error:', error);
        }
    
}


async function disableClickedButton(button) {
    // Disable the clicked button
    // console.log(button);
    if (button) {
        button.innerHTML = 'Voted';
        button.style.backgroundColor = '#4F6F52';
        button.disabled = true;
    }
}

async function removeOtherButtons(clickedButton , gender) {
// Remove other buttons of the same gender
const buttonsToRemove = document.querySelectorAll(`.Vote.${gender}`);
buttonsToRemove.forEach(button => {
    if (!button.disabled && button !== clickedButton) {
        button.style.opacity = "0";
        button.disabled = true; // Remove only the button
    }
});

}

async function submitVote(clickedButton, candidateId, candidateGender) {
    if (selectedGender === null || selectedGender === candidateGender) {
        selectedGender = candidateGender;

        disableClickedButton(clickedButton);
        removeOtherButtons(clickedButton, candidateGender);

        if (selectedGender === 'male') {
            maleVoteSubmitted = true;
            k_vote = candidateId;
            maleName = clickedButton.closest('.row').querySelector('.name h4').innerText;
            sessionStorage.setItem('mVoted' , candidateId);
    
            
        } else if (selectedGender === 'female') {
            femaleVoteSubmitted = true;
            q_vote = candidateId;
            femaleName = clickedButton.closest('.row').querySelector('.name h4').innerText;
            sessionStorage.setItem('fVoted' , candidateId);
            
            
        }

        if (maleVoteSubmitted && femaleVoteSubmitted) {
            showBox();
        }
    } else {
        // Reset selectedGender if a different gender button is clicked
        selectedGender = null;
    }
}

async function insertVotes() {
    const response = await fetch('php/insert_vote.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `kid=${k_vote}&qid=${q_vote}&code=${One(CODE)}`,
    });

    const data = await response.json();

    console.log('Both male and female votes submitted. Inserting into the database...', data);
}

function showBox(){
    const section = document.querySelector("section");
    
    const modalBox = document.querySelector(".modal-box");
    modalBox.innerHTML = `<i class="fa-regular fa-circle-question"></i>
    <h2>Submit Now?</h2>
    <h3>You have voted</h3>
    <h3>King: ${maleName}</h3>
    <h3>Queen: ${femaleName}</h3>
    <div class="buttons">
        <button class="yes">Yes</button>
        <button class="no">No</button>
    </div>`;

    section.classList.add('active');

    const yes = document.querySelector(".yes");
    const no = document.querySelector(".no");
    yes.addEventListener("click" , async ()=>{
            await insertVotes();
            section.classList.remove('active');
    });
    no.addEventListener("click" , ()=>{
            k_vote = 0;
            q_vote = 0;
            selectedGender = null;
            showCandidates('male');
            sessionStorage.clear();
            maleVoteSubmitted = false;
            femaleVoteSubmitted = false;
            section.classList.remove('active');
    })
}
