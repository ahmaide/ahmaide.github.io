/* --- 1. Theme Logic (Same as before) --- */
function toggleTheme() {
    const body = document.body;
    const isDark = body.getAttribute('data-theme') !== 'light';
    const newTheme = isDark ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const toggleSwitch = document.getElementById('theme-toggle');

    if (savedTheme === 'light') {
        document.body.setAttribute('data-theme', 'light');
        if(toggleSwitch) toggleSwitch.checked = true;
    } else {
        document.body.setAttribute('data-theme', 'dark');
    }

    /* --- Contact Form Logic (Same as before) --- */
    const form = document.getElementById('contact-form');
    const notification = document.getElementById('notification');

    if (form) {
        form.addEventListener('submit', async function(event) {
            event.preventDefault();
            const formData = new FormData(form);
            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });
                if (response.ok) {
                    form.reset();
                    showNotification();
                } else {
                    alert("Oops! There was a problem sending your message.");
                }
            } catch (error) {
                alert("Oops! There was a problem sending your message.");
            }
        });
    }

    function showNotification() {
        notification.classList.add('show');
        setTimeout(() => { notification.classList.remove('show'); }, 4000);
    }
});


function addProject(title, imageSrc, description, tools, githubLink, reportLink, youtubeLink) {
    const grid = document.getElementById('projects-grid');
    if (!grid) return; 

    // 1. Create Card
    const card = document.createElement('div');
    card.className = 'project-card glass-card';

    // 2. Image Section
    const imgContainer = document.createElement('div');
    imgContainer.className = 'card-image';
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = title;
    // Fallback if image fails to load
    img.onerror = function() { 
        this.src = 'https://via.placeholder.com/400x250/0b0e14/38bdf8?text=Project+Image'; 
    };
    imgContainer.appendChild(img);

    // 3. Content Section
    const content = document.createElement('div');
    content.className = 'card-content';

    const h3 = document.createElement('h3');
    h3.textContent = title;

    const p = document.createElement('p');
    p.textContent = description;

    // 4. Tools (Split string into tags)
    const toolsContainer = document.createElement('div');
    toolsContainer.className = 'tech-tags';
    if (tools) {
        const toolList = tools.split(',');
        toolList.forEach(tool => {
            const span = document.createElement('span');
            span.textContent = tool.trim();
            toolsContainer.appendChild(span);
        });
    }

    // 5. Links Buttons
    const linksContainer = document.createElement('div');
    linksContainer.className = 'card-links';

    if (githubLink) {
        const btn = createLinkBtn(githubLink, 'fab fa-github', 'Code');
        linksContainer.appendChild(btn);
    }
    if (youtubeLink) {
        const btn = createLinkBtn(youtubeLink, 'fab fa-youtube', 'Demo');
        linksContainer.appendChild(btn);
    }
    if (reportLink) {
        const btn = createLinkBtn(reportLink, 'fas fa-file-alt', 'Report');
        linksContainer.appendChild(btn);
    }

    // Assemble
    content.appendChild(h3);
    content.appendChild(p);
    content.appendChild(toolsContainer);
    content.appendChild(linksContainer);

    card.appendChild(imgContainer);
    card.appendChild(content);
    grid.appendChild(card);
}

function createLinkBtn(url, iconClass, text) {
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.className = 'project-btn';
    a.innerHTML = `<i class="${iconClass}"></i> ${text}`;
    return a;
}