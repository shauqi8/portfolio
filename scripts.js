// JavaScript for any interactivity or form handling can be added here
//document.addEventListener('DOMContentLoaded', function() {
    // Example: alert on contact button click
    //document.querySelector('.contact-btn').addEventListener('click', function() {
        //alert('Contact form coming soon!');
   // });
//});
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a, .contact-btn').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Toggleable dark/light mode
    const toggleModeBtn = document.createElement('button');
    toggleModeBtn.textContent = 'Toggle Dark/Light Mode';
    toggleModeBtn.style.position = 'fixed';
    toggleModeBtn.style.top = '10px';
    toggleModeBtn.style.right = '10px';
    document.body.appendChild(toggleModeBtn);

    toggleModeBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });

    // Modal contact form
    const contactBtn = document.querySelector('.contact-btn');
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <h2>Contact Me</h2>
            <form>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    `;
    document.body.appendChild(modal);

    const closeModal = () => modal.style.display = 'none';
    const showModal = () => modal.style.display = 'block';

    modal.querySelector('.close-btn').addEventListener('click', closeModal);
    window.addEventListener('click', function(event) {
        if (event.target === modal) closeModal();
    });

    contactBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showModal();
    });

    // Animations on scroll
    const scrollElements = document.querySelectorAll('.container');

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;

        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('scrolled');
    };

    const hideScrollElement = (element) => {
        element.classList.remove('scrolled');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
});
