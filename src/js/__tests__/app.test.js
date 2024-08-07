/**
 * @jest-environment jsdom
 */


test('Check popover', () => {

    document.body.innerHTML = `
        <div class="modal">
        <div class="title">
        <h1>Popover title</h1>
        </div>
        <p class="description">And here's some amazing content. it's very engaging. Right?</p>
    </div>
    <button class="btn">Click to toggle popover</button>
    `

    const btn = document.querySelector(".btn")
    const popover = document.querySelector(".modal")

        
    btn.addEventListener('click', () => {
        popover.classList.toggle('modal-visible')
        popover.style = `left: ${btn.offsetLeft - (popover.clientWidth - btn.clientWidth) / 2}px; top: ${btn.offsetTop - popover.clientHeight - 10}px `
    })

    btn.click()
    expect(popover.classList).toContain('modal-visible')
})