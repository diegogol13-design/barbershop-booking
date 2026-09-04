// Elementos del DOM
const bookingForm = document.getElementById('bookingForm');
const confirmationMessage = document.getElementById('confirmationMessage');
const btnNewBooking = document.querySelector('.btn-new-booking');
const dateInput = document.getElementById('date');

// Establecer fecha mínima (hoy)
setMinimumDate();

// Event Listeners
bookingForm.addEventListener('submit', handleSubmit);
if (btnNewBooking) {
    btnNewBooking.addEventListener('click', resetForm);
}

/**
 * Establece la fecha mínima como hoy
 */
function setMinimumDate() {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
}

/**
 * Maneja el envío del formulario
 */
function handleSubmit(e) {
    e.preventDefault();

    // Obtener datos del formulario
    const formData = new FormData(bookingForm);
    const bookingData = Object.fromEntries(formData);

    // Validar datos
    if (!validateBooking(bookingData)) {
        return;
    }

    // Simular envío al servidor
    console.log('Datos de la cita:', bookingData);
    
    // Guardar en localStorage
    saveBooking(bookingData);

    // Mostrar mensaje de confirmación
    showConfirmation();

    // Ocultar formulario
    bookingForm.style.display = 'none';
}

/**
 * Valida los datos de la cita
 */
function validateBooking(data) {
    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        alert('Por favor ingresa un correo electrónico válido');
        return false;
    }

    // Validar teléfono
    const phoneRegex = /^[0-9\-\+\(\)\s]{7,}$/;
    if (!phoneRegex.test(data.phone)) {
        alert('Por favor ingresa un teléfono válido');
        return false;
    }

    // Validar que la hora esté en horario de funcionamiento (9 AM - 6 PM)
    const time = data.time.split(':');
    const hour = parseInt(time[0]);
    if (hour < 9 || hour >= 18) {
        alert('Nuestro horario es de 9:00 AM a 6:00 PM');
        return false;
    }

    return true;
}

/**
 * Guarda la cita en localStorage
 */
function saveBooking(bookingData) {
    let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    
    const booking = {
        id: Date.now(),
        ...bookingData,
        createdAt: new Date().toISOString()
    };
    
    bookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(bookings));
}

/**
 * Muestra el mensaje de confirmación
 */
function showConfirmation() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    confirmationMessage.classList.remove('hidden');
    confirmationMessage.innerHTML = `
        <h3>¡Cita agendada exitosamente!</h3>
        <p>Hola <strong>${name}</strong>,</p>
        <p>Tu cita ha sido confirmada para:</p>
        <p><strong>${formatDate(date)} a las ${time}</strong></p>
        <p>Te hemos enviado los detalles a <strong>${email}</strong></p>
        <p style="color: #aaaaaa; font-size: 0.9rem; margin-top: 20px;">Si necesitas cancelar o reprogramar, contáctanos con 24 horas de anticipación.</p>
        <button class="btn-new-booking">Agendar otra cita</button>
    `;

    // Re-agregar event listener al nuevo botón
    document.querySelector('.btn-new-booking').addEventListener('click', resetForm);
}

/**
 * Formatea la fecha a formato legible
 */
function formatDate(dateString) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
}

/**
 * Reinicia el formulario
 */
function resetForm() {
    bookingForm.reset();
    confirmationMessage.classList.add('hidden');
    bookingForm.style.display = 'grid';
    setMinimumDate();
}

/**
 * Obtener todas las citas agendadas (para administrador)
 */
function getAllBookings() {
    return JSON.parse(localStorage.getItem('bookings')) || [];
}

/**
 * Cancelar una cita
 */
function cancelBooking(bookingId) {
    let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    bookings = bookings.filter(b => b.id !== bookingId);
    localStorage.setItem('bookings', JSON.stringify(bookings));
}

// Exportar funciones para uso en consola
console.log('Sistema de agendamiento cargado correctamente');
console.log('Funciones disponibles: getAllBookings(), cancelBooking(id)');
