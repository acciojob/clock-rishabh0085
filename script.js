//your JS code here. If required.
function updateTime() {
    var timerElement = document.getElementById('timer');
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var day = now.getDate();
    var month = now.getMonth() + 1; // Months are zero indexed
    var year = now.getFullYear();

    // Add leading zeros if necessary
    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    day = (day < 10) ? '0' + day : day;
    month = (month < 10) ? '0' + month : month;

    // Display the time and date
    timerElement.textContent = hours + ':' + minutes + ':' + seconds + ' - ' + year + '-' + month + '-' + day;
}

// Update time every second
setInterval(updateTime, 1000);
