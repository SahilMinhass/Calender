const days=['Sunday', 'Monday', 'Tueaday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Update Date
document.getElementById('date').innerText = (new Date().getDate()<10?"0":"") + new Date().getDate();

// Update Day
document.getElementById('day').innerText = days[new Date().getDay()];

// Update Month
document.getElementById('month').innerText = months[new Date().getMonth()];

// Update Year
document.getElementById('year').innerText = new Date().getFullYear();





