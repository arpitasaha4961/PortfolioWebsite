document.querySelector('.cross').style.display = "none";

// Sidebar functionality
document.querySelector('.hamburger').addEventListener("click", () => {
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if (document.querySelector('.sidebar').classList.contains('sidebarGo')) {
        document.querySelector('.ham').style.display = 'inline';
        document.querySelector('.cross').style.display = 'none';
    } else {
        document.querySelector('.ham').style.display = 'none';
        setTimeout(() => {
            document.querySelector('.cross').style.display = 'inline';
        }, 300);
    }
});

// Form validation
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const clientNameInput = document.getElementById('clientname');
    const clientEmailInput = document.getElementById('clientemail');
    const clientPhoneInput = document.getElementById('clientphone');
    const clientEnquiryInput = document.getElementById('clientenquiry');
    const isClientInput = document.getElementById('isclient');

    const clientName = clientNameInput.value.trim();
    const clientEmail = clientEmailInput.value.trim();
    const clientPhone = clientPhoneInput.value.trim();
    const clientEnquiry = clientEnquiryInput.value.trim();
    const isClient = isClientInput.checked;

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const enquiryError = document.getElementById('enquiryError');
    const isClientError = document.getElementById('isclientError');

    nameError.textContent = '';
    emailError.textContent = '';
    phoneError.textContent = '';
    enquiryError.textContent = '';
    isClientError.textContent = '';

    if (clientName === '') {
        nameError.textContent = 'Please enter your name.';
        clientNameInput.focus();
        return;
    }

    if (clientEmail === '') {
        emailError.textContent = 'Please enter your email.';
        clientEmailInput.focus();
        return;
    }

    if (clientPhone === '') {
        phoneError.textContent = 'Please enter your phone number.';
        clientPhoneInput.focus();
        return;
    }

    if (clientEnquiry === '') {
        enquiryError.textContent = 'Please enter your enquiry.';
        clientEnquiryInput.focus();
        return;
    }

    if (!isClient) {
        isClientError.textContent = 'Please agree to work with us.';
        return;
    }

    // If all validations pass, submitting the form
    document.getElementById('contactForm').submit();
});