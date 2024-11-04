function showAlert(message) {
  const alertMessage = document.getElementById("alertMessage");
  const customAlert = document.getElementById("customAlert");
  alertMessage.textContent = message; // Set the message
  customAlert.style.display = "block"; // Show the alert
}

export default showAlert;
