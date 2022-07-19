const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('#footer');

const copyright = document.createElement('p');
copyright.innerHTML = 'Jason Küffler ' + thisYear;
footer.appendChild(copyright);

const skillsSection = document.getElementById('skills')
const skillsList = skillsSection.querySelector('ul')
let techSkills = ['HTML5', 'CSS', 'JavaScript', 'Google Services', 'Ruby/RoR', 'Postman', 'Debugging', 'Browser Dev Tools', 'Unit testing']
let softSkills = ['Problem Solving', 'Analytical Thinking', 'Written Communication', 'Managment', 'Large Event Planning', 'Public Speaking', 'Substance Abuse Recovery']

for(let i=0; i < techSkills.length; i++) {
  const skill = document.createElement('li');
  skill.innerText = techSkills[i];
  skillsList.appendChild(skill);
}
for(let i=0; i < softSkills.length; i++) {
  const skill = document.createElement('li');
  skill.innerText = softSkills[i];
  skillsList.appendChild(skill);
}