// Configuración de Google Analytics para Smile Hot Dog Gijón
// Reemplaza GA_MEASUREMENT_ID con tu ID real de Google Analytics

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

// Configuración básica
gtag('config', 'GA_MEASUREMENT_ID', {
  'page_title': 'Smile Hot Dog Gijón - Hot Dogs',
  'page_location': 'https://www.smilehotdog.es',
  'custom_map': {
    'dimension1': 'user_type',
    'dimension2': 'location'
  }
});

// Eventos personalizados para restaurantes
gtag('event', 'page_view', {
  'event_category': 'restaurant',
  'event_label': 'hot_dog_gijon',
  'custom_parameter': 'cimavilla_location'
});

// Tracking de interacciones con el menú
function trackMenuItemClick(itemName) {
  gtag('event', 'select_item', {
    'event_category': 'menu_interaction',
    'event_label': itemName,
    'value': 1
  });
}

// Tracking de ubicación
function trackLocationView() {
  gtag('event', 'view_item', {
    'event_category': 'location',
    'event_label': 'cimavilla_gijon',
    'value': 1
  });
}

// Exponer funciones globalmente
window.trackMenuItemClick = trackMenuItemClick;
window.trackLocationView = trackLocationView;
