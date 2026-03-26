function calculateAttendance() {
    let total = document.getElementById("totalClasses").value;
    let attended = document.getElementById("attendedClasses").value;

    total = Number(total);
    attended = Number(attended);

    if (total <= 0 || attended < 0) {
        document.getElementById("result").innerText = "Enter valid values";
        return;
    }

    if (attended > total) {
        document.getElementById("result").innerText = "Attended cannot be more than total";
        return;
    }

    let percentage = (attended / total) * 100;
    percentage = percentage.toFixed(2);

    let message = `Attendance: ${percentage}%`;

    if (percentage >= 75) {
        message += " (Good ✅)";
    } else {
        let required = Math.ceil((0.75 * total - attended) / 0.25);
        message += ` (Need ${required} more classes to reach 75%)`;
    }

    document.getElementById("result").innerText = message;
}
