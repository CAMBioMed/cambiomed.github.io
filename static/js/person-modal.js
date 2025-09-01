// person-modal.js
// Opens a modal with the HTML contents of the hidden section for a person

document.addEventListener('DOMContentLoaded', function() {
    // Create modal element if not exists
    let modal = document.getElementById('person-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'person-modal';
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100vw';
        modal.style.height = '100vh';
        modal.style.background = 'rgba(0,0,0,0.7)';
        modal.style.display = 'none';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        modal.style.zIndex = '9999';
        modal.innerHTML = '<div id="person-modal-content" style="background:#fff;padding:2em;border-radius:8px;max-width:500px;max-height:80vh;overflow:auto;position:relative;"></div>' +
            '<span id="person-modal-close" style="position:absolute;top:20px;right:40px;font-size:2em;cursor:pointer;color:#fff;">&times;</span>';
        document.body.appendChild(modal);
    }

    // Close modal on click of close button or outside content
    modal.addEventListener('click', function(e) {
        if (e.target.id === 'person-modal' || e.target.id === 'person-modal-close') {
            modal.style.display = 'none';
        }
    });

    // Listen for clicks on person images
    document.querySelectorAll('.person-image').forEach(function(img) {
        img.addEventListener('click', function() {
            var modalId = img.getAttribute('data-modal-id');
            var hiddenSection = document.getElementById(modalId);
            if (hiddenSection) {
                var content = hiddenSection.innerHTML;
                document.getElementById('person-modal-content').innerHTML = content;
                modal.style.display = 'flex';
            }
        });
    });
});

