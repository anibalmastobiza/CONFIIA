// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Language management
let currentLang = localStorage.getItem('language') || 'es';

// Translations object
const translations = {
    es: {
        // Navigation
        'nav.home': 'Inicio',
        'nav.about': 'Sobre el Proyecto',
        'nav.whoWeAre': 'Quiénes somos',
        'nav.team': 'Equipo',
        'nav.objectives': 'Objetivos',
        'nav.methodology': 'Metodología',
        'nav.outputs': 'Resultados',
        'nav.contact': 'Contacto',
        
        // Hero Section
        'hero.title': 'CONFIIA',
        'hero.subtitle': 'Confianza y Nuevas Formas de Integración de la Inteligencia Artificial',
        'hero.description': 'Marco metodológico para superar barreras no-tecnológicas en la adopción de la IA médica',
        'hero.btnMore': 'Conocer más',
        'hero.btnContact': 'Contacto',
        
        // About Section
        'about.title': 'Sobre el Proyecto',
        'about.what': '¿Qué es CONFIIA?',
        'about.description1': 'CONFIIA es un proyecto de investigación financiado por el Ministerio de Ciencia, Innovación y Universidades, Agencia Estatal de Investigación, Gobierno de España y co-financiado por el Fondo Social Europeo Plus que busca desarrollar un marco metodológico integral para identificar y superar las barreras no tecnológicas en la adopción de la inteligencia artificial en el ámbito médico.',
        'about.description2': 'El proyecto se centra especialmente en las dinámicas de confianza entre profesionales sanitarios, pacientes y sistemas de IA, con especial atención a la integración y evaluación de Grandes Modelos de Lenguaje (GML) e IA generativa en medicina.',
        'about.duration': 'Duración',
        'about.durationText': 'Septiembre 2025 - Agosto 2028',
        'about.institutions': 'Instituciones',
        'about.institutionsText': 'Universidad de Granada, Universidad Pontificia Comillas, CSIC, Universidad de Chile, University of Southampton, Universidad Europea Madrid, Instituto de Ética Clínica Francisco Vallés, Escuela Nacional de Salud Pública (ENSP), Fundación Oswaldo Cruz (Fiocruz)',
        'about.area': 'Área temática',
        'about.areaText': 'Salud, IA, Filosofía, Ciencias Cognitivas',
        
        // Who We Are Section
        'whoWeAre.title': 'Quiénes somos',
        'whoWeAre.pi1Badge': 'IP1 · Investigador Principal',
        'whoWeAre.copiBadge': 'CoIP · Co-Investigador Principal',
        'whoWeAre.teamTitle': 'Equipo investigador',
        'whoWeAre.ramon.role': 'Profesor de Bioética y de Psicología de la salud en la Escuela de Enfermería y Fisioterapia San Juan de Dios, Universidad Pontificia Comillas',
        'whoWeAre.anibal.role': 'Profesor-Investigador EMERGIA, especializado en ciencias cognitivas y éticas aplicadas, Universidad de Granada',
        'whoWeAre.belen.role': 'Profesora de Bioética, Universidad Rey Juan Carlos',
        'whoWeAre.jose.role': 'Docente-Investigador en Ciencias de la Salud, Universidad Pontificia Comillas',
        'whoWeAre.marcos.role': 'Profesor de Bioética, Universidad Complutense de Madrid',
        'whoWeAre.mar.role': 'Estudiante de doctorado en Bioética, Universidad de Granada',
        'whoWeAre.natividad.role': 'Profesora Dpto. Historia y Filosofía de la Ciencia, la Educación y el Lenguaje, Universidad de La Laguna',
        'whoWeAre.patricia.role': 'Profesional tecnológica especializada en Inteligencia Artificial y Computación Cuántica, Universidad Nebrija',
        'whoWeAre.pedro.role': 'Innovación, diseño y fabricación digital en Ciencias de la Salud. Fundación San Juan de Dios - SOUL Hi Hub. Universidad Pontificia Comillas',
        'whoWeAre.rafael.role': 'Profesor Titular, University of Southampton',
        'whoWeAre.txetxu.role': 'Investigador Científico, Instituto de Filosofía, Grupo de Ética Aplicada, Centro de Ciencias Humanas y Sociales (CCHS - CSIC)',
        'whoWeAre.jon.role': 'Juan de la Cierva Fellow, Instituto de Filosofía, Consejo Superior de Investigaciones Científicas',
        'whoWeAre.oscar.role': 'Profesor de Medicina Legal, Universidad Europea Madrid',
        'whoWeAre.francisco.role': 'Doctor en medicina y cirugía. Bioeticista y presidente de la Sociedad Ecuatoriana de Bioética',
        'whoWeAre.franciscoII.role': 'Profesor de Filosofía política y de la tecnología, Universidad de Chile',
        'whoWeAre.benjamin.role': 'Director del Instituto de Ética Clínica Francisco Vallés',
        'whoWeAre.murilo.role': 'Investigador, Department of Drug Policy and Pharmaceutical Assistance (NAF), National School of Public Health (ENSP), Oswaldo Cruz Foundation (Fiocruz)',

        // Team Section
        'team.title': 'Equipo de Investigación',
        'team.pi': 'Investigador Principal (IP1)',
        'team.copi': 'Co-Investigador Principal (CoIP)',
        'team.researchers': 'Equipo de Investigación',
        
        // Objectives Section
        'objectives.title': 'Objetivos',
        'objectives.general': 'Objetivo General',
        'objectives.generalText': 'Desarrollar y validar un marco metodológico integral que permita identificar y superar las barreras no tecnológicas en la adopción de la IA médica, centrándose en las dinámicas de confianza entre desarrolladores/as, profesionales sanitarios, pacientes y sistemas de IA.',
        'objectives.1.title': 'Marco Teórico',
        'objectives.1.text': 'Elaborar un marco teórico sobre los elementos de confianza en el desarrollo y uso de aplicaciones de IA en el ámbito sanitario.',
        'objectives.2.title': 'Cuantificación',
        'objectives.2.text': 'Cuantificar los niveles de confianza actual hacia las aplicaciones IA en salud en profesionales y pacientes.',
        'objectives.3.title': 'Análisis UMAP',
        'objectives.3.text': 'Identificar patrones y clusters de confianza mediante análisis topológico UMAP.',
        
        // Methodology Section
        'methodology.title': 'Metodología',
        'methodology.pt1.title': 'Fundamentación Teórica',
        'methodology.pt1.text': 'Desarrollo del marco metodológico/conceptual (Meses 1-6)',
        'methodology.pt2.title': 'Análisis Empírico',
        'methodology.pt2.text': 'Impacto de la IA Generativa en Medicina (Meses 6-15)',
        'methodology.pt3.title': 'Mapeo UMAP',
        'methodology.pt3.text': 'Análisis de Confianza mediante UMAP (Meses 12-21)',
        'methodology.pt4.title': 'Intervenciones',
        'methodology.pt4.text': 'Diseño y Pilotaje de Intervenciones Personalizadas (Meses 18-27)',
        'methodology.pt5.title': 'Implementación',
        'methodology.pt5.text': 'Análisis y Diseminación de Resultados (Meses 24-36)',
        
        // Outputs Section
        'outputs.title': 'Resultados Esperados',
        'outputs.1.title': 'Marco Conceptual',
        'outputs.1.text': 'Desarrollo de un marco teórico integral sobre confianza en IA médica',
        'outputs.2.title': 'Atlas Empírico',
        'outputs.2.text': 'Mapeo visual de patrones de confianza mediante análisis UMAP',
        'outputs.3.title': 'Toolkit de Implementación',
        'outputs.3.text': 'Herramientas prácticas para la adopción de IA en entornos sanitarios',
        'outputs.4.title': 'Guía Práctica CONFIIA',
        'outputs.4.text': 'Manual completo de mejores prácticas y recomendaciones',
        
        // Contact Section
        'contact.title': 'Contacto',
        'contact.interested': '¿Interesado en colaborar o conocer más sobre CONFIIA?',
        'footer.rights': 'Todos los derechos reservados.'
    },
    
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About the Project',
        'nav.whoWeAre': 'About Us',
        'nav.team': 'Team',
        'nav.objectives': 'Objectives',
        'nav.methodology': 'Methodology',
        'nav.outputs': 'Results',
        'nav.contact': 'Contact',
        
        // Hero Section
        'hero.title': 'CONFIIA',
        'hero.subtitle': 'Trust and New Ways of Integrating Artificial Intelligence',
        'hero.description': 'Methodological framework for overcoming non-technological barriers to the adoption of AI in medicine',
        'hero.btnMore': 'Learn more',
        'hero.btnContact': 'Contact',
        
        // About Section
        'about.title': 'About the Project',
        'about.what': 'What is CONFIIA?',
        'about.description1': 'CONFIIA is a research project funded by the Ministry of Science, Innovation and Universities, State Research Agency, Government of Spain and co-funded by the European Social Fund Plus that seeks to develop a comprehensive methodological framework to identify and overcome non-technological barriers in the adoption of artificial intelligence in the medical field.',
        'about.description2': 'The project focuses especially on the dynamics of trust between healthcare professionals, patients and AI systems, with special attention to the integration and evaluation of Large Language Models (LLMs) and generative AI in medicine.',
        'about.duration': 'Duration',
        'about.durationText': 'September 2025 - August 2028',
        'about.institutions': 'Institutions',
        'about.institutionsText': 'University of Granada, Comillas Pontifical University, CSIC, University of Chile, University of Southampton, Universidad Europea Madrid, Francisco Vallés Institute of Clinical Ethics, National School of Public Health (ENSP), Oswaldo Cruz Foundation (Fiocruz)',
        'about.area': 'Thematic area',
        'about.areaText': 'Health, AI, Philosophy, Cognitive Sciences',
        
        // Who We Are Section
        'whoWeAre.title': 'About Us',
        'whoWeAre.pi1Badge': 'PI1 · Principal Investigator',
        'whoWeAre.copiBadge': 'Co-PI · Co-Principal Investigator',
        'whoWeAre.teamTitle': 'Research team',
        'whoWeAre.ramon.role': 'Professor of Bioethics and Health Psychology at the School of Nursing and Physiotherapy San Juan de Dios, Comillas Pontifical University',
        'whoWeAre.anibal.role': 'EMERGIA Research Professor, specialised in cognitive and applied ethics sciences, University of Granada',
        'whoWeAre.belen.role': 'Professor of Bioethics, Rey Juan Carlos University',
        'whoWeAre.jose.role': 'Teaching-Researcher in Health Sciences, Comillas Pontifical University',
        'whoWeAre.marcos.role': 'Professor of Bioethics, Complutense University of Madrid',
        'whoWeAre.mar.role': 'PhD student in Bioethics, University of Granada',
        'whoWeAre.natividad.role': 'Professor, Dept. of History and Philosophy of Science, Education and Language, University of La Laguna',
        'whoWeAre.patricia.role': 'Technology professional specialised in Artificial Intelligence and Quantum Computing, Nebrija University',
        'whoWeAre.pedro.role': 'Innovation, design and digital manufacturing in Health Sciences. San Juan de Dios Foundation - SOUL Hi Hub. Comillas Pontifical University',
        'whoWeAre.rafael.role': 'Senior Lecturer, University of Southampton',
        'whoWeAre.txetxu.role': 'Research Scientist, Institute of Philosophy, Applied Ethics Group, Centre for Human and Social Sciences (CCHS - CSIC)',
        'whoWeAre.jon.role': 'Juan de la Cierva Fellow, Institute of Philosophy, Spanish National Research Council',
        'whoWeAre.oscar.role': 'Professor of Legal Medicine, Universidad Europea Madrid',
        'whoWeAre.francisco.role': 'Doctor of Medicine and Surgery. Bioethicist and President of the Ecuadorian Society of Bioethics',
        'whoWeAre.franciscoII.role': 'Professor of Political Philosophy and Philosophy of Technology, University of Chile',
        'whoWeAre.benjamin.role': 'Director of the Francisco Vallés Institute of Clinical Ethics',
        'whoWeAre.murilo.role': 'Researcher, Department of Drug Policy and Pharmaceutical Assistance (NAF), National School of Public Health (ENSP), Oswaldo Cruz Foundation (Fiocruz)',

        // Team Section
        'team.title': 'Research Team',
        'team.pi': 'Principal Investigator (PI1)',
        'team.copi': 'Co-Principal Investigator (Co-PI)',
        'team.researchers': 'Research Team',
        
        // Objectives Section
        'objectives.title': 'Objectives',
        'objectives.general': 'General Objective',
        'objectives.generalText': 'To develop and validate a comprehensive methodological framework to identify and overcome non-technological barriers in the adoption of medical AI, focusing on the dynamics of trust between developers, healthcare professionals, patients and AI systems.',
        'objectives.1.title': 'Theoretical Framework',
        'objectives.1.text': 'Develop a theoretical framework on trust elements in the development and use of AI applications in healthcare.',
        'objectives.2.title': 'Quantification',
        'objectives.2.text': 'Quantify current levels of trust towards health AI applications among professionals and patients.',
        'objectives.3.title': 'UMAP Analysis',
        'objectives.3.text': 'Identify trust patterns and clusters through UMAP topological analysis.',
        
        // Methodology Section
        'methodology.title': 'Methodology',
        'methodology.pt1.title': 'Theoretical Foundation',
        'methodology.pt1.text': 'Development of methodological/conceptual framework (Months 1-6)',
        'methodology.pt2.title': 'Empirical Analysis',
        'methodology.pt2.text': 'Impact of Generative AI in Medicine (Months 6-15)',
        'methodology.pt3.title': 'UMAP Mapping',
        'methodology.pt3.text': 'Trust Analysis using UMAP (Months 12-21)',
        'methodology.pt4.title': 'Interventions',
        'methodology.pt4.text': 'Design and Pilot of Personalized Interventions (Months 18-27)',
        'methodology.pt5.title': 'Implementation',
        'methodology.pt5.text': 'Analysis and Dissemination of Results (Months 24-36)',
        
        // Outputs Section
        'outputs.title': 'Expected Results',
        'outputs.1.title': 'Conceptual Framework',
        'outputs.1.text': 'Development of a comprehensive theoretical framework on trust in medical AI',
        'outputs.2.title': 'Empirical Atlas',
        'outputs.2.text': 'Visual mapping of trust patterns through UMAP analysis',
        'outputs.3.title': 'Implementation Toolkit',
        'outputs.3.text': 'Practical tools for AI adoption in healthcare settings',
        'outputs.4.title': 'CONFIIA Practical Guide',
        'outputs.4.text': 'Complete manual of best practices and recommendations',
        
        // Contact Section
        'contact.title': 'Contact',
        'contact.interested': 'Interested in collaborating or learning more about CONFIIA?',
        'footer.rights': 'All rights reserved.'
    }
};

// Function to translate the page
function translatePage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update language button
    const langButton = document.querySelector('.lang-btn');
    if (langButton) {
        langButton.textContent = lang === 'es' ? 'EN' : 'ES';
    }
    
    // Save language preference
    localStorage.setItem('language', lang);
    currentLang = lang;
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Toggle language function
function toggleLanguage() {
    const newLang = currentLang === 'es' ? 'en' : 'es';
    translatePage(newLang);
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    translatePage(currentLang);
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active nav link highlighting
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});
