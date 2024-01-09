dayjs.extend(dayjs_plugin_duration);

function activateCountdown(element , dateString){
    const targetDate = dayjs(dateString);

    element.querySelector(".until_event").textContent = `Until ${ targetDate.format("D MMMM YYYY")}`;

    setInterval(()=>{
        const now = dayjs();
        const duration = dayjs.duration(targetDate.diff(now));

       element.querySelector(".until_numeric_seconds").textContent = duration.seconds().toString().padStart(2 , "0");
       element.querySelector(".until_numeric_minutes").textContent = duration.minutes().toString().padStart(2 , "0");
       element.querySelector(".until_numeric_hours").textContent = duration.hours().toString().padStart(2 , "0");
       element.querySelector(".until_numeric_days").textContent = duration.asDays().toFixed(0).toString().padStart(2 , "0");
    },250);
}
activateCountdown(document.getElementById("myCountdown") , "2024-1-12 09:00");