

window.addEventListener('DOMContentLoaded', function() {
  // Crear elemento de ventana de carga
  var loadingDiv = document.createElement('div');
  loadingDiv.setAttribute('id', 'loading');
  
  // Crear elemento de círculo giratorio
  var spinner = document.createElement('div');
  spinner.setAttribute('class', 'spinner');
  
  // Agregar círculo giratorio al elemento de ventana de carga
  loadingDiv.appendChild(spinner);
  
  // Agregar ventana de carga al cuerpo del documento
  document.body.appendChild(loadingDiv);
});

// Array con las URL de los scripts que quieres cargar
var scripts = ['about.js', 'education.js', 'skills.js', 'experience.js', 'projects.js', 'publications.js'];

// Ubicar el elemento script existente en el head
var mainScriptTag = document.querySelector('script[src="script/main.js"]');

scripts.forEach(function(src) {
    // Crea un nuevo elemento script
    var scriptTag = document.createElement('script');
    
    // Añade el atributo src con la URL del script
    scriptTag.src = 'script/' + src;

    // Inserta el nuevo script después del script 'main.js' en el head
    mainScriptTag.parentNode.insertBefore(scriptTag, mainScriptTag.nextSibling);

    // Actualiza mainScriptTag para insertar el siguiente script después del recién insertado
    mainScriptTag = scriptTag;
});

window.onload = function() {
    var loadingDiv = document.getElementById('loading');

    setTimeout(function() {document.body.removeChild(loadingDiv)}, 400)
    
    const navLinks = ['About', 'Experience', 'Education', 'Skills', 'Projects', 'publications', 'Contact'];
    const navLinksEsp = ['Sobre mí', 'Experiencia', 'Formación', 'Habilidades', 'Proyectos', 'Artículos', 'Contacto'];

    // Create a new button element
    let toTopBtn = document.createElement("button");

    // Add attributes to the button
    toTopBtn.setAttribute("id", "toTopBtn");
    toTopBtn.setAttribute("title", "Go to top");

    // Create a new i element for the Font Awesome icon
    let icon = document.createElement("i");

    // Add the Font Awesome classes to the i element
    icon.classList.add("fa-solid");
    icon.classList.add("fa-angles-up");

    // Append the icon to the button
    toTopBtn.appendChild(icon);

    // Append the button to the body of the document
    document.body.appendChild(toTopBtn);

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            toTopBtn.style.display = "block";
        } else {
            toTopBtn.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    toTopBtn.addEventListener('click', function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });

    const paragraphs = aboutDetails.split('<br>').map(paragraph => `<p>${paragraph}</p>`).join('');

    courses.forEach((curso) => {
      console.log(`Cursos: ${curso.nombre}, ${curso.organizacion}, ${curso.ubicacion} ${curso.año}`);
    });


    const contactDetails = {
        email: 'g.fuentes@renare.uchile.cl',
        phone: '+56986876932',
        linkedIn: 'https://www.linkedin.com/in/guillermo-fuentes-jaque',
        instagram: 'https://www.instagram.com/guillermo.fuentes.j'
    };

    const navigation = document.getElementById('navigation');
    navLinks.forEach((link, index) => {
        navigation.innerHTML += `<li><a href="#${link.toLowerCase()}">${navLinksEsp[index]}</a></li>`;
    });

    document.getElementById('introduction').innerHTML += `<h1>${introduction.name}</h1><h2>${introduction.profession}</h2><p>${introduction.description}</p>`;

    document.getElementById('about').innerHTML += `<h2>Acerca de mí</h2>${paragraphs}`;

    const skillsSection = document.getElementById('skills');
    skillsSection.innerHTML += '<h2>Habilidades y herramientas</h2>';
    skillsSection.innerHTML += `<p>${skillsIntroduction}</p>`;
    for (const [skill, rating] of Object.entries(skills)) {
        let ratingPercentage = (rating / 6) * 100;

        skillsSection.appendChild(Object.assign(document.createElement('div'), {
            className: 'skill-row',
            innerHTML: `<div class="skill-track"><div class="skill-bar" style="width: ${ratingPercentage}%">
            </div></div><span class="skill-name">${skill}</span>`
        }));
    }


    const educationSection = document.getElementById('education');
    educationSection.innerHTML += '<h2>Formación académica <a id="showCourses" href="#" style="margin-left: 10px; font-size: 0.8em;">Mostrar cursos</a></h2>';
    educationDetails.forEach((detail) => {
        educationSection.innerHTML += `<h3>${detail.degree}</h3><p>${detail.institution}, ${detail.year}</p>`;
    });

   // Añade un contenedor para los cursos
    educationSection.innerHTML += '<div id="coursesContainer"></div>';

    let coursesContainer = document.getElementById('coursesContainer');

    // Seleccionar el enlace y añadir el evento de clic
    let showCoursesLink = document.getElementById('showCourses');
    showCoursesLink.addEventListener('click', function(e) {
        // Evita que el enlace navegue a su href
        e.preventDefault();

        // Comprueba si los cursos ya están mostrándose
        if (showCoursesLink.textContent === "Mostrar cursos") {
            // Cambia el texto del enlace
            showCoursesLink.textContent = "Contraer cursos";

            // Añade los cursos
            coursesContainer.innerHTML = '<br><hr style="border: none; border-top: 3px solid rgba(128, 128, 128, 0.5);">'
                                       + '<br><h2>Formación Complementaria</h2>';
            courses.forEach((course) => {
                coursesContainer.innerHTML += `<h3>${course.nombre}</h3><p>${course.organizacion}, ${course.ubicacion}, ${course.año}</p>`;
            });
        } else {
            // Cambia el texto del enlace
            showCoursesLink.textContent = "Mostrar cursos";

            // Vacía el contenedor de los cursos
            coursesContainer.innerHTML = '';
        }
    });

    const experienceSection = document.getElementById('experience');
    // Añade el encabezado y el enlace
    experienceSection.innerHTML = '<h2>Experiencia destacada (resumen) <a id="toggleExperience" href="#" style="margin-left: 10px; font-size: 0.8em;">Mostrar más experiencia</a></h2>';
    let isShowingFullExperience = false;

    const toggleExperience = () => {
        // Vaciar la sección de experiencia
        while (experienceSection.firstChild) {
            experienceSection.removeChild(experienceSection.firstChild);
        }

        // Cambia el estado y muestra la experiencia adecuada
        if (isShowingFullExperience) {
            experienceSection.innerHTML = '<h2>Experiencia destacada (resumen) <a id="toggleExperience" href="#" style="margin-left: 10px; font-size: 0.8em;">Mostrar más experiencia</a></h2>';
            addExperienceDetails(experienceDetails);
            isShowingFullExperience = false;
        } else {
            experienceSection.innerHTML = '<h2>Experiencia<a id="toggleExperience" href="#" style="margin-left: 10px; font-size: 0.8em;">Mostrar solo experiencia destacada</a></h2>';
            addExperienceDetails(fullExperienceDetails);
            isShowingFullExperience = true;
        }

        // Vuelve a adjuntar el controlador de eventos al enlace
        document.getElementById("toggleExperience").addEventListener('click', function (event) {
            event.preventDefault();
            toggleExperience();
        });
    }

    const addExperienceDetails = (details) => {
        details.forEach((detail) => {
            let h3 = document.createElement("h3");
            h3.textContent = detail.jobTitle + ' (' + detail.year + ')';
            experienceSection.appendChild(h3);

            let p = document.createElement("p");
            p.textContent = `${detail.description}, ${detail.company}`;
            experienceSection.appendChild(p);
        });
    }

    // Añade detalles de experiencia destacada al principio
    addExperienceDetails(experienceDetails);

    // Adjunta el controlador de eventos al enlace
    document.getElementById("toggleExperience").addEventListener('click', function (event) {
        event.preventDefault();
        toggleExperience();
    });

    const projectsSection = document.getElementById('projects');
    projectsSection.innerHTML += '<h2>Proyectos</h2>';
    projectsDetails.forEach((project) => {
        projectsSection.innerHTML += `<h3>${project.title}</h3><p>${project.description}</p><p><a href="${project.link}">Ver proyecto</a></p>`;
    });

    const publicationsSection = document.getElementById("publications");
    publicationsSection.innerHTML += '<h2>Artículos publicados</h2>';
    publicationsDetails.forEach(publication => {
        publicationsSection.innerHTML += `<h3>${publication.author} (${publication.year})</h3>
        <p>${publication.title} <a target="_blank" href="${publication.link}">Artículo</a></p>`;
    });

    // Aquí comienza el nuevo código para el footer
    const footer = document.getElementById('footer');

    // Crear el contenedor para los datos de contacto
    let contactContainer = document.createElement('div');
    contactContainer.setAttribute('id', 'contact');

    // Crear el elemento h2 y añadir texto
    let h2 = document.createElement('h2');
    h2.innerText = 'Contacto';
    // Añadir el h2 al pie de página
    footer.appendChild(h2);

    // Crear el párrafo y el enlace para el email
    let p = document.createElement('p');
    let a = document.createElement('a');
    a.setAttribute('href', `mailto:${contactDetails.email}`);
    a.setAttribute('target', '_blank');
    a.innerHTML = '<i class="fas fa-envelope fa-fade"></i> ' + contactDetails.email; // aquí añadimos el icono de email
    p.appendChild(a);
    // Añadir el párrafo al contenedor de contacto
    contactContainer.appendChild(p);

    // Crear el párrafo para el teléfono
    let pPhone = document.createElement('p');
    let aPhone = document.createElement('a');
    aPhone.setAttribute('target', '_blank');
    aPhone.setAttribute('href', `https://wa.me/${contactDetails.phone}`); // enlace a WhatsApp
    aPhone.innerHTML = '<i class="fas fa-phone fa-fade"></i> ' + contactDetails.phone; // aquí añadimos el icono de teléfono
    pPhone.appendChild(aPhone);
    // Añadir el párrafo al contenedor de contacto
    contactContainer.appendChild(pPhone);

    // Crear el párrafo y el enlace para LinkedIn
    let pLinkedIn = document.createElement('p');
    let aLinkedIn = document.createElement('a');
    aLinkedIn.setAttribute('target', '_blank');
    aLinkedIn.setAttribute('href', contactDetails.linkedIn);
    aLinkedIn.innerHTML = '<i class="fab fa-linkedin fa-fade"></i> Guillermo S. Fuentes-Jaque'; // aquí añadimos el icono de LinkedIn
    pLinkedIn.appendChild(aLinkedIn);
    // Añadir el párrafo al contenedor de contacto
    contactContainer.appendChild(pLinkedIn);

    // Crear el párrafo para el instagram
    let pInsta = document.createElement('p');
    let aInsta = document.createElement('a');
    aInsta.setAttribute('target', '_blank');
    aInsta.setAttribute('href', `${contactDetails.instagram}`); // enlace a WhatsApp
    aInsta.innerHTML = '<i class="fa-brands fa-square-instagram fa-fade"></i> @guillermo.fuentes.j'; // aquí añadimos el icono de teléfono
    pInsta.appendChild(aInsta);
    // Añadir el párrafo al contenedor de contacto
    contactContainer.appendChild(pInsta);

    // Añadir el contenedor de contacto al pie de página
    footer.appendChild(contactContainer);

    contactContainer.insertAdjacentHTML('afterend', '<br><p>&copy; Guillermo S. Fuentes-Jaque, 2023. Todos los derechos reservados. <a href="docs/CV_GSFJ_rev_2022-06-30_ESP.pdf" download>Descargar en PDF</a></p>');
};
