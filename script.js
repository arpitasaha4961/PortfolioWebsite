document.querySelector('.cross').style.display = "none";

// Sidebar functionality
const sidebarToggle = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('sidebarGo');
    const ham = document.querySelector('.ham');
    const cross = document.querySelector('.cross');
    if (sidebar.classList.contains('sidebarGo')) {
        ham.style.display = 'inline';
        cross.style.display = 'none';
    } else {
        ham.style.display = 'none';
        cross.style.display = 'inline';
    }
};

document.querySelector('.hamburger').addEventListener('click', sidebarToggle);



// Project Showcase functionality
document.addEventListener('DOMContentLoaded', function () {
    const projects = [
        {
            title: 'Project 1',
            image: 'project1.jpg',
            description: 'Description of Project 1',
            link: 'https://github.com/arpitasaha4961?tab=projects'
        },
        {
            title: 'Project 2',
            image: 'project2.jpg',
            description: 'Description of Project 2',
            link: 'https://github.com/arpitasaha4961?tab=projects'
        },
        // Add more project objects as needed
    ];

    const projectsContainer = document.getElementById('projects');

    function createProjectElement(project) {
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

        return projectElement;
    }

    function renderProjects() {
        projectsContainer.innerHTML = '';
        projects.forEach(project => {
            const projectElement = createProjectElement(project);
            projectsContainer.appendChild(projectElement);
        });
    }

    renderProjects();
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

    if (isValid) {
        // Use fetch or XMLHttpRequest to send form data to the server
        // ...

        // Clear the form fields
        clientNameInput.value = '';
        clientEmailInput.value = '';
        clientPhoneInput.value = '';
        clientEnquiryInput.value = '';
        isClientInput.checked = false;
    }
});