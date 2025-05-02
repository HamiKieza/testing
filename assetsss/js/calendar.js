const monthYearElement = document.getElementById("month-year");
const datesElement = document.getElementById("dates");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

let currentDate = new Date();

function renderCalendar() {
    // Get current month and year
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // Set header
    monthYearElement.textContent = `${months[month]} ${year}`;

    // Clear previous dates
    datesElement.innerHTML = "";

    // Get first and last days of the month
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    // Add empty placeholders for days before the first day
    for (let i = 0; i < firstDay; i++) {
        const emptyDiv = document.createElement("div");
        datesElement.appendChild(emptyDiv);
    }

    // Add days of the month
    for (let day = 1; day <= lastDate; day++) {
        const dateDiv = document.createElement("div");
        dateDiv.textContent = day;
        dateDiv.classList.add("date");

        // Highlight today's date
        if (
            day === new Date().getDate() &&
            month === new Date().getMonth() &&
            year === new Date().getFullYear()
        ) {
            dateDiv.classList.add("today");
        }

        datesElement.appendChild(dateDiv);
    }
}

// Event listeners for navigation buttons
prevButton.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextButton.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

// Initial render
renderCalendar();
