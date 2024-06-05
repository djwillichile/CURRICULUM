document.addEventListener('DOMContentLoaded', initPage);

function initPage() {
  createLoadingSpinner();
  loadScriptsSequentially([
    'about.js', 'education.js', 'skills.js', 'experience.js', 'projects.js', 'publications.js'
  ], 'script/main.js');
}

function createLoadingSpinner() {
  const spinner = createElement('div', {class: 'spinner'});
  const loadingDiv = createElement('div', {id: 'loading'}, spinner);
  document.body.appendChild(loadingDiv);
}

function createElement(tag, attributes, ...children) {
  const element = document.createElement(tag);
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
  children.forEach(child => {
    if (typeof child === 'string') {
      element.appendChild(document.createTextNode(child));
    } else {
      element.appendChild(child);
    }
  });
  return element;
}

function loadScriptsSequentially(scripts, referenceSrc) {
  const referenceScript = document.querySelector(`script[src="${referenceSrc}"]`);
  scripts.reduce((prevPromise, src) => {
    return prevPromise.then(() => {
      return loadScript(`script/${src}`, referenceScript);
    });
  }, Promise.resolve());
}

function loadScript(src, referenceNode) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = () => reject(new Error(`Script load error for ${src}`));
    referenceNode.parentNode.insertBefore(script, referenceNode.nextSibling);
    referenceNode = script;
  });
}

function removeLoadingDiv() {
    setTimeout(() => {
        const loadingDiv = document.getElementById('loading');
        if (loadingDiv) {
            document.body.removeChild(loadingDiv);
        }
    }, 400);
}

function setupPageElements() {
    setupNavigationLinks();
    setupBackToTopButton();
    setupFooter();
}

function setupNavigationLinks() {
    const navLinks = ['About', 'Experience', 'Education', 'Skills', 'Projects', 'Publications', 'Contact'];
    const navLinksEsp = ['Sobre mí', 'Experiencia', 'Formación', 'Habilidades', 'Proyectos', 'Artículos', 'Contacto'];
    const navigation = document.getElementById('navigation');

    navLinks.forEach((link, index) => {
        const listItem = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.href = `#${link.toLowerCase()}`;
        anchor.textContent = navLinksEsp[index];
        listItem.appendChild(anchor);
        navigation.appendChild(listItem);
    });
}

function setupBackToTopButton() {
    const toTopBtn = document.createElement("button");
    toTopBtn.id = "toTopBtn";
    toTopBtn.title = "Go to top";
    toTopBtn.innerHTML = '<i class="fa-solid fa-angles-up"></i>';
    document.body.appendChild(toTopBtn);

    window.onscroll = () => {
        const shouldShowButton = document.body.scrollTop > 20 || document.documentElement.scrollTop > 20;
        toTopBtn.style.display = shouldShowButton ? "block" : "none";
    };


    toTopBtn.onclick = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
}

function setupFooter() {
    const footer = document.getElementById('footer');
    const contactDetails = getContactDetails();

    const contactInfo = document.createElement('div');
    contactInfo.id = 'contact';
    footer.appendChild(contactInfo);

    function createContactLink(detail) {
        const p = document.createElement('p');
        p.innerHTML = `<a href="${detail.link}" target="_blank"><i class="${detail.icon}"></i> ${detail.text}</a>`;
        return p;
    }

    Object.keys(contactDetails).forEach(key => {
        const contactLink = createContactLink(contactDetails[key]);
        contactInfo.appendChild(contactLink);
    });

    function addCopyrightElement(footerElement) {
        const copyright = document.createElement('p');
        const year = new Date().getFullYear(); // Opcionalmente puedes hacer que el año sea dinámico
        const linkText = 'Descargar en PDF';
        const filePath = 'docs/CV_GSFJ_rev_2022-06-30_ESP.pdf';

        // Uso de Template Literal para mejorar la legibilidad
        const htmlContent = `&copy; Guillermo S. Fuentes-Jaque, ${year}. Todos los derechos reservados.
                            <a href="${filePath}" download>${linkText}</a>`;
        
        copyright.innerHTML = htmlContent;
        footerElement.appendChild(copyright);
    }

    // Usando la función en el código principal
    addCopyrightElement(footer);
}

function getContactDetails() {
    return {
        email: {
            link: 'mailto:g.fuentes@renare.uchile.cl',
            text: 'g.fuentes@renare.uchile.cl',
            icon: 'fas fa-envelope fa-fade'
        },
        phone: {
            link: 'https://wa.me/56986876932',
            text: '+56986876932',
            icon: 'fas fa-phone fa-fade'
        },
        linkedIn: {
            link: 'https://www.linkedin.com/in/guillermo-fuentes-jaque',
            text: 'Guillermo S. Fuentes-Jaque',
            icon: 'fab fa-linkedin fa-fade'
        },
        instagram: {
            link: 'https://www.instagram.com/guillermo.fuentes.j',
            text: '@guillermo.fuentes.j',
            icon: 'fa-brands fa-square-instagram fa-fade'
        }
    };
}

window.onload = function() {
    removeLoadingDiv();
    setupPageElements();


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

    
};