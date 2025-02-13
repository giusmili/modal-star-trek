import { user } from './model.js';

document.addEventListener("DOMContentLoaded", e => {
    e.preventDefault();

    user.btn_open.addEventListener("click", e => {
        e.stopPropagation();
        user.parent_target.classList.add("appear-modal");
    });

    user.btn_closed.addEventListener("click", e => {
        e.stopPropagation();
        user.parent_target.classList.remove("appear-modal");
    });

    user.closed.addEventListener("click", e => {
        e.stopPropagation();
        user.parent_target.classList.remove("appear-modal");
    });

    document.addEventListener("click", () => {
        user.parent_target.classList.remove("appear-modal");
    });
    user.modal.addEventListener("click", e => {
        e.stopPropagation();
    });
});