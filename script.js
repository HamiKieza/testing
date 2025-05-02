function nextPage(pageNumber) {
    const pages = document.querySelectorAll('.form-page');
    pages.forEach(page => page.style.display = 'none');
    document.getElementById('page' + pageNumber).style.display = 'block';
}

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission for demo purposes
    alert('Form submitted!');
});
