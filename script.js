window.addEventListener('load', function() {
    alert('¡Bienvenido a Ganadería y Equipos Agrícolas XYZ!');
    console.log('Página cargada correctamente.');

    const contentDiv = document.getElementById('content');
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            loadPage(page);
        });
    });

    function loadPage(page) {
        if (page === 'inicio') {
            // Si es la página de inicio, mostramos el contenido inicial
            contentDiv.innerHTML = `
                <section id="inicio">
                    <h2>Bienvenidos a nuestra empresa</h2>
                    <p>Ofrecemos una amplia variedad de ganado bovino y equipos agrícolas de alta calidad.</p>
                </section>
            `;
        } else {
            fetch(`${page}.html`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('No se pudo cargar la página ' + page);
                    }
                    return response.text();
                })
                .then(data => {
                    contentDiv.innerHTML = data;
                })
                .catch(error => {
                    console.error('Error al cargar la página:', error);
                });
        }
    }
});
