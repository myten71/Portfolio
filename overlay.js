// JavaScript function to open the overlay
function openOverlay() {
  document.querySelector('.overlay').style.display = 'block';
  document.body.classList.add('overlay-open');
}

// JavaScript function to close the overlay
function closeOverlay() {
  document.querySelector('.overlay').style.display = 'none';
  document.body.classList.remove('overlay-open');
}

// JavaScript function to toggle the overlay
function toggleOverlay() {
  if (document.querySelector('.overlay').style.display === 'block') {
    closeOverlay();
  } else {
    openOverlay();
  }
}

// JavaScript function to close the overlay
function closeOverlay() {
  document.querySelector('.overlay').style.display = 'none';
  document.body.classList.remove('overlay-open');
}