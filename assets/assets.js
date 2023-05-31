// Define the maximum number of tables is 10 and chairs per table is 4
const maxTables = 10;
const chairsPerTable = 4;

// Track the number of booked tables
let bookedTables = 0;

// Array to store booked dates and times
const bookedSlots = [];

document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    //to check the values
    const bookingDate = document.getElementById("bookingDate").value;
    const bookingTime = document.getElementById("bookingTime").value;
    const numGuests = parseInt(document.getElementById("numGuests").value);
  
    //to check for double bookings
    if (isDoubleBooking(bookingDate, bookingTime)) {
      alert("Please select a different time, the selected date and time are not available.");
      return;
    }
    