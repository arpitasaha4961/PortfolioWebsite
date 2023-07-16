document.addEventListener('DOMContentLoaded', function () {
    // Sidebar functionality
    const sidebar = document.querySelector('.sidebar');
    const hamburger = document.querySelector('.hamburger');
    const ham = document.querySelector('.ham');
    const cross = document.querySelector('.cross');

    hamburger.addEventListener('click', function () {
        sidebar.classList.toggle('sidebarGo');
        if (sidebar.classList.contains('sidebarGo')) {
            ham.style.display = 'inline';
            cross.style.display = 'none';
        } else {
            ham.style.display = 'none';
            setTimeout(() => {
                cross.style.display = 'inline';
            }, 300);
        }
    });

    // Form validation
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        validateForm();
    });

    function validateForm() {
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

        let isValid = true;

        if (clientName === '') {
            nameError.textContent = 'Please enter your name.';
            clientNameInput.focus();
            isValid = false;
        }

        if (clientEmail === '') {
            emailError.textContent = 'Please enter your email.';
            clientEmailInput.focus();
            isValid = false;
        }

        if (clientPhone === '') {
            phoneError.textContent = 'Please enter your phone number.';
            clientPhoneInput.focus();
            isValid = false;
        }

        if (clientEnquiry === '') {
            enquiryError.textContent = 'Please enter your enquiry.';
            clientEnquiryInput.focus();
            isValid = false;
        }

        if (!isClient) {
            isClientError.textContent = 'Please agree to work with us.';
            isValid = false;
        }

        // If all validations pass, submitting the form
        if (isValid) {
            contactForm.submit();
        }
    }

    // Project Showcase functionality
    const projects = [
        {
            title: 'Project 1',
            image: 'project1.jpg',
            description: 'Description of Project 1',
            link: '#'
        },
        {
            title: 'Project 2',
            image: 'project2.jpg',
            description: 'Description of Project 2',
            link: '#'
        },
        // Add more project objects as needed
    ];

    const projectsContainer = document.getElementById('projects');

    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');

        const imageElement = document.createElement('img');
        imageElement.src = project.image;
        imageElement.alt = project.title;

        const titleElement = document.createElement('h3');
        titleElement.textContent = project.title;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = project.description;

        const linkElement = document.createElement('a');
        linkElement.href = project.link;
        linkElement.textContent = 'View Details';
        linkElement.classList.add('btn');

        projectElement.appendChild(imageElement);
        projectElement.appendChild(titleElement);
        projectElement.appendChild(descriptionElement);
        projectElement.appendChild(linkElement);

        projectsContainer.appendChild(projectElement);
    });
});
