document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Toggle menu visibility
    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Hide menu when a link is clicked (for smoother navigation)
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Smooth scroll for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

function openSkillTab(evt, tabName) {
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.add("hidden");
        tabContents[i].classList.remove("block");
    }

    const tabLinks = document.getElementsByClassName("tab-link");
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active-tab");
        tabLinks[i].classList.add("text-slate-500", "hover:bg-slate-50");
    }

    document.getElementById(tabName).classList.remove("hidden");
    document.getElementById(tabName).classList.add("block");
    
    evt.currentTarget.classList.add("active-tab");
    evt.currentTarget.classList.remove("text-slate-500", "hover:bg-slate-50");
}