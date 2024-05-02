var x = false;
    
var sidebar = document.getElementById("sidebar");
var icons = sidebar.querySelectorAll('ul li i');

function hoverIn(){
    sidebar.style.width = "150px";
    icons.forEach(function(icon) {
        icon.style.opacity = 1;
    });
    sidebar.querySelector('span').style.setProperty('--rotate-arrow', 'rotate(135deg)');
}

function hoverOut(){
    if(!x){
        sidebar.style.width = "20px";
        icons.forEach(function(icon) {
            icon.style.opacity = 0;
        });
        sidebar.querySelector('span').style.setProperty('--rotate-arrow', 'rotate(-45deg)');
    }
}

function toggleSidebar(){
    x = !x;
    if (x)
        hoverIn();
    else
        hoverOut();
}

document.addEventListener('DOMContentLoaded', function() {
    var sidebarLinks = document.querySelectorAll('#social-links li');

    sidebarLinks.forEach(function(li) {
        li.addEventListener('click', function() {
            var link = this.getAttribute('data-link');
            if(link) {
                window.open(link, '_blank');
            }
        });
    });
});


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



