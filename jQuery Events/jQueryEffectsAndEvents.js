// function func1() {
//     // document.getElementById('img1').style.width = '500px' js events
//     // $('#img1').css('width', '500px')
// }

// $('#btn').click(func1) // query selector + eventListener in JQ
// function func1() {
//     $('#img1').css('width', '500px')
// }

// $('#btn').click('click', function () {
//     $('#img1').css('width', '500px')
// })

// 'ready'  when html file is full loaded 
$('document').ready(function () {
    $('#btn').click('click', function () {
        $('#img1').css('width', '500px')
    })

    // $('#btn').dblclick(function () {
    //     $('#img1').css('width', '500px')
    // })
    // dbl click function

    // $('#img1').mouseenter(function () {
    //     $('#img1').css('width', '500px')
    // })
    // // mouse hover function

    // $('#img1').mouseleave(function () {
    //     $('#img1').css('width', '250px')
    // })
    // mouse hover leave function

    $('#img1').hover(func1, func2)
    function func1() {
        $('#img1').css('width', '500px')
    }
    function func2() {
        $('#img1').css('width', '250px')
    }
    // function of hover / leaver
})
$('document').ready(function () {
    $('#btn1').click(function () {
        $('#img2').hide(2000)
    })
    $('#btn2').click(function () {
        $('#img2').show(2000)
    })
    $('#btn3').click(function () {
        $('#img2').toggle(2000)
    })
    $('#btn4').click(function () {
        $('#img2').fadeIn(2000)
    })
    $('#btn5').click(function () {
        $('#img2').fadeOut(2000)
    })
    $('#btn6').click(function () {
        $('#img2').fadeToggle(2000)
    })
    $('#btn7').click(function () {
        $('#img2').slideUp(2000)
    })
    $('#btn8').click(function () {
        $('#img2').slideDown(2000)
    })
    $('#btn9').click(function () {
        $('#img2').slideToggle(2000)
    })
    $('#btn10').click(function () {
        $('#img2').stop()
    })
})

$('document').ready(function () {
    $('.btnAnimate').click(function () {
        $('#img3').animate({
            left: '50px',
            opacity: '1',
            height: '400px',
            width: '400px'
        }, 'slow')
    })
    $('.btnAnimate2').click(function () {
        $('#img3').animate({
            left: '0px',
            opacity: '0.4',
            height: '250px',
            width: '250px'
        }, 'slow')
    })
})