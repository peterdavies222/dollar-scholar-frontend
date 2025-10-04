import { gsap } from "gsap"

export const toast = (message, type = '') => {
    const toastEl = document.createElement('div')
    toastEl.innerText = message
    toastEl.classList.add('toast')
    if(type != '') toastEl.classList.add(type)
    document.body.appendChild(toastEl)

    const tl = new gsap.timeline()
    // tl.from(toastEl, {})
}
