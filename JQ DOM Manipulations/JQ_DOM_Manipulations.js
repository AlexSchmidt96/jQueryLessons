$('document').ready(() => {
    // $('.div1').click(() => {
    //     let x = $('.p1').html()
    //     $('#span1').text(x)
    // })
    // $('.div1').click(() => {
    //     alert($('.p1').text())
    // })
    // $('#btn1').click(() => {
    //     $('.p1').attr('id', 'p2id')
    // })
    // $('.p1').click(() => {
    //     alert($('.p1').attr('id'))
    // })
    // $('#btn1').click(() => {
    //     $('.div1').css('background-color', 'green')
    // })
    // $('.div1').click(() => {
    //     alert($('.div1').css('background-color'))
    // })

    // $('#btn1').click(() => {
    //     $('.div1').append('<p>This is paragraph 2</p>')
    // })
    $('#btn1').click(() => {
        $('.div1').append(`<img src = "../images/icons8-jquery-500.png" height="100px" width="100px">`)
    })
    $('#btn2').click(() => {
        $('.div1').prepend('<p>This is paragraph 2 using prepend</p>')
    })
    $('#btn3').click(() => {
        $('.div1').before(`<p>This is paragraph 2 using before</p>`)
    })
    $('#btn4').click(() => {
        $('.div1').after('<p>This is paragraph 2 using after</p>')
    })
    $('#btn5').click(() => {
        $('.div1').remove()
    })
    $('#btn6').click(() => {
        $('.div1').empty()
    })
})
