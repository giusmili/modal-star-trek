document.addEventListener("DOMContentLoaded",(e)=>{
    e.preventDefault()

    const user = {
        btn_open : document.querySelector(".btn-open"),
        btn_closed : document.querySelector(".btn-closed"),
        closed : document.querySelector(".closed"), // cross
        parent_target : document.querySelector(".modal-parent"),
        modal: document.querySelector("figure")
    }

    user.btn_open.addEventListener("click",(e)=>{
        e.stopPropagation()
        user.parent_target.classList.add("appear-modal")
    })


    user.btn_closed.addEventListener("click",(e)=>{
        e.stopPropagation()
        user.parent_target.classList.remove("appear-modal")
    })
    
    user.closed  .addEventListener("click",(e)=>{
        e.stopPropagation()
        user.parent_target.classList.remove("appear-modal")
    })

    document.addEventListener("click",()=>{
        user.parent_target.classList.remove("appear-modal")
    })
    user.modal.addEventListener("click",(e)=>{
        e.stopPropagation()
    })




})