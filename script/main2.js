document.addEventListener('DOMContentLoaded', () => {
  initLoadingUI();
  loadExternalScripts().then(setupPageInteractions);
});

function initLoadingUI() {
  const loadingDiv = document.createElement('div');
  loadingDiv.id = 'loading';
  const spinner = document.createElement('div');
  spinner.className = 'spinner';
  loadingDiv.appendChild(spinner);
  document.body.appendChild(loadingDiv);
}

async function loadExternalScripts() {
  const scripts = ['about.js', 'education.js', 'skills.js', 'experience.js', 'projects.js', 'publications.js'];
  const mainScriptTag = document.querySelector('script[src="script/main.js"]');

  for (const src of scripts) {
    await loadScript(`script/${src}`, mainScriptTag);
  }
}

function loadScript(url, referenceNode) {
  return new Promise((resolve, reject) => {
    const scriptTag = document.createElement('script');
    scriptTag.src = url;
    scriptTag.onload = resolve;
    scriptTag.onerror = reject;
    referenceNode.parentNode.insertBefore(scriptTag, referenceNode.nextSibling);
    referenceNode = scriptTag;
  });
}

function setupPageInteractions() {
  removeLoadingScreen();
  setupScrollButton();
  setupNavigation();
  setupExperienceToggle();
  setupCoursesToggle();
  // Add additional interactions here
}

function removeLoadingScreen() {
  setTimeout(() => {
    document.body.removeChild(document.getElementById('loading'));
  }, 400);
}

function setupScrollButton() {
  const toTopBtn = document.createElement("button");
  toTopBtn.id = "toTopBtn";
  toTopBtn.title = "Go to top";
  toTopBtn.style.display = "none"; // Initially hide the button
  const icon = document.createElement("i");
  icon.classList.add("fa-solid", "fa-angles-up");
  toTopBtn.appendChild(icon);
  document.body.appendChild(toTopBtn);

  window.onscroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      toTopBtn.style.display = "block";
    } else {
      toTopBtn.style.display = "none";
    }
  };

  toTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
}

function setupNavigation() {
  const navLinks = ['About', 'Experience', 'Education', 'Skills', 'Projects', 'Publications', 'Contact'];
  const navLinksEsp = ['Sobre mí', 'Experiencia', 'Formación', 'Habilidades', 'Proyectos', 'Artículos', 'Contacto'];
  const navigation = document.getElementById('navigation');
  navLinks.forEach((link, index) => {
    navigation.innerHTML += `<li><a href="#${link.toLowerCase()}">${navLinksEsp[index]}</a></li>`;
  });
}

function setupExperienceToggle() {
  const toggleExperienceBtn = document.getElementById('toggleExperience');
  toggleExperienceBtn.addEventListener('click', (event) => {
    event.preventDefault();
    toggleExperience();
  });
}

function toggleExperience() {
  const experienceSection = document.getElementById('experience');
  const isShowingFull = experienceSection.classList.contains('full');

  experienceSection.innerHTML = ''; // Clear existing content
  if (isShowingFull) {
    addExperienceDetails(experienceDetails);
  } else {
    addExperienceDetails(fullExperienceDetails);
  }
  experienceSection.classList.toggle('full');
}

function setupCoursesToggle() {
  const showCoursesLink = document.getElementById('showCourses');
  showCoursesLink.addEventListener('click', function(e) {
    e.preventDefault();
    toggleCourses();
  });
}

function toggleCourses() {
  const coursesContainer = document.getElementById('coursesContainer');
  const showCoursesLink = document.getElementById('showCourses');

  if (showCoursesLink.textContent === "Mostrar cursos") {
    showCoursesLink.textContent = "Contraer cursos";
    courses.forEach(course => {
      coursesContainer.innerHTML += `<h3>${course.nombre}</h3><p>${course.organizacion}, ${course.ubicacion}, ${course.año}</p>`;
    });
  } else {
    showCoursesLink.textContent = "Mostrar cursos";
    coursesContainer.innerHTML = ''; // Clear courses
  }
}
