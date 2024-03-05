function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Optional: You can format the clock to your liking here
    // Pad single digit minutes and seconds with a leading zero
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Format the time string
    let timeString = hours + ':' + minutes + ':' + seconds;

    // Display the time string to the user
    document.getElementById('clock').innerText = timeString;

    // Update the time every second
    setTimeout(updateClock, 1000);
}

// Initialize the clock
updateClock();
