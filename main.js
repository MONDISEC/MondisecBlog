document.addEventListener('DOMContentLoaded', function() {
    // --- Mobile Menu Toggle ---
    const toggleBtn = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.main-nav');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // --- Predictive Search (mock data) ---
    const searchInput = document.getElementById('searchInput');
    const resultsDropdown = document.getElementById('predictiveResults');

    if (searchInput && resultsDropdown) {
        // Sample blog post titles for prediction
        const posts = [
            "How to Design with Vibrant Colors",
            "10 Must‑Have Plugins for Your New Blog",
            "Mobile‑First Design: Why It Matters",
            "The Psychology of Pink",
            "Neon Typography Trends",
            "SEO for Creative Blogs",
            "Clean Code Practices",
            "Building a Blog with WordPress",
            "Color Theory for Web Designers",
            "Speed Optimization Techniques"
        ];

        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase().trim();
            if (query.length === 0) {
                resultsDropdown.classList.remove('active');
                return;
            }

            const matches = posts.filter(title => 
                title.toLowerCase().includes(query)
            ).slice(0, 5); // max 5 suggestions

            if (matches.length > 0) {
                resultsDropdown.innerHTML = matches.map(title => 
                    `<div class="predictive-item">${title}</div>`
                ).join('');
                resultsDropdown.classList.add('active');

                // Add click event to each suggestion
                document.querySelectorAll('.predictive-item').forEach(item => {
                    item.addEventListener('click', function() {
                        searchInput.value = this.textContent;
                        resultsDropdown.classList.remove('active');
                        // In a real site you would redirect to search results
                        alert(`Search for: ${this.textContent} (Demo)`);
                    });
                });
            } else {
                resultsDropdown.innerHTML = '<div class="predictive-item">No results found</div>';
                resultsDropdown.classList.add('active');
            }
        });

        // Hide dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !resultsDropdown.contains(e.target)) {
                resultsDropdown.classList.remove('active');
            }
        });
    }

    // --- Newsletter Form (demo prevention) ---
    const newsletterForms = document.querySelectorAll('#newsletterForm, .inline-cta');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = form.querySelector('input[type="email"]');
            if (emailInput && emailInput.value) {
                alert(`Thanks for subscribing with ${emailInput.value}! (Demo)`);
                emailInput.value = '';
            }
        });
    });

    // --- Contact Form (demo) ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Your message has been sent! (This is a demo – no email was actually sent.)');
            contactForm.reset();
        });
    }
});