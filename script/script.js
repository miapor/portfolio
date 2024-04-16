document.addEventListener('DOMContentLoaded', function() {
    var overlay = document.querySelector('.overlay');
    var centeredDiv = document.querySelector('.centered');

    overlay.addEventListener('click', function(event) {
        if (event.target === overlay) {
            overlay.style.display = 'none';
        }
    });

    var closeButton = document.createElement('button');
    closeButton.innerText = 'Close';
    closeButton.addEventListener('click', function() {
        overlay.style.display = 'none';
    });
    centeredDiv.appendChild(closeButton);
});
