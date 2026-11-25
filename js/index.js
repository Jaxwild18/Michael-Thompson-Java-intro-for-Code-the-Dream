const body = document.querySelector("body");
const newFooter = document.createElement("footer");
body.appendChild(newFooter);
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `© ${thisYear}`;
footer.appendChild(copyright);
const skills = [
    "JavaScript",
    "HTML",
    "CSS",
    "GitHub",
    "Git",
    "Command Prompt",
    "Computer Hardware",
    "Troubleshooting",
    "Linux"
];
const skillsSection = document.querySelector("#skills");
const skillsList = skillsSection.querySelector("ul");
for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}
