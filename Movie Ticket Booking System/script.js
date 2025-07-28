// Function to open the booking popup
function openBooking(movie) {
    const movieImage = movie.querySelector('img').src; // Get movie poster source
    const movieTitle = movie.querySelector('.movie-title').innerText; // Get movie title
  
    // Set the movie title and poster in the modal
    document.getElementById('movieTitle').innerText = `Book Tickets for ${movieTitle}`;
    document.getElementById('moviePoster').src = movieImage;
  
    // Display the modal
    document.getElementById('bookingModal').style.display = 'flex';
  
    // Generate seat selection dynamically
    const seatsDiv = document.querySelector('.seats');
    seatsDiv.innerHTML = ''; // Clear any previous seat data
    for (let i = 1; i <= 40; i++) {
      const seat = document.createElement('input');
      seat.type = 'checkbox';
      seat.id = `seat-${i}`;
      seat.value = `Seat ${i}`;
  
      const label = document.createElement('label');
      label.htmlFor = `seat-${i}`;
      label.textContent = i; // Display seat number inside the box
  
      seatsDiv.appendChild(seat);
      seatsDiv.appendChild(label);
    }
  }
  
  // Function to close the booking popup
  function closeBooking() {
    document.getElementById('bookingModal').style.display = 'none';
  }
  
  // Function to generate ticket and redirect to ticket page
  function generateTicket() {
    const date = document.getElementById('date').value; // Selected date
    const time = document.getElementById('time').value; // Selected time
    const selectedSeats = [...document.querySelectorAll('.seats input:checked')].map(seat => seat.value); // Selected seats
  
    // Ensure all fields are filled
    if (!date || !time || selectedSeats.length === 0) {
      alert('Please select date, time, and seats!');
      return;
    }
  
    // Save ticket details in localStorage for retrieval on the ticket page
    const ticketDetails = {
      movieTitle: document.getElementById('movieTitle').innerText,
      moviePoster: document.getElementById('moviePoster').src,
      date,
      time,
      seats: selectedSeats,
    };
    localStorage.setItem('ticketDetails', JSON.stringify(ticketDetails));
  
    // Redirect to the ticket summary page
    window.location.href = 'ticket.html';
  }
  
  // Attach event listeners to "Book Now" buttons to open booking popup
  document.querySelectorAll('.book-btn').forEach(button => {
    button.addEventListener('click', function () {
      const movieCard = this.closest('.movie-card'); // Get the associated movie card
      openBooking(movieCard); // Open booking popup with selected movie details
    });
  });
  

  // Function to redirect to the Sign Up page
function redirectToSignUp() {
  window.location.href = 'signup.html';
}

// Function to redirect to the Log In page
function redirectToLogin() {
  window.location.href = 'login.html';
}

function signUpRedirect(event) {
  event.preventDefault(); // Prevent the form from submitting normally
  // Here you can add code to handle form validation or saving data
  
  // Redirect to file.html after form submission
  window.location.href = 'file.html';
}

function loginRedirect(event) {
  event.preventDefault(); // Prevent the form from submitting normally
  // Here you can add code to check user credentials
  
  // Redirect to file.html after successful login
  window.location.href = 'file.html';
}




  