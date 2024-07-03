function reservar() {
    const email = document.getElementById('email').value;
    const participants = document.getElementById('participants').value;
    const time = document.getElementById('time').value;
    const date = document.getElementById('date').value;

    if (email && participants && time && date) {
        const reservationDetails = document.getElementById('reservation-details');
        reservationDetails.innerHTML = `<p>Reserva hecha para el ${date} a las ${time}. Tiempo de espera: 30 minutos.</p>`;
        const mesasContainer = document.getElementById('mesas-container');
        mesasContainer.innerHTML = '';
        for (let i = 1; i <= 20; i++) {
            const mesa = document.createElement('div');
            mesa.classList.add('mesa', 'available');
            mesa.textContent = i;
            mesa.onclick = function() {
                if (mesa.classList.contains('available')) {
                    mesa.classList.remove('available');
                    mesa.classList.add('reserved');
                    alert(`Mesa ${i} reservada para el ${date} a las ${time}.`);
                }
            };
            mesasContainer.appendChild(mesa);
        }
    } else {
        alert('Por favor, complete todos los campos.');
    }
}