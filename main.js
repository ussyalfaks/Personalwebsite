document.addEventListener('DOMContentLoaded', () => {
    const updateTime = () => {
        const now = new Date();

        // Convert time to West Africa Time (UTC+1)
        const westAfricaTime = new Date(now.toLocaleString("en-NG", { timeZone: "Africa/Lagos" }));

        // Format the time to HH:MM
        const hours = westAfricaTime.getHours().toString().padStart(2, '0');
        const minutes = westAfricaTime.getMinutes().toString().padStart(2, '0');
        const timeString = `${hours}:${minutes}`;

        const dayString = westAfricaTime.toLocaleDateString('en-NG', { weekday: 'long' });

        document.getElementById('timeUTC').textContent = timeString;
        document.getElementById('day').textContent = dayString;
    };

    updateTime();
    setInterval(updateTime, 1000); // Update every second
});
