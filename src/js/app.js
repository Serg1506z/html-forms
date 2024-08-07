const btn = document.querySelector(".btn")
const popover = document.querySelector(".modal")

btn.addEventListener('click', () => {
    popover.classList.toggle('modal-visible')
    popover.style = `left: ${btn.offsetLeft - (popover.clientWidth - btn.clientWidth) / 2}px; top: ${btn.offsetTop - popover.clientHeight - 10}px `
})

