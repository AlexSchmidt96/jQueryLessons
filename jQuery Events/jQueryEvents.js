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

$('document').ready(function () {
    $('#btn').click('click', function () {
        $('#img1').css('width', '500px')
    })
})

// 'ready'  when html file is full loaded 