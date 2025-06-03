const form = document.getElementById('signup-form');
const message = document.getElementById('form-message');

form.addEventListener('submit', async (e) => {
e.preventDefault();

const formData = new FormData(form);

try {
    const response = await fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: {
        'Accept': 'application/json'
    }
    });

    if (response.ok) {
    form.style.display = 'none';
    message.style.display = 'block';
    } else {
        alert("Oops! Something went wrong. Try again?");
    }
} catch (error) {
    alert("Network error. Try again later.");
}
});
