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
    populateContent();
    setupFooter();
    setupCoursesToggle();
}

function setupNavigationLinks() {
    const navLinks = [
        'About', 'Experience', 'Education', 
        'Skills', 'Projects', 'Publications', 'Contact'
    ];
    const navLinksEsp = [
        'Sobre mí', 'Experiencia', 'Formación', 
        'Habilidades', 'Proyectos', 'Artículos', 'Contacto'
    ];
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
        const shouldShowButton = document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20;
        toTopBtn.style.display = shouldShowButton ? "block" : "none";
    };

    toTopBtn.onclick = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
}

function populateContent() {
    populateIntroduction();
    populateAbout();
    populateSkills();
    populateEducation();
    populateProjects();
    populatePublications();
    populateExperience();
}

function setupFooter() {
    const footer = document.getElementById('footer');
    const contactDetails = getContactDetails();

    const contactInfo = document.createElement('div');
    contactInfo.id = 'contact';
    footer.appendChild(contactInfo);

    function createContactLink(detail) {
        const { link, icon, text } = detail;
        const p = document.createElement('p');
        const anchorHtml = `
            <a href="${link}" target="_blank">
                <i class="${icon}"></i> ${text}
            </a>
        `;
        p.innerHTML = anchorHtml;
        return p;
    }

    Object.keys(contactDetails).forEach(key => {
        const contactLink = createContactLink(contactDetails[key]);
        contactInfo.appendChild(contactLink);
    });

    function addCopyrightElement(footerElement) {
        const copyright = document.createElement('p');
        const year = new Date().getFullYear(); // Opcional, año dinámico
        const linkText = 'Descargar en PDF';
        const filePath = 'docs/CV_GSFJ_rev_2022-06-30_ESP.pdf';


        const htmlContent = `
            &copy; Guillermo S. Fuentes-Jaque, ${year}.Todos los derechos reservados.
            <a href="${filePath}" download>${linkText}</a>
        `;
        
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

function populateIntroduction() {
    const introductionSection = document.getElementById('introduction');
    const paragraphs = aboutDetails.split('<br>').map(paragraph => `<p>${paragraph}</p>`).join('');
    introductionSection.innerHTML += `
        <h1>${introduction.name}</h1>
        <h2>${introduction.profession}</h2>
        <p>${introduction.description}</p>
    `;
}

function populateAbout() {
    const aboutSection = document.getElementById('about');
    const paragraphs = aboutDetails.split('<br>').map(paragraph => `<p>${paragraph}</p>`).join('');
    aboutSection.innerHTML = `<h2>Acerca de mí</h2>${paragraphs}`;
}

function populateSkills() {
    const skillsSection = document.getElementById('skills');
    skillsSection.innerHTML = `
        <h2>Habilidades y herramientas</h2>
        <p>${skillsIntroduction}</p>
    `;

    Object.entries(skills).forEach(([skill, rating]) => {
        let ratingPercentage = (rating / 6) * 100;
        const skillRow = document.createElement('div');
        skillRow.className = 'skill-row';
        skillRow.innerHTML = `
            <div class="skill-track">
                <div class="skill-bar" style="width: ${ratingPercentage}%"></div>
            </div>
            <span class="skill-name">${skill}</span>`;
        skillsSection.appendChild(skillRow);
    });
}

function populateEducation() {
    const educationSection = document.getElementById('education');
    educationSection.innerHTML = `
        <h2>
            Formación académica 
            <a id="showCourses" href="#" style="margin-left: 10px; font-size: 0.8em;">
                Mostrar cursos
            </a>
        </h2>
        <div id="coursesContainer"></div>
    `;

    educationDetails.forEach(detail => {
        educationSection.innerHTML += `
            <h3>${detail.degree}</h3>
            <p>${detail.institution}, ${detail.year}</p>
        `;
    });
}

function setupCoursesToggle() {
    const showCoursesLink = document.getElementById('showCourses');
    const coursesContainer = document.getElementById('coursesContainer');
    showCoursesLink.addEventListener('click', function(e) {
        e.preventDefault();
        toggleCourses(showCoursesLink, coursesContainer);
    });
}

function toggleCourses(link, container) {
    if (link.textContent === "Mostrar cursos") {
        link.textContent = "Contraer cursos";
        courses.forEach(course => {
            const h3 = document.createElement('h3');
            h3.textContent = course.nombre;
            
            const p = document.createElement('p');
            p.textContent = `${course.organizacion}, ${course.ubicacion}, ${course.año}`;

            // Añadir elementos al contenedor
            container.appendChild(h3);
            container.appendChild(p);
        });
    } else {
        link.textContent = "Mostrar cursos";
        container.innerHTML = '';
    }
}

function populateProjects() {
    const projectsSection = document.getElementById('projects');
    projectsSection.innerHTML += '<h2>Proyectos</h2>';
    projectsDetails.forEach(project => {
        const projectTitle = document.createElement('h3');
        projectTitle.textContent = project.title;

        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;

        const projectLink = document.createElement('a');
        projectLink.href = project.link;
        projectLink.textContent = 'Ver proyecto';
        projectLink.setAttribute('target', '_blank');

        projectsSection.appendChild(projectTitle);
        projectsSection.appendChild(projectDescription);
        projectsSection.appendChild(projectLink);
    });
}

function populatePublications() {
    const publicationsSection = document.getElementById('publications');
    publicationsSection.innerHTML += '<h2>Artículos publicados</h2>';
    publicationsDetails.forEach(publication => {
        const publicationTitle = document.createElement('h3');
        publicationTitle.textContent = `${publication.author} (${publication.year})`;

        const publicationDescription = document.createElement('p');
        const articleLink = document.createElement('a');
        articleLink.href = publication.link;
        articleLink.textContent = 'Artículo';
        articleLink.setAttribute('target', '_blank');

        publicationDescription.textContent = `${publication.title} `;
        publicationDescription.appendChild(articleLink);

        publicationsSection.appendChild(publicationTitle);
        publicationsSection.appendChild(publicationDescription);
    });
}

function populateExperience() {
    const experienceSection = document.getElementById('experience');
    setupExperienceToggle(experienceSection);
    populateExperienceDetails(experienceSection, experienceDetails);
}

function setupExperienceToggle(experienceSection) {
    let isShowingFullExperience = false;
    const header = document.createElement('h2');
    header.innerHTML = 'Experiencia destacada (resumen) ';

    const toggleExperienceLink = document.createElement('a');
    toggleExperienceLink.id = 'toggleExperience';
    toggleExperienceLink.href = '#';
    toggleExperienceLink.style.marginLeft = '10px';
    toggleExperienceLink.style.fontSize = '0.8em';
    toggleExperienceLink.textContent = 'Mostrar más experiencia';
    header.appendChild(toggleExperienceLink);
    experienceSection.appendChild(header);

    toggleExperienceLink.addEventListener('click', function(event) {
        event.preventDefault();
        toggleExperience(experienceSection, isShowingFullExperience);
        isShowingFullExperience = !isShowingFullExperience;
    });
}

function toggleExperience(experienceSection, isShowingFullExperience) {
    clearExperienceSection(experienceSection);
    const details = isShowingFullExperience ? fullExperienceDetails : experienceDetails;
    const toggleText = isShowingFullExperience
        ? 'Mostrar solo experiencia destacada'
        : 'Mostrar más experiencia';
    document.getElementById('toggleExperience').textContent = toggleText;
    populateExperienceDetails(experienceSection, details);
}

function clearExperienceSection(experienceSection) {
    // Remove all children except the header (which contains the toggle link)
    while (experienceSection.children.length > 1) {
        experienceSection.removeChild(experienceSection.lastChild);
    }
}

function populateExperienceDetails(experienceSection, details) {
    details.forEach(detail => {
        const h3 = document.createElement('h3');
        h3.textContent = `${detail.jobTitle} (${detail.year})`;
        const p = document.createElement('p');
        p.textContent = `${detail.description}, ${detail.company}`;
        experienceSection.appendChild(h3);
        experienceSection.appendChild(p);
    });
}

window.onload = function() {
    removeLoadingDiv();
    setupPageElements();
};