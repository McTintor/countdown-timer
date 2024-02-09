// Target date: August 31, 2024
const targetDate = new Date('August 31, 2024 14:00:00').getTime();

// Update the countdown every 1 second
const countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
    // Get the current date and time
    const currentDate = new Date().getTime();
    
    // Calculate the remaining time in milliseconds
    const remainingTime = targetDate - currentDate;
    
    if (remainingTime > 0) {
        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
        
        // Display the countdown
        document.getElementById('days').innerText = formatTime(days);
        document.getElementById('hours').innerText = formatTime(hours);
        document.getElementById('minutes').innerText = formatTime(minutes);
        document.getElementById('seconds').innerText = formatTime(seconds);
    } else {
        // Display a message when the countdown ends
        clearInterval(countdownInterval);
        document.getElementById('days').innerText = '00';
        document.getElementById('hours').innerText = '00';
        document.getElementById('minutes').innerText = '00';
        document.getElementById('seconds').innerText = '00';
    }
}

// Function to format time units with leading zeros
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Initial call to update the countdown
updateCountdown();
