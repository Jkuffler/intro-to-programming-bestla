const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('#footer');

const copyright = document.createElement('p');
copyright.innerHTML = 'Jason Küffler ' + thisYear+'©'+'           '+'<a href=#about>Top</a>';
footer.appendChild(copyright);

const skillsSection = document.getElementById('skills')
const skillsList = skillsSection.querySelector('ul');
let techSkills = ['HTML5', 'CSS', 'JavaScript', 'Google Services', 'Ruby/RoR', 'Postman', 'Debugging', 'Browser Dev Tools', 'Unit testing', 'Github', ' VS-Code', 'Postman', 'MVC', 'SCRUM/Agile Methodologiess'];
let softSkills = ['Problem Solving', 'Analytical Thinking', 'Written Communication', 'Managment', 'Large Event Planning', 'Public Speaking'];

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

const githubRequest = new XMLHttpRequest();
githubRequest.open('GET', 'https://api.github.com/users/JKuffler/repos');
githubRequest.send();
githubRequest.addEventListener('load', function () { 
  let repos = JSON.parse(this.response);
  console.log(repos);
  const projectSection = document.getElementById('projects');
  const projectsList = projectSection.querySelector('ul');
  
  for(let i=0; i < repos.length; i++) {
    const project = document.createElement('li');
    project.innerHTML = `<a href=${repos[i].html_url} target='_blank' rel="noopener noreferrer">` + `  ${repos[i].name}  `.toString().slice(0, 22) +  `|Created| ` + new Date( `${repos[i].created_at}`).toDateString() + `</a>`;
    projectsList.appendChild(project);
  }
});



document.getElementById('messages').style.display = 'none';
const messageForm = document.getElementById('leave_message');


/*Messasges*/
messageForm.addEventListener('submit', (e) => {
e.preventDefault();
document.getElementById('messages').style.display = 'inline-block';
const name = e.target.name.value;
const email = e.target.email.value;
let message = e.target.message.value;
const messageSection = document.getElementById('messages');
const messageList = messageSection.querySelector('ul');
const newMessage = document.createElement('li');
newMessage.innerHTML = `<a href=mailto:${email}> ${name} </a> 
<span> said:   ${message}  </span>`;
const removeButton = document.createElement('button');
removeButton.classList.add('message_button')
removeButton.innerText = 'Remove';
removeButton.addEventListener('click', () => {
  const entry = removeButton.parentNode;
  entry.remove();
})
// const editButton = document.createElement('button');
// editButton.classList.add('message_button')
// editButton.innerText = 'Edit';
// editButton.type = 'button';
// editButton.addEventListener('click', () => {
//   after solid testing based on research i'm better off finding a specific person or source. I've overthought this one cause I remember getting it correctly with ajax...
// })

messageList.appendChild(newMessage);
newMessage.appendChild(removeButton);
// newMessage.appendChild(editButton);
messageForm.reset();
})
