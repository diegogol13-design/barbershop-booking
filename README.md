# 💈 Barbershop Elite - Sistema de Agendamiento

Página web para agendamiento de citas en una barbería. Sistema completo con validación de datos y almacenamiento local.

## ✨ Características

- ✂️ Formulario de agendamiento elegante y profesional
- 📅 Selector de fecha y hora
- 👨 Selección de barbero preferido
- 💰 Diferentes servicios disponibles
- ✉️ Validación de email y teléfono
- 💾 Almacenamiento de citas en localStorage
- 📱 Diseño responsive (mobile-friendly)
- 🎨 Tema elegante con colores dorados y negros
- ✅ Confirmación de cita con detalles
- ⏰ Horario de funcionamiento validado (9 AM - 6 PM)

## 🚀 Instalación

1. Clona este repositorio:
```bash
git clone https://github.com/diegogol13-design/barbershop-booking.git
```

2. Navega a la carpeta del proyecto:
```bash
cd barbershop-booking
```

3. Abre el archivo `index.html` en tu navegador favorito.

## 📋 Uso

### Para clientes:
1. Completa el formulario con tus datos
2. Selecciona el servicio que deseas
3. Elige tu barbero preferido
4. Selecciona la fecha y hora disponible
5. Haz clic en "Agendar cita"

### Para administradores:
Puede acceder a todas las citas agendadas desde la consola del navegador:
```javascript
getAllBookings()  // Ver todas las citas
cancelBooking(id) // Cancelar una cita
```

## 📁 Estructura del Proyecto

```
barbershop-booking/
├── index.html      # Página principal con el formulario
├── styles.css      # Estilos y diseño responsivo
├── script.js       # Lógica de la aplicación
└── README.md       # Este archivo
```

## 🎨 Diseño

- **Colores principales:**
  - Negro (#1a1a1a) - Fondo principal
  - Dorado (#d4af37) - Acentos y títulos
  - Gris oscuro (#2d2d2d) - Fondo secundario

- **Tipografía:**
  - Segoe UI para un aspecto moderno y limpio

## 🔧 Tecnologías

- HTML5
- CSS3 (con variables CSS)
- JavaScript vanilla (ES6+)
- LocalStorage API

## ✅ Validaciones

- Email válido
- Teléfono con mínimo 7 caracteres
- Horario de funcionamiento (9 AM - 6 PM)
- Fecha no puede ser en el pasado
- Campos requeridos

## 🌐 Servicios Disponibles

- Corte de cabello - $15
- Afeitado - $10
- Servicio completo - $25
- Tinte y corte - $30

## 👥 Barberos

- Carlos
- Juan
- Miguel
- Cualquiera (disponibilidad automática)

## 📧 Contacto

- 📍 Calle Principal 123
- ☎️ (555) 123-4567

## 📝 Notas

- Las citas se guardan en el navegador (localStorage)
- No se envían datos reales a un servidor en esta versión
- Para implementación en producción, conectar con base de datos

## 🔜 Mejoras Futuras

- [ ] Backend con base de datos
- [ ] Sistema de notificaciones por email
- [ ] Panel de administrador
- [ ] Calendario interactivo
- [ ] Integración con sistemas de pago
- [ ] Disponibilidad en tiempo real
- [ ] App móvil nativa

## 📄 Licencia

Este proyecto está disponible bajo licencia MIT.

---

**Desarrollado con ❤️ por Barbershop Elite**
