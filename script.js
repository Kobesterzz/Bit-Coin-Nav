document.querySelectorAll('.sidebar-item a').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = item.getAttribute('href').substring(1); // Remove the '#' symbol
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 750, // Adjust for header height
                behavior: 'smooth',
            });
        }
    });
});
