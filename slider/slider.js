$(document).ready(() => {
    const count = 3
    const list = $('ul')
    let position = 0
    $('.prev').on('click', () => {
        position += 130 * count
        position = Math.min(position, 0)
        list.css('margin-left', position + 'px')
    })
    $('.next').on('click', () => {
        position -= 130 * count
        position = Math.max(position, -130 * (6 - count))
        list.css('margin-left', position + 'px')
    })
})