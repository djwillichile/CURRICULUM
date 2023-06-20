window.onload = function() {
    const navLinks = ['About', 'Skills', 'Education', 'Experience', 'Projects', 'Contact'];

    const introduction = {
        name: 'Guillermo Servando Fuentes Jaque',
        profession: 'Geomática, teledetección, estadística, programación',
        description: 'Apasionado por la enseñanza y la aplicación de tecnologías avanzadas en gestión territorial, destacándome en análisis espacial, programación, ciencia de datos y modelado ambiental. Amo el ciclismo y el aprendizaje constante.'
    };

    const aboutDetails = 'Soy Guillermo Fuentes, un Ingeniero en Recursos Naturales graduado de la Universidad de Chile con un gran interés en las ciencias ambientales y los recursos naturales. Tengo amplia experiencia en Estadística aplicada, Sistemas de Información Geográfica (GIS), teledetección, modelamiento ambiental y docencia. Además, cuento con un Magíster en Gestión Territorial de Recursos Naturales de la misma universidad.<br>He tenido la oportunidad de participar en proyectos de investigación con instituciones y empresas públicas como municipalidades, la Empresa Nacional del Petróleo y el Servicio Agrícola y Ganadero, así como también con universidades chilenas como la Universidad de Talca y la Universidad de Santiago. Como docente, he impartido clases en física aplicada, estadística, sistemas ambientales, teledetección, GIS y eficiencia energética.<br>Mis habilidades incluyen solidaridad, empatía, iniciativa, trabajo en equipo y pasión por la enseñanza, lo que me permite colaborar con mis colegas en equipo y desarrollar soluciones creativas y efectivas en el campo de la gestión de recursos naturales. Además, mis conocimientos avanzados en programación, estadística y software GIS, así como en manejo de sistemas operativos y software de análisis y simulación dinámica, me permiten aplicar tecnología innovadora para el análisis y gestión de datos geográficos.<br>Cuento con una larga trayectoria en proyectos de investigación tanto dentro como fuera de la Universidad de Chile lo que me ha permitido presentar en diversos congresos y publicar en prestigiosas revistas científicas. Si estás buscando a alguien con una sólida formación en ciencias y experiencia en el uso de herramientas tecnológicas para la gestión de recursos naturales, estaré encantado de hablar contigo.';
    const paragraphs = aboutDetails.split('<br>').map(paragraph => `<p>${paragraph}</p>`).join('');

    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

    const educationDetails = [
        {
            degree: 'Magíster en Gestión Territorial de Recursos Naturales',
            institution: 'Facultad de Ciencias Agronómicas, Universidad de Chile',
            year: '2022',
        },
        {
            degree: 'Ingeniería en Recursos Naturales Renovables',
            institution: 'Facultad de Ciencias Agronómicas, Universidad de Chile',
            year: '2022',
        },
        {
            degree: 'Licenciatura en ciencias de los Recursos Naturales Renovables',
            institution: 'Facultad de Ciencias Agronómicas, Universidad de Chile',
            year: '2018',
        },
    ];

    const experienceDetails = [
        {
            jobTitle: 'Investigador',
            company: 'Universidad de Talca',
            year: '2022',
            description: 'Proyecto ANID FSEQ210004 para mejorar la gestión de los recursos hídricos en la agricultura bajo condiciones de sequía y cambio climático'
        },
        {
            jobTitle: 'Profesor colaborador',
            company: 'Universidad Mayor',
            year: '2020',
            description: 'Cursos Procesamiento y Aplicaciones de Datos Termales, Magíster en Teledetección, Facultad de Ciencias'
        },
        {
            jobTitle: 'Investigador',
            company: 'Universidad de Chile',
            year: '2019 - 2020',
            description: 'Proyecto CORFO 16PTECFS66647-5 Aspectos sanitarios de sostenibilidad y uso eficiente de recursos en nogal en la zona centro-sur de Chile'
        },
        {
            jobTitle: 'Profesor colaborador',
            company: 'Universidad de Chile, Región Metropolitana',
            year: '2019 - 2022',
            description: 'Cursos Fundamentos de sistemas de Información Geográfica (2019-2021) y Fundamentos de Teledetección (2020-2022), Facultad de Ciencias Agronómicas'
        },
        {
            jobTitle: 'Investigador',
            company: 'Universidad de Talca',
            year: '2018 - 2019',
            description: 'Proyecto FIA PYT-2017-0877 Mapa dinámico a escala diaria de la Evapotranspiración de Referencia (ETo) para determinar las necesidades de riego en Chile'
        },
        {
            jobTitle: 'Apoyo técnico',
            company: 'Empresa Nacional del Petróleo (ENAP)',
            year: '2017 - 2018',
            description: 'Iniciativa Microred de Vigilancia Ciudadana para el Mapeo de la Calidad del Aire'
        },
        {
            jobTitle: 'Profesional de apoyo',
            company: 'Instituto de Investigaciones Agropecuarias INIA',
            year: '2016 - 2017',
            description: 'Proyecto FIC Regional 30170072-0 Plataforma de zonificación agrometeorológica para aptitud de cultivos y gestión de riego en Arica y Parinacota'
        }
    ];


    const projectsDetails = [
        {
            title: 'Mis proyectos en github',
            description: 'Estos son algunos de los proyectos que he desarrollayo y dispuesto en github',
            link: 'https://github.com/djwillichile'
        },
        {
            title: 'Modulo 3 de clases',
            description: 'Este módulo corresponde a una clase de Aplicación de estructuras en programación que desarrollo en cursos de pre y postgrados',
            link: 'https://djwillichile.github.io/MODULO_03/'
        },
        {
            title: 'Modulo 6 de clases',
            description: 'Este módulo corresponde a una clase de Manipulación de información espacial que desarrollo en cursos de pre y postgrados',
            link: 'https://djwillichile.github.io/MODULO_06/'
        },
        {
            title: 'Clasificación de zonas homogeneas',
            description: 'Página que describe el El análisis de conglomerados para el curso de Estadistica Aplicada a los Recursos Naturales II',
            link: 'https://djwillichile.github.io/EARN2/'
        }
    ]; 



    const contactDetails = {
        email: 'g.fuentes@renare.uchile.cl',
        phone: '+56986876932',
        linkedIn: 'https://www.linkedin.com/in/guillermo-fuentes-jaque'
    };

    const navigation = document.getElementById('navigation');
    navLinks.forEach((link) => {
        navigation.innerHTML += `<li><a href="#${link.toLowerCase()}">${link}</a></li>`;
    });

    document.getElementById('introduction').innerHTML += `<h1>${introduction.name}</h1><h2>${introduction.profession}</h2><p>${introduction.description}</p>`;

    document.getElementById('about').innerHTML += `<h2>Acerca de mí</h2>${paragraphs}`;

    const skillsSection = document.getElementById('skills');
    skillsSection.innerHTML += '<h2>Habilidades</h2>';
    skills.forEach((skill) => {
        skillsSection.innerHTML += `<p>${skill}</p>`;
    });

    const educationSection = document.getElementById('education');
    educationSection.innerHTML += '<h2>Educación</h2>';
    educationDetails.forEach((detail) => {
        educationSection.innerHTML += `<h3>${detail.degree}</h3><p>${detail.institution}, ${detail.year}</p>`;
    });

    const experienceSection = document.getElementById('experience');
    experienceSection.innerHTML += '<h2>Experiencia</h2>';
    experienceDetails.forEach((detail) => {
        experienceSection.innerHTML += `<h3>${detail.jobTitle}</h3><p>${detail.description}, ${detail.company}, ${detail.year}</p>`;
    });

    const projectsSection = document.getElementById('projects');
    projectsSection.innerHTML += '<h2>Proyectos</h2>';
    projectsDetails.forEach((project) => {
        projectsSection.innerHTML += `<h3>${project.title}</h3><p>${project.description}</p><p><a href="${project.link}">Ver proyecto</a></p>`;
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
    a.innerHTML = '<i class="fas fa-envelope"></i> ' + contactDetails.email; // aquí añadimos el icono de email
    p.appendChild(a);
    // Añadir el párrafo al contenedor de contacto
    contactContainer.appendChild(p);

    // Crear el párrafo para el teléfono
    let pPhone = document.createElement('p');
    let aPhone = document.createElement('a');
    aPhone.setAttribute('href', `https://wa.me/${contactDetails.phone}`); // enlace a WhatsApp
    aPhone.innerHTML = '<i class="fas fa-phone"></i> ' + contactDetails.phone; // aquí añadimos el icono de teléfono
    pPhone.appendChild(aPhone);
    // Añadir el párrafo al contenedor de contacto
    contactContainer.appendChild(pPhone);

    // Crear el párrafo y el enlace para LinkedIn
    let pLinkedIn = document.createElement('p');
    let aLinkedIn = document.createElement('a');
    aLinkedIn.setAttribute('href', contactDetails.linkedIn);
    aLinkedIn.innerHTML = '<i class="fab fa-linkedin"></i> Guillermo S. Fuentes-Jaque'; // aquí añadimos el icono de LinkedIn
    pLinkedIn.appendChild(aLinkedIn);
    // Añadir el párrafo al contenedor de contacto
    contactContainer.appendChild(pLinkedIn);

    // Añadir el contenedor de contacto al pie de página
    footer.appendChild(contactContainer);

};