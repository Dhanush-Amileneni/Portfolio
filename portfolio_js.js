// Smooth scrolling for navigation
function showSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Scroll progress indicator
function updateScrollProgress() {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / scrollHeight) * 100;
    document.querySelector('.scroll-indicator').style.width = scrolled + '%';
}

// Intersection Observer for animations
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
}

// Add interactive hover effects
function setupHoverEffects() {
    // Skill cards hover effect
    document.querySelectorAll('.skill-card').forEach(card => {
        card.addEventListener('mouseenter', (e) => {
            e.target.style.transform = 'translateY(-8px) scale(1.02)';
            e.target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
        });

        card.addEventListener('mouseleave', (e) => {
            e.target.style.transform = 'translateY(0) scale(1)';
            e.target.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.08)';
        });
    });

    // Project cards hover effect
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', (e) => {
            e.target.style.transform = 'translateY(-12px) scale(1.02)';
            e.target.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.2)';
        });

        card.addEventListener('mouseleave', (e) => {
            e.target.style.transform = 'translateY(0) scale(1)';
            e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
        });
    });

    // Contact cards hover effect
    document.querySelectorAll('.contact-card').forEach(card => {
        card.addEventListener('mouseenter', (e) => {
            e.target.style.transform = 'translateY(-8px) scale(1.05)';
            e.target.style.boxShadow = '0 15px 30px rgba(102, 126, 234, 0.3)';
        });

        card.addEventListener('mouseleave', (e) => {
            e.target.style.transform = 'translateY(0) scale(1)';
            e.target.style.boxShadow = 'none';
        });
    });

    // Certification cards hover effect
    document.querySelectorAll('.certification-card').forEach(card => {
        card.addEventListener('mouseenter', (e) => {
            e.target.style.transform = 'translateY(-8px) scale(1.03)';
            e.target.style.boxShadow = '0 20px 40px rgba(102, 126, 234, 0.4)';
        });

        card.addEventListener('mouseleave', (e) => {
            e.target.style.transform = 'translateY(0) scale(1)';
            e.target.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.3)';
        });
    });

    // Education cards hover effect
    document.querySelectorAll('.education-card').forEach(card => {
        card.addEventListener('mouseenter', (e) => {
            e.target.style.transform = 'translateY(-8px)';
            e.target.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.12)';
        });

        card.addEventListener('mouseleave', (e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.08)';
        });
    });
}

// Animate tech tags on project cards
function animateTechTags() {
    document.querySelectorAll('.project-card').forEach(card => {
        const techTags = card.querySelectorAll('.tech-tag');
        
        card.addEventListener('mouseenter', () => {
            techTags.forEach((tag, index) => {
                setTimeout(() => {
                    tag.style.transform = 'scale(1.1)';
                    tag.style.transition = 'transform 0.2s ease';
                }, index * 50);
            });
        });

        card.addEventListener('mouseleave', () => {
            techTags.forEach(tag => {
                tag.style.transform = 'scale(1)';
            });
        });
    });
}

// Add typing effect to the header title
function addTypingEffect() {
    const titleElement = document.querySelector('.title');
    const originalText = titleElement.textContent;
    titleElement.textContent = '';
    
    let index = 0;
    const typeInterval = setInterval(() => {
        if (index < originalText.length) {
            titleElement.textContent += originalText.charAt(index);
            index++;
        } else {
            clearInterval(typeInterval);
        }
    }, 100);
}

// Add parallax effect to header background
function addParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const header = document.querySelector('.header');
        const rate = scrolled * -0.5;
        
        if (header) {
            header.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Initialize navigation highlighting
function setupNavigationHighlight() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section');
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-20% 0px -20% 0px'
    };

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                
                // Remove active class from all nav buttons
                navButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to corresponding nav button
                const activeBtn = document.querySelector(`[onclick="showSection('${sectionId}')"]`);
                if (activeBtn) {
                    activeBtn.classList.add('active');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        navObserver.observe(section);
    });
}

// Add active state styles for navigation
function addNavigationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .nav-btn.active {
            background: rgba(255, 255, 255, 0.4) !important;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            transform: translateY(-2px);
        }
    `;
    document.head.appendChild(style);
}

// Loading animation
function showLoadingComplete() {
    document.body.classList.add('loaded');
    
    // Add loaded class styles
    const style = document.createElement('style');
    style.textContent = `
        body.loaded .portfolio-card {
            animation: none;
        }
        
        body.loaded .section {
            animation: slideInLoaded 0.6s ease-out forwards;
        }
        
        @keyframes slideInLoaded {
            from {
                opacity: 0;
                transform: translateX(-30px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Setup scroll progress indicator
    window.addEventListener('scroll', updateScrollProgress);
    
    // Setup intersection observer for animations
    setupIntersectionObserver();
    
    // Setup hover effects
    setupHoverEffects();
    
    // Animate tech tags
    animateTechTags();
    
    // Add navigation highlighting
    addNavigationStyles();
    setupNavigationHighlight();
    
    // Add typing effect after a short delay
    setTimeout(addTypingEffect, 1000);
    
    // Add parallax effect
    addParallaxEffect();
    
    // Show loading complete
    setTimeout(showLoadingComplete, 500);
    
    // Add smooth scroll behavior to all internal links
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
});

// Add resize event listener for responsive adjustments
window.addEventListener('resize', () => {
    // Recalculate scroll progress on resize
    updateScrollProgress();
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Navigate sections with arrow keys
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        const sections = Array.from(document.querySelectorAll('.section'));
        const currentSection = sections.find(section => {
            const rect = section.getBoundingClientRect();
            return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
        });
        
        if (currentSection) {
            const currentIndex = sections.indexOf(currentSection);
            let targetIndex;
            
            if (e.key === 'ArrowDown') {
                targetIndex = Math.min(currentIndex + 1, sections.length - 1);
            } else {
                targetIndex = Math.max(currentIndex - 1, 0);
            }
            
            sections[targetIndex].scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});