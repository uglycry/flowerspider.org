var codes = [
            { code: 'ABC123', coordinates: 'Test Location' },
            { code: 'DEF456', coordinates: 'Test Location' },
            { code: 'GHI789', coordinates: 'Test Location' },
            { code: 'secret123', coordinates: 'This is a test, Charlie Jepperson' },
        ];

        document.addEventListener('DOMContentLoaded', function () {
    var popup = document.getElementById('popup');
    var closeButton = document.querySelector('#popup .close-button');

    // Close pop-up when clicked on closebutton
    closeButton.addEventListener('click', function () {
        popup.style.display = 'none';
    });

    // Listen for form submit event
    document.getElementById('redeemForm').addEventListener('submit', function (e) {
        e.preventDefault();
        var code = document.getElementById('code').value.trim();
        var found = false;
        for (var i = 0; i < codes.length; i++) {
            if (codes[i].code === code) {
                found = true;
                document.getElementById('coordinates').textContent = codes[i].coordinates;
                popup.style.display = 'block'; // Set display property to block
                break;
            }
        }
        if (!found) {
            alert('Invalid code. Please try again.');
            document.getElementById('code').value = '';
        }
    });
});
