// Cotlands Website - Part 2
// Basic client-side form interaction.

document.addEventListener("DOMContentLoaded", function () {
    const forms = document.querySelectorAll("form");

    forms.forEach(function (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }

            alert("Thank you. Your message has been received.");
            form.reset();
        });
    });
});
