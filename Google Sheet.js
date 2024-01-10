
const scriptURL = 'https://script.google.com/macros/s/AKfycbzW-RuSM1QW3MFOufZLB-YTN5TqP0bjKMa-kvj8OvJrkmgvp8kmTDUMPV5PkOsZ6yK-/exec'
const form = document.forms['contact-form']
form.addEventListener('submit', e => {

e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
// .then(response => alert("Thank you! Your form is submitted successfully!" ))
.done(function(response) {
    // Make sure that the formMessages div has the 'success' class.
    $(formMessages).removeClass('error');
    $(formMessages).addClass('success');

    // Set the message text.
    $(formMessages).text('Message Sent Successfully!');
    
    // Add a timeout to clear the message after 5 seconds
    setTimeout(function() {
        $(formMessages).text(''); // Clear the message text
    }, 5000);	

    // Clear the form.
    $('#contact-form input,#contact-form textarea').val('');
})
.fail(function(data) {
    // Make sure that the formMessages div has the 'error' class.
    $(formMessages).removeClass('success');
    $(formMessages).addClass('error');

    // Set the message text.
    if (data.responseText !== '') {
        $(formMessages).text('data.responseText');
    } else {
        $(formMessages).text('Oops! An error occured and your message could not be sent.');
    }
})
.catch(error => console.error('Error!', error.message))})

