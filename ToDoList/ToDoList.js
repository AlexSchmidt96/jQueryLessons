$(document).ready(() => {
    $('#button').on('click', () => {
        let toAdd = $('input[name=ListItem]').val()
        $('ul').append(`<li>${toAdd}</li>`)
    })
    $(document).on('dblclick', 'li', (event) => {
        $(event.target).toggleClass('strike').fadeOut('slow')
    })
    $('input').focus(() => {
        $('input').val(' ')
    })
    $('ul').sortable()
})