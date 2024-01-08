
function SwapCharInString(InputString, indx1, indx2) {
    const temp = InputString[indx1];
    InputString[indx1] = InputString[indx2];
    InputString[indx2] = temp;
    return InputString;
}

var KEY = "L9Z4V13PRO6Q7S2HGAJBNTFXUKIMC5EW";
function zero(dd) {
    if(dd>1450||dd<1){
        console.log("Out of range 1 to 1450");
        return 0;
    }
    //const MaxValue = 524288;
    const StartValue = 280000;
    //const EndValue = 498700;
    const IncPerCount = 165;//243
    //const MaxInc = 1450;//900
    const SpBits = [4, 3, 3, 5, 4];
    SplittedBits = [[], [], [], [], []];
    SplittedInt = [];
    const ind = dd;
    const result = StartValue + (IncPerCount * ind);
    const result1 = result.toString(2);
    result2 = result1.split('').map(Number);
    result2 = SwapCharInString(result2, 1, 13);
    result2 = SwapCharInString(result2, 2, 14);
    result2 = SwapCharInString(result2, 5, 17);
    result2 = SwapCharInString(result2, 6, 18);
    let z = 0;
    for (let x = 0; x < 5; x++) {

        for (let y = 0; y < SpBits[x]; y++) {
            SplittedBits[x][y] = result2[z + y];
        }
        z += SpBits[x];
    }
    for (let x = 0; x < 5; x++) {
        let t = SplittedBits[x].join('');
        SplittedInt[x] = parseInt(t, 2);
    }
    let C = [];
    let counter = 0;
    Array.from(SplittedInt).forEach(val => {
        C[counter] = KEY[val];
        counter++;
    })
    console.log(dd, C.join(''));
    return C.join('');
}

function One(Code) {
    //const MaxValue = 524288;
    const StartValue = 280000;
    const EndValue = 519250;
    const IncPerCount = 165;
    //const MaxInc = 1450;//900
    const SpBits = [4, 3, 3, 5, 4];
    SplittedBits = [[], [], [], [], []];
    SplittedInt = [];
    const ind = 1;
    let counter = 0;
    Array.from(Code).forEach(val => {
        SplittedInt[counter] = KEY.indexOf(Code[counter]);
        counter++;
    })
    counter = 0;
    Array.from(SplittedInt).forEach(val => {
        let result = SplittedInt[counter].toString(2);
        while (result.length < SpBits[counter]) {
            result = '0' + result;
        }
        SplittedBits[counter] = result.split('').map(Number);
        counter++;
    })
    let combinedArray = [...SplittedBits[0], ...SplittedBits[1], ...SplittedBits[2], ...SplittedBits[3], ...SplittedBits[4]];
    combinedArray = SwapCharInString(combinedArray, 1, 13);
    combinedArray = SwapCharInString(combinedArray, 2, 14);
    combinedArray = SwapCharInString(combinedArray, 5, 17);
    combinedArray = SwapCharInString(combinedArray, 6, 18);
    let result1 = combinedArray.join('');
    result1 = parseInt(result1, 2);
    if (result1 > EndValue || result1 <= StartValue) {
        console.log("invalid Code 1 ");
        return 0;
    }
    result1 -= StartValue;
    if ((result1 % IncPerCount)) {
        console.log("invalid Code 2");
        return 0;
    }
    result1 /= IncPerCount;

    //console.log(result1);
    return result1;
}


async function fetchDataFromServer(Vid) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "php/query.php?vouchID=" + encodeURIComponent(Vid), true);

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

