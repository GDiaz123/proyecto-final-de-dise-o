document.addEventListener('DOMContentLoaded', function () {
    var causaCarousel = document.getElementById('causaCarousel');
    var causaDescription = document.getElementById('causa-description');

    causaCarousel.addEventListener('slide.bs.carousel', function (event) {
        if (event.to === 0) {
            causaDescription.textContent = 'Disfruta de una exquisita causa acevichada con crujientes chips de plátano en nuestro restaurante la carosa.';
        } else {
            causaDescription.textContent = 'Saborea nuestra causa rellena con atún fresco, palta, y una delicada salsa de mayonesa al limón.';
        }
    });

    var cevicheCarousel = document.getElementById('cevicheCarousel');
    var cevicheDescription = document.getElementById('ceviche-description');

    cevicheCarousel.addEventListener('slide.bs.carousel', function (event) {
        if (event.to === 0) {
            cevicheDescription.textContent = 'Nuestro ceviche clásico es una explosión de sabores frescos y cítricos. El pescado blanco, marinado en jugo de limón y sazonado con ají rocoto, cilantro y cebolla morada, se sirve con boniatos y maíz cancha crujiente.';
        } else {
            cevicheDescription.textContent = 'Prueba nuestro ceviche mixto, una combinación de pescado fresco y mariscos, marinado en jugo de limón y servido con una mezcla de cebolla, cilantro y ají.';
        }
    });

    var camaronesCarousel = document.getElementById('camaronesCarousel');
    var camaronesDescription = document.getElementById('camarones-description');

    camaronesCarousel.addEventListener('slide.bs.carousel', function (event) {
        if (event.to === 0) {
            camaronesDescription.textContent = 'Camarones frescos a la parrilla sazonados con una mezcla de hierbas y especias, servidos con una guarnición de ensalada fresca y una deliciosa salsa de limón y ajo.';
        } else {
            camaronesDescription.textContent = 'Camarones jugosos al ajillo, cocinados a la perfección con mantequilla, ajo y un toque de perejil, acompañados de arroz blanco.';
        }
    });

    var limonadaCarousel = document.getElementById('limonadaCarousel');
    var limonadaDescription = document.getElementById('limonada-description');

    limonadaCarousel.addEventListener('slide.bs.carousel', function (event) {
        if (event.to === 0) {
            limonadaDescription.textContent = 'Fresca y natural limonada preparada con limones recién exprimidos, agua fría y un toque de azúcar.';
        } else {
            limonadaDescription.textContent = 'Disfruta de nuestra limonada con menta, una bebida refrescante hecha con limones frescos, hojas de menta y un toque de azúcar.';
        }
    });

    var chichaCarousel = document.getElementById('chichaCarousel');
    var chichaDescription = document.getElementById('chicha-description');

    chichaCarousel.addEventListener('slide.bs.carousel', function (event) {
        if (event.to === 0) {
            chichaDescription.textContent = 'Refrescante chicha morada, hecha con maíz morado, piña, canela y clavo de olor, endulzada y servida fría.';
        } else {
            chichaDescription.textContent = 'Nuestra chicha morada especial es una mezcla de maíz morado, frutas tropicales y especias, servida bien fría para un sabor refrescante y único.';
        }
    });

    var piscoCarousel = document.getElementById('piscoCarousel');
    var piscoDescription = document.getElementById('pisco-description');

    piscoCarousel.addEventListener('slide.bs.carousel', function (event) {
        if (event.to === 0) {
            piscoDescription.textContent = 'El clásico pisco sour, una mezcla perfecta de pisco, jugo de limón, jarabe de goma, clara de huevo y un toque de amargo de angostura.';
        } else {
            piscoDescription.textContent = 'Nuestro pisco sour premium se elabora con pisco de alta calidad, jugo de limón fresco, jarabe de goma, clara de huevo y un toque de angostura, servido con hielo.';
        }
    });
});