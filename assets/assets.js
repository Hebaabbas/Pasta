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

    // Calculate the number of tables required based on the number of guests
    const numTables = Math.ceil(numGuests / chairsPerTable);

    // Check if there are enough available tables
    if (bookedTables + numTables <= maxTables) {
    // Update the bookedTables count
    bookedTables += numTables;

    // Add the booked date and time to the bookedSlots array
    const bookingSlot = {
      date: bookingDate,
      time: bookingTime
    };
    bookedSlots.push(bookingSlot);

    // Display booking confirmation message
    alert("Booking confirmed for " + numGuests + " guests on " + bookingDate + " at " + bookingTime + ". You have booked " + numTables + " table(s).");

    // reset
    document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();
      
    const bookingDate = document.getElementById("bookingDate").value;
    const bookingTime = document.getElementById("bookingTime").value;
    const numGuests = parseInt(document.getElementById("numGuests").value);
      
    if (isDoubleBooking(bookingDate, bookingTime)) {
        alert("Please select a different time, the selected date and time are not available.");
        return;
    }
      
    const numTables = Math.ceil(numGuests / chairsPerTable);
      
    if (bookedTables + numTables <= maxTables) {
        bookedTables += numTables;
      
        const bookingSlot = {
        date: bookingDate,
        time: bookingTime
        };
        bookedSlots.push(bookingSlot);
      
        alert("Booking confirmed for " + numGuests + " guests on " + bookingDate + " at " + bookingTime + ". You have booked " + numTables + " table(s).");
      
        document.getElementById("bookingForm").reset();
    } else {
        alert("Sorry, there are not enough tables available for your booking. Please try a different date or time.");
    }
}
      