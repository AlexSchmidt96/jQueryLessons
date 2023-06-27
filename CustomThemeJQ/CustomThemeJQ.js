$('document').ready(() => {
    $('#date').datepicker({
        showOtherMonths: true,
        changeMonth: true,
        changeYear: true,
    })
    $('#dialog').dialog({
        draggable: true,
        resizable: true,
        closeOneEscape: true,
        modal: false,
        autoOpen: true,
    })
})