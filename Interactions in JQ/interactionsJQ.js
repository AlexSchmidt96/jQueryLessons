$('document').ready(() => {
    $('.box').draggable({
        // axis: 'x',
        cursor: 'grabbing',
        opacity: '0.5',
        // containment: 'parent',
        // grid: [300, 300]
        snap: true,
        snapTolerance: 100,
    })
    $('.sort').sortable({
        opacity: 0.5,
        cursor: 'grabbing',
        containment: 'parent',
        delay: 300,
        distance: 50
    })
    $('#img1').resizable({
        // animate: true,
        // containment: 'parent',
        maxHeight: 400,
        maxWidth: 400,
        minHeight: 150,
        minWidth: 150,
        ghost: true,
        // aspectRatio: 16 / 9,
    })
})