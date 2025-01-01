const themeToggle = document.getElementById('theme-toggle');

// Dark mode styles
const darkModeStyles = `
  body.dark-mode {
    background-color: #1a1a1a;
    color: #fff;
  }
  
  body.dark-mode .header {
    background: #2d2d2d;
  }
  
  body.dark-mode .hero {
    background: linear-gradient(to right, #2d2d2d, #404040);
  }
  
  body.dark-mode .about,
  body.dark-mode .portfolio-item,
  body.dark-mode .testimonial-item {
    background: #2d2d2d;
    color: #fff;
  }
  
  body.dark-mode .skill-item,
  body.dark-mode .contact-form input,
  body.dark-mode .contact-form textarea {
    background: #404040;
    color: #fff;
  }
`;

// Document style
const styleSheet = document.createElement('style');
styleSheet.textContent = darkModeStyles;
document.head.appendChild(styleSheet);

// Toggle dark mode
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    
    // Save preference
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Check for saved preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
} else {
    document.body.classList.add('light-mode');
}
