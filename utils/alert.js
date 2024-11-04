function showAlert(message) {
  const alertMessage = document.getElementById("alertMessage");
  const customAlert = document.getElementById("customAlert");
  alertMessage.textContent = message; // Set the message
  customAlert.style.display = "block"; // Show the alert
  customAlert.classList.remove("hide"); // Ensure it's fully visible at the start

  // Start fade-out after 3 seconds
  setTimeout(() => {
    customAlert.classList.add("hide"); // Apply fade-out
    setTimeout(() => {
      customAlert.style.display = "none"; // Hide after fade-out
      customAlert.classList.remove("hide"); // Reset for next use
    }, 500); // Match the CSS transition duration
  }, 3000);
}

export default showAlert;
