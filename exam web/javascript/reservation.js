document.addEventListener("DOMContentLoaded", function () {
  const reservationForm = document.querySelector("#reservation form");

  reservationForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const nameInput = document.querySelector('#reservation input[type="text"]');
    const emailInput = document.querySelector(
      '#reservation input[type="email"]'
    );
    const numberInput = document.querySelector(
      '#reservation input[type="text"]'
    );
    const dateInput = document.querySelector('#reservation input[type="date"]');

    if (
      nameInput.value.trim() === "" ||
      emailInput.value.trim() === "" ||
      numberInput.value.trim() === "" ||
      dateInput.value.trim() === ""
    ) {
      alert("Please fill in all fields before making a reservation.");
      return;
    }
    alert(
      `Reservation details:\nName: ${nameInput.value}\nEmail: ${emailInput.value}\nNumber: ${numberInput.value}\nDate: ${dateInput.value}`
    );
    reservationForm.reset();
  });
});
