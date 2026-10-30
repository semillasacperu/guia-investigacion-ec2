const menuToggle = document.querySelector("#menu-toggle");
const sidebarBackdrop = document.querySelector("#sidebar-backdrop");
const sectionNav = document.querySelector("#section-nav");

function setMenuOpen(isOpen) {
    document.body.classList.toggle("menu-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
    sidebarBackdrop.hidden = !isOpen;
}

export function initializeNavigation(onSectionSelect) {
    menuToggle.addEventListener("click", () => {
        const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
        setMenuOpen(!isOpen);
    });

    sidebarBackdrop.addEventListener("click", () => setMenuOpen(false));

    sectionNav.addEventListener("click", (event) => {
        const button = event.target.closest("[data-section-key]");

        if (!button) {
            return;
        }

        const sectionKey = button.dataset.sectionKey;

        sectionNav.querySelectorAll(".nav-button").forEach((navButton) => {
            const isActive = navButton === button;
            navButton.classList.toggle("is-active", isActive);

            if (isActive) {
                navButton.setAttribute("aria-current", "page");
            } else {
                navButton.removeAttribute("aria-current");
            }
        });

        onSectionSelect(sectionKey);
        setMenuOpen(false);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && document.body.classList.contains("menu-open")) {
            setMenuOpen(false);
            menuToggle.focus();
        }
    });
}