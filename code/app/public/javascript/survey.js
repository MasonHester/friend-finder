$(document).ready(() => {
    $("form").submit((event) => {
        event.preventDefault();
        console.log($('[name=first]:checked').val());
    })
})