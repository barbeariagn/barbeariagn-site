self.addEventListener('install', function(event) {
  console.log('Service Worker instalado!');
});

self.addEventListener('activate', function(event) {
  console.log('Service Worker ativado!');
});

self.addEventListener('fetch', function(event) {
  // Aqui podemos colocar cache futuramente
});
