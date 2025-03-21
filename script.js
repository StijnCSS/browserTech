// https://www.youtube.com/watch?v=fYTTUBa-lPc
// ChatGPT
// Select all form inputs once and reuse

 // LOCAL STORAGE // LOCAL STORAGE // LOCAL STORAGE // LOCAL STORAGE //
  // LOCAL STORAGE // LOCAL STORAGE // LOCAL STORAGE // LOCAL STORAGE //
   // LOCAL STORAGE // LOCAL STORAGE // LOCAL STORAGE // LOCAL STORAGE //
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








// DATE PICKER // DATE PICKER // DATE PICKER // DATE PICKER
    // DATE PICKER// DATE PICKER// DATE PICKER// DATE PICKER
        // DATE PICKER// DATE PICKER// DATE PICKER// DATE PICKER
        
// Date Picker https://www.youtube.com/live/d9JAQLJ3XoI
var today = new Date().toISOString().split('T')[0]; //ISO is een format voor datums. T split de datum en tijd
document.getElementById("overlijdensDatum").setAttribute("max", today);








// VALIDATIE  // VALIDATIE   // VALIDATIE   // VALIDATIE   // VALIDATIE  
    // VALIDATIE   // VALIDATIE   // VALIDATIE   // VALIDATIE   // VALIDATIE  
        // VALIDATIE  // VALIDATIE  // VALIDATIE  // VALIDATIE  // VALIDATIE  

// Show/hide div based on status selection
const statusJa = document.getElementById('statusKeuze-ja');
const statusNee = document.getElementById('statusKeuze-nee');
const fieldsetStatus = document.getElementById('status-hidden-1');
const fieldsetKinderen = document.getElementById('kinderen');

// Function to toggle visibility based on 'status' selection
function statusToggle() {
    if (statusJa.checked) {
        fieldsetStatus.style.display = 'block'; // Show status if Ja is selected
        fieldsetKinderen.style.display = 'none'; // Hide children section
    } else if (statusNee.checked) {
        fieldsetStatus.style.display = 'none'; // Hide status if Nee is selected
        fieldsetKinderen.style.display = 'block'; // Show children section
    }
}

// Add event listeners to both radio buttons for status toggle
statusJa.addEventListener('change', statusToggle);
statusNee.addEventListener('change', statusToggle);

// Run once on page load to ensure correct visibility if a value is pre-selected
statusToggle();


// KINDEREN // KINDEREN // KINDEREN // KINDEREN // KINDEREN

// For 'verrekenbeding' toggle visibility of 'kinderen' and 'status' sections
const verrekenbedingJa = document.getElementById('verrekenbeding-Ja');
const verrekenbedingNee = document.getElementById('verrekenbeding-Nee');

// Function to toggle visibility based on 'verrekenbeding' selection
function kinderenToggle() {
    if (verrekenbedingNee.checked || verrekenbedingJa.checked) {
        fieldsetKinderen.style.display = 'block'; // Show children section if any option is selected
        fieldsetStatus.style.display = 'block';  // Show status section as well
    }
}

// Add event listeners for 'verrekenbeding' options
verrekenbedingJa.addEventListener('change', kinderenToggle);
verrekenbedingNee.addEventListener('change', kinderenToggle);

// Run the toggle function once on page load to ensure correct visibility
kinderenToggle();


// AKTE // AKTE // AKTE // AKTE // AKTE // AKTE // AKTE 

// For 'akte' toggle visibility based on 'huwelijk' selection
const akte = document.getElementById('aktePopout');
const huwelijkJa = document.getElementById('huwelijk-ja');
const huwelijkNee = document.getElementById('huwelijk-nee');

// Function to toggle visibility of 'akte' section
function akteToggle() {
    if (huwelijkJa.checked) {
        akte.style.display = 'block'; // Show 'akte' section if 'Ja' is selected
    } else {
        akte.style.display = 'none'; // Hide 'akte' section if 'Nee' is selected
    }
}
// Add event listeners for 'huwelijk' options
huwelijkJa.addEventListener('change', akteToggle);
huwelijkNee.addEventListener('change', akteToggle);

// Run once on page load to ensure correct visibility if a value is pre-selected
akteToggle();




// SPANS HIDE // SPANS HIDE // SPANS HIDE // SPANS HIDE 
    // SPANS HIDE // SPANS HIDE // SPANS HIDE // SPANS HIDE 
        // SPANS HIDE // SPANS HIDE // SPANS HIDE // SPANS HIDE 
function hideSpansInLabels() {
    const labels = document.querySelectorAll('label');

    labels.forEach(label => {
        const spans = label.querySelectorAll('span');
        spans.forEach(span => {
            span.style.display = 'none'; // Hide span elements inside labels
        });
    });
}

hideSpansInLabels();


    const progressBar = document.getElementById('scrollProgress');

    function updateProgressBar() {

      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;

      const scrollPercentage = (scrollPosition / scrollHeight) * 100;


      progressBar.value = scrollPercentage;
    }


    window.addEventListener('scroll', updateProgressBar);


    updateProgressBar();