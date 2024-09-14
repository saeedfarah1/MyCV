document.addEventListener('DOMContentLoaded', function() {
    const technicalSkills = [
        'Adobe Photoshop', 'Autodesk AutoCAD', 'Microsoft Visual Studio',
        'Microsoft Powerpoint', 'Autodesk Revit', 'Microsoft Word', 'Microsoft Excel'
    ];

    const softSkills = [
        'Detaljorienterad', 'Strukturerad', 'Tålmodig',
        'Organisationsförmåga', 'Social kompetens', 'Flexibel', 'Ledarskap'
    ];

    const technicalSkillList = document.getElementById('technical-skill-list');
    const softSkillList = document.getElementById('soft-skill-list');

    function addSkillsToList(skills, listElement) {
        skills.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            listElement.appendChild(li);
        });
    }

    addSkillsToList(technicalSkills, technicalSkillList);
    addSkillsToList(softSkills, softSkillList);

    // Collapsible sections
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        title.addEventListener('click', () => {
            const content = title.nextElementSibling;
            title.classList.toggle('active');
            content.classList.toggle('active');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
            
            // Open the section if it's closed
            const sectionTitle = targetElement.querySelector('.section-title');
            const sectionContent = targetElement.querySelector('.section-content');
            if (!sectionContent.classList.contains('active')) {
                sectionTitle.click();
            }
        });
    });

    // Navbar background change on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(236, 240, 241, 0.9)';
        } else {
            navbar.style.backgroundColor = 'var(--background-color)';
        }
    });
});