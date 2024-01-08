let CodeFilled = 0;
let MSGText = document.getElementById("WarningMessageText");
let CreateBTN = document.getElementById("dBtn");
const inputElements = document.querySelectorAll(".auth-code-input input");

inputElements.forEach(function(inputElement, index) {
    inputElement.addEventListener('keydown', function (event) {
        handleBackspace(event, inputElements, index);
    });
});

function handleBackspace(event, inputElements, currentIndex) {
    if (event.key === 'Backspace') {
        if (currentIndex > 0 && inputElements[currentIndex].value==='') {
            inputElements[currentIndex].disabled = true;
            inputElements[currentIndex - 1].value = '';
            inputElements[currentIndex - 1].focus();
        }
        inputElements[currentIndex].value = '';
    }
}

async function moveToNextInput(event, InputID) {
    event.target.value = event.target.value.toUpperCase();
    const setBit = (BitPos) => {
        CodeFilled |= 1 << BitPos;
    };

    if (event.target.value.length === 1) {
        setBit(InputID);
        const nextInput = event.target.nextElementSibling;
        CheckCode();

        if (nextInput) {
            nextInput.disabled = false;
            nextInput.focus();
        }
    }
}

    

    async function CheckCode() {
        MSGText.classlist = [];
        MSGText.innerHTML = "";
        CreateBTN.innerHTML= "";
        if (CodeFilled === 0b11111) {
            const inputs = document.getElementsByClassName('UniqueCode');
            let CODE = "";
            Array.from(inputs).forEach(input => {
                CODE += input.value;
            });
            let isValid = One(CODE);
            var encodedValue = encodeURIComponent(CODE);

            if(isValid === 900){
                window.location.href = `livescore.php?code=${encodedValue}`;
            }else{
            if (isValid === 0) {
                MSGText.innerHTML = '<span class="TSCodeRed">Invalid Code.</span>';
            }
            else {
                let DataFromDB = await fetchDataFromServer(One(CODE));
                if (DataFromDB.length === 0) {
                    // MSGText.innerHTML = '<span class="TSCodeGreen">Proceeding...</span>';
                    window.location.href = `main.php?code=${encodedValue}`;
                }
                else {
                    let c_data = await fetchName();
                    let m_name = '';
                    let q_name = '';
                    if(c_data[0].gender == 'male'){
                        m_name = c_data[0].name;
                        q_name = c_data[1].name;
                    }else if(c_data[1].gender == 'male'){
                        m_name = c_data[1].name;
                        q_name = c_data[0].name;
                    }
                    MSGText.innerHTML = `The <span class="TSCodeRed">CODE</span> already been used to Vote. <br>
                                            King : ${m_name} <br>
                                            Queen : ${q_name}<br>
                                         Visit the Voting page anyway?`;
                    CreateBTN.innerHTML = '<button class="BTNVisit">Yes</button>';
                    CreateBTN.firstChild.addEventListener('click', function () {
                        window.location.href = `main.php?code=${encodedValue}`;
                    });
                }
            }
        }
    
        }
       
    }

    
    async function fetchName() {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "php/votedname.php", true);
    
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        try {
                            let responseData = JSON.parse(xhr.responseText);
                            resolve(responseData);
                        } catch (error) {
                            console.error("Error parsing JSON:", error);
                            reject(error);
                        }
                    } else {
                        console.error("Request failed with status:", xhr.status);
                        reject(xhr.statusText);
                    }
                }
            };
    
            xhr.send();
        });
    }