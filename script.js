document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('h2');

    headers.forEach(header => {
        header.addEventListener('click', function() {
            const section = this.nextElementSibling;
            const isCollapsed = section.classList.contains('collapsed');

            if (isCollapsed) {
                section.style.maxHeight = section.scrollHeight + 'px';
                section.classList.remove('collapsed');
            } else {
                section.style.maxHeight = '0';
                section.classList.add('collapsed');
            }
        });
    });
});