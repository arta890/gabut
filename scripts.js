document.getElementById('order-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const menu = document.getElementById('menu').value;
    const quantity = document.getElementById('quantity').value;

    // Kirim data ke server
    fetch('http://localhost:3000/order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, menu, quantity })
    })
    .then(response => response.json())
    .then(data => {
        alert('Pesanan Anda telah dikirim: ' + JSON.stringify(data));
        document.getElementById('order-form').reset();
    })
    .catch(error => console.error('Error:', error));
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('message').value;

    // Kirim data ke server
    fetch('http://localhost:3000/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
    })
    .then(response => response.json())
    .then(data => {
        alert('Pesan Anda telah dikirim: ' + JSON.stringify(data));
        document.getElementById('contact-form').reset();
    })
    .catch(error => console.error('Error:', error));
});