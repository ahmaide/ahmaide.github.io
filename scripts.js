var x = false;
    
const sidebar = document.getElementById('sidebar');
const socialLinks = document.querySelectorAll('#social-links li i');
const verticalSlide = document.querySelector('.vertical-slide');
const label = verticalSlide.querySelector('label');
const body = document.querySelector('body');
const h1Elements = document.querySelectorAll('h1');
const h2Elements = document.querySelectorAll('h2');
const span = document.getElementById('span');



function hoverIn(){
    sidebar.style.backgroundImage = "url('Backgrounds/background.jpg')";
    socialLinks.forEach((icon, index) => {
        icon.style.color= "#000";
    })
    span.style.backgroundImage = "url('Backgrounds/sidebarBackground.jpg')";
    label.style.borderColor = '#FFF';
    verticalSlide.classList.add('white-label');
    body.style.backgroundImage = "url('Backgrounds/sidebarBackground.jpg')";
    h1Elements.forEach(element =>{
        element.style.color = "#FFF";
    })
    h2Elements.forEach(element =>{
        element.style.color = "#FFF";
    })
}

function hoverOut(){
    sidebar.style.backgroundImage = "url('Backgrounds/sidebarBackground.jpg')";
    socialLinks.forEach((icon, index) => {
        icon.style.color= "#FFF";
    })
    span.style.backgroundImage = "url('Backgrounds/background.jpg')";
    label.style.borderColor = '#000';
    verticalSlide.classList.remove('white-label');
    body.style.backgroundImage = "url('Backgrounds/background.jpg')";
    h1Elements.forEach(element =>{
        element.style.color = "#000";
    })
    h2Elements.forEach(element =>{
        element.style.color = "#000";
    })
}

function inverse(){
    x = !x;
    if (x)
        hoverIn();
    else
        hoverOut();
}




function addProject(title, imageSrc, description, tools, githubLink, reportLink, youtubeLink) {
    const projectContainer = document.getElementById('projects-container');

    const project = document.createElement('div');
    project.className = 'project';

    const imageDiv = document.createElement('div');
    imageDiv.className = 'project-image';
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = title;
    imageDiv.appendChild(img);

    const detailsDiv = document.createElement('div');
    detailsDiv.className = 'project-details';
    const titleDiv = document.createElement('div');
    titleDiv.className = 'project-title';
    titleDiv.textContent = title;
    const descriptionDiv = document.createElement('div');
    descriptionDiv.className = 'project-description';
    descriptionDiv.textContent = description;
    const toolsDiv = document.createElement('div');
    toolsDiv.className = 'tools';
    toolsDiv.textContent = 'Tools: ' + tools;

    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'project-buttons';

    const githubLi = document.createElement('li');
    githubLi.onclick = function() { window.location.href = githubLink; };
    const githubIcon = document.createElement('i');
    githubIcon.className = 'fab fa-github';
    githubLi.appendChild(githubIcon);
    buttonsDiv.appendChild(githubLi);

    if (reportLink) {
        const reportA = document.createElement('a');
        reportA.href = reportLink;
        reportA.textContent = 'Report';
        buttonsDiv.appendChild(reportA);
    }

    if (youtubeLink) {
        const youtubeA = document.createElement('a');
        youtubeA.href = youtubeLink;
        youtubeA.textContent = 'Youtube';
        buttonsDiv.appendChild(youtubeA);
    }

    detailsDiv.appendChild(titleDiv);
    detailsDiv.appendChild(descriptionDiv);
    detailsDiv.appendChild(toolsDiv);
    detailsDiv.appendChild(buttonsDiv);

    project.appendChild(imageDiv);
    project.appendChild(detailsDiv);
    projectContainer.appendChild(project);

    const separator = document.createElement('div');
    separator.className = 'separator';
    projectContainer.appendChild(separator);
}



