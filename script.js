document
  .getElementById("hostelForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let valid = true;
    const requiredFields = document.querySelectorAll(
      "#hostelForm input[required], #hostelForm textarea[required]"
    );

    requiredFields.forEach((field) => {
      const errorMessage = document.getElementById(field.id + "error");
      if (!field.checkValidity()) {
        valid = false;
        field.classList.add("error");
        if (errorMessage) {
          errorMessage.style.display = "block";
        }
      } else {
        field.classList.remove("error");
        if (errorMessage) {
          errorMessage.style.display = "none";
        }
      }
    });
  });
document
  .querySelectorAll("#hostelForm input, #hostelForm textarea")
  .forEach((field) => {
    field.addEventListener("input", () => {
      const errorMessage = field.nextElementSibling;
      if (field.checkValidity()) {
        field.classList.remove("error");
        if (errorMessage && errorMessage.classList.contains("error-message")) {
          errorMessage.style.display = "none";
        }
      }
    });
  });
