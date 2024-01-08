function onLoad(){
    const urlParams = new URLSearchParams(window.location.search);
    const encodedData = urlParams.get('code');
    const CODE = decodeURIComponent(encodedData);
    (One(CODE) === 900) ? null : window.location.href = `index.php`;
}

document.addEventListener("DOMContentLoaded", async function () {
    try {
        const response = await fetch('php/getData.php');
        const data = await response.json();

        if (data.error) {
            throw new Error(data.error);
        }
        console.log(data);
        // Update Kings section
        const kingsContainer = document.getElementById('kingsContainer');
        data.kings.forEach(candidate => {
            const html = `
                <div class="p">
                    <h4>${candidate.name}</h4>
                    <h4>${candidate.votes} Votes</h4>
                </div>`;
            kingsContainer.innerHTML += html;
        });

        // Update Queens section
        const queensContainer = document.getElementById('queensContainer');
        data.queens.forEach(candidate => {
            const html = `
                <div class="p">
                    <h4>${candidate.name}</h4>
                    <h4>${candidate.votes} Votes</h4>
                </div>`;
            queensContainer.innerHTML += html;
        });

    } catch (error) {
        console.error(error.message);
    }
});