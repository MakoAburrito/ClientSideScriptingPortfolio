document.addEventListener("DOMContentLoaded", () => {
    const comments = document.getElementById("comments");
    const charCount = document.getElementById("char-count");

    comments.addEventListener("input", () => {
        charCount.textContent = 500 - comments.value.length;
    });

    const password = document.getElementById("password");
    const strengthMeter = document.getElementById("strength-meter");

    /* reference: https://www.youtube.com/watch?v=7-1VZ2wF8pw */
    password.addEventListener("input", () => {
        const strength = password.value.length; 
        strengthMeter.value = strength > 5 ? 5 : strength;
    });

    /*Attach jQuery UI Datepicker to the date input
    reference: https://www.geeksforgeeks.org/jquery-ui-date-picker/
    */
    $("#date").datepicker({
        dateFormat: "yy-mm-dd",
        changeMonth: true,
        changeYear: true, 
        yearRange: "1900:2100" 
    });
});