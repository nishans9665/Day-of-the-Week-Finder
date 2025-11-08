
function findDay() {
    let year = parseInt(document.getElementById("year").value);
    let month = parseInt(document.getElementById("month").value);
    let day = parseInt(document.getElementById("day").value);


    if(!year || !month || !day || month < 1 || month > 12 || day < 1 || day > 31) {
        document.getElementById("result").innerText = "Please enter a valid date.";
        return;
    }

    let y0 = year - Math.floor((14 - month) / 12);
    let x = y0 + Math.floor(y0 / 4) - Math.floor(y0 / 100) + Math.floor(y0 / 400);
    let m0 = month + 12 * Math.floor((14 - month) / 12) - 2;
    let d0 = (day + x + Math.floor((31 * m0) / 12)) % 7;


    let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let dayName = dayNames[d0];

    document.getElementById("result").innerText = `The day is: ${dayName}`;
}
