// https://www.youtube.com/watch?v=fYTTUBa-lPc
// ChatGPT
// Select all form inputs once and reuse
const formInputs = document.querySelectorAll('input, select, textarea');

// Save all form inputs to localStorage
function saveFormData() {
    formInputs.forEach(input => {
        if ((input.type === 'radio' || input.type === 'checkbox') && input.checked) {
            localStorage.setItem(input.name, input.value);
        } else if (input.type !== 'radio' && input.type !== 'checkbox') {
            localStorage.setItem(input.id, input.value);
        }
    });
}

// Load saved data from localStorage
function loadFormData() {
    formInputs.forEach(input => {
        if ((input.type === 'radio' || input.type === 'checkbox') && localStorage.getItem(input.name) === input.value) {
            input.checked = true;
        } else if (input.type !== 'radio' && input.type !== 'checkbox' && localStorage.getItem(input.id)) {
            input.value = localStorage.getItem(input.id);
        }
    });
}

// Clear form data on submission (optional)
function clearFormData() {
    localStorage.clear();
}

// Initialize the form on page load
window.addEventListener('DOMContentLoaded', loadFormData);
document.addEventListener('input', saveFormData);

// Clear data on form submit (optional)
document.querySelector('form').addEventListener('submit', clearFormData);