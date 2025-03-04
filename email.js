document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: name,
        reply_to: email,
        message: message,
    }).then(() => {
        alert("Message sent successfully!");
    }).catch((error) => {
        alert("Failed to send message. Please try again.");
        console.error(error);
    });
});
