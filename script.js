// Function to show the cookie banner if it hasn't been accepted
function showCookieBanner() {
  // Check if cookie consent has been given
  if (!localStorage.getItem('cookieAccepted')) {
    // Show the cookie banner
    const cookieBanner = document.getElementById('cookie-banner');
    cookieBanner.style.display = 'block';
  }
}

// Function to handle cookie acceptance
function acceptCookies() {
  // Set local storage to remember user accepted cookies
  localStorage.setItem('cookieAccepted', true);

  // Hide the banner
  const cookieBanner = document.getElementById('cookie-banner');
  cookieBanner.style.display = 'none';
}

// Add event listener for the accept button
document.addEventListener('DOMContentLoaded', function() {
  // Show cookie banner (if needed)
  showCookieBanner();

  // Add click event listener to accept button
  const acceptButton = document.getElementById('accept-cookies');
  if (acceptButton) {
    acceptButton.addEventListener('click', acceptCookies);
  }
});
