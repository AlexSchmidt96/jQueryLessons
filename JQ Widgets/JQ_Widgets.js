
$('document').ready(() => {
    //  DatePicker
    $('#date').datepicker({
        showOtherMonths: true,
        selectOtherMonths: true,
        showButtonPanel: true,
        changeMonth: true,
        changeYear: true,
        minDate: new Date(2016, 1, 5),
        maxDate: new Date(2023, 1, 6),
        numberOfMonths: 2,
    })

    // ToolTip
    $('#tool').tooltip({
        track: true,
        content: 'this is place for Name',
        show: { effect: 'pulsate', duration: 2000 },
        hide: { effect: 'explode', duration: 2000 },
    })
    $('img').tooltip({
        content: 'Yeach! i am a image!!',
        show: { effect: 'slideDown', duration: 2000 },
        hide: { effect: 'slideUp', duration: 2000 }
    })

    // Accordion
    $('#div2').accordion({
        collapsible: true,
        icons: { header: 'ui-icon-caret-1-s', activeHeader: 'ui-icon-caret-1-n' },
        animate: 2000,
        event: 'click'
    })

    // Dialog
    $('#btn1').click(() => {
        $('#div3').dialog('open')
    })
    $('#div3').dialog({
        title: 'Title using property',
        draggable: false,
        resizable: false,
        closeOnEscape: false,
        modal: true,
        autoOpen: false,
    })

    // Autocomplete
    $('#autocomplete').autocomplete({
        source: ['JavaScript', 'PHP', 'Java', 'Python', 'Ruby', 'Scala', 'COBOL', 'Basic', 'Lisp']
    }, {
        delay: 500,
        minLength: 3,
        autoFocus: true,
    })

    // Modification
    $('#dialog2').dialog({
        draggable: true,
        resizable: true,
        closeOnEscape: true,
        modal: false,
        autoOpen: true,
        height: 250,
        width: 250,
    })
    $('#btn3').click(() => {
        let modal = $('#dialog2').dialog('option', 'height')
        alert(modal)
    })
    $('#btn4').click(() => {
        $('#dialog2').dialog('option', 'height', 100)
    })
})