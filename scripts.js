$(document).ready(function() {
    $('#contactForm').on('submit', function(event) {
        event.preventDefault();

        var formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            message: $('#message').val()
        };

        $.ajax({
            type: 'POST',
            url: 'your-server-endpoint',
            data: JSON.stringify(formData),
            contentType: 'application/json',
            success: function(response) {
                alert('Form submitted successfully!');
                $('#contactForm')[0].reset();
            },
            error: function(error) {
                alert('The Given data is invalid');
                console.log(error);
            }
        });
    });

    $('.slick-carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    });

    const roles = [
        'Graphic Designer',
        'Front End Developer',
        'Quality Assurance Assistant',
        'Project Management Intern',
        'IT Enthusiast'
    ];
    let currentRoleIndex = 0;

    function changeRole() {
        $('#role').fadeOut(function() {
            $(this).text(roles[currentRoleIndex]).fadeIn();
        });
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
    }

    setInterval(changeRole, 5000);
});
$(document).ready(function() {
    $("#event-date").datepicker({
        dateFormat: "mm/dd/yy",
        changeMonth: true,
        changeYear: true,
        yearRange: "1900:2100"
    });
});
