const greetings = [
    { text: "こんにちは,", language: "Japanese" },
    { text: "你好,", language: "Chinese" },
    { text: "Hello,", language: "English" },
    { text: "Halo,", language: "Indonesian" },
    { text: "Bonjour,", language: "French" },
    { text: "Hola,", language: "Spanish" },
    { text: "안녕하세요,", language: "Korean" },
    { text: "Привет,", language: "Russian" },
    { text: "नमस्ते,", language: "Hindi" },
    { text: "Ciao,", language: "Italian" }
];

const greetingElement = document.getElementById('multilingual-greeting');
let currentGreetingIndex = 0;

function changeGreeting() {
    currentGreetingIndex = (currentGreetingIndex + 1) % greetings.length;
    greetingElement.textContent = greetings[currentGreetingIndex].text;
    greetingElement.style.opacity = 1;
    setTimeout(() => {
        greetingElement.style.opacity = 1;
    }, 300);
}

setInterval(changeGreeting, 2000);

const themeToggle = document.querySelector('.toggle-theme');
const themeIcon = themeToggle.querySelector('i');
let isDarkTheme = true;

themeToggle.addEventListener('click', () => {
    if (isDarkTheme) {
        // Switch to light mode
        document.body.style.backgroundColor = '#f5f5f5';
        document.body.style.color = '#333';
        
        // Update links and icons colors
        document.querySelectorAll('.logo, .social-icons a, .toggle-theme').forEach(el => {
            el.style.color = '#333';
        });
        
        document.querySelectorAll('nav ul li a').forEach(a => {
            a.style.color = '#4169e1';
        });
        
        // Update project cards for light mode
        document.querySelectorAll('.project-card').forEach(card => {
            card.style.background = 'rgba(0, 0, 0, 0.05)';
            card.style.borderColor = 'rgba(0, 0, 0, 0.1)';
        });
        
        // Update project text colors
        document.querySelectorAll('.project-title').forEach(title => {
            title.style.color = '#333';
        });
        
        document.querySelectorAll('.project-description').forEach(desc => {
            desc.style.color = '#666';
        });
        
        document.querySelectorAll('.section-subtitle').forEach(subtitle => {
            subtitle.style.color = '#666';
        });
        
        // Change moon icon to sun icon
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        
    } else {
        // Switch to dark mode
        document.body.style.backgroundColor = '#111';
        document.body.style.color = '#fff';
        
        // Reset colors
        document.querySelectorAll('.logo, .social-icons a, .toggle-theme').forEach(el => {
            el.style.color = '#fff';
        });
        
        document.querySelectorAll('nav ul li a').forEach(a => {
            a.style.color = '#6b87c9';
        });
        
        // Reset project cards for dark mode
        document.querySelectorAll('.project-card').forEach(card => {
            card.style.background = 'rgba(255, 255, 255, 0.05)';
            card.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        });
        
        // Reset project text colors
        document.querySelectorAll('.project-title').forEach(title => {
            title.style.color = '#fff';
        });
        
        document.querySelectorAll('.project-description').forEach(desc => {
            desc.style.color = '#ccc';
        });
        
        document.querySelectorAll('.section-subtitle').forEach(subtitle => {
            subtitle.style.color = '#ccc';
        });
        
        // Change sun icon to moon icon
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
    
    isDarkTheme = !isDarkTheme;
});