import { user } from './model.js';

document.addEventListener("DOMContentLoaded", () => {

    const closeModal = () => user.parentTarget.classList.remove("appear-modal");

    user.btnOpen.addEventListener("click", e => {
        e.stopPropagation();
        user.parentTarget.classList.add("appear-modal");
    });

    [user.btnClosed, user.closed].forEach(element => {
        element.addEventListener("click", e => {
            e.stopPropagation();
            closeModal();
        });
    });

    // clique en dehors
    document.addEventListener("click", closeModal);

    user.modal.addEventListener("click", e => e.stopPropagation());
});