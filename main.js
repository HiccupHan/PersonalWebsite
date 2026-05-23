const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.getElementById('site-nav');
const footerYear = document.getElementById('footer-year');
const openModalButtons = document.querySelectorAll('[data-open-modal]');
const closeModalButtons = document.querySelectorAll('[data-close-modal]');

let activeModal = null;
let lastFocusedElement = null;

if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
}

if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
        const isOpen = siteNav.classList.toggle('is-open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    siteNav.addEventListener('click', (event) => {
        const target = event.target;
        if (target instanceof HTMLAnchorElement || target instanceof HTMLButtonElement) {
            closeNav();
        }
    });
}

openModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-open-modal');
        const modal = modalId ? document.getElementById(modalId) : null;
        if (modal) {
            openModal(modal);
        }
    });
});

closeModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (activeModal) {
            closeModal(activeModal);
        }
    });
});

document.addEventListener('click', (event) => {
    if (activeModal && event.target === activeModal) {
        closeModal(activeModal);
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && activeModal) {
        closeModal(activeModal);
    }
});

function closeNav() {
    if (!siteNav || !navToggle) {
        return;
    }

    siteNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
}

function openModal(modal) {
    lastFocusedElement = document.activeElement;
    activeModal = modal;
    modal.hidden = false;
    document.body.classList.add('modal-open');

    const firstFocusable = modal.querySelector('button, [href], iframe');
    if (firstFocusable instanceof HTMLElement) {
        firstFocusable.focus();
    }
}

function closeModal(modal) {
    modal.hidden = true;
    activeModal = null;
    document.body.classList.remove('modal-open');

    if (lastFocusedElement instanceof HTMLElement) {
        lastFocusedElement.focus();
    }
    lastFocusedElement = null;
}
