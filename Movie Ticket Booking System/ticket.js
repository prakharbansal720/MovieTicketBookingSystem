// Retrieve ticket details from localStorage
const ticketDetails = JSON.parse(localStorage.getItem('ticketDetails'));

// If ticket details exist, populate the ticket page
if (ticketDetails) {
  // Populate the ticket page with the ticket details
  document.getElementById('moviePoster').src = ticketDetails.moviePoster;
  document.getElementById('movieTitle').textContent = ticketDetails.movieTitle;
  document.getElementById('ticketDate').textContent = ticketDetails.date;
  document.getElementById('ticketTime').textContent = ticketDetails.time;
  document.getElementById('ticketSeats').textContent = ticketDetails.seats.join(', ');

} else {
  // If no ticket details found, try to retrieve movie details and alert the user if not found
  const movieImage = localStorage.getItem('movieImage');
  const movieTitle = localStorage.getItem('movieTitle');
  
  if (movieImage && movieTitle) {
    // Populate the ticket page with the movie details
    document.querySelector('.ticket-image img').src = movieImage;
    document.querySelector('.ticket-info').insertAdjacentHTML('afterbegin', `<p><span>Movie:</span> ${movieTitle}</p>`);
  } else {
    // Handle cases where data is not available
    alert('No movie selected. Redirecting back to home page.');
    window.location.href = 'index.html';
  }
}
