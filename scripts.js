document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            alert(`Gracias, ${name}. Hemos recibido tu mensaje.`);
            form.reset();
        } else {
            alert("Por favor, rellena todos los campos.");
        }
    });
});
