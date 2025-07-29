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
        'about.description1': 'CONFIIA es un proyecto de investigación financiado por el Ministerio de Ciencia, Innovación y Universidades de España que busca desarrollar un marco metodológico integral para identificar y superar las barreras no tecnológicas en la adopción de la inteligencia artificial en el ámbito médico.',
        'about.description2': 'El proyecto se centra especialmente en las dinámicas de confianza entre profesionales sanitarios, pacientes y sistemas de IA, con especial atención a la integración y evaluación de Grandes Modelos Lingüísticos (GMLs) e IA generativa en medicina.',
        'about.duration': 'Duración',
        'about.durationText': 'Septiembre 2025 - Agosto 2028',
        'about.institutions': 'Instituciones',
        'about.institutionsText': 'Universidad de Granada, Universidad Pontificia Comillas, CSIC',
        'about.area': 'Área temática',
        'about.areaText': 'Salud, IA, Filosofía, Ciencias Cognitivas',
        
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
        'about.description1': 'CONFIIA is a research project funded by the Spanish Ministry of Science, Innovation and Universities that seeks to develop a comprehensive methodological framework to identify and overcome non-technological barriers in the adoption of artificial intelligence in the medical field.',
        'about.description2': 'The project focuses especially on the dynamics of trust between healthcare professionals, patients and AI systems, with special attention to the integration and evaluation of Large Language Models (LLMs) and generative AI in medicine.',
        'about.duration': 'Duration',
        'about.durationText': 'September 2025 - August 2028',
        'about.institutions': 'Institutions',
        'about.institutionsText': 'University of Granada, Comillas Pontifical University, CSIC',
        'about.area': 'Thematic area',
        'about.areaText': 'Health, AI, Philosophy, Cognitive Sciences',
        
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
